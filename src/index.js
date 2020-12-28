
import addToDOM from './addToDOM';
import toDoItem from './toDoItem';
import projectItem from './projectItem';
import addItemPopUp from './addItemPopUp';
import addProjectPopUp from './addProjectPopUp';
import localStorageHandler from './localStorageHandler';


const index = (() => {
    let myProjectList = []; 

    //default project
    
    const defaultProject = projectItem("My First Project");
    addToDOM.displayProject(defaultProject);
    myProjectList.push(defaultProject);
    localStorageHandler.storeProject(defaultProject);
    
    
    return {myProjectList};
})();

export default index;

localStorageHandler.displayCurrentProjects();