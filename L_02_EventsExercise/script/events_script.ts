
namespace EventsInspector {
window.addEventListener("load", handleLoad);

function handleLoad(): void {

    document.addEventListener("mousemove", setInfoBox);

    let body: HTMLElement = <HTMLElement>document.querySelector("body");
    body.addEventListener("mousemove", setInfoBox);
    body.addEventListener("click", logInfo);
    body.addEventListener("keyup", logInfo);
}

function setInfoBox(_event: MouseEvent): void {
    //console.log(_event);

    let x: number = _event.pageX;
    let y: number = _event.pageY;

    let spanElement: HTMLSpanElement =  <HTMLElement>document.querySelector("span");
    let info: HTMLElement = spanElement;

    info.style.top = y + "px";
    info.style.left = x + "px";

    info.textContent = x + " x   " + " " + " "  + y + " y " + _event.target;

   



}

function logInfo(_event: Event): void {

    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);


}
}
/**
document.addEventListener("load", handleLoad);
document.addEventListener("mousemove", setInfoBox);
document.addEventListener("click", logInfo);
document.addEventListener("keyup", logInfo);
**/