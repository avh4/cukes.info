Write some Gherkin:

```gherkin_en
Feature: Hello
  Scenario: World
```

And some code:

```ruby.header-stepdefs
Given /some regexp/ do
end
```

```java.header-stepdefs
@Given("some regexp")
public void someRegexp() {
  
}
```

```javascript.header-stepdefs
Given(/some regexp/, function() {
  
});
```

Run it:

<pre class="sh_sourceCode"><code><span class="sh_regexp">$</span> cucumber
</code></pre>

Fix the problem and run again:

```
$ cucumber
```
