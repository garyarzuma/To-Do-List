const projectItem= ((title) => {
   let myTaskList = [];

   const addTask = (myTask) => {
        myTaskList.push(myTask);
   }
   const removeTask = (myTask) => {
        let index = myTaskList.indexOf(myTask);
        if (index > -1) {
            myTaskList.splice(index, 1);
        }    
    }

    return{title, removeTask, addTask, myTaskList};
 });
 
 export default projectItem;