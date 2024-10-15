/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/main.js":
/*!************************!*\
  !*** ./styles/main.js ***!
  \************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    // Function to get the end time for today at 12 PM\r\n    function getEndTime() {\r\n        const now = new Date();\r\n        let endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0, 0); // 12 PM today\r\n\r\n        // If the current time is past 12 PM, set the end time to 12 PM tomorrow\r\n        if (now > endTime) {\r\n            endTime.setDate(endTime.getDate() + 1);\r\n        }\r\n\r\n        return endTime.getTime();\r\n    }\r\n\r\n    const endTime = getEndTime();\r\n\r\n    function updateTimer() {\r\n        const now = new Date().getTime();\r\n        const distance = endTime - now;\r\n\r\n        if (distance < 0) {\r\n            clearInterval(interval); // Stop the timer if countdown is over\r\n            document.getElementById('hours-1').textContent = '0';\r\n            document.getElementById('hours-2').textContent = '0';\r\n            document.getElementById('minutes-1').textContent = '0';\r\n            document.getElementById('minutes-2').textContent = '0';\r\n            return;\r\n        }\r\n\r\n        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r\n        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\r\n\r\n        const hoursStr = hours.toString().padStart(2, '0');\r\n        const minutesStr = minutes.toString().padStart(2, '0');\r\n\r\n        document.getElementById('hours-1').textContent = hoursStr.charAt(0);\r\n        document.getElementById('hours-2').textContent = hoursStr.charAt(1);\r\n        document.getElementById('minutes-1').textContent = minutesStr.charAt(0);\r\n        document.getElementById('minutes-2').textContent = minutesStr.charAt(1);\r\n    }\r\n\r\n    // Update the timer every second\r\n    const interval = setInterval(updateTimer, 1000);\r\n\r\n    // Initial call to populate the timer immediately\r\n    updateTimer();\r\n\r\n\r\n    // if header is scrolled, change the background color\r\n    const header = document.querySelector('.header');\r\n    window.addEventListener('scroll', () => {\r\n        if (window.scrollY > 0) {\r\n            header.classList.add('scrolled');\r\n        } else {\r\n            header.classList.remove('scrolled');\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack://fluxcakes/./styles/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./styles/main.js"]();
/******/ 	
/******/ })()
;