let Task = (function () {
  let all = []
  let id = 0
  return class Task {
    constructor(name){
      this.name = name
      this.id = ++id
      all.push(this)
    }

  static all() {
    return all.slice()
  }

  renderTask() {
    let listDiv = document.querySelector("#lists")
    // console.log(listDiv)
    let div = document.createElement("div")
    div.id = `taskid-${this.id}`
    div.innerHTML = `<h2>${this.name}</h2><ul></ul>`
    let h2 = div.querySelector("h2")
    let deleteButton = document.createElement("button")
      deleteButton.class = "delete-list"
      deleteButton.innerText = "X"
    h2.append(deleteButton)
    listDiv.append(div)

      deleteButton.addEventListener("click", (e) => {
        Task.delete(e)
      })

  }

  static delete(e) {
    let parent = e.target.parentNode.parentNode
    let id = parseInt(parent.id.replace("taskid-", ''))
    let currentTask = all.find(function(el) {
      return (el.id === id)
    })
    let currentTaskIndex = all.indexOf(currentTask)
    all.pop([currentTaskIndex])
    parent.parentNode.removeChild(parent)
    let form = document.querySelector("#create-task-form")
    form.parentNode.removeChild(form)
    TaskLister.renderForm()
  }

  }
})()


// <button data-title="123" class="delete-list">
//   X
// </button>
