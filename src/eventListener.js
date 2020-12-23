import addItemPopUp from "./addItemPopUp";

const eventListener = (() => {
    //+Task button event listener
    const addTaskButtonDiv = document.querySelector('.addTaskButton');        
    addTaskButtonDiv.addEventListener("click", addItemPopUp.showForm); //import addItemPopUp.js
    
})();
 
 export default eventListener;