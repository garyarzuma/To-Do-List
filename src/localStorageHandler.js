import index from './index';
import addToDOM from './addToDOM';
import projectItem from "./projectItem"
import toDoItem from './toDoItem';

const localStorageHandler = (() => {

    const displayCurrentProjects = () => {
        Object.keys(localStorage).forEach( (key) => {   //goes through all items in local storage adds the projects to the myProjectList array and displays. 
           const myObj = JSON.parse(localStorage.getItem(key))
           if(!myObj.myProject){
                if(myObj.title !== "My First Project"){
                        const myProject = projectItem(myObj.title);
                                    
                        index.myProjectList.push(myProject);
                        addToDOM.displayProject(myProject);
                    }
            }
        });

        Object.keys(localStorage).forEach( (key) => {   //goes through the local storage tasks and adds them to the previously added projects and displays. 
            const myObj = JSON.parse(localStorage.getItem(key))    
            if(myObj.myProject){
                const myTask = toDoItem(myObj.title, myObj.description, myObj.dueDate, myObj.priority);
                myTask.myProject = myObj.myProject;    
                        
                const projectObj = index.myProjectList.find(x => x.title === myTask.myProject);
                console.log(index.myProjectList)
                projectObj.addTask(myTask);
                addToDOM.displayTask(myTask);    
            }    
         });
    }

    const storeProject= (myObj) => {
        localStorage.setItem(Math.random(),JSON.stringify(myObj))
    }

    const storeTask= (myObj) => {
        localStorage.setItem(Math.random(),JSON.stringify(myObj))
    }

    const get = (myObj) => {
        return localStorage.getItem("MyArray");
    }

    const removeItem = (myObj) => {  
        Object.keys(localStorage).forEach( (key) => {
            const myJSON = JSON.parse(localStorage.getItem(key))
            console.log(myObj.title + " hello  " + myJSON.title)
            if(myObj.title === myJSON.title){  //deletes items from local storage by matching the title. Will need to address bugs related to tasks with same name ! 
                localStorage.removeItem(key);        
            }
         });
    }

    return {storeProject, storeTask, get, displayCurrentProjects, removeItem};
})();
 

 export default localStorageHandler;

