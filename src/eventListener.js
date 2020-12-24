import addItemPopUp from "./addItemPopUp";

const eventListener = (() => {
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