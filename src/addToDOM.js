import eventListener from './eventListener';

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
        myButton.textContent = "+ Task";
        myProjectDiv.appendChild(myButton);

        eventListener.addButtonListener(myButton);
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
    }

    return{displayProject, displayTask};
})();
 
 export default addToDOM;
