// ****** SELECT ITEMS **********
var input = document.querySelector("#grocery")
var submitbtn = document.querySelector(".submit-btn")
var grocerylist = document.querySelector(".grocery-list")
var grocerycontainer = document.querySelector(".grocery-container")

// edit option

// ****** EVENT LISTENERS **********
submitbtn.addEventListener("click",Add)

// ****** FUNCTIONS **********
function Add(e) {
    e.preventDefault();
    
    if(input.value===""){
        return 0
    }
    grocerycontainer.classList.add("show-container")
   

    input.value = ""
}



// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
