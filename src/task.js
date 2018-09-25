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
    console.log(div)

      deleteButton.addEventListener("click", () => {
        this.delete()
      })

  }

  delete() {
    let div = document.querySelector(`#taskid-${this.id}`)
    div.parentNode.removeChild(div);
    let self = all.find(function(el) {
      return (el.id === this.id)
    }.bind(this))
      let idx = all.indexOf(self)
      delete all[idx]
      console.log(all.length)
    if (all.length === 0){
      tasklistform = document.querySelector("#create-task-form")
      tasklistform.parentNode.removeChild(tasklistform)
    }

  }

  }
})()


// <button data-title="123" class="delete-list">
//   X
// </button>
