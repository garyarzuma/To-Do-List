import toDoItem from './toDoItem';
import projectItem from './projectItem';
import addItemPopUp from './addItemPopUp';

const index = (() => {
    const testItem = toDoItem("Study", "study for exam", '10/22/2019', 5);
    
    const defaultProject = projectItem("My First Project");
    console.log(defaultProject);
    
    
})();