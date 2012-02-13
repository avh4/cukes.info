This is the source for the new cukes.info website.

## Running the site locally

### Clone this repository

    git clone git://github.com/cucumber/cukes.info.git
    cd cukes.info

### Get submodules

    git submodule update --init --recursive

### Install Ruby

Ruby 1.9.3 is recommended. You can install it with [RVM](http://beginrescueend.com/). Then install some gems.

    gem install bundler
    bundle install

### Generate/move some static assets from submodules to public

    rake

### Start the server

    bundle exec rackup

Alternatively, if you want any changes to `app.rb` to be picked up:

    bundle exec shotgun

### See the site

Just go to http://localhost:9292 (alternatively http://localhost:9393 if you started with `shotgun`)

## Creating new pages

Just create a new file under `views/` with either `.markdown` or `.erb` extension. Use `.erb` to create special layout using the 
[Twitter Bootstrap Grid](http://twitter.github.com/bootstrap/scaffolding.html).

Files starting with an underscore (`_`) do not become individual pages---they are meant to be included by `erb` pages.