$:.unshift(File.dirname(__FILE__) + '/lib')
require 'sinatra'
require 'super_markdown'

set :server, :thin

get '/' do
  markdown :index, {:layout => :_layout, :layout_engine => :erb}
end

(Dir['views/*.markdown'] + Dir['views/*.erb']).each do |page|
  extension = File.extname(page)[1..-1]
  name = File.basename(page)[0...-(extension.length+1)]
  unless name =~ /^_/
    get "/#{name}" do
      render extension.to_sym, name.to_sym, {:layout => :_layout, :layout_engine => :erb}
    end
  end
end
