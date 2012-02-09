$:.unshift(File.dirname(__FILE__) + '/lib')
require 'sinatra'
require 'less'
require 'redcarpet'
require 'tilt'
require 'cgi'
require 'super_markdown'

set :server, :thin

get '/' do
  markdown :index, {:layout => :layout, :layout_engine => :erb}
end

Dir['views/*.md'].each do |page|
  name = File.basename(page)[0..-4]
  get "/#{name}" do
    markdown name.to_sym, {:layout => :layout, :layout_engine => :erb}
  end
end