const fs = require('fs')
const DATA_STROE = './tasks.json'

const readTasks = (callBack) => {
  fs.readFile(DATA_STROE, 'utf8', (error, data) => {
    if (error) return callBack(error)
    const todos = JSON.parse(data)
    callBack(null, todos)
  })
  return 'This function is running'
  // taskArray.forEach((task, i) => console.log(`${i} ${task}`))
}

const writeTasks = (jsonString) => {
  fs.writeFile(DATA_STROE, jsonString, (error) => {
    if (error) throw error
  })
}

module.exports = { readTasks, writeTasks }