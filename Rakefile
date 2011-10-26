$:.unshift('lib')
require 'cukes/info/builder'

desc 'Build site in out/'
task :build do
  Cukes::Info::Builder.new('templates', 'src', 'out').build
end

task :default => :build
