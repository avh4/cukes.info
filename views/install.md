# Installing Cucumber

Cucumber runs on many different platforms, and the installation procedure depends on what platform you are using.

<section class="cucumber-classic">
## Cucumber Classic (Ruby and JRuby)

Cucumber is a ruby gem, and can be installed from the command line:

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
</section>

<section class="cucumber-jvm">
## Cucumber-JVM

Cucumber-JVM is a collection of software packages that lets you use Cucumber with various JVM languages, frameworks and build tools. Depending
on your needs you will need 1, 2 or 3 packages. The language-specific packages are as follows:

| Language/Platform              | Jar file            |
| ------------------------------ | ------------------- |
| Clojure                        | `cucumber-clojure`  |
| Groovy                         | `cucumber-groovy`   |
| Ioke                           | `cucumber-ioke`     |
| Java                           | `cucumber-java`     |
| JavaScript (Rhino interpreter) | `cucumber-rhino`    |
| Python (Jython interpreter)    | `cucumber-jython`   |
| Ruby (JRuby interpreter)       | `cucumber-jruby`    |
| Scala                          | `cucumber-scala`    |

If you are using Java you will be writing step definitions in plain old Java classes. The `cucumber-java` package requires an additional Dependency Injection package for instantiating those classes. You can use any of the following:

| Dependency Injection Container | Jar file                 |
| ------------------------------ | ------------------------ |
| PicoContainer                  | `cucumber-picocontainer` |
| Spring                         | `cucumber-spring`        |
| Weld                           | `cucumber-weld`          |
| Guice                          | `cucumber-guice`         |

(If you're not using a Dependency Injection container in your own code we recommend `cucumber-picocontainer` since it doesn't require any configuration).

In order to run your Cucumber Features and Scenarios you can choose between the following:

| Runner                         | Jar file                 |
| ------------------------------ | ------------------------ |
| Command Line Interface         | `cucumber-core`          |
| JUnit Runner                   | `cucumber-junit`         |

The JUnit Runner lets you run Cucumber from an IDE, using the built-in JUnit support. It can also be used from build tools that support JUnit explicitly. If you don't care about any of those, just go for the Command Line Interface.

Before you proceed - check what the latest available versions are. You can find out by searching for the packages at http://search.maven.org/ 

<section class="maven">
### Maven

Installing the various `cucumber-*` packages in a Maven project is just a matter of adding them to your pom.xml file.

```xml
<dependencies>
    <dependency>
        <groupId>info.cukes</groupId>
        <artifactId>cucumber-junit</artifactId>
        <version>1.0.0-SNAPSHOT</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>info.cukes</groupId>
        <artifactId>cucumber-picocontainer</artifactId>
        <version>1.0.0-SNAPSHOT</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.picocontainer</groupId>
        <artifactId>picocontainer</artifactId>
        <version>2.14.1</version>
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
</section>

<section class="cucumber-jvm-jruby">
### JRuby

Cucumber-JVM is packaged as a Ruby gem, and can be installed as follows:

```
$ jruby -S gem install cucumber-jvm
```

Alternatively, if you are using [Bundler](http://gembundler.com/) you can use a `Gemfile`:

```ruby
source :rubygems

group :test do
  gem 'cucumber-jvm'
end
```
</section>