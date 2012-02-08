require 'rake/clean'
require 'less'

bs     = File.expand_path('public/css/bootstrap.css')
bsmin  = File.expand_path('public/css/bootstrap.min.css')
bsr    = File.expand_path('public/css/bootstrap-responsive.css')
bsrmin = File.expand_path('public/css/bootstrap-responsive.min.css')

CLEAN.include(bs, bsmin, bsr, bsrmin)

file 'public/css/bootstrap.css' => FileList['submodules/bootstrap/less/*'] do
  Dir.chdir('submodules/bootstrap/less') do
    parser = Less::Parser.new
    
    File.open(bs, 'wb')     {|out| out.write(parser.parse(IO.read('bootstrap.less')).to_css)}
    File.open(bsmin, 'wb')  {|out| out.write(parser.parse(IO.read('bootstrap.less')).to_css(:compress => true))}
    File.open(bsr, 'wb')    {|out| out.write(parser.parse(IO.read('responsive.less')).to_css)}
    File.open(bsrmin, 'wb') {|out| out.write(parser.parse(IO.read('responsive.less')).to_css(:compress => true))}
  end
end

task :bootstrap => ['public/css/bootstrap.css']