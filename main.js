/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addItemPopUp.js":
/*!*****************************!*\
  !*** ./src/addItemPopUp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _addToDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToDOM */ "./src/addToDOM.js");
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItem */ "./src/toDoItem.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");





const addItemPopUp = (() => {  //module to control everything related to the forms for input on tasks and projects
    const myForm = document.getElementById('myForm');        

    const showForm = (e) => {
        document.getElementById("myProject").textContent = e.target.parentElement.id;
        myForm.style.display = "block";  
    }    
    const closeForm = () => myForm.style.display = "none";


    const clearForm = (myForm) => {
        myForm.title.value = ""; 
        myForm.description.value = ""; 
        myForm.date.value = ""
        myForm.dropdown.value = "1";
    }

    const handleFormInput = (e) => {
        const myForm = e.target.form;
        const selectedProject = document.getElementById("myProject");
        const fillError = document.querySelector(".fillError")
        
        if(myForm.title.value !== "" && myForm.description.value !== "" && myForm.date.value !== "" && myForm.dropdown.value !== ""){  //if everything is filled in 
            const myItem = (0,_toDoItem__WEBPACK_IMPORTED_MODULE_1__.default)(myForm.title.value, //creates objects for tasks
                    myForm.description.value, 
                    myForm.date.value, 
                    myForm.dropdown.value);

            myItem.myProject = selectedProject.textContent;

            const projectObj = _index__WEBPACK_IMPORTED_MODULE_2__.default.myProjectList.find(x => x.title === selectedProject.textContent); //find the associated project and store the task in its task list
            projectObj.addTask(myItem);

            _localStorageHandler__WEBPACK_IMPORTED_MODULE_3__.default.storeTask(myItem);    
            _addToDOM__WEBPACK_IMPORTED_MODULE_0__.default.displayTask(myItem);
            
            closeForm();
            fillError.style.display = "none";
            clearForm(myForm); 
        } 
        else{
            fillError.style.display = "block";
        };
    }

    return{showForm, closeForm, handleFormInput,};
})();
 
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItemPopUp);

/***/ }),

/***/ "./src/addProjectPopUp.js":
/*!********************************!*\
  !*** ./src/addProjectPopUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _addToDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToDOM */ "./src/addToDOM.js");
/* harmony import */ var _projectItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectItem */ "./src/projectItem.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");





const addProjectPopUp = (() => {
    const myForm = document.getElementById('myProjectForm');        

    const showForm = () => {
        myForm.style.display = "block";  
    }    

    const closeForm = () => myForm.style.display = "none";


    const clearForm = (myForm) => {
        myForm.title.value = ""; 
    }

    const handleFormInput = (e) => {
        const myForm = e.target.form;
        const fillError = document.querySelector(".fillErrorProject")

        if(myForm.title.value !== ""){
            const myProject = (0,_projectItem__WEBPACK_IMPORTED_MODULE_1__.default)(myForm.title.value);

            _addToDOM__WEBPACK_IMPORTED_MODULE_0__.default.displayProject(myProject);
            _index__WEBPACK_IMPORTED_MODULE_2__.default.myProjectList.push(myProject);
            _localStorageHandler__WEBPACK_IMPORTED_MODULE_3__.default.storeProject(myProject);  
            console.log(_index__WEBPACK_IMPORTED_MODULE_2__.default.myProjectList)

            fillError.style.display = "none";
            closeForm();
            clearForm(myForm); 
        } else{
            fillError.style.display = "block";
        }
    } 

    return{showForm, closeForm, handleFormInput,};
})();
 
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProjectPopUp);

/***/ }),

/***/ "./src/addToDOM.js":
/*!*************************!*\
  !*** ./src/addToDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListener */ "./src/eventListener.js");


const addToDOM = (() => { //module to control everything being displayed on the DOM

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

        _eventListener__WEBPACK_IMPORTED_MODULE_0__.default.addButtonListener(myButton);

        const deleteButton = document.createElement('div');
        deleteButton.className = "deleteProjectButton";
        deleteButton.textContent = "x";
        myProjectDiv.appendChild(deleteButton);
        
        _eventListener__WEBPACK_IMPORTED_MODULE_0__.default.addDeleteProjectListener(deleteButton);
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
        
        _eventListener__WEBPACK_IMPORTED_MODULE_0__.default.addDeleteTaskListener(deleteButton);

    }

    //const setPriorityColor = ()

    return{displayProject, displayTask,};
})();
 
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToDOM);


/***/ }),

/***/ "./src/eventListener.js":
/*!******************************!*\
  !*** ./src/eventListener.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _addItemPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addItemPopUp */ "./src/addItemPopUp.js");
/* harmony import */ var _addProjectPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjectPopUp */ "./src/addProjectPopUp.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");





const eventListener = (() => { //handles all of the event handlers for the project in 1 module. 

    const openProjectPopUpDiv = document.querySelector('.addProjectPopUp');
    openProjectPopUpDiv.addEventListener("click", _addProjectPopUp__WEBPACK_IMPORTED_MODULE_1__.default.showForm);
    
    const closeProjectPopUpDiv = document.querySelector('.closeProjectButton');        
    closeProjectPopUpDiv.addEventListener("click", _addProjectPopUp__WEBPACK_IMPORTED_MODULE_1__.default.closeForm); 

    const submitProjectDiv = document.querySelector('.addProjectButton');        
    submitProjectDiv.addEventListener("click", _addProjectPopUp__WEBPACK_IMPORTED_MODULE_1__.default.handleFormInput);

    const closePopUpDiv = document.querySelector('.closeButton');        
    closePopUpDiv.addEventListener("click", _addItemPopUp__WEBPACK_IMPORTED_MODULE_0__.default.closeForm); //import addItemPopUp.js

    const submitTaskDiv = document.querySelector('.addButton');        
    submitTaskDiv.addEventListener("click", _addItemPopUp__WEBPACK_IMPORTED_MODULE_0__.default.handleFormInput); //import addItemPopUp.js
    
    const addButtonListener = (div) => {
       div.addEventListener("click", _addItemPopUp__WEBPACK_IMPORTED_MODULE_0__.default.showForm);
    };

   const addDeleteTaskListener = (div) => {
        div.addEventListener("click", removeTask);
    }; 

    const addDeleteProjectListener = (div) => {
        div.addEventListener("click", removeProject);
    };

    return {addButtonListener, addDeleteTaskListener, addDeleteProjectListener};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListener); 

const removeTask = (event) => {
    const projectName = event.target.parentElement.parentElement.id;
    const taskName = event.target.parentElement.querySelector('.title').textContent;
    const myProject = _index__WEBPACK_IMPORTED_MODULE_2__.default.myProjectList.find(x => x.title === projectName);
    const myTask = myProject.myTaskList.find(x => x.title ===  taskName)

    myProject.removeTask(myTask); //remove from the project object

    event.target.parentElement.remove(); //remove from the HTML document

    _localStorageHandler__WEBPACK_IMPORTED_MODULE_3__.default.removeItem(myTask);
};

const removeProject = (event) => {
    const projectName = event.target.parentElement.id;
    const myProject = _index__WEBPACK_IMPORTED_MODULE_2__.default.myProjectList.find(x => x.title === projectName);
    const indexPos = _index__WEBPACK_IMPORTED_MODULE_2__.default.myProjectList.indexOf(myProject);  
        if (indexPos > -1) {
            _index__WEBPACK_IMPORTED_MODULE_2__.default.myProjectList.splice(indexPos, 1);
            event.target.parentElement.remove();
            _localStorageHandler__WEBPACK_IMPORTED_MODULE_3__.default.removeItem(myProject);
        }          
};





 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _addToDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToDOM */ "./src/addToDOM.js");
/* harmony import */ var _projectItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectItem */ "./src/projectItem.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");






const index = (() => {
    let myProjectList = []; 

    //default project
    
    const defaultProject = (0,_projectItem__WEBPACK_IMPORTED_MODULE_1__.default)("My First Project");
    _addToDOM__WEBPACK_IMPORTED_MODULE_0__.default.displayProject(defaultProject);
    myProjectList.push(defaultProject);
    _localStorageHandler__WEBPACK_IMPORTED_MODULE_2__.default.storeProject(defaultProject);
    
    
    return {myProjectList};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

_localStorageHandler__WEBPACK_IMPORTED_MODULE_2__.default.displayCurrentProjects();

/***/ }),

/***/ "./src/localStorageHandler.js":
/*!************************************!*\
  !*** ./src/localStorageHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _addToDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToDOM */ "./src/addToDOM.js");
/* harmony import */ var _projectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectItem */ "./src/projectItem.js");
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoItem */ "./src/toDoItem.js");





const localStorageHandler = (() => {

    const displayCurrentProjects = () => {
        Object.keys(localStorage).forEach( (key) => {   //goes through all items in local storage adds the projects to the myProjectList array and displays. 
           const myObj = JSON.parse(localStorage.getItem(key))
           if(!myObj.myProject){
                if(myObj.title !== "My First Project"){
                        const myProject = (0,_projectItem__WEBPACK_IMPORTED_MODULE_2__.default)(myObj.title);
                                    
                        _index__WEBPACK_IMPORTED_MODULE_0__.default.myProjectList.push(myProject);
                        _addToDOM__WEBPACK_IMPORTED_MODULE_1__.default.displayProject(myProject);
                    }
            }
        });

        Object.keys(localStorage).forEach( (key) => {   //goes through the local storage tasks and adds them to the previously added projects and displays. 
            const myObj = JSON.parse(localStorage.getItem(key))    
            if(myObj.myProject){
                const myTask = (0,_toDoItem__WEBPACK_IMPORTED_MODULE_3__.default)(myObj.title, myObj.description, myObj.dueDate, myObj.priority);
                myTask.myProject = myObj.myProject;    
                        
                const projectObj = _index__WEBPACK_IMPORTED_MODULE_0__.default.myProjectList.find(x => x.title === myTask.myProject);
                console.log(_index__WEBPACK_IMPORTED_MODULE_0__.default.myProjectList)
                projectObj.addTask(myTask);
                _addToDOM__WEBPACK_IMPORTED_MODULE_1__.default.displayTask(myTask);    
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
 

 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageHandler);



/***/ }),

/***/ "./src/projectItem.js":
/*!****************************!*\
  !*** ./src/projectItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const projectItem= ((title) => {
   let myTaskList = [];

   const addTask = (myTask) => {
        myTaskList.push(myTask);
   }
   const removeTask = (myTask) => {
        let index = myTaskList.indexOf(myTask);
        if (index > -1) {
            myTaskList.splice(index, 1);
        }    
    }

    return{title, removeTask, addTask, myTaskList};
 });
 
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectItem);

/***/ }),

/***/ "./src/toDoItem.js":
/*!*************************!*\
  !*** ./src/toDoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const toDoItem= ((title, description, dueDate, priority) => {

    let myProject = "My First Project"; //default project if none is added later

    return{title, description, dueDate, priority, myProject}
 });
 
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoItem);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZEl0ZW1Qb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFByb2plY3RQb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNBO0FBQ047QUFDMkI7O0FBRXZELDZCQUE2QjtBQUM3QixxRDs7QUFFQTtBQUNBO0FBQ0EsdUM7QUFDQSxLO0FBQ0E7OztBQUdBO0FBQ0EsZ0M7QUFDQSxzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxSUFBcUk7QUFDckksMkJBQTJCLGtEQUFRO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsOERBQXdCLCtD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QUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsNkM7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7O0FBR0QsQ0FBQyxpRUFBZSxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVEcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsRUFBRTs7QUFFRixDQUFDLGlFQUFlLFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUNoQjNCOztBQUVBLHVDQUF1Qzs7QUFFdkMsV0FBVztBQUNYLEVBQUU7O0FBRUYsQ0FBQyxpRUFBZSxRQUFRLEU7Ozs7OztVQ1B4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGRUb0RPTSBmcm9tICcuL2FkZFRvRE9NJztcbmltcG9ydCB0b0RvSXRlbSBmcm9tICcuL3RvRG9JdGVtJztcbmltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4JztcbmltcG9ydCBsb2NhbFN0b3JhZ2VIYW5kbGVyIGZyb20gJy4vbG9jYWxTdG9yYWdlSGFuZGxlcidcblxuY29uc3QgYWRkSXRlbVBvcFVwID0gKCgpID0+IHsgIC8vbW9kdWxlIHRvIGNvbnRyb2wgZXZlcnl0aGluZyByZWxhdGVkIHRvIHRoZSBmb3JtcyBmb3IgaW5wdXQgb24gdGFza3MgYW5kIHByb2plY3RzXG4gICAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpOyAgICAgICAgXG5cbiAgICBjb25zdCBzaG93Rm9ybSA9IChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlQcm9qZWN0XCIpLnRleHRDb250ZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgbXlGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcbiAgICB9ICAgIFxuICAgIGNvbnN0IGNsb3NlRm9ybSA9ICgpID0+IG15Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblxuICAgIGNvbnN0IGNsZWFyRm9ybSA9IChteUZvcm0pID0+IHtcbiAgICAgICAgbXlGb3JtLnRpdGxlLnZhbHVlID0gXCJcIjsgXG4gICAgICAgIG15Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7IFxuICAgICAgICBteUZvcm0uZGF0ZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgbXlGb3JtLmRyb3Bkb3duLnZhbHVlID0gXCIxXCI7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9ybUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgbXlGb3JtID0gZS50YXJnZXQuZm9ybTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVByb2plY3RcIik7XG4gICAgICAgIGNvbnN0IGZpbGxFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbEVycm9yXCIpXG4gICAgICAgIFxuICAgICAgICBpZihteUZvcm0udGl0bGUudmFsdWUgIT09IFwiXCIgJiYgbXlGb3JtLmRlc2NyaXB0aW9uLnZhbHVlICE9PSBcIlwiICYmIG15Rm9ybS5kYXRlLnZhbHVlICE9PSBcIlwiICYmIG15Rm9ybS5kcm9wZG93bi52YWx1ZSAhPT0gXCJcIil7ICAvL2lmIGV2ZXJ5dGhpbmcgaXMgZmlsbGVkIGluIFxuICAgICAgICAgICAgY29uc3QgbXlJdGVtID0gdG9Eb0l0ZW0obXlGb3JtLnRpdGxlLnZhbHVlLCAvL2NyZWF0ZXMgb2JqZWN0cyBmb3IgdGFza3NcbiAgICAgICAgICAgICAgICAgICAgbXlGb3JtLmRlc2NyaXB0aW9uLnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgbXlGb3JtLmRhdGUudmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICBteUZvcm0uZHJvcGRvd24udmFsdWUpO1xuXG4gICAgICAgICAgICBteUl0ZW0ubXlQcm9qZWN0ID0gc2VsZWN0ZWRQcm9qZWN0LnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0T2JqID0gaW5kZXgubXlQcm9qZWN0TGlzdC5maW5kKHggPT4geC50aXRsZSA9PT0gc2VsZWN0ZWRQcm9qZWN0LnRleHRDb250ZW50KTsgLy9maW5kIHRoZSBhc3NvY2lhdGVkIHByb2plY3QgYW5kIHN0b3JlIHRoZSB0YXNrIGluIGl0cyB0YXNrIGxpc3RcbiAgICAgICAgICAgIHByb2plY3RPYmouYWRkVGFzayhteUl0ZW0pO1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VIYW5kbGVyLnN0b3JlVGFzayhteUl0ZW0pOyAgICBcbiAgICAgICAgICAgIGFkZFRvRE9NLmRpc3BsYXlUYXNrKG15SXRlbSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgICAgICAgZmlsbEVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGNsZWFyRm9ybShteUZvcm0pOyBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGZpbGxFcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybntzaG93Rm9ybSwgY2xvc2VGb3JtLCBoYW5kbGVGb3JtSW5wdXQsfTtcbn0pKCk7XG4gXG4gZXhwb3J0IGRlZmF1bHQgYWRkSXRlbVBvcFVwOyIsImltcG9ydCBhZGRUb0RPTSBmcm9tICcuL2FkZFRvRE9NJztcbmltcG9ydCBwcm9qZWN0SXRlbSBmcm9tICcuL3Byb2plY3RJdGVtJztcbmltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4JztcbmltcG9ydCBsb2NhbFN0b3JhZ2VIYW5kbGVyIGZyb20gJy4vbG9jYWxTdG9yYWdlSGFuZGxlcic7XG5cbmNvbnN0IGFkZFByb2plY3RQb3BVcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215UHJvamVjdEZvcm0nKTsgICAgICAgIFxuXG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIG15Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgXG4gICAgfSAgICBcblxuICAgIGNvbnN0IGNsb3NlRm9ybSA9ICgpID0+IG15Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblxuICAgIGNvbnN0IGNsZWFyRm9ybSA9IChteUZvcm0pID0+IHtcbiAgICAgICAgbXlGb3JtLnRpdGxlLnZhbHVlID0gXCJcIjsgXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9ybUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgbXlGb3JtID0gZS50YXJnZXQuZm9ybTtcbiAgICAgICAgY29uc3QgZmlsbEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWxsRXJyb3JQcm9qZWN0XCIpXG5cbiAgICAgICAgaWYobXlGb3JtLnRpdGxlLnZhbHVlICE9PSBcIlwiKXtcbiAgICAgICAgICAgIGNvbnN0IG15UHJvamVjdCA9IHByb2plY3RJdGVtKG15Rm9ybS50aXRsZS52YWx1ZSk7XG5cbiAgICAgICAgICAgIGFkZFRvRE9NLmRpc3BsYXlQcm9qZWN0KG15UHJvamVjdCk7XG4gICAgICAgICAgICBpbmRleC5teVByb2plY3RMaXN0LnB1c2gobXlQcm9qZWN0KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZUhhbmRsZXIuc3RvcmVQcm9qZWN0KG15UHJvamVjdCk7ICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4Lm15UHJvamVjdExpc3QpXG5cbiAgICAgICAgICAgIGZpbGxFcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgICAgICAgIGNsZWFyRm9ybShteUZvcm0pOyBcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgZmlsbEVycm9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgcmV0dXJue3Nob3dGb3JtLCBjbG9zZUZvcm0sIGhhbmRsZUZvcm1JbnB1dCx9O1xufSkoKTtcbiBcbiBleHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0UG9wVXA7IiwiaW1wb3J0IGV2ZW50TGlzdGVuZXIgZnJvbSAnLi9ldmVudExpc3RlbmVyJztcblxuY29uc3QgYWRkVG9ET00gPSAoKCkgPT4geyAvL21vZHVsZSB0byBjb250cm9sIGV2ZXJ5dGhpbmcgYmVpbmcgZGlzcGxheWVkIG9uIHRoZSBET01cblxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKG15UHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBteVByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbXlQcm9qZWN0RGl2LmNsYXNzTmFtZSA9IFwicHJvamVjdEl0ZW1cIjtcbiAgICAgICAgbXlQcm9qZWN0RGl2LmlkID0gbXlQcm9qZWN0LnRpdGxlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtQ29udGFpbmVyXCIpLmFwcGVuZENoaWxkKG15UHJvamVjdERpdik7XG5cbiAgICAgICAgY29uc3QgbXlUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBteVRpdGxlRGl2LmNsYXNzTmFtZSA9IFwicHJvamVjdFRpdGxlXCI7XG4gICAgICAgIG15UHJvamVjdERpdi5hcHBlbmRDaGlsZChteVRpdGxlRGl2KTtcblxuICAgICAgICBteVRpdGxlRGl2LnRleHRDb250ZW50ID0gbXlQcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IG15QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG15QnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkVGFza0J1dHRvblwiO1xuICAgICAgICBteUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgICAgICBteVByb2plY3REaXYuYXBwZW5kQ2hpbGQobXlCdXR0b24pO1xuXG4gICAgICAgIGV2ZW50TGlzdGVuZXIuYWRkQnV0dG9uTGlzdGVuZXIobXlCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJkZWxldGVQcm9qZWN0QnV0dG9uXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgICAgICBteVByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIGV2ZW50TGlzdGVuZXIuYWRkRGVsZXRlUHJvamVjdExpc3RlbmVyKGRlbGV0ZUJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRhc2sgPSAobXlUYXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IG15VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgbXlUYXNrRGl2LmNsYXNzTmFtZSA9IFwidGFza0l0ZW1cIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG15UHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke215VGFzay5teVByb2plY3R9YClcblxuICAgICAgICBteVByb2plY3REaXYuYXBwZW5kQ2hpbGQobXlUYXNrRGl2KTtcbiAgICBcbiAgICAgICAgZm9yKGNvbnN0IGtleSBpbiBteVRhc2spe1xuICAgICAgICAgICAgY29uc3QgbXlEaXZOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInRpdGxlXCIgfHwga2V5ID09PSBcImRlc2NyaXB0aW9uXCIgfHwga2V5ID09PSBcImR1ZURhdGVcInx8IGtleSA9PT0gXCJwcmlvcml0eVwiKXtcbiAgICAgICAgICAgICAgICBteURpdk5vZGUuY2xhc3NOYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgIG15RGl2Tm9kZS50ZXh0Q29udGVudCA9IG15VGFza1trZXldO1xuICAgICAgICAgICAgICAgIG15VGFza0Rpdi5hcHBlbmRDaGlsZChteURpdk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZUJ1dHRvblwiO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgbXlUYXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIFxuICAgICAgICBldmVudExpc3RlbmVyLmFkZERlbGV0ZVRhc2tMaXN0ZW5lcihkZWxldGVCdXR0b24pO1xuXG4gICAgfVxuXG4gICAgLy9jb25zdCBzZXRQcmlvcml0eUNvbG9yID0gKClcblxuICAgIHJldHVybntkaXNwbGF5UHJvamVjdCwgZGlzcGxheVRhc2ssfTtcbn0pKCk7XG4gXG4gZXhwb3J0IGRlZmF1bHQgYWRkVG9ET007XG4iLCJpbXBvcnQgYWRkSXRlbVBvcFVwIGZyb20gXCIuL2FkZEl0ZW1Qb3BVcFwiO1xuaW1wb3J0IGFkZFByb2plY3RQb3BVcCBmcm9tICcuL2FkZFByb2plY3RQb3BVcCc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleCdcbmltcG9ydCBsb2NhbFN0b3JhZ2VIYW5kbGVyIGZyb20gJy4vbG9jYWxTdG9yYWdlSGFuZGxlcidcblxuY29uc3QgZXZlbnRMaXN0ZW5lciA9ICgoKSA9PiB7IC8vaGFuZGxlcyBhbGwgb2YgdGhlIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgcHJvamVjdCBpbiAxIG1vZHVsZS4gXG5cbiAgICBjb25zdCBvcGVuUHJvamVjdFBvcFVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RQb3BVcCcpO1xuICAgIG9wZW5Qcm9qZWN0UG9wVXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RQb3BVcC5zaG93Rm9ybSk7XG4gICAgXG4gICAgY29uc3QgY2xvc2VQcm9qZWN0UG9wVXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VQcm9qZWN0QnV0dG9uJyk7ICAgICAgICBcbiAgICBjbG9zZVByb2plY3RQb3BVcERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdFBvcFVwLmNsb3NlRm9ybSk7IFxuXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnV0dG9uJyk7ICAgICAgICBcbiAgICBzdWJtaXRQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0UG9wVXAuaGFuZGxlRm9ybUlucHV0KTtcblxuICAgIGNvbnN0IGNsb3NlUG9wVXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdXR0b24nKTsgICAgICAgIFxuICAgIGNsb3NlUG9wVXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEl0ZW1Qb3BVcC5jbG9zZUZvcm0pOyAvL2ltcG9ydCBhZGRJdGVtUG9wVXAuanNcblxuICAgIGNvbnN0IHN1Ym1pdFRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnV0dG9uJyk7ICAgICAgICBcbiAgICBzdWJtaXRUYXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRJdGVtUG9wVXAuaGFuZGxlRm9ybUlucHV0KTsgLy9pbXBvcnQgYWRkSXRlbVBvcFVwLmpzXG4gICAgXG4gICAgY29uc3QgYWRkQnV0dG9uTGlzdGVuZXIgPSAoZGl2KSA9PiB7XG4gICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRJdGVtUG9wVXAuc2hvd0Zvcm0pO1xuICAgIH07XG5cbiAgIGNvbnN0IGFkZERlbGV0ZVRhc2tMaXN0ZW5lciA9IChkaXYpID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUYXNrKTtcbiAgICB9OyBcblxuICAgIGNvbnN0IGFkZERlbGV0ZVByb2plY3RMaXN0ZW5lciA9IChkaXYpID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHthZGRCdXR0b25MaXN0ZW5lciwgYWRkRGVsZXRlVGFza0xpc3RlbmVyLCBhZGREZWxldGVQcm9qZWN0TGlzdGVuZXJ9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcjsgXG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgY29uc3QgdGFza05hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBteVByb2plY3QgPSBpbmRleC5teVByb2plY3RMaXN0LmZpbmQoeCA9PiB4LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgbXlUYXNrID0gbXlQcm9qZWN0Lm15VGFza0xpc3QuZmluZCh4ID0+IHgudGl0bGUgPT09ICB0YXNrTmFtZSlcblxuICAgIG15UHJvamVjdC5yZW1vdmVUYXNrKG15VGFzayk7IC8vcmVtb3ZlIGZyb20gdGhlIHByb2plY3Qgb2JqZWN0XG5cbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTsgLy9yZW1vdmUgZnJvbSB0aGUgSFRNTCBkb2N1bWVudFxuXG4gICAgbG9jYWxTdG9yYWdlSGFuZGxlci5yZW1vdmVJdGVtKG15VGFzayk7XG59O1xuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcbiAgICBjb25zdCBteVByb2plY3QgPSBpbmRleC5teVByb2plY3RMaXN0LmZpbmQoeCA9PiB4LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgaW5kZXhQb3MgPSBpbmRleC5teVByb2plY3RMaXN0LmluZGV4T2YobXlQcm9qZWN0KTsgIFxuICAgICAgICBpZiAoaW5kZXhQb3MgPiAtMSkge1xuICAgICAgICAgICAgaW5kZXgubXlQcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXhQb3MsIDEpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VIYW5kbGVyLnJlbW92ZUl0ZW0obXlQcm9qZWN0KTtcbiAgICAgICAgfSAgICAgICAgICBcbn07XG5cblxuXG5cblxuICIsIlxuaW1wb3J0IGFkZFRvRE9NIGZyb20gJy4vYWRkVG9ET00nO1xuaW1wb3J0IHByb2plY3RJdGVtIGZyb20gJy4vcHJvamVjdEl0ZW0nO1xuaW1wb3J0IGxvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSAnLi9sb2NhbFN0b3JhZ2VIYW5kbGVyJztcblxuXG5jb25zdCBpbmRleCA9ICgoKSA9PiB7XG4gICAgbGV0IG15UHJvamVjdExpc3QgPSBbXTsgXG5cbiAgICAvL2RlZmF1bHQgcHJvamVjdFxuICAgIFxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEl0ZW0oXCJNeSBGaXJzdCBQcm9qZWN0XCIpO1xuICAgIGFkZFRvRE9NLmRpc3BsYXlQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgICBteVByb2plY3RMaXN0LnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgIGxvY2FsU3RvcmFnZUhhbmRsZXIuc3RvcmVQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4ge215UHJvamVjdExpc3R9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG5cbmxvY2FsU3RvcmFnZUhhbmRsZXIuZGlzcGxheUN1cnJlbnRQcm9qZWN0cygpOyIsImltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4JztcbmltcG9ydCBhZGRUb0RPTSBmcm9tICcuL2FkZFRvRE9NJztcbmltcG9ydCBwcm9qZWN0SXRlbSBmcm9tIFwiLi9wcm9qZWN0SXRlbVwiXG5pbXBvcnQgdG9Eb0l0ZW0gZnJvbSAnLi90b0RvSXRlbSc7XG5cbmNvbnN0IGxvY2FsU3RvcmFnZUhhbmRsZXIgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgZGlzcGxheUN1cnJlbnRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKCAoa2V5KSA9PiB7ICAgLy9nb2VzIHRocm91Z2ggYWxsIGl0ZW1zIGluIGxvY2FsIHN0b3JhZ2UgYWRkcyB0aGUgcHJvamVjdHMgdG8gdGhlIG15UHJvamVjdExpc3QgYXJyYXkgYW5kIGRpc3BsYXlzLiBcbiAgICAgICAgICAgY29uc3QgbXlPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgICAgICAgIGlmKCFteU9iai5teVByb2plY3Qpe1xuICAgICAgICAgICAgICAgIGlmKG15T2JqLnRpdGxlICE9PSBcIk15IEZpcnN0IFByb2plY3RcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBteVByb2plY3QgPSBwcm9qZWN0SXRlbShteU9iai50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Lm15UHJvamVjdExpc3QucHVzaChteVByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9ET00uZGlzcGxheVByb2plY3QobXlQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goIChrZXkpID0+IHsgICAvL2dvZXMgdGhyb3VnaCB0aGUgbG9jYWwgc3RvcmFnZSB0YXNrcyBhbmQgYWRkcyB0aGVtIHRvIHRoZSBwcmV2aW91c2x5IGFkZGVkIHByb2plY3RzIGFuZCBkaXNwbGF5cy4gXG4gICAgICAgICAgICBjb25zdCBteU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgICAgXG4gICAgICAgICAgICBpZihteU9iai5teVByb2plY3Qpe1xuICAgICAgICAgICAgICAgIGNvbnN0IG15VGFzayA9IHRvRG9JdGVtKG15T2JqLnRpdGxlLCBteU9iai5kZXNjcmlwdGlvbiwgbXlPYmouZHVlRGF0ZSwgbXlPYmoucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIG15VGFzay5teVByb2plY3QgPSBteU9iai5teVByb2plY3Q7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE9iaiA9IGluZGV4Lm15UHJvamVjdExpc3QuZmluZCh4ID0+IHgudGl0bGUgPT09IG15VGFzay5teVByb2plY3QpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4Lm15UHJvamVjdExpc3QpXG4gICAgICAgICAgICAgICAgcHJvamVjdE9iai5hZGRUYXNrKG15VGFzayk7XG4gICAgICAgICAgICAgICAgYWRkVG9ET00uZGlzcGxheVRhc2sobXlUYXNrKTsgICAgXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVQcm9qZWN0PSAobXlPYmopID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTWF0aC5yYW5kb20oKSxKU09OLnN0cmluZ2lmeShteU9iaikpXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVUYXNrPSAobXlPYmopID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTWF0aC5yYW5kb20oKSxKU09OLnN0cmluZ2lmeShteU9iaikpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0ID0gKG15T2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk15QXJyYXlcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChteU9iaikgPT4geyAgXG4gICAgICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCggKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXlKU09OID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobXlPYmoudGl0bGUgKyBcIiBoZWxsbyAgXCIgKyBteUpTT04udGl0bGUpXG4gICAgICAgICAgICBpZihteU9iai50aXRsZSA9PT0gbXlKU09OLnRpdGxlKXsgIC8vZGVsZXRlcyBpdGVtcyBmcm9tIGxvY2FsIHN0b3JhZ2UgYnkgbWF0Y2hpbmcgdGhlIHRpdGxlLiBXaWxsIG5lZWQgdG8gYWRkcmVzcyBidWdzIHJlbGF0ZWQgdG8gdGFza3Mgd2l0aCBzYW1lIG5hbWUgISBcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpOyAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0b3JlUHJvamVjdCwgc3RvcmVUYXNrLCBnZXQsIGRpc3BsYXlDdXJyZW50UHJvamVjdHMsIHJlbW92ZUl0ZW19O1xufSkoKTtcbiBcblxuIGV4cG9ydCBkZWZhdWx0IGxvY2FsU3RvcmFnZUhhbmRsZXI7XG5cbiIsImNvbnN0IHByb2plY3RJdGVtPSAoKHRpdGxlKSA9PiB7XG4gICBsZXQgbXlUYXNrTGlzdCA9IFtdO1xuXG4gICBjb25zdCBhZGRUYXNrID0gKG15VGFzaykgPT4ge1xuICAgICAgICBteVRhc2tMaXN0LnB1c2gobXlUYXNrKTtcbiAgIH1cbiAgIGNvbnN0IHJlbW92ZVRhc2sgPSAobXlUYXNrKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IG15VGFza0xpc3QuaW5kZXhPZihteVRhc2spO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgbXlUYXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHJldHVybnt0aXRsZSwgcmVtb3ZlVGFzaywgYWRkVGFzaywgbXlUYXNrTGlzdH07XG4gfSk7XG4gXG4gZXhwb3J0IGRlZmF1bHQgcHJvamVjdEl0ZW07IiwiY29uc3QgdG9Eb0l0ZW09ICgodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuXG4gICAgbGV0IG15UHJvamVjdCA9IFwiTXkgRmlyc3QgUHJvamVjdFwiOyAvL2RlZmF1bHQgcHJvamVjdCBpZiBub25lIGlzIGFkZGVkIGxhdGVyXG5cbiAgICByZXR1cm57dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbXlQcm9qZWN0fVxuIH0pO1xuIFxuIGV4cG9ydCBkZWZhdWx0IHRvRG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=