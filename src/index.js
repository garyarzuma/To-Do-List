import addToDOM from './addToDOM';
import toDoItem from './toDoItem';
import projectItem from './projectItem';
import addItemPopUp from './addItemPopUp';
import addProjectPopUp from './addProjectPopUp';
import eventListener from './eventListener';


const index = (() => {
    
    let myProjectList = [];

    const defaultProject = projectItem("My First Project");
    addToDOM.displayProject(defaultProject);

    myProjectList.push(defaultProject);

    return {myProjectList};
})();

export default index;