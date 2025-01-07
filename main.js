let pendingTask=0
let completeTask=0
document.getElementById('welcomeMessage').innerText=`Welcome dear, You have ${completeTask} completed task and ${pendingTask} pending task`
//add item//
let itemId=''
let itemIdCounter=1
function addItemFn(t){
    itemId=`myItem${itemIdCounter}`
    itemIdCounter++
    let addItemFlag=((t.parentNode.childElementCount)-1)
    if(addItemFlag>4){
        alert('No more spaces here to add more ideas!')
    }else{
        const addNewItem=document.createElement('div')
        addNewItem.classList.add('boardItem')
        addNewItem.setAttribute('draggable','true')
        addNewItem.setAttribute('ondragstart','drag(event)')
        addNewItem.setAttribute('id',itemId)
        addNewItem.innerHTML='<div><svg id="tickIcon" style="display:none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div><textarea maxlength="50" spellcheck="false" name="" id="item"></textarea><div><svg id="removeItemBtn" onclick="removeItem(this)"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg><svg id="doneItemBtn" onclick=doneItem(this) xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg><svg id="redoItemBtn" onclick="redoItem(this)" style="display:none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg></div>'
        t.parentNode.insertBefore(addNewItem, t.parentNode.children[(t.parentNode.lastChild)-1])
        addItemFlag++ 
        pendingTask++
        document.getElementById('welcomeMessage').innerText=`You have ${completeTask} completed task and ${pendingTask} pending task`
    }
}



//add item//

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id)
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev.dataTransfer)
    ev.target.appendChild(document.getElementById(data));
}
  

//remove item//
function removeItem(t){
    t.parentNode.parentNode.remove()
}
//remove item//

//done item//
function doneItem(t){
    completeTask++
    pendingTask--
    document.getElementById('welcomeMessage').innerText=`You have ${completeTask} completed task and ${pendingTask} pending task`
    t.parentNode.parentNode.classList.add("doneItem")
    t.style.display="none"
    t.nextElementSibling.style.display="block"
    t.parentNode.parentNode.children[0].children[0].style.display="inline"
    t.parentNode.parentNode.children[0].children[0].style.color="green"
}
//done item//

//redo item//
function redoItem(t){
    completeTask--
    pendingTask++
    document.getElementById('welcomeMessage').innerText=`You have ${completeTask} completed task and ${pendingTask} pending task`
    t.parentNode.parentNode.classList.remove("doneItem")
    t.style.display="none"
    t.previousElementSibling.style.display="block"
    t.parentNode.parentNode.children[0].children[0].style.display="none"
    t.parentNode.parentNode.children[0].children[0].style.color="green"
}

//redo item//

//list Name//
function listNameEdit(t){
    t.innerText=prompt("enter your favourite name for this list")
}
//list Name//

//add list///
let addListFlag=0
function addListFn(){
    if(addListFlag>3){
        alert('No more spaces here to add more lists!')
        document.getElementById('boardArea').style.justifyContent="center"
    }else{
        const addNewList=document.createElement('div')
        addNewList.classList.add('boardList')
        addNewList.setAttribute("ondragover","allowDrop(event)")
        addNewList.setAttribute('ondrop','drop(event)')
        addNewList.innerHTML='<h2 id="listName" onclick="listNameEdit(this)">Click here to name the list</h2><button onclick="addItemFn(this)"><svg id="addItemBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>Add a card</button></div>'
        document.getElementById('boardArea').appendChild(addNewList)
        addListFlag++
    }
}
//add list///
