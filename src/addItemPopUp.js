const addItemPopUp = (() => {
    const myForm = document.getElementById('myForm');        
        console.log(myForm);

    const showForm = () => myForm.style.display = "block";  
    const closeForm = () => myForm.style.display = "none";

    const test = 50;
    return{showForm, closeForm};
})();
 
 export default addItemPopUp;