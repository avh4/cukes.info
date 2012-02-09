$(document).ready(function() {
  function menufy(selector, classNames) {
    var elements = $(selector);

    var first = elements.hide().first().show();
    var nav = first.before("<nav></nav>").parent().find('nav').last();

    elements.each(function(n, element) {
      element = $(element);
      for(var className in classNames) {
        if(element.hasClass(className)) {
          var a = nav.append("<a href='#'>" + classNames[className] + "</a>").find('a').last();
          a.click(function(e) {
            elements.hide();
            element.show();
            e.preventDefault();
          });
        }
      }
    });
  }
  
  var progLangClassNames = {
    sh_java: 'Java',
    sh_ruby: 'Ruby',
    sh_javascript: 'JavaScript',
    sh_python: 'Python',
    sh_csharp: 'C#',
    sh_scala: 'Scala',
    sh_xml: 'XML'
  };
  
  var platformClassNames = {
    'ruby': 'Ruby',
    'cucumber-jvm': 'Cucumber-JVM',
    'maven': 'Maven'
  };
  
  menufy('.header-stepdefs', progLangClassNames);
  menufy('.install', platformClassNames);

});