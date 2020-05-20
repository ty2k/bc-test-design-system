# bc-test-design-system

This is a project to build a design system in a two week sprint as a learning exercise.

## Project file structure

```
src/
|
|-- components/               # Handlebars partials for components
|-- stylesheets/              # Sass styles
    |-- style.scss            # Sass compilation entry point
    |-- base                  # Common modules (mixin declarations, variables)
        |-- _all.scss         # Include to get all modules
        |-- _colors.scss      # Color palette
        |-- _variables.scss   # Global Sass variables
```
