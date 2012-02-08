class SuperHTML < Redcarpet::Render::HTML
  def block_code(code, language)
    language ||= 'sourceCode'
    %{<pre class="sh_#{language}"><code>#{CGI::escapeHTML(code)}</code></pre>}
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
