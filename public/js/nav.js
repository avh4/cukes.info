$(document).ready(function() {
  function menufy(selector, classNames) {
    var elements = $(selector);

    // show the first and hide the rest
    var first = elements.first();

    var tabs = first.before('<ul class="tabs nav nav-tabs"></ul>').parent().find('ul').last();

    elements.each(function(n, element) {
      element = $(element);
      for(var className in classNames) {
        if(element.hasClass(className)) {
          tabs.append('<li><a href="#' + element.attr('id') + '">' + classNames[className] + '</a></li>');
        }
      }
    });
  }
  
  var progLangClassNames = {
    'sh_java': 'Java',
    'sh_ruby': 'Ruby',
    'sh_javascript': 'JavaScript',
    'sh_python': 'Python',
    'sh_csharp': 'C#',
    'sh_scala': 'Scala',
    'sh_xml': 'XML'
  };

  // TODO - add some standard groups like group1, group2, group3 etc
  menufy('.group1', progLangClassNames);
  setTimeout(function() {
    $('.tabs').tab('show');
  }, 200);
});