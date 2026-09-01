const taskInput=document.getElementById("taskInput")
const submit=document.getElementById("submit")
const taskList=document.getElementById("taskList")
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
     
 }
 taskInput.value="";
}
)
taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
    if (event.target.classList.contains("complete")) {
        event.target.parentElement.classList.toggle("completed");  
    }
    if(event.target.innerHTML==="Complete"){
        event.target.innerHTML="Completed"
    }
    else{
        event.target.innerHTML="Complete"
    }
    });
    
    taskInput.addEventListener("keypress",function(event){
        if(event.key==="Enter"){
            submit.click();
        }
    })