document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  

  const divList = createList();
  listDiv.append(divList)

  let listObj = {}

  const app = new TaskLister();
  const UI = document.getElementById("lists");

  document.getElementById('create-list-form').addEventListener("submit", evt => {
    evt.preventDefault();
    let name = evt.target.querySelector("#new-list-title").value

    if(document.querySelectorAll("button[data-title]")){
      let newlist = new List(name)
      if(!(name in listObj)){
        listObj[name] = newlist
        app.add_option(name)
        if (Object.keys(listObj).length <= 1){
          listDiv.prepend(app.render())
        }
        else{
          document.getElementById('create-task-form').remove();
          listDiv.prepend(app.render())
        }

        divList.innerHTML = ""

        Object.values(listObj).map(e => {
          divList.appendChild(e.render())
        }) 

      }
      else{
        alert("List titles must be unique")
      }
    }
    evt.target.reset();    
  })

  UI.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
      if(e.target.matches(".delete-list")){
        let list = e.target.attributes["data-title"].value

        delete listObj[list]
        app.remove_option(list)

        divList.innerHTML = ""

        Object.values(listObj).map(e => {
          divList.appendChild(e.render())
        }) 

        if (Object.keys(listObj).length === 0){
          document.getElementById('create-task-form').remove();
        }
        else{          
          document.getElementById('create-task-form').remove();
          listDiv.prepend(app.render())
        }
      }
      else if (e.target.matches(".delete-task")){
        let list = e.target.attributes["data-list-title"].value
        let task = e.target.attributes["data-task-name"].value
        
        listObj[list].remove_task(task)
        divList.innerHTML = ""

        Object.values(listObj).map(e => {
          divList.appendChild(e.render())
        }) 
      }
      
    }
  })

  listDiv.addEventListener("submit", evt => {
    evt.preventDefault();
    let name = evt.target.querySelector("#parent-list").value
    let descript = evt.target.querySelector("#new-task-description").value
    let priority = evt.target.querySelector("#new-task-priority").value
    if (priority === ""){
      priority = "low"
    }

    listObj[name].addtask(descript, priority)

    divList.innerHTML = ""

    Object.values(listObj).map(e => {
      divList.appendChild(e.render())
    }) 
    
    evt.target.reset(); 
  })


});

//create a lists
function createList(){
  let div = document.createElement("div")
  div.id = "lists"
  return div
}

function removeList(name){
  var elem = document.getElementById(name);
  elem.parentNode.parentNode.remove();
}

