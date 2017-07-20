const {readTasks} = require('../taskStore.js')

const formatTodos = (todos) => {
  let counter = 0
  todos.forEach((todo) => {
    if (todo.done === false) {
      counter++
      console.log(`${todo.id}. ${todo.name}`)
    }
  })
  console.log('------------------------------------');
  console.log('You have ' + counter + ' tasks remaining');
  console.log('------------------------------------');
}

const list = () => {
  console.log('------------------------------------');
  console.log('ID Description');
  console.log('------------------------------------');
  readTasks(function(error, todos, callBack) {
    if (error) throw error
    formatTodos(todos)
  })
  return 'List function ran'
}

module.exports = list