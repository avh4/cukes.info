# Gherkin

Gherkin is a lightweight grammar for documenting software behavior. It can be understood by humans, and it can be executed by Cucumber.

## A simple example

Here is a simple Gherkin document:

```gherkin_en
Feature: Add numbers
  This is really important to get right

  Scenario: Two ints
    Given I have entered 5 and 7
    When I press +
    Then the answer should be 12
```

Cucumber recognizes certain keywords, like <code>Feature</code>, <code>Scenario</code> and <code>Given</code>. These keywords are translated into more than 40 spoken languages, so you can write Gherkin documents in your own native language. To list all the available translations, run:

```
$ cucumber --i18n help
```

To list available keywords for a particular language, for example French, run:

```
$ cucumber --i18n fr
```

## Feature section

This is the header of each Gherkin document. Cucumber doesn't execute it, it only serves as documentation. The general format is:

```gherkin_en
Feature: [NAME]
  [DESCRIPTION]
```

The <code>NAME</code> can be anything. The <code>DESCRIPTION</code> can also be anything, and it can span multiple lines. The only constraint is that none of the <code>DESCRIPTION</code> lines must start with a Gherkin keyword. Cucumber ignores both the <code>NAME</code> and <code>DESCRIPTION</code>, it's only meant to be documentation for people.

A <code>Feature</code> section can be followed by zero or more <code>Scenario</code>, <code>Scenario Outline</code> or <code>Background</code> sections.

## Scenario section

A <code>Scenario</code> is a grouping of a series of <em>steps</em>, each of which interacts with the application in some way. The general form is:

```gherkin_en
Scenario: [NAME]
  [DESCRIPTION]
  STEP+
```

Just like the <code>Feature</code> section, the <code>NAME</code> and <code>DESCRIPTION</code> values are purely for documentation. It is the <em>steps</em> that provide instructions to Cucumber about what to do.

## Steps

Steps are single-line instructions for Cucumber, and they take the following form:

```gherkin_en
KEYWORD NAME
```

The <code>KEYWORD</code> can be one of the following:

* `Given`
* `When`
* `Then`
* `And`
* `But`
* `*`

Cucumber does not distinguish between the step keywords, it only looks at the <code>NAME</code>. The only reason the step keywords have many variants is so that people can more easily write scenarios that read well.

## Doc Strings

Each Step can be followed by a Doc String to specify a larger chunk of text that doesn't fit on a single step line. For example:

```gherkin_en
When an email with the following content is received:
   """
   Dear sir,

   I am Mr. paul agabi, a Lawyer by profession. I am the personal attorney to Mr. Charles
   (my surname) , a national of your country, who used to work with Chevron Oil Exploration 
   Company in Nigeria, herein after shall be referred to as my client.
   """
Then the email should be marked as spam
```

## Data Tables

Just like a Doc String, a step can also be followed by a Wiki-style table:

```gherkin_en
Given the following people have signed up:
  | Name  | Account type |
  | Aslak | Bronze       |
  | Matt  | Silver       |
  | Greg  | Gold         |
```

This allows more structured information to be described.

## Scenario Outline section

Scenario Outlines is a way to remove duplication between many similar Scenarios, so instead of writing this:

```gherkin_en
Scenario: Add two ints
  Given I have entered 5 and 7
  When I press +
  Then the answer should be 12

Scenario: Multiply two ints
  Given I have entered 3 and 6
  When I press *
  Then the answer should be 18
```

You can express this in a Scenario Outline:

```gherkin_en
Scenario Outline: Two ints
  Given I have entered <a> and <b>
  When I press <op>
  Then the answer should be <result>

  Examples:
    | a | b | op | result |
    | 5 | 7 | +  |     12 |
    | 3 | 6 | *  |     18 |
```

This can be handy when there are many different combinations to check. The general form is:

```
Scenario Outline: [NAME]
  [DESCRIPTION]
  STEP+

  EXAMPLES+
```

### Examples Section

Each <code>Scenario Outline</code> section can contain one or more <code>Examples</code> sections, which takes the following form:

```gherkin_en
Examples: [NAME]
  [DESCRIPTION]
  HEADER
  ROW+
```

The <code>HEADER</code> row must have cell values that correspond to the <code>&lt;param&gt;</code> parameters in the <code>Scenario Outline</code>'s steps.

The following rows are the values that Cucumber will plug into those steps, and run the <code>Scenario Outline</code> steps, one <code>Examples</code> row at a time.

## Background section

A <code>Background</code> section is a special kind of <code>Scenario</code> section that will run <em>before</em> each <code>Scenario</code> or <code>Examples</code> row. It is common to use this to avoid repetitive setups.

## Tags

Tags are used to group related features or scenarios together. They take the following form:

```gherkin_en
@billing
Feature: Send reminder before account expires
```

Tags can be placed before the following keywords:

* `Feature`
* `Scenario`
* `Scenario Outline`
* `Examples`

Tags are inherited from the parent section, so if a Feature has the tag `@billing`, so will any of the Scenarios underneath, even if it doesn't appear in the text.

## Comments

Some times it can be useful to put a comment inside a Gherkin document. A comment is a line that starts with a `#` character:

```gherkin_en
# TODO: Remember to verify this with Peter
Scenario: Ordering more than 6 items
```

It's advised to use comment sparingly - it is usually better to use the <code>DESCRIPTION</code> fields to add various notes.

## Summing up

Below you see a Gherkin document that uses all of the Gherkin syntax:

```
# ASDASD
```