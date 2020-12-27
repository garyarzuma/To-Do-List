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

        const myProject = (0,_projectItem__WEBPACK_IMPORTED_MODULE_1__.default)(myForm.title.value);

        _addToDOM__WEBPACK_IMPORTED_MODULE_0__.default.displayProject(myProject);
        _index__WEBPACK_IMPORTED_MODULE_2__.default.myProjectList.push(myProject);

        closeForm();
        clearForm(myForm); 
      
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

    return{displayProject, displayTask};
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
/* harmony import */ var _projectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectItem */ "./src/projectItem.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");





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
 
const removeTask = (event) => {
    const projectName = event.target.parentElement.parentElement.id;
    const taskName = event.target.parentElement.querySelector('.title').textContent;
    const myProject = _index__WEBPACK_IMPORTED_MODULE_3__.default.myProjectList.find(x => x.title === projectName);
    const myTask = myProject.myTaskList.find(x => x.title ===  taskName)

    myProject.removeTask(myTask); //remove from the project object

    event.target.parentElement.remove(); //remove from the HTML document
};

const removeProject = (event) => {
    const projectName = event.target.parentElement.id;
    const myProject = _index__WEBPACK_IMPORTED_MODULE_3__.default.myProjectList.find(x => x.title === projectName);
    const indexPos = _index__WEBPACK_IMPORTED_MODULE_3__.default.myProjectList.indexOf(myProject);  
        if (indexPos > -1) {
            _index__WEBPACK_IMPORTED_MODULE_3__.default.myProjectList.splice(indexPos, 1);
            event.target.parentElement.remove();
        }          
};

 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListener);




 

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
/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventListener */ "./src/eventListener.js");








const index = (() => {
    
    let myProjectList = [];

    const defaultProject = (0,_projectItem__WEBPACK_IMPORTED_MODULE_2__.default)("My First Project");
    
    _addToDOM__WEBPACK_IMPORTED_MODULE_0__.default.displayProject(defaultProject);

    myProjectList.push(defaultProject);

    return {myProjectList};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZEl0ZW1Qb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFByb2plY3RQb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDQTtBQUNOOztBQUU1QjtBQUNBLHFEOztBQUVBO0FBQ0E7QUFDQSx1QztBQUNBLEs7QUFDQTs7O0FBR0E7QUFDQSxnQztBQUNBLHNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGtEQUFRO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsOERBQXdCO0FBQ3ZEOztBQUVBLFlBQVksMERBQW9COztBQUVoQztBQUNBO0FBQ0EsOEI7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsQ0FBQyxpRUFBZSxZQUFZLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRNO0FBQ007QUFDWjs7QUFFNUI7QUFDQSw0RDs7QUFFQTtBQUNBLHVDO0FBQ0EsSzs7QUFFQTs7O0FBR0E7QUFDQSxnQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLHFEQUFXOztBQUVyQyxRQUFRLDZEQUF1QjtBQUMvQixRQUFRLDhEQUF3Qjs7QUFFaEM7QUFDQSwwQjs7QUFFQSxLOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELENBQUMsaUVBQWUsZUFBZSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENhO0FBQ0o7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEscUVBQStCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDRFQUFzQztBQUM5Qzs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQSx3REFBd0QsaUJBQWlCOztBQUV6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEseUVBQW1DOztBQUUzQzs7QUFFQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxDQUFDLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFaUI7QUFDTTtBQUNSO0FBQ2I7O0FBRTNCOztBQUVBO0FBQ0Esa0RBQWtELDhEQUF3Qjs7QUFFMUUsK0U7QUFDQSxtREFBbUQsK0RBQXlCLEU7O0FBRTVFLHlFO0FBQ0EsK0NBQStDLHFFQUErQjs7QUFFOUUsaUU7QUFDQSw0Q0FBNEMsNERBQXNCLEVBQUU7O0FBRXBFLCtEO0FBQ0EsNENBQTRDLGtFQUE0QixFQUFFOztBQUUxRTtBQUNBLHFDQUFxQywyREFBcUI7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLE07O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4REFBd0I7QUFDOUM7O0FBRUEsaUNBQWlDOztBQUVqQyx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw4REFBd0I7QUFDOUMscUJBQXFCLGlFQUEyQixZO0FBQ2hEO0FBQ0EsWUFBWSxnRUFBMEI7QUFDdEM7QUFDQSxTO0FBQ0E7O0FBRUEsQ0FBQyxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREk7QUFDQTtBQUNNO0FBQ0U7QUFDTTtBQUNKOzs7QUFHNUM7O0FBRUE7O0FBRUEsMkJBQTJCLHFEQUFXOztBQUV0QyxJQUFJLDZEQUF1Qjs7QUFFM0I7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsS0FBSyxFOzs7Ozs7Ozs7Ozs7OztBQ3JCcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsRUFBRTs7QUFFRixDQUFDLGlFQUFlLFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUNoQjNCOztBQUVBOztBQUVBLFdBQVc7QUFDWCxFQUFFOztBQUVGLENBQUMsaUVBQWUsUUFBUSxFOzs7Ozs7VUNQeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkVG9ET00gZnJvbSAnLi9hZGRUb0RPTSc7XG5pbXBvcnQgdG9Eb0l0ZW0gZnJvbSAnLi90b0RvSXRlbSc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IGFkZEl0ZW1Qb3BVcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpOyAgICAgICAgXG5cbiAgICBjb25zdCBzaG93Rm9ybSA9IChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlQcm9qZWN0XCIpLnRleHRDb250ZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgbXlGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcbiAgICB9ICAgIFxuICAgIGNvbnN0IGNsb3NlRm9ybSA9ICgpID0+IG15Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblxuICAgIGNvbnN0IGNsZWFyRm9ybSA9IChteUZvcm0pID0+IHtcbiAgICAgICAgbXlGb3JtLnRpdGxlLnZhbHVlID0gXCJcIjsgXG4gICAgICAgIG15Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7IFxuICAgICAgICBteUZvcm0uZGF0ZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgbXlGb3JtLmRyb3Bkb3duLnZhbHVlID0gXCIxXCI7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9ybUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgbXlGb3JtID0gZS50YXJnZXQuZm9ybTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVByb2plY3RcIik7XG4gICAgICAgIGNvbnN0IGZpbGxFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbEVycm9yXCIpXG4gICAgICAgIFxuICAgICAgICBpZihteUZvcm0udGl0bGUudmFsdWUgIT09IFwiXCIgJiYgbXlGb3JtLmRlc2NyaXB0aW9uLnZhbHVlICE9PSBcIlwiICYmIG15Rm9ybS5kYXRlLnZhbHVlICE9PSBcIlwiICYmIG15Rm9ybS5kcm9wZG93bi52YWx1ZSAhPT0gXCJcIil7XG4gICAgICAgICAgICBjb25zdCBteUl0ZW0gPSB0b0RvSXRlbShteUZvcm0udGl0bGUudmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICBteUZvcm0uZGVzY3JpcHRpb24udmFsdWUsIFxuICAgICAgICAgICAgICAgICAgICBteUZvcm0uZGF0ZS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICAgIG15Rm9ybS5kcm9wZG93bi52YWx1ZSk7XG5cbiAgICAgICAgICAgIG15SXRlbS5teVByb2plY3QgPSBzZWxlY3RlZFByb2plY3QudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPYmogPSBpbmRleC5teVByb2plY3RMaXN0LmZpbmQoeCA9PiB4LnRpdGxlID09PSBzZWxlY3RlZFByb2plY3QudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgcHJvamVjdE9iai5hZGRUYXNrKG15SXRlbSk7XG5cbiAgICAgICAgICAgIGFkZFRvRE9NLmRpc3BsYXlUYXNrKG15SXRlbSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgICAgICAgZmlsbEVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGNsZWFyRm9ybShteUZvcm0pOyBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGZpbGxFcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybntzaG93Rm9ybSwgY2xvc2VGb3JtLCBoYW5kbGVGb3JtSW5wdXQsfTtcbn0pKCk7XG4gXG4gZXhwb3J0IGRlZmF1bHQgYWRkSXRlbVBvcFVwOyIsImltcG9ydCBhZGRUb0RPTSBmcm9tICcuL2FkZFRvRE9NJztcbmltcG9ydCBwcm9qZWN0SXRlbSBmcm9tICcuL3Byb2plY3RJdGVtJztcbmltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4JztcblxuY29uc3QgYWRkUHJvamVjdFBvcFVwID0gKCgpID0+IHtcbiAgICBjb25zdCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlQcm9qZWN0Rm9ybScpOyAgICAgICAgXG5cbiAgICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgbXlGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcbiAgICB9ICAgIFxuXG4gICAgY29uc3QgY2xvc2VGb3JtID0gKCkgPT4gbXlGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXG4gICAgY29uc3QgY2xlYXJGb3JtID0gKG15Rm9ybSkgPT4ge1xuICAgICAgICBteUZvcm0udGl0bGUudmFsdWUgPSBcIlwiOyBcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVGb3JtSW5wdXQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBteUZvcm0gPSBlLnRhcmdldC5mb3JtO1xuXG4gICAgICAgIGNvbnN0IG15UHJvamVjdCA9IHByb2plY3RJdGVtKG15Rm9ybS50aXRsZS52YWx1ZSk7XG5cbiAgICAgICAgYWRkVG9ET00uZGlzcGxheVByb2plY3QobXlQcm9qZWN0KTtcbiAgICAgICAgaW5kZXgubXlQcm9qZWN0TGlzdC5wdXNoKG15UHJvamVjdCk7XG5cbiAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgICAgIGNsZWFyRm9ybShteUZvcm0pOyBcbiAgICAgIFxuICAgIH0gXG5cbiAgICByZXR1cm57c2hvd0Zvcm0sIGNsb3NlRm9ybSwgaGFuZGxlRm9ybUlucHV0LH07XG59KSgpO1xuIFxuIGV4cG9ydCBkZWZhdWx0IGFkZFByb2plY3RQb3BVcDsiLCJpbXBvcnQgZXZlbnRMaXN0ZW5lciBmcm9tICcuL2V2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHByb2plY3RJdGVtIGZyb20gJy4vcHJvamVjdEl0ZW0nO1xuXG5jb25zdCBhZGRUb0RPTSA9ICgoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGlzcGxheVByb2plY3QgPSAobXlQcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG15UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBteVByb2plY3REaXYuY2xhc3NOYW1lID0gXCJwcm9qZWN0SXRlbVwiO1xuICAgICAgICBteVByb2plY3REaXYuaWQgPSBteVByb2plY3QudGl0bGU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1Db250YWluZXJcIikuYXBwZW5kQ2hpbGQobXlQcm9qZWN0RGl2KTtcblxuICAgICAgICBjb25zdCBteVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG15VGl0bGVEaXYuY2xhc3NOYW1lID0gXCJwcm9qZWN0VGl0bGVcIjtcbiAgICAgICAgbXlQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG15VGl0bGVEaXYpO1xuXG4gICAgICAgIG15VGl0bGVEaXYudGV4dENvbnRlbnQgPSBteVByb2plY3QudGl0bGU7XG5cbiAgICAgICAgY29uc3QgbXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbXlCdXR0b24uY2xhc3NOYW1lID0gXCJhZGRUYXNrQnV0dG9uXCI7XG4gICAgICAgIG15QnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgICAgIG15UHJvamVjdERpdi5hcHBlbmRDaGlsZChteUJ1dHRvbik7XG5cbiAgICAgICAgZXZlbnRMaXN0ZW5lci5hZGRCdXR0b25MaXN0ZW5lcihteUJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZVByb2plY3RCdXR0b25cIjtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIG15UHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgZXZlbnRMaXN0ZW5lci5hZGREZWxldGVQcm9qZWN0TGlzdGVuZXIoZGVsZXRlQnV0dG9uKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGRpc3BsYXlUYXNrID0gKG15VGFzaykgPT4ge1xuICAgICAgICBjb25zdCBteVRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgICAgIG15VGFza0Rpdi5jbGFzc05hbWUgPSBcInRhc2tJdGVtXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBteVByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtteVRhc2subXlQcm9qZWN0fWApXG5cbiAgICAgICAgbXlQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG15VGFza0Rpdik7XG4gICAgXG4gICAgICAgIGZvcihjb25zdCBrZXkgaW4gbXlUYXNrKXtcbiAgICAgICAgICAgIGNvbnN0IG15RGl2Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJ0aXRsZVwiIHx8IGtleSA9PT0gXCJkZXNjcmlwdGlvblwiIHx8IGtleSA9PT0gXCJkdWVEYXRlXCJ8fCBrZXkgPT09IFwicHJpb3JpdHlcIil7XG4gICAgICAgICAgICAgICAgbXlEaXZOb2RlLmNsYXNzTmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICBteURpdk5vZGUudGV4dENvbnRlbnQgPSBteVRhc2tba2V5XTtcbiAgICAgICAgICAgICAgICBteVRhc2tEaXYuYXBwZW5kQ2hpbGQobXlEaXZOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJkZWxldGVCdXR0b25cIjtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIG15VGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgZXZlbnRMaXN0ZW5lci5hZGREZWxldGVUYXNrTGlzdGVuZXIoZGVsZXRlQnV0dG9uKTtcblxuICAgIH1cblxuICAgIC8vY29uc3Qgc2V0UHJpb3JpdHlDb2xvciA9ICgpXG5cbiAgICByZXR1cm57ZGlzcGxheVByb2plY3QsIGRpc3BsYXlUYXNrfTtcbn0pKCk7XG4gXG4gZXhwb3J0IGRlZmF1bHQgYWRkVG9ET007XG4iLCJpbXBvcnQgYWRkSXRlbVBvcFVwIGZyb20gXCIuL2FkZEl0ZW1Qb3BVcFwiO1xuaW1wb3J0IGFkZFByb2plY3RQb3BVcCBmcm9tICcuL2FkZFByb2plY3RQb3BVcCc7XG5pbXBvcnQgcHJvamVjdEl0ZW0gZnJvbSAnLi9wcm9qZWN0SXRlbSc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleCdcblxuY29uc3QgZXZlbnRMaXN0ZW5lciA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBvcGVuUHJvamVjdFBvcFVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RQb3BVcCcpO1xuICAgIG9wZW5Qcm9qZWN0UG9wVXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RQb3BVcC5zaG93Rm9ybSk7XG4gICAgXG4gICAgY29uc3QgY2xvc2VQcm9qZWN0UG9wVXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VQcm9qZWN0QnV0dG9uJyk7ICAgICAgICBcbiAgICBjbG9zZVByb2plY3RQb3BVcERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdFBvcFVwLmNsb3NlRm9ybSk7IFxuXG4gICAgY29uc3Qgc3VibWl0UHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnV0dG9uJyk7ICAgICAgICBcbiAgICBzdWJtaXRQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0UG9wVXAuaGFuZGxlRm9ybUlucHV0KTtcblxuICAgIGNvbnN0IGNsb3NlUG9wVXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdXR0b24nKTsgICAgICAgIFxuICAgIGNsb3NlUG9wVXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEl0ZW1Qb3BVcC5jbG9zZUZvcm0pOyAvL2ltcG9ydCBhZGRJdGVtUG9wVXAuanNcblxuICAgIGNvbnN0IHN1Ym1pdFRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnV0dG9uJyk7ICAgICAgICBcbiAgICBzdWJtaXRUYXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRJdGVtUG9wVXAuaGFuZGxlRm9ybUlucHV0KTsgLy9pbXBvcnQgYWRkSXRlbVBvcFVwLmpzXG4gICAgXG4gICAgY29uc3QgYWRkQnV0dG9uTGlzdGVuZXIgPSAoZGl2KSA9PiB7XG4gICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRJdGVtUG9wVXAuc2hvd0Zvcm0pO1xuICAgIH07XG5cbiAgIGNvbnN0IGFkZERlbGV0ZVRhc2tMaXN0ZW5lciA9IChkaXYpID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUYXNrKTtcbiAgICB9OyBcblxuICAgIGNvbnN0IGFkZERlbGV0ZVByb2plY3RMaXN0ZW5lciA9IChkaXYpID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVQcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHthZGRCdXR0b25MaXN0ZW5lciwgYWRkRGVsZXRlVGFza0xpc3RlbmVyLCBhZGREZWxldGVQcm9qZWN0TGlzdGVuZXJ9O1xufSkoKTtcbiBcbmNvbnN0IHJlbW92ZVRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgY29uc3QgdGFza05hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBteVByb2plY3QgPSBpbmRleC5teVByb2plY3RMaXN0LmZpbmQoeCA9PiB4LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgbXlUYXNrID0gbXlQcm9qZWN0Lm15VGFza0xpc3QuZmluZCh4ID0+IHgudGl0bGUgPT09ICB0YXNrTmFtZSlcblxuICAgIG15UHJvamVjdC5yZW1vdmVUYXNrKG15VGFzayk7IC8vcmVtb3ZlIGZyb20gdGhlIHByb2plY3Qgb2JqZWN0XG5cbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTsgLy9yZW1vdmUgZnJvbSB0aGUgSFRNTCBkb2N1bWVudFxufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgY29uc3QgbXlQcm9qZWN0ID0gaW5kZXgubXlQcm9qZWN0TGlzdC5maW5kKHggPT4geC50aXRsZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IGluZGV4UG9zID0gaW5kZXgubXlQcm9qZWN0TGlzdC5pbmRleE9mKG15UHJvamVjdCk7ICBcbiAgICAgICAgaWYgKGluZGV4UG9zID4gLTEpIHtcbiAgICAgICAgICAgIGluZGV4Lm15UHJvamVjdExpc3Quc3BsaWNlKGluZGV4UG9zLCAxKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9ICAgICAgICAgIFxufTtcblxuIGV4cG9ydCBkZWZhdWx0IGV2ZW50TGlzdGVuZXI7XG5cblxuXG5cbiAiLCJpbXBvcnQgYWRkVG9ET00gZnJvbSAnLi9hZGRUb0RPTSc7XG5pbXBvcnQgdG9Eb0l0ZW0gZnJvbSAnLi90b0RvSXRlbSc7XG5pbXBvcnQgcHJvamVjdEl0ZW0gZnJvbSAnLi9wcm9qZWN0SXRlbSc7XG5pbXBvcnQgYWRkSXRlbVBvcFVwIGZyb20gJy4vYWRkSXRlbVBvcFVwJztcbmltcG9ydCBhZGRQcm9qZWN0UG9wVXAgZnJvbSAnLi9hZGRQcm9qZWN0UG9wVXAnO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXIgZnJvbSAnLi9ldmVudExpc3RlbmVyJztcblxuXG5jb25zdCBpbmRleCA9ICgoKSA9PiB7XG4gICAgXG4gICAgbGV0IG15UHJvamVjdExpc3QgPSBbXTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEl0ZW0oXCJNeSBGaXJzdCBQcm9qZWN0XCIpO1xuICAgIFxuICAgIGFkZFRvRE9NLmRpc3BsYXlQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcblxuICAgIG15UHJvamVjdExpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbiAgICByZXR1cm4ge215UHJvamVjdExpc3R9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7IiwiY29uc3QgcHJvamVjdEl0ZW09ICgodGl0bGUpID0+IHtcbiAgIGxldCBteVRhc2tMaXN0ID0gW107XG5cbiAgIGNvbnN0IGFkZFRhc2sgPSAobXlUYXNrKSA9PiB7XG4gICAgICAgIG15VGFza0xpc3QucHVzaChteVRhc2spO1xuICAgfVxuICAgY29uc3QgcmVtb3ZlVGFzayA9IChteVRhc2spID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gbXlUYXNrTGlzdC5pbmRleE9mKG15VGFzayk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBteVRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgcmV0dXJue3RpdGxlLCByZW1vdmVUYXNrLCBhZGRUYXNrLCBteVRhc2tMaXN0fTtcbiB9KTtcbiBcbiBleHBvcnQgZGVmYXVsdCBwcm9qZWN0SXRlbTsiLCJjb25zdCB0b0RvSXRlbT0gKCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG5cbiAgICBsZXQgbXlQcm9qZWN0ID0gXCJNeSBGaXJzdCBQcm9qZWN0XCI7XG5cbiAgICByZXR1cm57dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbXlQcm9qZWN0fVxuIH0pO1xuIFxuIGV4cG9ydCBkZWZhdWx0IHRvRG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=