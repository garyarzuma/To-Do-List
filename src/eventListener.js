import addItemPopUp from "./addItemPopUp";
import addProjectPopUp from './addProjectPopUp';

const eventListener = (() => {

    const openProjectPopUpDiv = document.querySelector('.addProjectPopUp');
    openProjectPopUpDiv.addEventListener("click", addProjectPopUp.showForm);
    
    const closeProjectPopUpDiv = document.querySelector('.closeProjectButton');        
    closeProjectPopUpDiv.addEventListener("click", addProjectPopUp.closeForm); 

    const submitProjectDiv = document.querySelector('.addProjectButton');        
    submitProjectDiv.addEventListener("click", addProjectPopUp.handleFormInput);

    const closePopUpDiv = document.querySelector('.closeButton');        
    closePopUpDiv.addEventListener("click", addItemPopUp.closeForm); //import addItemPopUp.js

    const submitTaskDiv = document.querySelector('.addButton');        
    submitTaskDiv.addEventListener("click", addItemPopUp.handleFormInput); //import addItemPopUp.js
    
   const addButtonListener = (div) => {
       div.addEventListener("click", addItemPopUp.showForm);
    };

    return {addButtonListener};
})();
 
 export default eventListener;




 