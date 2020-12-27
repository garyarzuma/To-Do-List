import addToDOM from './addToDOM';
import toDoItem from './toDoItem';
import index from './index';

const addItemPopUp = (() => {
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
        
        if(myForm.title.value !== "" && myForm.description.value !== "" && myForm.date.value !== "" && myForm.dropdown.value !== ""){
            const myItem = toDoItem(myForm.title.value, 
                    myForm.description.value, 
                    myForm.date.value, 
                    myForm.dropdown.value);

            myItem.myProject = selectedProject.textContent;

            const projectObj = index.myProjectList.find(x => x.title === selectedProject.textContent);
            projectObj.addTask(myItem);

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