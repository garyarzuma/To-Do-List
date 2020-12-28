const toDoItem= ((title, description, dueDate, priority) => {

    let myProject = "My First Project"; //default project if none is added later

    return{title, description, dueDate, priority, myProject}
 });
 
 export default toDoItem;