const {readTasks, writeTasks} = require('../taskStore.js')

const done = (todoId) => {
  readTasks(function(error, todos) {
    if (error) throw error
    const todo = todos.find(todo => todo.id === parseInt(todoId))
    if (todo) {
      todo.done = true 
      console.log(`Completed the task '${todo.name}'`)
    } else {
      console.log("could not find item")
    }
    const updatedTodosJson = JSON.stringify(todos)
    writeTasks(updatedTodosJson)
  })
  return "Done function ran"
}

module.exports = done