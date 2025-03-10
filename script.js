let tasks = [];

document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') addTask();
});
document.getElementById('clearTaskBtn').addEventListener('click', clearTasks);

function addTask() {
    let taskInput = document.getElementById('taskInput').value.trim();
    if (taskInput) {
        tasks.push({ text: taskInput, completed: false });
        document.getElementById('taskInput').value = '';
        displayTasks();
    }
}

function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        if (task.completed) li.classList.add('text-decoration-line-through', 'text-muted');
        
        let taskSpan = document.createElement('span');
        taskSpan.textContent = task.text;
        taskSpan.style.cursor = "pointer";
        taskSpan.addEventListener("click", function() { toggleTask(index); });
        
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-sm', 'btn-danger');
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener("click", function() { removeTask(index); });
        
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });
    document.getElementById('taskCounter').innerText = `Total Tasks: ${tasks.length}`;
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function clearTasks() {
    tasks = [];
    displayTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}