// ****** SELECT ITEMS **********
var alertElement = document.querySelector(".alert")
var form = document.querySelector(".grocery-form")
var input = document.querySelector("#grocery")
var submitbtn = document.querySelector(".submit-btn")
var clearbtn = document.querySelector(".clear-btn")
var grocerylist = document.querySelector(".grocery-list")
var grocerycontainer = document.querySelector(".grocery-container")
// edit option
let editCheck = false;
// ****** EVENT LISTENERS **********
form.addEventListener("submit",Add)

// ****** FUNCTIONS **********
function Add(e) {
    e.preventDefault();
    const id = 'id' + (new Date()).getTime();
    if(!input.value && !editCheck){
        showAlert("danger","Please enter some value")
    }else if(!input.value && editCheck){
        //delete the item
    }else if(input.value && !editCheck){
        //add the item
        showAlert("success","Item added");
        grocerycontainer.classList.add("show-container")
        var article = document.createElement("article")
        article.classList.add("grocery-item")
        const itemId = document.createAttribute("dataId")
        itemId.value = id
        article.setAttributeNode(itemId)
        article.innerHTML = 
        `<p class="title">${input.value}</p>
        <div class='btn-container'>
        <button class='edit-btn'><i class="fa-solid fa-pen-to-square"></i></button>
        <button class='delete-btn' id="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `
        
        var items = document.getElementsByClassName("grocery-item")
        grocerylist.insertBefore(article,items[0])

        var deletebtn = document.getElementById('delete-btn')
        deletebtn.addEventListener('click', deleteItem(article,grocerylist))
    }else{
        //edit the item because edit check is true
    }

    setToDefault()
}


function showAlert(status, message){
    alertElement.classList.add(`alert-${status}`)
        alertElement.innerText = message
        setTimeout(() => {
            alertElement.innerText = "";
            alertElement.classList.remove(`alert-${status}`)}
            ,2000)
}

function setToDefault(){
    input.value = ""
}

function deleteItem(article,grocerylist){
    grocerylist.remove(article)
    console.log("delete");
}


// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
