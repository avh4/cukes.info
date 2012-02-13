# Metadata

Cucumber can write out a metadata file (`.cucumber/meta.json`) that contains information about available [step definitions](stepdefs.html) for a project. The `.cucumber` directory must be underneath the topmost directory containing `.feature files`. Example:

```sh
project root
└── features
    └── .cucumber
        └── meta.json
```

The presence of this file allows certain editors and IDEs to suggest steps as you are editing a feature file. You can tell Cucumber to generate this file with the `--dotcucumber` command line option, for example:

```sh
$ cucumber --dotcucumber features/.cucumber features
```