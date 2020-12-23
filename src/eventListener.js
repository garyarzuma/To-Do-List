import addItemPopUp from "./addItemPopUp";

const eventListener = (() => {
    //+Task button event listener
    const addTaskButtonDiv = document.querySelector('.addTaskButton');        
    addTaskButtonDiv.addEventListener("click", addItemPopUp.showForm); //import addItemPopUp.js

    const closePopUpDiv = document.querySelector('.closeButton');        
    closePopUpDiv.addEventListener("click", addItemPopUp.closeForm); //import addItemPopUp.js

    const submitTaskDiv = document.querySelector('.addButton');        
    submitTaskDiv.addEventListener("click", addItemPopUp.handleFormInput); //import addItemPopUp.js
    
})();
 
 export default eventListener;