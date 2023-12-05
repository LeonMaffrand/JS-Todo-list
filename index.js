const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    if (taskInput.value.trim() !== "") {
        const taskItem = document.createElement("div");
        const taskCheckBox = document.createElement("input");
        taskCheckBox.setAttribute("type", "checkbox");
        const taskText = document.createElement("label");
        taskText.textContent = taskInput.value;
        taskCheckBox.onclick = function () {
            taskText.classList.toggle("completed");
        };

        taskItem.appendChild(taskCheckBox);
        taskItem.appendChild(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}
