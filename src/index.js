document.addEventListener('DOMContentLoaded', () => {

  const listDiv = document.getElementById("app-content");
  const form = document.querySelector('#create-list-form')
  const submitButton = document.querySelector('#create-list-form input[type="submit"]')


  submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    let formValue = document.querySelector("#new-list-title").value
      let newTask = new Task(formValue)
        newTask.renderTask()
        TaskLister.renderForm()
  })


});
