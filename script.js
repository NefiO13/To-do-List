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
});



//Function to display tasks//
function displayTasks() {
    //Select the unordered list//
    let taskList = document.getElementById('taskList')

    //clear the  enlisting//
    taskList.innerHTML = ''

    //Loop through each task//
    tasks.forEach((tasks, index) => {
        //Create a new list element for each tasks//
        let li = document.createElement('li')

        //Add Classes//
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )
        //engine of the entire loop //Set the inner html of the list element with tasks text amd a remove button//
        li.innerHTML = `${tasks}<button class='btn btn-dark btn-sm' onclick='removeTask(${index})'√ </button>`

        taskList.appendChild(li)
    })



    function removeTask(index) {
        //remove the task at the given index from the array//
        tasks.splice(index, 1)

        //call the display function tasks//
        displayTasks()
    }

    //Add Event Listener//
    document.getElementById('clearTaskBtn').addEventListener('click', function () {
        //Empty the task array//
        tasks = []
        //Call the function to update the task list display//
        displayTasks()
    })
}