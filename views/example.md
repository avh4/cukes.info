Write some Gherkin:

```gherkin_en
Feature: Hello
  Scenario: World
```

And some code:

<TABS>
#### Ruby
```ruby
Given /some regexp/ do
end
```

#### Java
```java
@Given("some regexp")
public void someRegexp() {
  
}
```

#### JavaScript
```javascript
Given(/some regexp/, function() {
  
});
```
</TABS>

<pre class="sh_sourceCode"><code><span class="sh_regexp">$</span> cucumber
</code></pre>
