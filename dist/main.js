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

        const myItem = (0,_toDoItem__WEBPACK_IMPORTED_MODULE_1__.default)(myForm.title.value, 
                myForm.description.value, 
                myForm.date.value, 
                myForm.dropdown.value);

        myItem.myProject = selectedProject.textContent;

        const projectObj = _index__WEBPACK_IMPORTED_MODULE_2__.default.myProjectList.find(x => x.title === selectedProject.textContent);
        projectObj.addTask(myItem);

        _addToDOM__WEBPACK_IMPORTED_MODULE_0__.default.displayTask(myItem);
        

        closeForm();
        clearForm(myForm); 
       
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

       // JSON.parse(selectedProject.textContent).addTask(myItem); need to add array that holds projects

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZEl0ZW1Qb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFByb2plY3RQb3BVcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDQTtBQUNOOztBQUU1QjtBQUNBLHFEOztBQUVBO0FBQ0E7QUFDQSx1QztBQUNBLEs7QUFDQTs7O0FBR0E7QUFDQSxnQztBQUNBLHNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsa0RBQVE7QUFDL0I7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQiw4REFBd0I7QUFDbkQ7O0FBRUEsUUFBUSwwREFBb0I7OztBQUc1QjtBQUNBLDBCOztBQUVBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELENBQUMsaUVBQWUsWUFBWSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDTTtBQUNNO0FBQ1o7O0FBRTVCO0FBQ0EsNEQ7O0FBRUE7QUFDQSx1QztBQUNBLEs7O0FBRUE7OztBQUdBO0FBQ0EsZ0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQixxREFBVzs7QUFFckMsa0VBQWtFOztBQUVsRSxRQUFRLDZEQUF1Qjs7QUFFL0IsUUFBUSw4REFBd0I7O0FBRWhDO0FBQ0EsMEI7O0FBRUEsSzs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxDQUFDLGlFQUFlLGVBQWUsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDYTtBQUNKOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHFFQUErQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSw0RUFBc0M7QUFDOUM7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUEsd0RBQXdELGlCQUFpQjs7QUFFekU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHlFQUFtQzs7QUFFM0M7O0FBRUE7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsQ0FBQyxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRWlCO0FBQ007QUFDUjtBQUNiOztBQUUzQjs7QUFFQTtBQUNBLGtEQUFrRCw4REFBd0I7O0FBRTFFLCtFO0FBQ0EsbURBQW1ELCtEQUF5QixFOztBQUU1RSx5RTtBQUNBLCtDQUErQyxxRUFBK0I7O0FBRTlFLGlFO0FBQ0EsNENBQTRDLDREQUFzQixFQUFFOztBQUVwRSwrRDtBQUNBLDRDQUE0QyxrRUFBNEIsRUFBRTs7QUFFMUU7QUFDQSxxQ0FBcUMsMkRBQXFCO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxNOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOERBQXdCO0FBQzlDOztBQUVBLGlDQUFpQzs7QUFFakMsd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsOERBQXdCO0FBQzlDLHFCQUFxQixpRUFBMkIsWTtBQUNoRDtBQUNBLFlBQVksZ0VBQTBCO0FBQ3RDO0FBQ0EsUztBQUNBOztBQUVBLENBQUMsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURJO0FBQ0E7QUFDTTtBQUNFO0FBQ007QUFDSjs7O0FBRzVDOztBQUVBOztBQUVBLDJCQUEyQixxREFBVztBQUN0QyxJQUFJLDZEQUF1Qjs7QUFFM0I7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsS0FBSyxFOzs7Ozs7Ozs7Ozs7OztBQ3BCcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsRUFBRTs7QUFFRixDQUFDLGlFQUFlLFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUNoQjNCOztBQUVBOztBQUVBLFdBQVc7QUFDWCxFQUFFOztBQUVGLENBQUMsaUVBQWUsUUFBUSxFOzs7Ozs7VUNQeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkVG9ET00gZnJvbSAnLi9hZGRUb0RPTSc7XG5pbXBvcnQgdG9Eb0l0ZW0gZnJvbSAnLi90b0RvSXRlbSc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IGFkZEl0ZW1Qb3BVcCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpOyAgICAgICAgXG5cbiAgICBjb25zdCBzaG93Rm9ybSA9IChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlQcm9qZWN0XCIpLnRleHRDb250ZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgbXlGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcbiAgICB9ICAgIFxuICAgIGNvbnN0IGNsb3NlRm9ybSA9ICgpID0+IG15Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblxuICAgIGNvbnN0IGNsZWFyRm9ybSA9IChteUZvcm0pID0+IHtcbiAgICAgICAgbXlGb3JtLnRpdGxlLnZhbHVlID0gXCJcIjsgXG4gICAgICAgIG15Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7IFxuICAgICAgICBteUZvcm0uZGF0ZS52YWx1ZSA9IFwiXCJcbiAgICAgICAgbXlGb3JtLmRyb3Bkb3duLnZhbHVlID0gXCIxXCI7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9ybUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgbXlGb3JtID0gZS50YXJnZXQuZm9ybTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVByb2plY3RcIik7XG5cbiAgICAgICAgY29uc3QgbXlJdGVtID0gdG9Eb0l0ZW0obXlGb3JtLnRpdGxlLnZhbHVlLCBcbiAgICAgICAgICAgICAgICBteUZvcm0uZGVzY3JpcHRpb24udmFsdWUsIFxuICAgICAgICAgICAgICAgIG15Rm9ybS5kYXRlLnZhbHVlLCBcbiAgICAgICAgICAgICAgICBteUZvcm0uZHJvcGRvd24udmFsdWUpO1xuXG4gICAgICAgIG15SXRlbS5teVByb2plY3QgPSBzZWxlY3RlZFByb2plY3QudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE9iaiA9IGluZGV4Lm15UHJvamVjdExpc3QuZmluZCh4ID0+IHgudGl0bGUgPT09IHNlbGVjdGVkUHJvamVjdC50ZXh0Q29udGVudCk7XG4gICAgICAgIHByb2plY3RPYmouYWRkVGFzayhteUl0ZW0pO1xuXG4gICAgICAgIGFkZFRvRE9NLmRpc3BsYXlUYXNrKG15SXRlbSk7XG4gICAgICAgIFxuXG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgICBjbGVhckZvcm0obXlGb3JtKTsgXG4gICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJue3Nob3dGb3JtLCBjbG9zZUZvcm0sIGhhbmRsZUZvcm1JbnB1dCx9O1xufSkoKTtcbiBcbiBleHBvcnQgZGVmYXVsdCBhZGRJdGVtUG9wVXA7IiwiaW1wb3J0IGFkZFRvRE9NIGZyb20gJy4vYWRkVG9ET00nO1xuaW1wb3J0IHByb2plY3RJdGVtIGZyb20gJy4vcHJvamVjdEl0ZW0nO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCBhZGRQcm9qZWN0UG9wVXAgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVByb2plY3RGb3JtJyk7ICAgICAgICBcblxuICAgIGNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xuICAgICAgICBteUZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxuICAgIH0gICAgXG5cbiAgICBjb25zdCBjbG9zZUZvcm0gPSAoKSA9PiBteUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cbiAgICBjb25zdCBjbGVhckZvcm0gPSAobXlGb3JtKSA9PiB7XG4gICAgICAgIG15Rm9ybS50aXRsZS52YWx1ZSA9IFwiXCI7IFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvcm1JbnB1dCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG15Rm9ybSA9IGUudGFyZ2V0LmZvcm07XG5cbiAgICAgICAgY29uc3QgbXlQcm9qZWN0ID0gcHJvamVjdEl0ZW0obXlGb3JtLnRpdGxlLnZhbHVlKTtcblxuICAgICAgIC8vIEpTT04ucGFyc2Uoc2VsZWN0ZWRQcm9qZWN0LnRleHRDb250ZW50KS5hZGRUYXNrKG15SXRlbSk7IG5lZWQgdG8gYWRkIGFycmF5IHRoYXQgaG9sZHMgcHJvamVjdHNcblxuICAgICAgICBhZGRUb0RPTS5kaXNwbGF5UHJvamVjdChteVByb2plY3QpO1xuXG4gICAgICAgIGluZGV4Lm15UHJvamVjdExpc3QucHVzaChteVByb2plY3QpO1xuXG4gICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgICBjbGVhckZvcm0obXlGb3JtKTsgXG4gICAgICAgXG4gICAgfSBcblxuICAgIHJldHVybntzaG93Rm9ybSwgY2xvc2VGb3JtLCBoYW5kbGVGb3JtSW5wdXQsfTtcbn0pKCk7XG4gXG4gZXhwb3J0IGRlZmF1bHQgYWRkUHJvamVjdFBvcFVwOyIsImltcG9ydCBldmVudExpc3RlbmVyIGZyb20gJy4vZXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgcHJvamVjdEl0ZW0gZnJvbSAnLi9wcm9qZWN0SXRlbSc7XG5cbmNvbnN0IGFkZFRvRE9NID0gKCgpID0+IHtcbiAgICBcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdCA9IChteVByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgbXlQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG15UHJvamVjdERpdi5jbGFzc05hbWUgPSBcInByb2plY3RJdGVtXCI7XG4gICAgICAgIG15UHJvamVjdERpdi5pZCA9IG15UHJvamVjdC50aXRsZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LUNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChteVByb2plY3REaXYpO1xuXG4gICAgICAgIGNvbnN0IG15VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbXlUaXRsZURpdi5jbGFzc05hbWUgPSBcInByb2plY3RUaXRsZVwiO1xuICAgICAgICBteVByb2plY3REaXYuYXBwZW5kQ2hpbGQobXlUaXRsZURpdik7XG5cbiAgICAgICAgbXlUaXRsZURpdi50ZXh0Q29udGVudCA9IG15UHJvamVjdC50aXRsZTtcblxuICAgICAgICBjb25zdCBteUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBteUJ1dHRvbi5jbGFzc05hbWUgPSBcImFkZFRhc2tCdXR0b25cIjtcbiAgICAgICAgbXlCdXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICAgICAgbXlQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG15QnV0dG9uKTtcblxuICAgICAgICBldmVudExpc3RlbmVyLmFkZEJ1dHRvbkxpc3RlbmVyKG15QnV0dG9uKTtcblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwiZGVsZXRlUHJvamVjdEJ1dHRvblwiO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgbXlQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIFxuICAgICAgICBldmVudExpc3RlbmVyLmFkZERlbGV0ZVByb2plY3RMaXN0ZW5lcihkZWxldGVCdXR0b24pO1xuICAgIH1cblxuXG4gICAgY29uc3QgZGlzcGxheVRhc2sgPSAobXlUYXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IG15VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgbXlUYXNrRGl2LmNsYXNzTmFtZSA9IFwidGFza0l0ZW1cIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG15UHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke215VGFzay5teVByb2plY3R9YClcblxuICAgICAgICBteVByb2plY3REaXYuYXBwZW5kQ2hpbGQobXlUYXNrRGl2KTtcbiAgICBcbiAgICAgICAgZm9yKGNvbnN0IGtleSBpbiBteVRhc2spe1xuICAgICAgICAgICAgY29uc3QgbXlEaXZOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInRpdGxlXCIgfHwga2V5ID09PSBcImRlc2NyaXB0aW9uXCIgfHwga2V5ID09PSBcImR1ZURhdGVcInx8IGtleSA9PT0gXCJwcmlvcml0eVwiKXtcbiAgICAgICAgICAgICAgICBteURpdk5vZGUuY2xhc3NOYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgIG15RGl2Tm9kZS50ZXh0Q29udGVudCA9IG15VGFza1trZXldO1xuICAgICAgICAgICAgICAgIG15VGFza0Rpdi5hcHBlbmRDaGlsZChteURpdk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZUJ1dHRvblwiO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgbXlUYXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIFxuICAgICAgICBldmVudExpc3RlbmVyLmFkZERlbGV0ZVRhc2tMaXN0ZW5lcihkZWxldGVCdXR0b24pO1xuXG4gICAgfVxuXG4gICAgLy9jb25zdCBzZXRQcmlvcml0eUNvbG9yID0gKClcblxuICAgIHJldHVybntkaXNwbGF5UHJvamVjdCwgZGlzcGxheVRhc2t9O1xufSkoKTtcbiBcbiBleHBvcnQgZGVmYXVsdCBhZGRUb0RPTTtcbiIsImltcG9ydCBhZGRJdGVtUG9wVXAgZnJvbSBcIi4vYWRkSXRlbVBvcFVwXCI7XG5pbXBvcnQgYWRkUHJvamVjdFBvcFVwIGZyb20gJy4vYWRkUHJvamVjdFBvcFVwJztcbmltcG9ydCBwcm9qZWN0SXRlbSBmcm9tICcuL3Byb2plY3RJdGVtJztcbmltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4J1xuXG5jb25zdCBldmVudExpc3RlbmVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IG9wZW5Qcm9qZWN0UG9wVXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdFBvcFVwJyk7XG4gICAgb3BlblByb2plY3RQb3BVcERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdFBvcFVwLnNob3dGb3JtKTtcbiAgICBcbiAgICBjb25zdCBjbG9zZVByb2plY3RQb3BVcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZVByb2plY3RCdXR0b24nKTsgICAgICAgIFxuICAgIGNsb3NlUHJvamVjdFBvcFVwRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0UG9wVXAuY2xvc2VGb3JtKTsgXG5cbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RCdXR0b24nKTsgICAgICAgIFxuICAgIHN1Ym1pdFByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RQb3BVcC5oYW5kbGVGb3JtSW5wdXQpO1xuXG4gICAgY29uc3QgY2xvc2VQb3BVcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZUJ1dHRvbicpOyAgICAgICAgXG4gICAgY2xvc2VQb3BVcERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkSXRlbVBvcFVwLmNsb3NlRm9ybSk7IC8vaW1wb3J0IGFkZEl0ZW1Qb3BVcC5qc1xuXG4gICAgY29uc3Qgc3VibWl0VGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdXR0b24nKTsgICAgICAgIFxuICAgIHN1Ym1pdFRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEl0ZW1Qb3BVcC5oYW5kbGVGb3JtSW5wdXQpOyAvL2ltcG9ydCBhZGRJdGVtUG9wVXAuanNcbiAgICBcbiAgICBjb25zdCBhZGRCdXR0b25MaXN0ZW5lciA9IChkaXYpID0+IHtcbiAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEl0ZW1Qb3BVcC5zaG93Rm9ybSk7XG4gICAgfTtcblxuICAgY29uc3QgYWRkRGVsZXRlVGFza0xpc3RlbmVyID0gKGRpdikgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRhc2spO1xuICAgIH07IFxuXG4gICAgY29uc3QgYWRkRGVsZXRlUHJvamVjdExpc3RlbmVyID0gKGRpdikgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVByb2plY3QpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge2FkZEJ1dHRvbkxpc3RlbmVyLCBhZGREZWxldGVUYXNrTGlzdGVuZXIsIGFkZERlbGV0ZVByb2plY3RMaXN0ZW5lcn07XG59KSgpO1xuIFxuY29uc3QgcmVtb3ZlVGFzayA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IG15UHJvamVjdCA9IGluZGV4Lm15UHJvamVjdExpc3QuZmluZCh4ID0+IHgudGl0bGUgPT09IHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBteVRhc2sgPSBteVByb2plY3QubXlUYXNrTGlzdC5maW5kKHggPT4geC50aXRsZSA9PT0gIHRhc2tOYW1lKVxuXG4gICAgbXlQcm9qZWN0LnJlbW92ZVRhc2sobXlUYXNrKTsgLy9yZW1vdmUgZnJvbSB0aGUgcHJvamVjdCBvYmplY3RcblxuICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpOyAvL3JlbW92ZSBmcm9tIHRoZSBIVE1MIGRvY3VtZW50XG59O1xuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcbiAgICBjb25zdCBteVByb2plY3QgPSBpbmRleC5teVByb2plY3RMaXN0LmZpbmQoeCA9PiB4LnRpdGxlID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgaW5kZXhQb3MgPSBpbmRleC5teVByb2plY3RMaXN0LmluZGV4T2YobXlQcm9qZWN0KTsgIFxuICAgICAgICBpZiAoaW5kZXhQb3MgPiAtMSkge1xuICAgICAgICAgICAgaW5kZXgubXlQcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXhQb3MsIDEpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0gICAgICAgICAgXG59O1xuXG4gZXhwb3J0IGRlZmF1bHQgZXZlbnRMaXN0ZW5lcjtcblxuXG5cblxuICIsImltcG9ydCBhZGRUb0RPTSBmcm9tICcuL2FkZFRvRE9NJztcbmltcG9ydCB0b0RvSXRlbSBmcm9tICcuL3RvRG9JdGVtJztcbmltcG9ydCBwcm9qZWN0SXRlbSBmcm9tICcuL3Byb2plY3RJdGVtJztcbmltcG9ydCBhZGRJdGVtUG9wVXAgZnJvbSAnLi9hZGRJdGVtUG9wVXAnO1xuaW1wb3J0IGFkZFByb2plY3RQb3BVcCBmcm9tICcuL2FkZFByb2plY3RQb3BVcCc7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lciBmcm9tICcuL2V2ZW50TGlzdGVuZXInO1xuXG5cbmNvbnN0IGluZGV4ID0gKCgpID0+IHtcbiAgICBcbiAgICBsZXQgbXlQcm9qZWN0TGlzdCA9IFtdO1xuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0SXRlbShcIk15IEZpcnN0IFByb2plY3RcIik7XG4gICAgYWRkVG9ET00uZGlzcGxheVByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuXG4gICAgbXlQcm9qZWN0TGlzdC5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcblxuICAgIHJldHVybiB7bXlQcm9qZWN0TGlzdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiLCJjb25zdCBwcm9qZWN0SXRlbT0gKCh0aXRsZSkgPT4ge1xuICAgbGV0IG15VGFza0xpc3QgPSBbXTtcblxuICAgY29uc3QgYWRkVGFzayA9IChteVRhc2spID0+IHtcbiAgICAgICAgbXlUYXNrTGlzdC5wdXNoKG15VGFzayk7XG4gICB9XG4gICBjb25zdCByZW1vdmVUYXNrID0gKG15VGFzaykgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSBteVRhc2tMaXN0LmluZGV4T2YobXlUYXNrKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIG15VGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICByZXR1cm57dGl0bGUsIHJlbW92ZVRhc2ssIGFkZFRhc2ssIG15VGFza0xpc3R9O1xuIH0pO1xuIFxuIGV4cG9ydCBkZWZhdWx0IHByb2plY3RJdGVtOyIsImNvbnN0IHRvRG9JdGVtPSAoKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcblxuICAgIGxldCBteVByb2plY3QgPSBcIk15IEZpcnN0IFByb2plY3RcIjtcblxuICAgIHJldHVybnt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBteVByb2plY3R9XG4gfSk7XG4gXG4gZXhwb3J0IGRlZmF1bHQgdG9Eb0l0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==