let tasks = [];

document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') addTask();
});
document.getElementById('clearTaskBtn').addEventListener('click', clearTasks);

function addTask() {
    let taskInput = document.getElementById('taskInput').value.trim();
    if (taskInput) {

        tasks.push(taskInput)
        document.getElementById('taskInput').value = ''

        displayTasks()

    }

})

//Function to display tasks//
function displayTask() {
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

}



function removeTask(index) {
    //remove the task at the given index from the array//
    tasks.splice(index, 1)

    //call the display function tasks//
    displayTasks();
}

//Add Event Listener//
document.getElementById('clearTaskBtn').addEventListener('click', function () {
    //Empty the task array//
    tasks = []
    //Call the function to update the task list display//
    displayTasks()
})
