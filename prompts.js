function isComponent (answers) {
  return answers.action === 'addNewComponent'
}

// function isView (answers) {
//   return answers.action === 'addNewView'
// }

module.exports = [{
  name: 'action',
  message: 'What should we add?:',
  type: 'list',
  choices: [{
    name: 'Component',
    value: 'addNewComponent'
  } // {
    // name: 'View',
    // value: 'addNewView'
    // }
  ],
  default: 'addNewComponent'
}, {
  name: 'componentName',
  type: 'input',
  message: 'What is the name of the new component?',
  when: isComponent,
  default: 'NewComponent'
}, // {
// name: 'viewName',
// type: 'input',
// message: 'What is the name of the new view?',
// when: isView,
// default: 'NewView'
// },
{
  name: 'componentFiletype',
  type: 'list',
  choices: [{
    name: 'Javascript',
    value: 'js'
  }, {
    name: 'Vue',
    value: 'vue'
  }],
  when: isComponent
}]
