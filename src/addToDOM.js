import eventListener from './eventListener';
import projectItem from './projectItem';

const addToDOM = (() => {
    
    const displayProject = (myProject) => {
        const myProjectDiv = document.createElement('div');
        myProjectDiv.className = "projectItem";
        myProjectDiv.id = myProject.title;
        document.querySelector(".project-Container").appendChild(myProjectDiv);

        const myTitleDiv = document.createElement('div');
        myTitleDiv.className = "projectTitle";
        myProjectDiv.appendChild(myTitleDiv);

        myTitleDiv.textContent = myProject.title;

        const myButton = document.createElement('button');
        myButton.className = "addTaskButton";
        myButton.textContent = "+";
        myProjectDiv.appendChild(myButton);

        eventListener.addButtonListener(myButton);

        const deleteButton = document.createElement('div');
        deleteButton.className = "deleteProjectButton";
        deleteButton.textContent = "x";
        myProjectDiv.appendChild(deleteButton);
        
        eventListener.addDeleteProjectListener(deleteButton);
    }


    const displayTask = (myTask) => {
        const myTaskDiv = document.createElement('div');
        
        myTaskDiv.className = "taskItem";
        
        const myProjectDiv = document.getElementById(`${myTask.myProject}`)

        myProjectDiv.appendChild(myTaskDiv);
    
        for(const key in myTask){
            const myDivNode = document.createElement('div');
            if (key === "title" || key === "description" || key === "dueDate"|| key === "priority"){
                myDivNode.className = key;
                myDivNode.textContent = myTask[key];
                myTaskDiv.appendChild(myDivNode);
            }
        }

        const deleteButton = document.createElement('div');
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "x";
        myTaskDiv.appendChild(deleteButton);
        
        eventListener.addDeleteTaskListener(deleteButton);

    }

    //const setPriorityColor = ()

    return{displayProject, displayTask};
})();
 
 export default addToDOM;
