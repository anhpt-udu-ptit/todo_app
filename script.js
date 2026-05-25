const nhapCongViec = document.getElementById("task-input");
const themCongViec = document.getElementById("add-btn");
const dsCongviec = document.getElementById("task-lish");

function them(){
    const nhapCongViec = nhapCongViec.value.trim();

    if(nhapCongViec == ''){
        alert("Không được để chống, hãy nhập công việc bạn muốn thêm.");
        return;
    }
    const li = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;
    li.appendChild(textSpan);

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const xoaCongviec = document.createElement('button');
    xoaCongviec.textContent = 'Xóa';
    xoaCongviec.className = 'delete-btn';
    
    xoaCongviec.addEventListener('click', function(e) {
        e.stopPropagation();
        taskList.removeChild(li);
    });

    li.appendChild(xoaCongviec);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
}

addBtn.addEventListener('click', them);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        them();
    }
});
