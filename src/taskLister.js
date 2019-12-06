class TaskLister {
  // your solution here
  constructor(){
    this.options = []
  }

  _renderList(){
    let form = document.createElement("form")
    form.id = "create-task-form"
    form.innerHTML = `
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
        <!-- Major key alert:
        read the docs for HTML option selected:
        https://www.w3schools.com/tags/att_option_selected.asp -->
      ${this.options.map( e => this._option(e))}
      </select>
  
      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">
  
      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
      <input type="submit" value="Create New Task">
  `
    return form
  }

  _option(option){
    return `<option value=${option} selected>
    ${option}
  </option>`
  }

  add_option(option){
    this.options.push(option)
  }

  remove_option(option){
    this.options = this.options.filter(arrayItem => arrayItem != option);
  }

  render() {
    return this._renderList();
  }
}
