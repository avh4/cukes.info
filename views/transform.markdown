# Transformation

When Cucumber matches a step against a step definition that has a _regular expression capture group_, each capture gets passed to the step definition as a string. [DocStrings](doc_strings) also get passed as regular strings, and [DataTables](data_tables) get passed as an instance of `DataTable`.

Sometimes we want to these values to be passed to our step definition as a different type, and this is where transformations come into play.

## Transforming Strings

Consider the following Gherkin step:

```gherkin_en
Given I have 42.3 cukes in my basket
```

### Java

Cucumber uses static type information in your step definitions to convert strings to the desired type. For example:

```java
@Given("I have (\\d+) cukes in my basket")
public void someCukesInMyBasket(float howMany) {
}
```

Numbers are written differently in different languages. Some languages (like French and Norwegian) use a `,` as a decimal separator. Cucumber uses the `Locale` associated with the i18n language of your feature file to transform values.