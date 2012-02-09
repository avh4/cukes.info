Write some Gherkin:

```gherkin_en
Feature: Hello
  Scenario: World
```

And some code:

```ruby.group1
Given /some regexp/ do
end
```

```java.group1
@Given("some regexp")
public void someRegexp() {
  
}
```

```javascript.group1
Given(/some regexp/, function() {
  
});
```

Run it:

<pre class="sh_sourceCode"><code><span class="sh_regexp">$</span> cucumber
</code></pre>
