const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Không được để chống, vui lòng nhập công việc muốn thêm.');
        return;
    }

    const li = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;
    li.appendChild(textSpan);

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Xóa';
    deleteBtn.className = 'delete-btn';
    
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});