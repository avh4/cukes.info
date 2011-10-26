require 'redcarpet'
markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, :fenced_code_blocks => true)

desc 'Generate site in out/'
task :site do
  template_head, template_foot = IO.read('templates/index.html').split('__CONTENT__')

  Dir['src/**/*.md'].each do |md|
    out = File.join('out', md.gsub(/^src\//, '')).gsub(/\.md$/, '.html')
    FileUtils.mkdir_p(File.dirname(out)) unless File.directory?(File.dirname(out))
    html = template_head + markdown.render(IO.read(md)) + template_foot
    File.open(out, 'w') do |io|
      io.write(html)
    end
  end
end

task :default => :site

##### Download basic template

desc 'Fetch HTML5 Boilerplate template'
task :html5 do
  sh 'curl "http://www.initializr.com/builder?mode=h5bp&h5bp-iecond&h5bp-analytics&h5bp-chromeframe&h5bp-scripts&jquerymin&h5bp-htaccess" > templates/html5.zip'
  Dir.chdir('templates') do
    sh 'unzip html5.zip'
    rm 'html5.zip'
  end
end


