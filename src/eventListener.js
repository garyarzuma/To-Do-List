import addItemPopUp from "./addItemPopUp";
import addProjectPopUp from './addProjectPopUp';
import index from './index'
import localStorageHandler from './localStorageHandler'

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

   const addDeleteTaskListener = (div) => {
        div.addEventListener("click", removeTask);
    }; 

    const addDeleteProjectListener = (div) => {
        div.addEventListener("click", removeProject);
    };

    return {addButtonListener, addDeleteTaskListener, addDeleteProjectListener};
})();

export default eventListener; 

const removeTask = (event) => {
    const projectName = event.target.parentElement.parentElement.id;
    const taskName = event.target.parentElement.querySelector('.title').textContent;
    const myProject = index.myProjectList.find(x => x.title === projectName);
    const myTask = myProject.myTaskList.find(x => x.title ===  taskName)

    myProject.removeTask(myTask); //remove from the project object

    event.target.parentElement.remove(); //remove from the HTML document

    localStorageHandler.removeItem(myTask);
};

const removeProject = (event) => {
    const projectName = event.target.parentElement.id;
    const myProject = index.myProjectList.find(x => x.title === projectName);
    const indexPos = index.myProjectList.indexOf(myProject);  
        if (indexPos > -1) {
            index.myProjectList.splice(indexPos, 1);
            event.target.parentElement.remove();
            localStorageHandler.removeItem(myProject);
        }          
};





 