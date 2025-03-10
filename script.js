let tasks = [];

        document.getElementById('addTaskBtn').addEventListener('click', addTask);
        document.getElementById('taskInput').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') addTask();
        });
        document.getElementById('clearTaskBtn').addEventListener('click', clearTasks);

        function addTask() {
            let taskInput = document.getElementById('taskInput').value;
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
                
                li.innerHTML = `<span onclick="toggleTask(${index})">${task.text}</span>
                    <button class='btn btn-sm btn-danger' onclick='removeTask(${index})'>&times;</button>`;
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