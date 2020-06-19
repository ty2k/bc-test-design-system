# bc-test-design-system

This is a project to build a design system in a two week sprint as a learning exercise.

## Project file structure

```
./
├── sass/                     # Sass files
│   ├── base/                 # Common modules (mixin declarations, variables)
│   │    ├── all.scss         # Include to get all modules
│   │    ├── colors.scss      # Color palette
│   │    └── variables.scss   # Global Sass variables
│   ├── components/           # Sass partials for components (Design System component styles)
│   └── style.scss            # Sass compilation entry point
│
│
└── views/                    # Handlebars views
    ├── layouts               # Handlebars layouts
    └── partials              # Handlebars partials (Design System component markup)
```
