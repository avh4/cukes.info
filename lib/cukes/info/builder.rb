require 'fileutils'
require 'redcarpet'
require 'cgi'

module Cukes
  module Info
    class Builder
      include FileUtils
      
      def initialize(templates, src, out)
        @templates, @src, @out = templates, src, out
      end

      def build
        markdown = Redcarpet::Markdown.new(
          HTMLSHJS.new(:with_toc_data => true), {
            :fenced_code_blocks => true, 
            :tables => true,
            :autolink => true
          }
        )

        rm_rf @out
        cp_r @templates, @out

        template_head, template_foot = IO.read("#{@templates}/index.html").split('__CONTENT__')

        Dir["#{@src}/**/*.md"].each do |md|
          out_file = File.join(@out, File.basename(md).gsub(/\.md$/, '.html'))
          FileUtils.mkdir_p(File.dirname(out_file)) unless File.directory?(File.dirname(out_file))
          html = template_head + markdown.render(IO.read(md)) + template_foot
          puts "* Writing #{out_file}"
          File.open(out_file, 'w') do |io|
            io.write(html)
          end
        end
      end
    end

    class HTMLSHJS < Redcarpet::Render::HTML
      def block_code(code, language)
        %{<pre class="sh_#{language}"><code>#{CGI::escapeHTML(code)}</code></pre>}
      end
    end
  end
end