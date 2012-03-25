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


#### Options Available

There is a `Cucumber.Options` annotation that is available to use to customize the execution of Cucumber.

```java
@Cucumber.Options( features = "something.feature", dry_run = "true", tags= {"@oneTag", "@twoTag"}, glue = "gluePath")
```

You can specify which feature files you want to execute for this test using the features parameter of the Options annotation

```java
@Cucumber.Options(features = {"myFirstFeature.feature", "mySecondFeature.feature"})

@Cucumber.Options(features = "someFolder/*.feature")
```

You can also make it a dry run, which will simply invoke the formatters and run through the scenario without actually executing any of the steps.
Could be useful to see what your scenario will look like.

```java
@Cucumber.Options(dry_run = "true", features = "myFeature.feature" )
```

You can also specify the glue path, which in most cases you will not need to do, as most IDEs and Build tools properly throw the right things into
the classpath for your Junit tests. If it doesn't, or you're executing it a special way, you can specify the locations to look for Step Definitions using
that parameter

```java
@Cucumber.Options(features = "something.feature", glue = "com.example.stepdefs")
```

### Command Line Interface (CLI)

The Cucumber-JVM CLI is primarily intended for platforms where JUnit isn't an integrated part, for example JRuby or Rhino JavaScript.

The CLI is still under development, and will be documented when it's ready to be used.