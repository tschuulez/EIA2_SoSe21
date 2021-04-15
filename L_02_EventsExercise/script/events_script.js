"use strict";
var EventsInspector;
(function (EventsInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        let body = document.querySelector("body");
        body.addEventListener("mousemove", setInfoBox);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        //console.log(_event);
        let x = _event.pageX;
        let y = _event.pageY;
        let spanElement = document.querySelector("span");
        let info = spanElement;
        info.style.top = y + "px";
        info.style.left = x + "px";
        //info.textContent = x + " x   " + " " + " "  + y + " y " + _event.target;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(EventsInspector || (EventsInspector = {}));
/**
document.addEventListener("load", handleLoad);
document.addEventListener("mousemove", setInfoBox);
document.addEventListener("click", logInfo);
document.addEventListener("keyup", logInfo);
**/ 
//# sourceMappingURL=events_script.js.map