import addToDOM from './addToDOM';
import projectItem from './projectItem';

const addProjectPopUp = (() => {
    const myForm = document.getElementById('myProjectForm');        

    const showForm = () => {
        myForm.style.display = "block";  
    }    

    const closeForm = () => myForm.style.display = "none";


    const clearForm = (myForm) => {
        myForm.title.value = ""; 
        myForm.description.value = ""; 
    }

    const handleFormInput = (e) => {
        const myForm = e.target.form;

        const myProject = projectItem(myForm.title.value, 
                myForm.description.value);

       // JSON.parse(selectedProject.textContent).addTask(myItem); need to add array that holds projects

        addToDOM.displayProject(myProject);

        closeForm();
        clearForm(myForm); 
       
    } 

    return{showForm, closeForm, handleFormInput,};
})();
 
 export default addProjectPopUp;