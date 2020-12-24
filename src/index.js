import addToDOM from './addToDOM';
import toDoItem from './toDoItem';
import projectItem from './projectItem';
import addItemPopUp from './addItemPopUp';
import eventListener from './eventListener';

const index = (() => {
    const testItem = toDoItem("Study", "study for exam", '10/22/2019', 5);
    
    const defaultProject = projectItem("My First Project");
    const newProject = projectItem("My new Project");
    
    newProject.addTask(testItem);
    console.log(newProject)

    const testItem2 = toDoItem("grand", "old ivery", '10/22/2019', 5);

    newProject.addTask(testItem2);
    console.log(newProject)

    newProject.removeTask(testItem);
    console.log(newProject)

    newProject.removeTask(testItem2);
    console.log(newProject)
    
    addToDOM.displayProject(newProject);
    addToDOM.displayProject(defaultProject);

    addToDOM.displayTask(testItem);

    testItem2.myProject = newProject.title;    
    addToDOM.displayTask(testItem2);
})();