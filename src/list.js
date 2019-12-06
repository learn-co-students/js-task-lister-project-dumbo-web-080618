class List {
  // your code here
  //next no add a new list
  constructor(name){
    this.name = name
    this.tasks = []
    this.tasknames = []
  }

  _renderList(name){
    let div = document.createElement("div")
    div.innerHTML = `
    <h2>
      ${name}
      <button data-title="${name}" class="delete-list">X</button>
    </h2>
    `
    let ul = document.createElement("ul")

    this.tasks.map(e => {
      ul.appendChild(e.render())
    })

    div.append(ul)
    return div
  }

  addtask(taskname, priority){
    let task = new Task(this.name, taskname, priority)
    if(this.tasknames.includes(taskname)){
      alert("Task descriptions must be unique")
    }
    else{
      this.tasknames.push(taskname)
      this.tasks.push(task)
    }
  
  }

  remove_task(task){
    this.tasks = this.tasks.filter(arrayItem => arrayItem.title != task);
    this.tasknames = this.tasknames.filter(arrayItem => arrayItem != task);
  }


  render(){
    return this._renderList(this.name)
  }
}
