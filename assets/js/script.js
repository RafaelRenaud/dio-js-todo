if(localStorage.getItem("taskAppCache") !== null ){
    document.getElementById("notebook-tasks").innerHTML = localStorage.getItem("taskAppCache");
}

flushApp();

var task_cache = "";
var number_of_tasks = document.getElementsByClassName("box").length;

function flushApp(){
    let tasks = document.querySelectorAll('#notebook-tasks > .checked');

    tasks.forEach( (task) => {
        if(task.classList.contains("checked")){
            let tagId = task.id.split("_")[1];
            tagId = "task_" + tagId;
            document.getElementById(tagId).checked = true;
        }
    });
}

function getTaskContent(){
    let content = document.getElementById("task-input").value;

    if(content!=""){
        setTaskContent(content);
        number_of_tasks++;
        saveTaskCache();
    }
}

function setTaskContent(task){
    let content = this.task_cache;
    content += `<input type="checkbox" onchange="toggleTask(${number_of_tasks})" id="task_${number_of_tasks}" class="box"><li id="content_${number_of_tasks}" class="">${task}</li></input><hr>`;
    document.getElementById("notebook-tasks").innerHTML = content;
}

function toggleTask(taskId){
    let taskHtmlId = `task_${taskId}`;
    let taskHtmlContent = `content_${taskId}`;
    document.getElementById(taskHtmlContent).classList.toggle("checked");

    if(document.getElementById(taskHtmlContent).classList.contains("checked")){
        document.getElementById(taskHtmlId).checked = true;
    }else{
        document.getElementById(taskHtmlId).checked = false;
    }

    saveTaskCache();
}

function saveTaskCache(){
    this.task_cache = document.getElementById("notebook-tasks").innerHTML;
    localStorage.setItem("taskAppCache",task_cache.toString());
}

function clearCache(){
    localStorage.removeItem("taskAppCache");
    alert("Armazenamento Limpo com Sucesso!");
    window.location.reload();
}