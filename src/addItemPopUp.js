import toDoItem from './toDoItem';

const addItemPopUp = (() => {
    const myForm = document.getElementById('myForm');        

    const showForm = () => myForm.style.display = "block";  
    const closeForm = () => myForm.style.display = "none";


    const handleFormInput = (e) => {
        const myForm = e.target.form;
    
       const myItem = toDoItem(myForm.title.value, 
                myForm.description.value, 
                myForm.date.value, 
                myForm.dropdown.value);

       
        closeForm();
        //clearForm(myForm);
        
    }

    const clearForm = (myForm) => {
        
        myForm.title.value = ""; 
        myForm.description.value = ""; 
        myForm.date.value = ""
        myForm.dropdown.value = "1";
    
    }

    return{showForm, closeForm, handleFormInput,};
})();
 
 export default addItemPopUp;