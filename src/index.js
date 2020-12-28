
import addToDOM from './addToDOM';
import projectItem from './projectItem';
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