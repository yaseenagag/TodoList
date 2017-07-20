const { readTasks, writeTasks } = require('../taskStore.js')

const add = ( name, callBack, done=false  ) => {
  readTasks((error, todos) => {
    if (error) return callBack(error)
    let id 
    if (todos.legnth === 0 ) {
      id = 1
    } else {
      id = todos[todos.length-1].id+1
      console.log('id++++++', todos[todos.length-1].id)
    }
    const newTodos = todos.concat({id, name, done})
    const newTodosJson = JSON.stringify(newTodos)
    writeTasks(newTodosJson)
    console.log('------------------------------------');
    console.log('Created task ' + id + '.');
    console.log('------------------------------------');
  })
  return 'Add function ran'
}

module.exports = add
