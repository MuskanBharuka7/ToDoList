const inputBox = document.getElementById("input-box");
const listTask = document.getElementById("list-task");

function addTask(){
   if(inputBox.value === ''){
      alert("Add Task in To-Do List");
   }else{
      let list= document.createElement("li");
      list.innerHTML = inputBox.value;
      listTask.appendChild(list);
      let cross = document.createElement("cross");
      cross.innerHTML = "\u00d7";
      list.appendChild(cross);
   }
   inputBox.value = '';
   saveData();
}

listTask.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    if(e.target.tagName === "CROSS"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listTask.innerHTML);
}

function showData(){
    listTask.innerHTML = localStorage.getItem("data");
}
showData();