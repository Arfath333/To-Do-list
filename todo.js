//Select Dom elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

//Add event listener for the Add task button
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    //read the value from input
    const taskText = taskInput.value.trim();
    if(taskText === '') {
        return;
    }

    //create element li eith input value
    const taskItem = document.createElement('li')
    taskItem.className = 'task';


    taskItem.innerHTML = `<span>${taskText}</span><button class="deleteBtn">X</button>`

    //Append the ele to taskList
    taskList.appendChild(taskItem);
    taskInput.value = '';

    //Function to make tasks as complete
    const deleteBtn = taskItem.querySelector('.deleteBtn')
    deleteBtn.addEventListener('click', deleteTask)
}
function toggleComplete(event) {
    if (event.target.tagName === "button") {
        return;
    }
    console.log('this', this.classList.toggle);

    this.classList.toggle('completed')
}

function deleteTask (event) {
    event.stopPropagation();
    const taskItem = this.parentElement;
    taskList.removeChild(taskItem);
}