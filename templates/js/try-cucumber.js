(function($) {
  var CucumberHTMLListener = function($root) {
    var CucumberHTML = require('cucumber-html');
    var formatter    = new CucumberHTML.DOMFormatter($root);

    formatter.uri('report.feature');

    var currentStep;

    var self = {
      hear: function hear(event, callback) {
        var eventName = event.getName();
        switch (eventName) {
        case 'BeforeFeature':
          var feature = event.getPayloadItem('feature');
          formatter.feature({
            keyword     : feature.getKeyword(),
            name        : feature.getName(),
            line        : feature.getLine(),
            description : feature.getDescription()
          });
          break;

        case 'BeforeScenario':
          var scenario = event.getPayloadItem('scenario');
          formatter.scenario({
            keyword     : scenario.getKeyword(),
            name        : scenario.getName(),
            line        : scenario.getLine(),
            description : scenario.getDescription()
          });
          break;

        case 'BeforeStep':
          var step = event.getPayloadItem('step');
          self.handleAnyStep(step);
          break;

        case 'StepResult':
          var result;
          var stepResult = event.getPayloadItem('stepResult');
          if (stepResult.isSuccessful()) {
            result = {status: 'passed'};
          } else if (stepResult.isPending()) {
            result = {status: 'pending'};
          } else {
            var error = stepResult.getFailureException();
            var errorMessage = error.stack || error;
            result = {status: 'failed', error_message: errorMessage};
          }
          formatter.match({uri:'report.feature', step: {line: currentStep.getLine()}});
          formatter.result(result);
          break;

        case 'UndefinedStep':
        case 'SkippedStep':
          var step = event.getPayloadItem('step');
          self.handleAnyStep(step);
          formatter.match({uri:'report.feature', step: {line: step.getLine()}});
          formatter.result({status:'skipped'});
          break;
        }
        callback();
      },

      handleAnyStep: function handleAnyStep(step) {
        formatter.step({
          keyword     : step.getKeyword(),
          name        : step.getName(),
          line        : step.getLine(),
        });
        currentStep = step;
      }
    };
    return self;
  };

  function runFeature() {
    var Cucumber        = require('./cucumber');
    var supportCode;
    var output          = $('#output');
    var errors          = $('#errors');
    var errorsContainer = $('#errors-container');
    var featureSource   = $('#feature').val();
    eval('supportCode   = function() {' + $('#step-definitions').val() + '};');
    var cucumber        = Cucumber(featureSource, supportCode);
    var $output         = $('#output');
    $output.empty();
    var listener        = CucumberHTMLListener($output);
    cucumber.attachListener(listener);

    errors.text('');
    errorsContainer.hide();
    try {
      cucumber.start(function() {});
    } catch(err) {
      errorsContainer.show();
      var errMessage = err.message || err;
      var buffer = (errors.text() == '' ? errMessage : errors.text() + "\n\n" + errMessage);
      errors.text(buffer);
      throw err;
    };
  };

  $(function() {
    Gherkin = { Lexer: function() { return Lexer; } };
    $('#run-feature').click(runFeature);
    $('#errors-container').hide();
    $('#feature').val("Feature: Simple maths\n\
  In order to do maths\n\
  As a developer\n\
  I want to increment variables\n\
\n\
  Scenario: easy maths\n\
    Given a variable set to 1\n\
    When I increment the variable by 1\n\
    Then the variable should contain 2\n\
\n\
  Scenario: much more complex stuff\n\
    Given a variable set to 100\n\
    When I increment the variable by 6\n\
    Then the variable should contain 106");
    $('#step-definitions').text("///// Your World /////\n\
\n\
// Provide a custom World constructor. It's optional, a default one is supplied.\n\
this.World = function() {};\n\
\n\
// Define your World!\n\
\n\
this.World.prototype.variable = 0;\n\
\n\
this.World.prototype.setTo = function(number) {\n\
  this.variable = parseInt(number);\n\
};\n\
\n\
this.World.prototype.incrementBy = function(number) {\n\
  this.variable += parseInt(number);\n\
};\n\
\n\
///// Your step definitions /////\n\
\n\
// use this.Given(), this.When() and this.Then() to declare step definitions\n\
\n\
// Alternatively you can use this.defineStep and even use it\n\
// like this:\n\
\n\
var Given = When = Then = this.defineStep;\n\
\n\
Given(/^a variable set to (\\d+)$/, function(number, callback) {\n\
  this.setTo(number);\n\
  callback();\n\
});\n\
\n\
When(/^I increment the variable by (\\d+)$/, function(number, callback) {\n\
  this.incrementBy(number);\n\
  callback();\n\
});\n\
\n\
Then(/^the variable should contain (\\d+)$/, function(number, callback) {\n\
  if (this.variable != parseInt(number))\n\
    throw(new Error('Variable should contain ' + number +\n\
      ' but it contains ' + this.variable + '.'));\n\
  callback();\n\
});");
  });

})(jQuery);
