require 'sinatra'

set :server, :thin

get '/' do
  'Hello world!'
end