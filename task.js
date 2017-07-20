const fs = require('fs')
const DATA_STROE = './tasks.json'

const readTasks = (callBack) => {
  fs.readFile('./tasks.json', 'utf8', (err, data) => {
    if (err) return callBack(error)
    const taskArray = JSON.parse(data)
    cb(null, todos)
  })
  return 'This function is running'
  // taskArray.forEach((task, i) => console.log(`${i} ${task}`))
}

const writeTasks = (jsonString) => {
  fs.writeFile()
  })
}

readTasks()