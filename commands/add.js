const TodoList = function() {
   this.list = []
   this.id = 0
}

TodoList.prototype.items = function () {
  return this.list
}

TodoList.prototype.add = function (task) {
  let taskObj = {task, complete:false, id: this.id++}
  this.list.push(taskObj)
}

let list = new TodoList()

console.log(list.items());
console.log('------------------------------------');
list.add('new item 1');
list.add('new item 2');
list.add('new item 3');
console.log(list.items());
console.log('------------------------------------');

