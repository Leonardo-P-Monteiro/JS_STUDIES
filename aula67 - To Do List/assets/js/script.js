const inputTask = document.querySelector(".input-task");
const btnTask = document.querySelector(".btn-task");
const tasks = document.querySelector(".tasks");


// #4 Hearing the event of press key enter
inputTask.addEventListener("keypress", function (e) {
  if (!inputTask.value) {
    return;
  } else if (e.keyCode === 13) {
    creatTask(inputTask.value);
  }
});

// #3 Creating list item.
const creatListItem = () => {
  const li = document.createElement("li");
  return li;
};

// #6 Creating the button delete task
function createButtonDelete(li) {
  li.innerHTML += " ";
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "Apagar";
  buttonDelete.setAttribute("class", "apagar");
  buttonDelete.setAttribute("title", "Apagar essa tarefa.");
  li.appendChild(buttonDelete);
}

// #5 cleaning the input field.
const clearInput = () => {
  inputTask.value = "";
  inputTask.focus();
};

// #2 Inputting tasks on list to do.
function creatTask(task) {
  const li = creatListItem();
  li.innerHTML = task;
  tasks.appendChild(li);
  clearInput();
  createButtonDelete(li);
  saveTasks();
}

// #1 Catching the button event
btnTask.addEventListener("click", () => {
  if (!inputTask.value) return;
  creatTask(inputTask.value);
});


// #7 Listening the delete button.
document.addEventListener("click", function (e) {
  const element = e.target;

  if (element.classList.contains("apagar")) {
    element.parentElement.remove();
    saveTasks();
  }
});

function saveTasks () {
  const liTasks = tasks.querySelectorAll('li');
  const listTasks = [];

  for (let task of liTasks) {
    let textTask = task.innerText;
    textTask = textTask.replace('Apagar', '').trim();
    listTasks.push(textTask);
    
  };
  
  const tasksJSON = JSON.stringify(listTasks);
  localStorage.setItem('tasks', tasksJSON);
};

const addTasksSaved = () => {
  const tasksRetrieve = localStorage.getItem('tasks');
  const tasksReconvertList = JSON.parse(tasksRetrieve);
  
  for (let i of tasksReconvertList) {
    creatTask(i);
  };
};

addTasksSaved();