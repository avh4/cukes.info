require 'redcarpet'
require 'tilt'
require 'cgi'

class SuperHTML < Redcarpet::Render::HTML
  def block_code(code, language)
    code_classes = []
    if(/^([^\.]+)\.(.*)/ =~ language)
      language = $1
      code_classes = $2.split('.')
    end
    language ||= 'sourceCode'
    classes = ["sh_#{language}", code_classes].flatten.compact.join(' ')
    %{<pre class="#{classes}"><code>#{CGI::escapeHTML(code)}</code></pre>}
  end
end

class SuperMarkdown < Tilt::RedcarpetTemplate::Redcarpet2
  @@options = {
    :fenced_code_blocks => true, 
    :tables => true,
    :autolink => true,
    :renderer => SuperHTML.new
  }
  
  def initialize(file=nil, line=1, options={}, &block)
    super(file, line, options.merge(@@options), &block)
  end
end

Tilt.register SuperMarkdown, 'markdown', 'mkd', 'md'
Tilt.prefer SuperMarkdown, '.md'
