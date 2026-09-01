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
     <button class="delete">Delete</button><br>
     </div>`
     
 }
 taskInput.value="";
}
)
taskList.addEventListener("click",function(event){
    if(event.target.classList.contains("delete")){
         event.target.parentElement.remove();
    }
})