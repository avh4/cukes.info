# Running Cucumber

Cucumber runs on many different platforms, and how to run it depends on what platform you are using.

## Cucumber-JVM

Cucumber-JVM provides two different runners---a Command Line Interface (CLI) and a JUnit runner

### JUnit

In order to run a Cucumber from JUnit you need a Java class that JUnit can run. For example:

```java
package my.app;

import cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class super_duper {
    // No code in the class!
}
```

When this JUnit test is run, it will execute the `Cucumber` JUnit runner, which will look for a `.feature` file to run. In this case, it will try to load `my/app/super_duper.feature` from the `CLASSPATH`. The path name is derived from the class.

You can override the path to the `.feature` file with an additional `@Feature` annotation:

```java
package my.app;

import cucumber.junit.Cucumber;
import cucumber.junit.Feature;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Feature("something.feature")
public class super_duper {
    // No code in the class!
}
```

In this case, it will try to load `something.feature` instead of `my/app/super_duper.feature`.

You can also run several features by pointing to a "directory" on the `CLASSPATH`:

*Not implemented*

```java
// Run all features on the CLASSPATH under "my"
@Feature("my/**/*.feature")
```

Or:

*Not implemented*

```java
// Run all features on the CLASSPATH, regardless of path
@Feature("**/*.feature")
```

If you are using a "directory", it can sometimes be handy to use [tag expressions](/tag-expressions.html) to include or exclude certain features or scenarios:

*Not implemented*

```java
// Run all features not tagged with @slow
@Feature(value="**/*.feature", tags={"~@slow"})
```
### Command Line Interface (CLI)

The Cucumber-JVM CLI is primarily intended for platforms where JUnit isn't an integrated part, for example JRuby or Rhino JavaScript.

The CLI is still under development, and will be documented when it's ready to be used.