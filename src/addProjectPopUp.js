import addToDOM from './addToDOM';
import projectItem from './projectItem';
import index from './index';
import localStorageHandler from './localStorageHandler';

const addProjectPopUp = (() => {
    const myForm = document.getElementById('myProjectForm');        

    const showForm = () => {
        myForm.style.display = "block";  
    }    

    const closeForm = () => myForm.style.display = "none";


    const clearForm = (myForm) => {
        myForm.title.value = ""; 
    }

    const handleFormInput = (e) => {
        const myForm = e.target.form;
        const fillError = document.querySelector(".fillErrorProject")

        if(myForm.title.value !== ""){
            const myProject = projectItem(myForm.title.value);

            addToDOM.displayProject(myProject);
            index.myProjectList.push(myProject);
            localStorageHandler.storeProject(myProject);  
            console.log(index.myProjectList)

            fillError.style.display = "none";
            closeForm();
            clearForm(myForm); 
        } else{
            fillError.style.display = "block";
        }
    } 

    return{showForm, closeForm, handleFormInput,};
})();
 
 export default addProjectPopUp;