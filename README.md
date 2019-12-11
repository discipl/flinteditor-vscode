# FLINT editor extension for Visual Studio Code

Very much in development.

## Functionalities

For all acts, facts and duties:
- Index in tree-view
- Jump to definition
- Find references
- Autocompletion

Validation:
- Warnings and errors based on law-reg validation logic
- Validation using json-schema, including snippets for auto-insertion

Execution:
- Running a FLINT model in the Compliance by Design demo (`Ctrl + shift + P`, then type `Run Flint`)

### Configuration needed for execution

In order to run a model, some configuration is needed to run. This can be configured on a folder-basis.

Example config:

Actors are all actors specified, factFunctionSpec links different facts to those actors.
Active actors are the (exactly 2) actors that are shown in the interface.

```
{
    "flinteditor.run_configuration": {
        "name": "ANLb",
        "actors": ["RVO", "collectief"],
        "activeActors": ["RVO", "collectief"],
        "factFunctionSpec": {
            "[RVO]": "RVO",
            "[agrarisch collectief]": "collectief"
          }
    }
}
```


## Package

`npm run package`

## Install in vscode

Install the resulting `.vsix` file in vscode by manually loading it as extension.


