import addToDOM from './addToDOM';
import toDoItem from './toDoItem';
import index from './index';
import localStorageHandler from './localStorageHandler'

const addItemPopUp = (() => {  //module to control everything related to the forms for input on tasks and projects
    const myForm = document.getElementById('myForm');        

    const showForm = (e) => {
        document.getElementById("myProject").textContent = e.target.parentElement.id;
        myForm.style.display = "block";  
    }    
    const closeForm = () => myForm.style.display = "none";


    const clearForm = (myForm) => {
        myForm.title.value = ""; 
        myForm.description.value = ""; 
        myForm.date.value = ""
        myForm.dropdown.value = "1";
    }

    const handleFormInput = (e) => {
        const myForm = e.target.form;
        const selectedProject = document.getElementById("myProject");
        const fillError = document.querySelector(".fillError")
        
        if(myForm.title.value !== "" && myForm.description.value !== "" && myForm.date.value !== "" && myForm.dropdown.value !== ""){  //if everything is filled in 
            const myItem = toDoItem(myForm.title.value, //creates objects for tasks
                    myForm.description.value, 
                    myForm.date.value, 
                    myForm.dropdown.value);

            myItem.myProject = selectedProject.textContent;

            const projectObj = index.myProjectList.find(x => x.title === selectedProject.textContent); //find the associated project and store the task in its task list
            projectObj.addTask(myItem);

            localStorageHandler.storeTask(myItem);    
            addToDOM.displayTask(myItem);
            
            closeForm();
            fillError.style.display = "none";
            clearForm(myForm); 
        } 
        else{
            fillError.style.display = "block";
        };
    }

    return{showForm, closeForm, handleFormInput,};
})();
 
 export default addItemPopUp;