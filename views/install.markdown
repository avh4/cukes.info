# Installing Cucumber

Cucumber runs on many different platforms, and the installation procedure depends on what programming language you are using, and also what kind of build tool you are using. 

<TABS>
#### Cucumber-Ruby

Cucumber for Ruby is a ruby gem, and can be installed from the command line:

```
gem install cucumber
```

If you are using [Bundler](http://gembundler.com/), just add it to your `Gemfile`:

```ruby
group :test do
  gem 'cucumber'
end
```

And have Bundler install it:

```
bundle install
```

After this you should have a `cucumber` command that you can try out:

```
cucumber --help
```

Or if you want to run it with the Bundler environment:

```
bundle exec cucumber --help
```


#### Cucumber-JVM

Cucumber-JVM consists of several modules (jars). You will always need the `cucumber-core` module, which contains the main logic for parsing and executing your Gherkin feature files.

### Programming Language modules

In addition to `cucumber-core` you will also need a programming language-specific module, depending on what programming language you are using. The available programming language modules are:

| Language/Platform              | Jar file            |
| ------------------------------ | ------------------- |
| Java                           | `cucumber-java`     |
| Clojure                        | `cucumber-clojure`  |
| Groovy                         | `cucumber-groovy`   |
| Ioke                           | `cucumber-ioke`     |
| JavaScript (Rhino interpreter) | `cucumber-rhino`    |
| Python (Jython interpreter)    | `cucumber-jython`   |
| Ruby (JRuby interpreter)       | `cucumber-jruby`    |
| Scala                          | `cucumber-scala`    |

### Dependency Injection modules (for Java)

If your programming language is Java you will be writing glue code ([Step Definitions](step-definitions) and [Hooks](hooks)) in plain old Java classes. Cucumber will create a new instance of each of your glue code classes before each [Scenario](gherkin#scenario). If all of your glue code classes have an empty constructor you don't need anything else. However, most projects will benefit from a [Dependency Injection](dependency-injection) module to organize your code better.

The available Dependency Injection modules are:

| Dependency Injection Container | Jar file                 |
| ------------------------------ | ------------------------ |
| PicoContainer                  | `cucumber-picocontainer` |
| Guice                          | `cucumber-guice`         |
| OpenEJB                        | `cucumber-openejb`       |
| Spring                         | `cucumber-spring`        |
| Weld                           | `cucumber-weld`          |

### Runners

There are two ways to run Gherkin Features with Cucumber-JVM:

| Runner                         | Jar file                 |
| ------------------------------ | ------------------------ |
| Command Line Interface         | `cucumber-core`          |
| JUnit Runner                   | `cucumber-junit`         |

The JUnit Runner lets you run Cucumber from any tool that understands JUnit. This includes IDEs (such ash IntelliJ or Eclipse) and build tools (such as Ant, Maven or Gradle).

Any build tool can execute command line programs (Cucumber's Command Line Interface), so if you prefer this way to run your features you don't need the `cucumber-junit` module.

This should help you pick the 2 or 3 modules you need. Let's install them:

<TABS>
#### Manual download

You can browse your way to the modules you need in the [Sonatype](https://oss.sonatype.org/content/repositories/releases/info/cukes/) repository.

#### Maven

Installing the various `cucumber-*` modules in a Maven project is just a matter of adding them to your pom.xml file.

```xml
<dependencies>
    <dependency>
        <groupId>info.cukes</groupId>
        <artifactId>cucumber-java</artifactId>
        <version>1.0.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>info.cukes</groupId>
        <artifactId>cucumber-junit</artifactId>
        <version>1.0.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.10</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

You don't have to explicitly add a dependency on `cucumber-core` as all the other packages depend on it.

#### Ant without Ivy

You can make Ant download all the jars for you like so:

```xml
<property name="repo" value="https://oss.sonatype.org/content/repositories/releases"/>
<property name="cucumber-jvm.version" value="1.0.0.RC24"/>
<property name="gherkin.version" value="2.9.1"/>
<property name="jars" value="target/lib"/>

<target name="download">
    <mkdir dir="${jars}"/>
    <get src="${repo}/info/cukes/cucumber-core/${cucumber-jvm.version}/cucumber-core-${cucumber-jvm.version}.jar"
         dest="${jars}/cucumber-core-${cucumber-jvm.version}.jar"/>
    <get src="${repo}/info/cukes/cucumber-java/${cucumber-jvm.version}/cucumber-java-${cucumber-jvm.version}.jar"
         dest="${jars}/cucumber-java-${cucumber-jvm.version}.jar"/>
    <get src="${repo}/info/cukes/cucumber-junit/${cucumber-jvm.version}/cucumber-junit-${cucumber-jvm.version}.jar"
         dest="${jars}/cucumber-junit-${cucumber-jvm.version}.jar"/>
    <get src="${repo}/info/cukes/gherkin/${gherkin.version}/gherkin-${gherkin.version}.jar"
         dest="${jars}/gherkin-${gherkin.version}.jar"/>
</target>
```

#### Ant with Ivy

Can someone write this please?

</TABS>

#### Cucumber-JS

TODO

</TABS>
