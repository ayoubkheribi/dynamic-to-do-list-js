document.addEventListener('DOMContentLoaded', function(){

function loadTasks(){
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks.forEach( taskText => addTask(taskText, false));
}

const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask(taskText, save = true) {

   if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("enter a task first");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Remove";
  removeBtn.classList.add = 'remove-btn';


  removeBtn.onclick = function () {
    taskList.removeChild(li);
    
  };
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";

  }

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if(event.key === 'Enter'){
      addTask();
    }
  });

document.addEventListener('DOMContentLoaded', addTask);

});