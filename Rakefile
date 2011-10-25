desc 'Fetch HTML5 Boilerplate template'
task 'html5' do
  sh 'curl "http://www.initializr.com/builder?mode=h5bp&h5bp-iecond&h5bp-analytics&h5bp-chromeframe&h5bp-scripts&jquerymin&h5bp-htaccess" > templates/html5.zip'
  Dir.chdir('templates') do
    sh 'unzip html5.zip'
    rm 'html5.zip'
  end
end
