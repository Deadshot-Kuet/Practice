const taskInput=document.getElementById("taskInput")
const submit=document.getElementById("submit")
const taskList=document.getElementById("taskList")

const taskArray = JSON.parse(localStorage.getItem("tasks")) || [];

const totalTask=document.getElementById("total")
 const compTask=document.getElementById("comptask")
 const incompTask=document.getElementById("incomptask")

function show(){
    taskList.innerHTML=""
    taskArray.forEach(task => {
     taskList.innerHTML+=`
     <div class="task ${task.completed?"completed":""}">
     <span>${task.text}</span>
     <button class="delete">Delete</button>
        ${task.completed?`<button class="complete">Completed</button>`:
            `<button class="complete">Complete</button>`
        }
     </div>`
    });
}


submit.addEventListener("click",function(){
 const task=taskInput.value;
 if(task===""){
    return;
 }
 else{
     taskArray.push({
        text:task,
        completed:false
     })
 }
 taskInput.value="";
 localStorage.setItem("tasks",JSON.stringify(taskArray))
 updateProgress()
 show()

}
) 

show()

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        const index=taskArray.findIndex(task=>task.text===event.target.parentElement.querySelector("span").innerHTML)
        event.target.parentElement.remove();
        taskArray.splice(index,1)
        localStorage.setItem("tasks", JSON.stringify(taskArray));
    
        updateProgress()
    }
    if (event.target.classList.contains("complete")) {
        event.target.parentElement.classList.toggle("completed");  
        const index=taskArray.findIndex(task=>task.text===event.target.parentElement.querySelector("span").innerHTML)
        if(event.target.innerHTML==="Complete"){
        event.target.innerHTML="Completed"
        taskArray[index].completed=!taskArray[index].completed
        localStorage.setItem("tasks", JSON.stringify(taskArray));
         updateProgress()
    }
    else{
        event.target.innerHTML="Complete"
        taskArray[index].completed=!taskArray[index].completed
        localStorage.setItem("tasks", JSON.stringify(taskArray));
        updateProgress()
    }
    }
    });

taskInput.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
         submit.click();
    }
   })

 function updateProgress(){
totalTask.innerHTML=taskArray.length
let compTaskk=0;
taskArray.forEach(element => {
    if(element.completed){
        compTaskk++;
    }
});
compTask.innerHTML=compTaskk
totalTask.innerHTML=taskArray.length
incompTask.innerHTML=taskArray.length - compTaskk
}
updateProgress()
    