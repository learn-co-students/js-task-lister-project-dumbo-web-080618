class Task {
  // your code here
  constructor(name, title, priority) {
    this.name = name
    this.title = title;
    this.priority = priority;
  }

  _rendertask(name, title, priority){
    let li = document.createElement("li")
    li.innerHTML = `
    Task: ${title}
    <button data-list-title="${name}" data-task-name="${title}" class="delete-task">X</button>
    <br>
    Priority: ${priority}
    `
    return li
  }

  render() {
    return this._rendertask(this.name, this.title, this.priority)
  }
}
