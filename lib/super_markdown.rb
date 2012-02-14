require 'redcarpet'
require 'tilt'
require 'cgi'
require 'nokogiri'

class SuperHTML < Redcarpet::Render::HTML
  def initialize(options={})
    super(options.merge(:with_toc_data => true))
  end

  def postprocess(html)
    html.gsub!("<p><TABS></p>", '<div class="tab-content">')
    html.gsub!("<p></TABS></p>", '</div>')
    doc = Nokogiri::XML::DocumentFragment.parse(html)
    
    tabcontents = doc.css('.tab-content')
    tab_id = 0
    tabcontents.each do |tabcontent|
      nav_ul = Nokogiri::XML::Node.new "ul", doc
      tabcontent.add_previous_sibling(nav_ul)
      nav_ul['class'] = 'nav nav-tabs'

      tabs = tabcontent.xpath('./h4')
      tabs.each_with_index do |tab, n|
        tab_div = Nokogiri::XML::Node.new "div", doc
        tab_div['class'] = 'tab-pane'
        tab_div['id'] = "tab-#{tab_id}"
        # Move all siblings until the next header
        next_element = tab.next_element
        while(next_element && next_element.node_name != 'h4') do
          n = next_element.next_element
          next_element.parent = tab_div
          next_element = n
        end
        tab.add_next_sibling(tab_div)

        # Build the tab menu
        nav_li = Nokogiri::XML::Node.new "li", doc
        nav_li.parent = nav_ul
        nav_a = Nokogiri::XML::Node.new "a", doc
        nav_a.parent = nav_li
        nav_a['href'] = "#tab-#{tab_id}"
        nav_a['data-toggle'] = "tab"
        nav_a.content = tab.content
        
        tab.remove
        tab_id += 1
      end
    end
    
    doc.to_html
  end

  def block_code(code, language)
    %{<pre class="sh_#{language || 'sourceCode'}"><code>#{CGI::escapeHTML(code)}</code></pre>}
  end
end

class SuperMarkdown < Tilt::RedcarpetTemplate::Redcarpet2
  @@options = {
    :fenced_code_blocks => true, 
    :tables => true,
    :autolink => true,
    :lax_html_blocks => true,
    :renderer => SuperHTML.new
  }
  
  def initialize(file=nil, line=1, options={}, &block)
    super(file, line, options.merge(@@options), &block)
  end
end

Tilt.register SuperMarkdown, 'markdown', 'mkd', 'md'
Tilt.prefer SuperMarkdown, '.md'
