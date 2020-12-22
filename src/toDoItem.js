const toDoItem= ((title, description, dueDate, priority) => {
    const text = function() {
        console.log(title)
    };
    return{title, description, dueDate, priority, text}
 });
 
 export default toDoItem;