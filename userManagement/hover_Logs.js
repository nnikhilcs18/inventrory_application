export function showLogs(event) {

  event.preventDefault();
  let showLog = document.querySelector('.showLogs');
  showLog.classList.add("visibility-hidden");

  let detLog = document.querySelector(".detailedLogs");
  detLog.classList.remove("display-none");
}


export function closeLogs() {
  let logs = document.querySelector('.showLogs');
  logs.classList.remove("visibility-hidden");

  let detLog = document.querySelector(".detailedLogs");
  detLog.classList.add("display-none");
}



export function showHovered() {
  let hover = document.querySelector(".row-hovered");
  if (hover) {

    hover.classList.remove("row-hovered");
    this.classList.add("row-hovered");
  } else {
    this.classList.add("row-hovered");

  }
}
