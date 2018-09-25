let TaskLister = (function () {
  let all = []
  let id = 0
  return class TaskLister {
    constructor(descrip, priority, taskId) {
      // this.name = name
      this.descrip = descrip
      this.priority = priority
      this.id = ++id
      this.taskId = taskId
      all.push(this)
    }

    static all() {
      return all.slice()
    }


    static renderForm() {
      if (Task.all().length > 0){
        const appContent = document.querySelector("#app-content")
        let form = document.querySelector("#create-task-form")

        if(form === null) {
          form = document.createElement("form")
          form.id = "create-task-form"
          appContent.append(form)
          form.innerHTML = `<label for="parent-list">Select List:</label>
          <select id="parent-list">
          </select>
          <label for="new-task-description">Task description:</label>
          <input required="" type="text" id="new-task-description" placeholder="description">

          <label for="new-task-priority">Priority level:</label>
          <input type="text" id="new-task-priority" placeholder="priority">
          <input type="submit" value="Create New Task">`
        }

        let select = document.querySelector("#parent-list")
        let options = Task.all()
        select.innerHTML = ""
        options.forEach(function(el){
          let newOption = document.createElement("option")
          newOption.value = el.id
          newOption.innerText = el.name
          select.append(newOption)
        })

         let listSubmit = form.querySelector("input[type='submit']")

         listSubmit.addEventListener('click', (x) => {
           x.preventDefault()
           this.creatTaskList()
         })

      }
    }

    static creatTaskList() {
      let form = document.querySelector("#create-task-form")

      let taskId = document.querySelector('#parent-list').value
      let descrip = form.querySelector("#new-task-description").value
      let priority = form.querySelector("#new-task-priority").value

      let tasklist = new TaskLister(descrip, priority, taskId)


      let taskUl = document.querySelector(`#taskid-${taskId}`).querySelector("ul")
        let li = document.createElement("li")
        li.innerHTML = `Task: ${tasklist.name}` + '<br>' + `Priority: ${tasklist.priority}`
      taskUl.append(li)

    }




  }
})()
