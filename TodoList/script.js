const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must add something !");
    }
    else{
        let li = document.createElement("li"); //creating element with tag name "li" & storing in li variable
        li.innerHTML = inputBox.value;//whatever we write in inputbox it will be added in li
        listContainer.appendChild(li);//li should added it listContainer
        // this li will display in listContainer

        //adding cross after adding text to remove it
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//cross
        li.appendChild(span);
    }
    inputBox.value = "";//to clear the input field after adding note or text
    saveData() 
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){ //this will remove the li element 
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();