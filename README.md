# Vue CLI Plugin addnew

[![npm version](https://badge.fury.io/js/vue-cli-plugin-addnew.svg)](https://badge.fury.io/js/vue-cli-plugin-addnew)

## Installation

```bash
cd ${PROJECT_DIR}
# Invoke manually
yarn add --dev vue-cli-plugin-addnew ; vue invoke vue-cli-plugin-addnew
# Automatically invoke the plugin
vue add vue-cli-plugin-addnew
```

## Usage

```bash
vue invoke vue-cli-plugin \
  --action 'addNew[Component|View]' \
  # For components
  --componentName '[componentName]' \
  --componentFileType '[js | vue]' \ # Filetype of component to add
  # For views
  --viewName '[viewName]' \
  --addViewToRouter [true | false]   # Adds view route object and import to
                                     # ./src/router.js
```

## Todo

- [x] Add the `addNewView` feature
- [ ] Add functions to generate view and component with `args` to package.json
- [ ] Write contributing guidelines
- [ ] Add support for typescript components
