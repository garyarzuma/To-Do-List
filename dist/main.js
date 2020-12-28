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





const addItemPopUp = (() => {
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
        
        if(myForm.title.value !== "" && myForm.description.value !== "" && myForm.date.value !== "" && myForm.dropdown.value !== ""){
            const myItem = (0,_toDoItem__WEBPACK_IMPORTED_MODULE_1__.default)(myForm.title.value, 
                    myForm.description.value, 
                    myForm.date.value, 
                    myForm.dropdown.value);

            myItem.myProject = selectedProject.textContent;

            const projectObj = _index__WEBPACK_IMPORTED_MODULE_2__.default.myProjectList.find(x => x.title === selectedProject.textContent);
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
/* harmony import */ var _projectItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectItem */ "./src/projectItem.js");



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





const eventListener = (() => {

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
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItem */ "./src/toDoItem.js");
/* harmony import */ var _projectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectItem */ "./src/projectItem.js");
/* harmony import */ var _addItemPopUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addItemPopUp */ "./src/addItemPopUp.js");
/* harmony import */ var _addProjectPopUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addProjectPopUp */ "./src/addProjectPopUp.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");









const index = (() => {
    let myProjectList = []; 

    //default project
    
    const defaultProject = (0,_projectItem__WEBPACK_IMPORTED_MODULE_2__.default)("My First Project");
    _addToDOM__WEBPACK_IMPORTED_MODULE_0__.default.displayProject(defaultProject);
    myProjectList.push(defaultProject);
    _localStorageHandler__WEBPACK_IMPORTED_MODULE_5__.default.storeProject(defaultProject);
    
    
    return {myProjectList};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

_localStorageHandler__WEBPACK_IMPORTED_MODULE_5__.default.displayCurrentProjects();

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
        Object.keys(localStorage).forEach( (key) => {
           const myObj = JSON.parse(localStorage.getItem(key))
           if(!myObj.myProject){
                if(myObj.title !== "My First Project"){
                        const myProject = (0,_projectItem__WEBPACK_IMPORTED_MODULE_2__.default)(myObj.title);
                                    
                        _index__WEBPACK_IMPORTED_MODULE_0__.default.myProjectList.push(myProject);
                        _addToDOM__WEBPACK_IMPORTED_MODULE_1__.default.displayProject(myProject);
                    }
            }
        });

        Object.keys(localStorage).forEach( (key) => {
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
            if(myObj.title === myJSON.title){
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

    let myProject = "My First Project";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZEl0ZW1Qb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFByb2plY3RQb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNBO0FBQ047QUFDMkI7O0FBRXZEO0FBQ0EscUQ7O0FBRUE7QUFDQTtBQUNBLHVDO0FBQ0EsSztBQUNBOzs7QUFHQTtBQUNBLGdDO0FBQ0Esc0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsa0RBQVE7QUFDbkM7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtCQUErQiw4REFBd0I7QUFDdkQ7O0FBRUEsWUFBWSxt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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkM7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7O0FBR0QsQ0FBQyxpRUFBZSxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVEcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsRUFBRTs7QUFFRixDQUFDLGlFQUFlLFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUNoQjNCOztBQUVBOztBQUVBLFdBQVc7QUFDWCxFQUFFOztBQUVGLENBQUMsaUVBQWUsUUFBUSxFOzs7Ozs7VUNQeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkVG9ET00gZnJvbSAnLi9hZGRUb0RPTSc7XG5pbXBvcnQgdG9Eb0l0ZW0gZnJvbSAnLi90b0RvSXRlbSc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlSGFuZGxlciBmcm9tICcuL2xvY2FsU3RvcmFnZUhhbmRsZXInXG5cbmNvbnN0IGFkZEl0ZW1Qb3BVcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpOyAgICAgICAgXG5cbiAgICBjb25zdCBzaG93Rm9ybSA9IChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlQcm9qZWN0XCIpLnRleHRDb250ZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgbXlGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcbiAgICB9ICAgIFxuICAgIGNvbnN0IGNsb3NlRm9ybSA9ICgpID0+IG15Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblxuICAgIGNvbnN0IGNsZWFyRm9ybSA9IChteUZvcm0pID0+IHtcbiAgICAgICAgbXlGb3JtLnRpdGxlLnZhbHVlID0gXCJcIjsgXG4gICAgICAgIG15Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7IFxuICAgICAgICBteUZvcm0uZGF0ZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgbXlGb3JtLmRyb3Bkb3duLnZhbHVlID0gXCIxXCI7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9ybUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgbXlGb3JtID0gZS50YXJnZXQuZm9ybTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVByb2plY3RcIik7XG4gICAgICAgIGNvbnN0IGZpbGxFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbEVycm9yXCIpXG4gICAgICAgIFxuICAgICAgICBpZihteUZvcm0udGl0bGUudmFsdWUgIT09IFwiXCIgJiYgbXlGb3JtLmRlc2NyaXB0aW9uLnZhbHVlICE9PSBcIlwiICYmIG15Rm9ybS5kYXRlLnZhbHVlICE9PSBcIlwiICYmIG15Rm9ybS5kcm9wZG93bi52YWx1ZSAhPT0gXCJcIil7XG4gICAgICAgICAgICBjb25zdCBteUl0ZW0gPSB0b0RvSXRlbShteUZvcm0udGl0bGUudmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICBteUZvcm0uZGVzY3JpcHRpb24udmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICBteUZvcm0uZGF0ZS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICAgIG15Rm9ybS5kcm9wZG93bi52YWx1ZSk7XG5cbiAgICAgICAgICAgIG15SXRlbS5teVByb2plY3QgPSBzZWxlY3RlZFByb2plY3QudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPYmogPSBpbmRleC5teVByb2plY3RMaXN0LmZpbmQoeCA9PiB4LnRpdGxlID09PSBzZWxlY3RlZFByb2plY3QudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgcHJvamVjdE9iai5hZGRUYXNrKG15SXRlbSk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZUhhbmRsZXIuc3RvcmVUYXNrKG15SXRlbSk7ICAgIFxuICAgICAgICAgICAgYWRkVG9ET00uZGlzcGxheVRhc2sobXlJdGVtKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgICAgICAgICBmaWxsRXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgY2xlYXJGb3JtKG15Rm9ybSk7IFxuICAgICAgICB9IFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZmlsbEVycm9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJue3Nob3dGb3JtLCBjbG9zZUZvcm0sIGhhbmRsZUZvcm1JbnB1dCx9O1xufSkoKTtcbiBcbiBleHBvcnQgZGVmYXVsdCBhZGRJdGVtUG9wVXA7IiwiaW1wb3J0IGFkZFRvRE9NIGZyb20gJy4vYWRkVG9ET00nO1xuaW1wb3J0IHByb2plY3RJdGVtIGZyb20gJy4vcHJvamVjdEl0ZW0nO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IGxvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSAnLi9sb2NhbFN0b3JhZ2VIYW5kbGVyJztcblxuY29uc3QgYWRkUHJvamVjdFBvcFVwID0gKCgpID0+IHtcbiAgICBjb25zdCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlQcm9qZWN0Rm9ybScpOyAgICAgICAgXG5cbiAgICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgbXlGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcbiAgICB9ICAgIFxuXG4gICAgY29uc3QgY2xvc2VGb3JtID0gKCkgPT4gbXlGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXG4gICAgY29uc3QgY2xlYXJGb3JtID0gKG15Rm9ybSkgPT4ge1xuICAgICAgICBteUZvcm0udGl0bGUudmFsdWUgPSBcIlwiOyBcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVGb3JtSW5wdXQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBteUZvcm0gPSBlLnRhcmdldC5mb3JtO1xuICAgICAgICBjb25zdCBmaWxsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbGxFcnJvclByb2plY3RcIilcblxuICAgICAgICBpZihteUZvcm0udGl0bGUudmFsdWUgIT09IFwiXCIpe1xuICAgICAgICAgICAgY29uc3QgbXlQcm9qZWN0ID0gcHJvamVjdEl0ZW0obXlGb3JtLnRpdGxlLnZhbHVlKTtcblxuICAgICAgICAgICAgYWRkVG9ET00uZGlzcGxheVByb2plY3QobXlQcm9qZWN0KTtcbiAgICAgICAgICAgIGluZGV4Lm15UHJvamVjdExpc3QucHVzaChteVByb2plY3QpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlSGFuZGxlci5zdG9yZVByb2plY3QobXlQcm9qZWN0KTsgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgubXlQcm9qZWN0TGlzdClcblxuICAgICAgICAgICAgZmlsbEVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgICAgICAgY2xlYXJGb3JtKG15Rm9ybSk7IFxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBmaWxsRXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICByZXR1cm57c2hvd0Zvcm0sIGNsb3NlRm9ybSwgaGFuZGxlRm9ybUlucHV0LH07XG59KSgpO1xuIFxuIGV4cG9ydCBkZWZhdWx0IGFkZFByb2plY3RQb3BVcDsiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lciBmcm9tICcuL2V2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHByb2plY3RJdGVtIGZyb20gJy4vcHJvamVjdEl0ZW0nO1xuXG5jb25zdCBhZGRUb0RPTSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdCA9IChteVByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgbXlQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG15UHJvamVjdERpdi5jbGFzc05hbWUgPSBcInByb2plY3RJdGVtXCI7XG4gICAgICAgIG15UHJvamVjdERpdi5pZCA9IG15UHJvamVjdC50aXRsZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LUNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChteVByb2plY3REaXYpO1xuXG4gICAgICAgIGNvbnN0IG15VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbXlUaXRsZURpdi5jbGFzc05hbWUgPSBcInByb2plY3RUaXRsZVwiO1xuICAgICAgICBteVByb2plY3REaXYuYXBwZW5kQ2hpbGQobXlUaXRsZURpdik7XG5cbiAgICAgICAgbXlUaXRsZURpdi50ZXh0Q29udGVudCA9IG15UHJvamVjdC50aXRsZTtcblxuICAgICAgICBjb25zdCBteUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBteUJ1dHRvbi5jbGFzc05hbWUgPSBcImFkZFRhc2tCdXR0b25cIjtcbiAgICAgICAgbXlCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICAgICAgbXlQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG15QnV0dG9uKTtcblxuICAgICAgICBldmVudExpc3RlbmVyLmFkZEJ1dHRvbkxpc3RlbmVyKG15QnV0dG9uKTtcblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwiZGVsZXRlUHJvamVjdEJ1dHRvblwiO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgbXlQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIFxuICAgICAgICBldmVudExpc3RlbmVyLmFkZERlbGV0ZVByb2plY3RMaXN0ZW5lcihkZWxldGVCdXR0b24pO1xuICAgIH1cblxuXG4gICAgY29uc3QgZGlzcGxheVRhc2sgPSAobXlUYXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IG15VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgbXlUYXNrRGl2LmNsYXNzTmFtZSA9IFwidGFza0l0ZW1cIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG15UHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke215VGFzay5teVByb2plY3R9YClcblxuICAgICAgICBteVByb2plY3REaXYuYXBwZW5kQ2hpbGQobXlUYXNrRGl2KTtcbiAgICBcbiAgICAgICAgZm9yKGNvbnN0IGtleSBpbiBteVRhc2spe1xuICAgICAgICAgICAgY29uc3QgbXlEaXZOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInRpdGxlXCIgfHwga2V5ID09PSBcImRlc2NyaXB0aW9uXCIgfHwga2V5ID09PSBcImR1ZURhdGVcInx8IGtleSA9PT0gXCJwcmlvcml0eVwiKXtcbiAgICAgICAgICAgICAgICBteURpdk5vZGUuY2xhc3NOYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgIG15RGl2Tm9kZS50ZXh0Q29udGVudCA9IG15VGFza1trZXldO1xuICAgICAgICAgICAgICAgIG15VGFza0Rpdi5hcHBlbmRDaGlsZChteURpdk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZUJ1dHRvblwiO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgbXlUYXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIFxuICAgICAgICBldmVudExpc3RlbmVyLmFkZERlbGV0ZVRhc2tMaXN0ZW5lcihkZWxldGVCdXR0b24pO1xuXG4gICAgfVxuXG4gICAgLy9jb25zdCBzZXRQcmlvcml0eUNvbG9yID0gKClcblxuICAgIHJldHVybntkaXNwbGF5UHJvamVjdCwgZGlzcGxheVRhc2ssfTtcbn0pKCk7XG4gXG4gZXhwb3J0IGRlZmF1bHQgYWRkVG9ET007XG4iLCJpbXBvcnQgYWRkSXRlbVBvcFVwIGZyb20gXCIuL2FkZEl0ZW1Qb3BVcFwiO1xuaW1wb3J0IGFkZFByb2plY3RQb3BVcCBmcm9tICcuL2FkZFByb2plY3RQb3BVcCc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleCdcbmltcG9ydCBsb2NhbFN0b3JhZ2VIYW5kbGVyIGZyb20gJy4vbG9jYWxTdG9yYWdlSGFuZGxlcidcblxuY29uc3QgZXZlbnRMaXN0ZW5lciA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBvcGVuUHJvamVjdFBvcFVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RQb3BVcCcpO1xuICAgIG9wZW5Qcm9qZWN0UG9wVXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RQb3BVcC5zaG93Rm9ybSk7XG4gICAgXG4gICAgY29uc3QgY2xvc2VQcm9qZWN0UG9wVXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VQcm9qZWN0QnV0dG9uJyk7ICAgICAgICBcbiAgICBjbG9zZVByb2plY3RQb3BVcERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdFBvcFVwLmNsb3NlRm9ybSk7IFxuXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnV0dG9uJyk7ICAgICAgICBcbiAgICBzdWJtaXRQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0UG9wVXAuaGFuZGxlRm9ybUlucHV0KTtcblxuICAgIGNvbnN0IGNsb3NlUG9wVXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdXR0b24nKTsgICAgICAgIFxuICAgIGNsb3NlUG9wVXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEl0ZW1Qb3BVcC5jbG9zZUZvcm0pOyAvL2ltcG9ydCBhZGRJdGVtUG9wVXAuanNcblxuICAgIGNvbnN0IHN1Ym1pdFRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnV0dG9uJyk7ICAgICAgICBcbiAgICBzdWJtaXRUYXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRJdGVtUG9wVXAuaGFuZGxlRm9ybUlucHV0KTsgLy9pbXBvcnQgYWRkSXRlbVBvcFVwLmpzXG4gICAgXG4gICAgY29uc3QgYWRkQnV0dG9uTGlzdGVuZXIgPSAoZGl2KSA9PiB7XG4gICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRJdGVtUG9wVXAuc2hvd0Zvcm0pO1xuICAgIH07XG5cbiAgIGNvbnN0IGFkZERlbGV0ZVRhc2tMaXN0ZW5lciA9IChkaXYpID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUYXNrKTtcbiAgICB9OyBcblxuICAgIGNvbnN0IGFkZERlbGV0ZVByb2plY3RMaXN0ZW5lciA9IChkaXYpID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHthZGRCdXR0b25MaXN0ZW5lciwgYWRkRGVsZXRlVGFza0xpc3RlbmVyLCBhZGREZWxldGVQcm9qZWN0TGlzdGVuZXJ9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcjsgXG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgY29uc3QgdGFza05hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBteVByb2plY3QgPSBpbmRleC5teVByb2plY3RMaXN0LmZpbmQoeCA9PiB4LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgbXlUYXNrID0gbXlQcm9qZWN0Lm15VGFza0xpc3QuZmluZCh4ID0+IHgudGl0bGUgPT09ICB0YXNrTmFtZSlcblxuICAgIG15UHJvamVjdC5yZW1vdmVUYXNrKG15VGFzayk7IC8vcmVtb3ZlIGZyb20gdGhlIHByb2plY3Qgb2JqZWN0XG5cbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTsgLy9yZW1vdmUgZnJvbSB0aGUgSFRNTCBkb2N1bWVudFxuXG4gICAgbG9jYWxTdG9yYWdlSGFuZGxlci5yZW1vdmVJdGVtKG15VGFzayk7XG59O1xuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcbiAgICBjb25zdCBteVByb2plY3QgPSBpbmRleC5teVByb2plY3RMaXN0LmZpbmQoeCA9PiB4LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgaW5kZXhQb3MgPSBpbmRleC5teVByb2plY3RMaXN0LmluZGV4T2YobXlQcm9qZWN0KTsgIFxuICAgICAgICBpZiAoaW5kZXhQb3MgPiAtMSkge1xuICAgICAgICAgICAgaW5kZXgubXlQcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXhQb3MsIDEpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VIYW5kbGVyLnJlbW92ZUl0ZW0obXlQcm9qZWN0KTtcbiAgICAgICAgfSAgICAgICAgICBcbn07XG5cblxuXG5cblxuICIsIlxuaW1wb3J0IGFkZFRvRE9NIGZyb20gJy4vYWRkVG9ET00nO1xuaW1wb3J0IHRvRG9JdGVtIGZyb20gJy4vdG9Eb0l0ZW0nO1xuaW1wb3J0IHByb2plY3RJdGVtIGZyb20gJy4vcHJvamVjdEl0ZW0nO1xuaW1wb3J0IGFkZEl0ZW1Qb3BVcCBmcm9tICcuL2FkZEl0ZW1Qb3BVcCc7XG5pbXBvcnQgYWRkUHJvamVjdFBvcFVwIGZyb20gJy4vYWRkUHJvamVjdFBvcFVwJztcbmltcG9ydCBsb2NhbFN0b3JhZ2VIYW5kbGVyIGZyb20gJy4vbG9jYWxTdG9yYWdlSGFuZGxlcic7XG5cblxuY29uc3QgaW5kZXggPSAoKCkgPT4ge1xuICAgIGxldCBteVByb2plY3RMaXN0ID0gW107IFxuXG4gICAgLy9kZWZhdWx0IHByb2plY3RcbiAgICBcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RJdGVtKFwiTXkgRmlyc3QgUHJvamVjdFwiKTtcbiAgICBhZGRUb0RPTS5kaXNwbGF5UHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG4gICAgbXlQcm9qZWN0TGlzdC5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2VIYW5kbGVyLnN0b3JlUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIHtteVByb2plY3RMaXN0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuXG5sb2NhbFN0b3JhZ2VIYW5kbGVyLmRpc3BsYXlDdXJyZW50UHJvamVjdHMoKTsiLCJpbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgYWRkVG9ET00gZnJvbSAnLi9hZGRUb0RPTSc7XG5pbXBvcnQgcHJvamVjdEl0ZW0gZnJvbSBcIi4vcHJvamVjdEl0ZW1cIlxuaW1wb3J0IHRvRG9JdGVtIGZyb20gJy4vdG9Eb0l0ZW0nO1xuXG5jb25zdCBsb2NhbFN0b3JhZ2VIYW5kbGVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGRpc3BsYXlDdXJyZW50UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCggKGtleSkgPT4ge1xuICAgICAgICAgICBjb25zdCBteU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICAgICAgICAgaWYoIW15T2JqLm15UHJvamVjdCl7XG4gICAgICAgICAgICAgICAgaWYobXlPYmoudGl0bGUgIT09IFwiTXkgRmlyc3QgUHJvamVjdFwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG15UHJvamVjdCA9IHByb2plY3RJdGVtKG15T2JqLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgubXlQcm9qZWN0TGlzdC5wdXNoKG15UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0RPTS5kaXNwbGF5UHJvamVjdChteVByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCggKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXlPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICAgIFxuICAgICAgICAgICAgaWYobXlPYmoubXlQcm9qZWN0KXtcbiAgICAgICAgICAgICAgICBjb25zdCBteVRhc2sgPSB0b0RvSXRlbShteU9iai50aXRsZSwgbXlPYmouZGVzY3JpcHRpb24sIG15T2JqLmR1ZURhdGUsIG15T2JqLnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICBteVRhc2subXlQcm9qZWN0ID0gbXlPYmoubXlQcm9qZWN0OyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RPYmogPSBpbmRleC5teVByb2plY3RMaXN0LmZpbmQoeCA9PiB4LnRpdGxlID09PSBteVRhc2subXlQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleC5teVByb2plY3RMaXN0KVxuICAgICAgICAgICAgICAgIHByb2plY3RPYmouYWRkVGFzayhteVRhc2spO1xuICAgICAgICAgICAgICAgIGFkZFRvRE9NLmRpc3BsYXlUYXNrKG15VGFzayk7ICAgIFxuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlUHJvamVjdD0gKG15T2JqKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE1hdGgucmFuZG9tKCksSlNPTi5zdHJpbmdpZnkobXlPYmopKVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlVGFzaz0gKG15T2JqKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE1hdGgucmFuZG9tKCksSlNPTi5zdHJpbmdpZnkobXlPYmopKVxuICAgIH1cblxuICAgIGNvbnN0IGdldCA9IChteU9iaikgPT4ge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJNeUFycmF5XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAobXlPYmopID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKCAoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBteUpTT04gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhteU9iai50aXRsZSArIFwiIGhlbGxvICBcIiArIG15SlNPTi50aXRsZSlcbiAgICAgICAgICAgIGlmKG15T2JqLnRpdGxlID09PSBteUpTT04udGl0bGUpe1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RvcmVQcm9qZWN0LCBzdG9yZVRhc2ssIGdldCwgZGlzcGxheUN1cnJlbnRQcm9qZWN0cywgcmVtb3ZlSXRlbX07XG59KSgpO1xuIFxuXG4gZXhwb3J0IGRlZmF1bHQgbG9jYWxTdG9yYWdlSGFuZGxlcjtcblxuIiwiY29uc3QgcHJvamVjdEl0ZW09ICgodGl0bGUpID0+IHtcbiAgIGxldCBteVRhc2tMaXN0ID0gW107XG5cbiAgIGNvbnN0IGFkZFRhc2sgPSAobXlUYXNrKSA9PiB7XG4gICAgICAgIG15VGFza0xpc3QucHVzaChteVRhc2spO1xuICAgfVxuICAgY29uc3QgcmVtb3ZlVGFzayA9IChteVRhc2spID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gbXlUYXNrTGlzdC5pbmRleE9mKG15VGFzayk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBteVRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgcmV0dXJue3RpdGxlLCByZW1vdmVUYXNrLCBhZGRUYXNrLCBteVRhc2tMaXN0fTtcbiB9KTtcbiBcbiBleHBvcnQgZGVmYXVsdCBwcm9qZWN0SXRlbTsiLCJjb25zdCB0b0RvSXRlbT0gKCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG5cbiAgICBsZXQgbXlQcm9qZWN0ID0gXCJNeSBGaXJzdCBQcm9qZWN0XCI7XG5cbiAgICByZXR1cm57dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbXlQcm9qZWN0fVxuIH0pO1xuIFxuIGV4cG9ydCBkZWZhdWx0IHRvRG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=