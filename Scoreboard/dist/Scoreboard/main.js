(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  max-width: 770px;\r\n}\r\n\r\n#block {\r\n  max-width: 770px;\r\n}\r\n\r\n#backdrop img, #poster img{\r\n  max-width:100%;\r\n  height: auto;\r\n}\r\n\r\n#backdrop {\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n#heroimage {\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n#score {\r\n  padding-left: 10px;\r\n  padding-top: 10px;\r\n  font-size: 36px;\r\n  text-align: center;\r\n  font-family: 'Franklin Gothic FS Med',sans-serif;\r\n  font-weight: bold;\r\n  height: 70px;\r\n  vertical-align: middle;\r\n}\r\n\r\n#audiencescore {\r\n  padding-left: 10px;\r\n  padding-top: 10px;\r\n  font-size: 36px;\r\n  text-align: center;\r\n  font-family: 'Franklin Gothic FS Med',sans-serif;\r\n  font-weight: bold;\r\n  vertical-align: middle;\r\n}\r\n\r\n#meterimg {\r\n  margin-left: 10px;\r\n  height: 48px;\r\n  width: 48px;\r\n}\r\n\r\n#audienceimg {\r\n  margin-left: 20px;\r\n  height: 48px;\r\n  width: 48px;\r\n}\r\n\r\n#scoreboard {\r\n  background-color: #EFEFEF;\r\n  width: 524.16px;\r\n  height: 194px;\r\n  max-height: 194px;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\r\n  overflow: hidden;\r\n}\r\n\r\n#progress {\r\n    margin-top:40px;\r\n    margin-bottom: 14px;\r\n    border-radius: 10px;\r\n    background-color: #D3D3D3;\r\n    height: 20px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n#progress-bar {\r\n  float: left;\r\n  height: 100%;\r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);\r\n  padding: 0;\r\n  transition: width .6s ease;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n#play {\r\n  text-align: left;\r\n  box-sizing: border-box;\r\n  border-width: 30px 0px 30px 60px;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent white;\r\n  vertical-align: middle;\r\n  color:transparent;\r\n  margin-right: 10px;\r\n  background-color: transparent;\r\n}\r\n\r\n#h1play {\r\n  color: white;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  opacity: .85;\r\n  font-size: 50px;\r\n  bottom: 10px;\r\n  left: 35px;\r\n  font-weight: 700;\r\n}\r\n\r\n#h1play h1{\r\n  font-weight: 700;\r\n  font-size: 50px;\r\n  line-height: 50px;\r\n  font-family: inherit;\r\n  padding-top: 20px;\r\n  display: inline;\r\n  vertical-align: middle;\r\n}\r\n\r\n#consensuspanel p span {\r\n  font-weight: bold;\r\n}\r\n\r\n#consensuspanel p a:hover{\r\n  cursor: pointer;\r\n  color: lightskyblue;\r\n}\r\n\r\n#consensuspanel p {\r\n  font-size: 11.5px;\r\n  display: block;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n#scoreboard-poster {\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n  margin-top: 12px;\r\n  padding: 0px;\r\n}\r\n\r\n#criticpanel, #audiencepanel {\r\n  height: 194px;\r\n  max-height: 194px;\r\n}\r\n\r\n#criticpanel {\r\n  width: 66.6666%;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n}\r\n\r\n#audiencepanel {\r\n  width: 33.33333%\r\n}\r\n\r\n#poster{\r\n  height: 336;\r\n  width: 29.16667%;\r\n  max-width: 29.16667%;\r\n  padding-left: 0;\r\n  padding-right: 10px;\r\n  margin:0;\r\n}\r\n\r\n#backdrop {\r\n  width: 100%;\r\n}\r\n\r\n#scoreboardrating {\r\n  padding:0px;\r\n  margin:0px;\r\n\r\n}\r\n\r\n#scoreboard-col {\r\n  width: 70.83333%;\r\n  max-width: 70.83333%;\r\n  padding:0px;\r\n  margin:0px;\r\n}\r\n\r\n#criticscorepanel, #consensuspanel {\r\n  width: 49.9%;\r\n  max-width: 162px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#consensuspanel {\r\n  border-right: white 1px;\r\n}\r\n\r\n#scoredata {\r\n  font-size: 12px;\r\n  padding-left: 10px;\r\n}\r\n\r\n#scoredata span {\r\n  font-weight: 500;\r\n}\r\n\r\n.scoretitle {\r\n  margin: 0;\r\n  padding: 10px 10px 5px 10px;\r\n  font-size: 15px;\r\n  color: #000;\r\n  font-weight: bold;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#usrscoredata {\r\n  font-size: 12px;\r\n  padding-left: 10px;\r\n}\r\n\r\n#usrscoredata span {\r\n  font-weight: 500;\r\n}\r\n\r\n.freshrotten {\r\n  margin-left: 25px;\r\n}\r\n\r\n@media (min-width:768px) {\r\n  #poster{\r\n    height: 336;\r\n    width: 29.16667%;\r\n  }\r\n\r\n  #backdrop {\r\n    width: 100%;\r\n  }\r\n\r\n  #backdrop img {\r\n    width: 740px;\r\n  }\r\n\r\n  #scoreboard-col {\r\n    width: 70.83333%;\r\n  }\r\n\r\n  #addmobilerating {\r\n    display:none;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  #addrating, #consensuspanel, #scoredata, #usrscoredata {\r\n    display: none;\r\n  }\r\n\r\n  #addmobilerating {\r\n    display:block;\r\n  }\r\n\r\n  #criticpanel, #audiencepanel {\r\n    width: 50%;\r\n  }\r\n\r\n  .scoretitle {\r\n    font-size: 12px;\r\n  }\r\n\r\n  #score, #audiencescore {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .freshrotten {\r\n    display: none;\r\n  }\r\n\r\n  #meterimg {\r\n    margin-left: 10px;\r\n    height: auto;\r\n    width: 90%;\r\n    max-width: 48px;\r\n  }\r\n\r\n  #audienceimg {\r\n    margin-left: 10px;\r\n    height: auto;\r\n    width: 90%;\r\n    max-width: 48px;\r\n  }\r\n\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.col {\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  max-width: 100%;\r\n}\r\n\r\ncw-modal {\r\n  /* modals are hidden by default */\r\n  display: none;\r\n\r\n\r\n}\r\n\r\nbody.cw-modal-open {\r\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\r\n  overflow: hidden;\r\n\r\n}\r\n\r\ncw-modal iframe {\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsdURBQXVEO0VBQ3ZELHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVOztBQUVaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztBQUVGOztBQUVBO0VBR0UsYUFBYTtFQUViLGVBQWU7QUFDakI7O0FBRUE7RUFFRSxhQUFhO0VBR2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTs7O0FBR2Y7O0FBRUE7RUFDRSw2RUFBNkU7RUFDN0UsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXOztBQUViIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgbWF4LXdpZHRoOiA3NzBweDtcclxufVxyXG5cclxuI2Jsb2NrIHtcclxuICBtYXgtd2lkdGg6IDc3MHB4O1xyXG59XHJcblxyXG4jYmFja2Ryb3AgaW1nLCAjcG9zdGVyIGltZ3tcclxuICBtYXgtd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNiYWNrZHJvcCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2hlcm9pbWFnZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG4jc2NvcmUge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIEZTIE1lZCcsc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcblxyXG4jYXVkaWVuY2VzY29yZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgRlMgTWVkJyxzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbiNtZXRlcmltZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiA0OHB4O1xyXG59XHJcblxyXG4jYXVkaWVuY2VpbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogNDhweDtcclxufVxyXG5cclxuI3Njb3JlYm9hcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XHJcbiAgd2lkdGg6IDUyNC4xNnB4O1xyXG4gIGhlaWdodDogMTk0cHg7XHJcbiAgbWF4LWhlaWdodDogMTk0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3Byb2dyZXNzIHtcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDNEMztcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3Byb2dyZXNzLWJhciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMTUpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggLjZzIGVhc2U7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbiNwbGF5IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXdpZHRoOiAzMHB4IDBweCAzMHB4IDYwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jaDFwbGF5IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBvcGFjaXR5OiAuODU7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBsZWZ0OiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiNoMXBsYXkgaDF7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbiNjb25zZW5zdXNwYW5lbCBwIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jY29uc2Vuc3VzcGFuZWwgcCBhOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogbGlnaHRza3libHVlO1xyXG59XHJcblxyXG4jY29uc2Vuc3VzcGFuZWwgcCB7XHJcbiAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcblxyXG4jc2NvcmVib2FyZC1wb3N0ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuI2NyaXRpY3BhbmVsLCAjYXVkaWVuY2VwYW5lbCB7XHJcbiAgaGVpZ2h0OiAxOTRweDtcclxuICBtYXgtaGVpZ2h0OiAxOTRweDtcclxufVxyXG5cclxuI2NyaXRpY3BhbmVsIHtcclxuICB3aWR0aDogNjYuNjY2NiU7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuI2F1ZGllbmNlcGFuZWwge1xyXG4gIHdpZHRoOiAzMy4zMzMzMyVcclxufVxyXG5cclxuI3Bvc3RlcntcclxuICBoZWlnaHQ6IDMzNjtcclxuICB3aWR0aDogMjkuMTY2NjclO1xyXG4gIG1heC13aWR0aDogMjkuMTY2NjclO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbjowO1xyXG59XHJcblxyXG4jYmFja2Ryb3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jc2NvcmVib2FyZHJhdGluZyB7XHJcbiAgcGFkZGluZzowcHg7XHJcbiAgbWFyZ2luOjBweDtcclxuXHJcbn1cclxuXHJcbiNzY29yZWJvYXJkLWNvbCB7XHJcbiAgd2lkdGg6IDcwLjgzMzMzJTtcclxuICBtYXgtd2lkdGg6IDcwLjgzMzMzJTtcclxuICBwYWRkaW5nOjBweDtcclxuICBtYXJnaW46MHB4O1xyXG59XHJcblxyXG4jY3JpdGljc2NvcmVwYW5lbCwgI2NvbnNlbnN1c3BhbmVsIHtcclxuICB3aWR0aDogNDkuOSU7XHJcbiAgbWF4LXdpZHRoOiAxNjJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI2NvbnNlbnN1c3BhbmVsIHtcclxuICBib3JkZXItcmlnaHQ6IHdoaXRlIDFweDtcclxufVxyXG5cclxuI3Njb3JlZGF0YSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuI3Njb3JlZGF0YSBzcGFuIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc2NvcmV0aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHggMTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiN1c3JzY29yZWRhdGEge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbiN1c3JzY29yZWRhdGEgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcbi5mcmVzaHJvdHRlbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgI3Bvc3RlcntcclxuICAgIGhlaWdodDogMzM2O1xyXG4gICAgd2lkdGg6IDI5LjE2NjY3JTtcclxuICB9XHJcblxyXG4gICNiYWNrZHJvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNiYWNrZHJvcCBpbWcge1xyXG4gICAgd2lkdGg6IDc0MHB4O1xyXG4gIH1cclxuXHJcbiAgI3Njb3JlYm9hcmQtY29sIHtcclxuICAgIHdpZHRoOiA3MC44MzMzMyU7XHJcbiAgfVxyXG5cclxuICAjYWRkbW9iaWxlcmF0aW5nIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNhZGRyYXRpbmcsICNjb25zZW5zdXNwYW5lbCwgI3Njb3JlZGF0YSwgI3VzcnNjb3JlZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgI2FkZG1vYmlsZXJhdGluZyB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuXHJcbiAgI2NyaXRpY3BhbmVsLCAjYXVkaWVuY2VwYW5lbCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnNjb3JldGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgI3Njb3JlLCAjYXVkaWVuY2VzY29yZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuZnJlc2hyb3R0ZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNtZXRlcmltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ4cHg7XHJcbiAgfVxyXG5cclxuICAjYXVkaWVuY2VpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0OHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5jdy1tb2RhbCB7XHJcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG5cclxufVxyXG5cclxuYm9keS5jdy1tb2RhbC1vcGVuIHtcclxuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuY3ctbW9kYWwgaWZyYW1lIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"block\">\n<div id=\"backdrop\" (click)=\"playVideo($event)\">\n  <div id=\"heroimage\">\n  <img src=\"{{backdropUrl}}\">\n  <div id=\"h1play\"><button id=\"play\"></button><h1>{{title}}</h1></div>\n</div>\n</div>\n<div id=\"scoreboard-poster\" class=\"row\">\n  <div class=\"col\" id=\"poster\"><img src=\"{{posterUrl}}\"></div>\n  <div id=\"scoreboard-col\" class=\"col\">\n    <div class=\"row\" id=\"scoreboardrating\">\n      <div class=\"row\" id=\"scoreboard\">\n              <div class=\"row\" id=\"criticpanel\">\n                <div id=\"criticscorepanel\">\n                    <h4 class=\"scoretitle\">TOMOTOMETER</h4>\n                    <div id=\"scoring\"><img id=\"meterimg\" src=\"{{criticRatingImg}}\"><span id=\"score\">{{tomotoMeter}}%</span></div>\n                    <div id=\"scoredata\">\n                      <div><span>Average Rating: </span>{{avgRating}}/10</div>\n                      <div><span>Reviews Counted: </span>{{numReviews}}</div>\n                      <div><span class=\"freshrotten\">Fresh: </span>{{fresh}}</div>\n                      <div><span class=\"freshrotten\">Rotten: </span>{{rotten}}</div>\n                    </div>\n                </div>\n                <div id=\"consensuspanel\">\n                 <p style=\"float:right; font-weight:bold; padding-top:5px;\"><a [ngStyle]=\"{'font-weight': topCritics ? 'normal' : 'bold'}\" (click)=\"changeAllCritic($event)\">All Critics</a> | <a [ngStyle]=\"{'font-weight': topCritics ? 'bold' : 'normal'}\" (click)=\"changeTopCritic($event)\">Top Critics</a></p>\n                  <div id=\"progress\">\n                    <div id=\"progress-bar\"  [ngStyle]=\"{'width.%': tomotoMeter, 'background-color': tomotoMeter > 55 ? '#FA320A' : '#0ac855' }\"></div>\n                  </div>\n                  <div>\n                  <p id=\"consensus\"><span>Critic Consensus: </span>{{criticConsensus}}</p>\n                  </div>\n                </div>\n              </div>\n              <div id=\"audiencepanel\">\n                  <h4 class=\"scoretitle\">AUDIENCE SCORE</h4>\n                  <div id=\"usrscoring\"><img id=\"audienceimg\" src=\"{{usrRatingImg}}\"><span id=\"audiencescore\">{{usrScore}}</span></div>\n                  <div id=\"usrscoredata\">\n                  <div><span>Average Rating: </span>{{avgUsrRating}}/10</div>\n                  <div><span>User Ratings: </span>{{numUsrReviews}}</div>\n                  </div>\n              </div>\n      </div>\n      <div id=\"post-reviews\"></div>\n    </div>\n  </div>\n</div>\n<div id=\"addmobilerating\"></div>\n</div>\n<cw-modal id=\"youtube-modal\">\n    <iframe class=\"e2e-iframe-trusted-src\" frameborder=\"0\"  [src]=\"videoUrl\"></iframe>\n</cw-modal>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(data, modalService, sanitizer) {
        this.data = data;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        //set default state
        this.title = 'Untitled';
        this.titleUrl = '';
        this.topCritics = false;
        //Image/Vid Defaults
        this.videoUrl = null;
        this.posterUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/poster.default.gif';
        this.backdropUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/backdrop.default.jpg';
        //Tomato Meter Defaults
        this.tomotoMeter = 60;
        this.avgRating = 5.0;
        this.numReviews = 50;
        this.rotten = 0;
        this.fresh = 0;
        this.criticConsensus = 'Some random review goes here';
        this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/large-fresh.png';
        //User Defaults
        this.usrScore = 'N/A';
        this.avgUsrRating = 5.0;
        this.numUsrReviews = 100;
        this.usrRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/no-audience.png';
        this.videoUrlText = 'http://www.youtube.com/embed/dQw4w9WgXcQ';
    }
    AppComponent.prototype.playVideo = function (event) {
        if (this.titleUrl !== 'black_panther') {
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlText + '?autoplay=1');
        }
        this.modalService.open('youtube-modal');
    };
    AppComponent.prototype.changeTopCritic = function (event) {
        if (!this.topCritics) {
            this.topCritics = true;
            this.getTopCriticScore();
        }
    };
    AppComponent.prototype.changeAllCritic = function (event) {
        if (this.topCritics) {
            this.topCritics = false;
            this.getTomotoMeterScore();
        }
    };
    AppComponent.prototype.getTopCriticScore = function () {
        var _this = this;
        this.data.getTopCriticScore(this.titleUrl).subscribe(function (data) {
            _this.tomotoMeter = Math.round(data['tomatometer']);
            _this.avgRating = data['avgrating'];
            _this.numReviews = data['numOfReviews'];
            _this.rotten = data['rotten'];
            _this.fresh = data['fresh'];
            var aCriticReview = data['randomReview'].substring(0, 137);
            _this.criticConsensus = aCriticReview.substring(0, aCriticReview.lastIndexOf('.') + 1);
            if (_this.tomotoMeter > 75) {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/large-certified.png';
            }
            else if (_this.tomotoMeter >= 55 && _this.tomotoMeter < 75) {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/large-fresh.png';
            }
            else {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/large-rotten.png';
            }
        });
    };
    AppComponent.prototype.getTomotoMeterScore = function () {
        var _this = this;
        this.data.getTomotometer(this.titleUrl).subscribe(function (data) {
            _this.tomotoMeter = Math.round(data['tomatometer']);
            _this.avgRating = data['avgrating'];
            _this.numReviews = data['numOfReviews'];
            _this.rotten = data['rotten'];
            _this.fresh = data['fresh'];
            var aCriticReview = data['randomReview'].substring(0, 137);
            _this.criticConsensus = aCriticReview.substring(0, aCriticReview.lastIndexOf('.') + 1);
            if (_this.tomotoMeter > 75) {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/large-certified.png';
            }
            else if (_this.tomotoMeter >= 55 && _this.tomotoMeter < 75) {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/large-fresh.png';
            }
            else {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/large-rotten.png';
            }
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = window.location.href;
        if (url[url.length - 1] === '/') {
            url = url.substring(0, url.length - 1);
        }
        var urlArray = url.split('/');
        this.titleUrl = urlArray[urlArray.length - 1];
        this.data.getMovieInfo(this.titleUrl).subscribe(function (data) {
            _this.title = data['title'];
            _this.posterUrl = data['poster_url'];
            _this.backdropUrl = data['backdrop_url'];
            _this.videoUrlText = 'http://www.youtube.com/embed/' + data['video'];
            _this.videoUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.videoUrlText);
            var movieId = data['id'];
            _this.data.getUserReviewInfo(movieId).subscribe(function (data) {
                console.log(data);
                _this.usrScore = String(Math.round(data[0]['audienceScore'])) + '%';
                _this.avgUsrRating = Math.round(data[0]['averageRating'] * 10) / 10;
                _this.numUsrReviews = data[0]['userRatings'];
                if (data[0]['userRatings'] < 2) {
                    _this.usrRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/no-audience.png';
                }
                else if (data[0]['audienceScore'] >= 50) {
                    _this.usrRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/audience-liked.png';
                }
                else if (data[0]['audienceScore'] < 50) {
                    _this.usrRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/audience-disliked.png';
                }
            });
        });
        this.getTomotoMeterScore();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getMovieInfo = function (titleUrl) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].url + "m/movieinfo/" + titleUrl);
    };
    DataService.prototype.getTomotometer = function (titleUrl) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].url + "cr/tomotometer/" + titleUrl);
    };
    DataService.prototype.getTopCriticScore = function (titleUrl) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].url + "cr/topcriticmeter/" + titleUrl);
    };
    DataService.prototype.getUserReviewInfo = function (movieId) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].usersUrl + "reviews/scoreboard/" + movieId);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/modal.service.ts":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cw-modal-body {\r\n  padding: 5px;\r\n  background: black;\r\n  /* margin exposes part of the modal background */\r\n  margin-top: 120px;\r\n  width:90%;\r\n  max-width:1000px;\r\n  height:50%;\r\n  display: inline-block;\r\n}\r\n\r\n.cw-modal {\r\n  /* modal container fixed across whole screen */\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  text-align: center;\r\n\r\n  /* z-index must be higher than .cw-modal-background */\r\n  z-index: 1000;\r\n\r\n  /* enables scrolling for tall modals */\r\n  overflow: auto;\r\n\r\n\r\n}\r\n\r\n.cw-modal-background {\r\n  /* modal background fixed across whole screen */\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n\r\n  /* semi-transparent black  */\r\n  background-color: #000;\r\n  opacity: 0.8;\r\n\r\n  /* z-index must be below .cw-modal and above everything else  */\r\n  z-index: 900;\r\n}\r\n\r\nbody.cw-modal-open {\r\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\r\n  overflow: hidden;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0RBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxrQkFBa0I7O0VBRWxCLHFEQUFxRDtFQUNyRCxhQUFhOztFQUViLHNDQUFzQztFQUN0QyxjQUFjOzs7QUFHaEI7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87O0VBRVAsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZOztFQUVaLCtEQUErRDtFQUMvRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2RUFBNkU7RUFDN0UsZ0JBQWdCOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3ctbW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICB3aWR0aDo5MCU7XHJcbiAgbWF4LXdpZHRoOjEwMDBweDtcclxuICBoZWlnaHQ6NTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmN3LW1vZGFsIHtcclxuICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmN3LW1vZGFsLWJhY2tncm91bmQgKi9cclxuICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcblxyXG59XHJcblxyXG4uY3ctbW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuXHJcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5jdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xyXG4gIHotaW5kZXg6IDkwMDtcclxufVxyXG5cclxuYm9keS5jdy1tb2RhbC1vcGVuIHtcclxuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'cw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('cw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('cw-modal-open');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cw-modal',
            template: "<div class=\"cw-modal\">\n            <div class=\"cw-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"cw-modal-background\"></div>",
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    url: 'http://localhost:9001/',
    usersUrl: 'http://localhost:9003/'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    url: 'http://localhost:9001/',
    usersUrl: 'http://localhost:9003/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eric\front-end-capstone\Rotten_Tomatoes_Scoreboard_Service\Scoreboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map