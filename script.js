const taskInput=document.getElementById("taskInput")
const submit=document.getElementById("submit")
const taskList=document.getElementById("taskList")
const taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
function show(){
    taskList.innerHTML=""
    taskArray.forEach(task => {
         taskList.innerHTML+=`
     <div class="task">
     <span>${task}</span>
     <button class="delete">Delete</button>
     <button class="complete">Complete</button>
     </div>`
    });
}
submit.addEventListener("click",function(){
 const task=taskInput.value;
 if(task===""){
    return;
 }
 else{
     taskList.innerHTML+=`
     <div class="task">
     <span>${task}</span>
     <button class="delete">Delete</button>
     <button class="complete">Complete</button>
     </div>`
     taskArray.push(task)
 }
 taskInput.value="";
 localStorage.setItem("tasks",JSON.stringify(taskArray))
}
) 
show()
taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        const index=taskArray.indexOf(event.target.parentElement.querySelector("span").innerHTML)
        event.target.parentElement.remove();
        taskArray.splice(index,1)
        localStorage.setItem("tasks", JSON.stringify(taskArray));
    }
    if (event.target.classList.contains("complete")) {
        event.target.parentElement.classList.toggle("completed");  
        if(event.target.innerHTML==="Complete"){
        event.target.innerHTML="Completed"
    }
    else{
        event.target.innerHTML="Complete"
    }
    }
    });
    taskInput.addEventListener("keydown",function(event){
        if(event.key==="Enter"){
            submit.click();
        }
    })
    