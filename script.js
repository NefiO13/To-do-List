//Array to store tasks//
let tasks = []

//add event listener to add tasks to button//
document.getElementById('addTaskBtn').addEventListener('click', function () {
    //storing text value from input box as a variable taskInput//
    let taskInput = document.getElementById('taskInput').value
    //Pushes the value to the bottom of the list. displays tasks and clears taskinput after clicking the task btn//
    if (taskInput) {

        tasks.push(taskInput)
        document.getElementById('taskInput').value = ''

        displayTasks()

    }

})