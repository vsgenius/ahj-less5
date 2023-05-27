export class Popover {
  constructor() {
    this._popovers = [];
  }
  showPopoper(messageHeader, messageBody, element) {
    const popoverElement = document.createElement("div");
    popoverElement.classList.add("popover");
    const popoverElementHeader = document.createElement("div");
    popoverElementHeader.classList.add("popover-header");
    popoverElementHeader.textContent = messageHeader;
    popoverElement.appendChild(popoverElementHeader);
    const popoverElementBody = document.createElement("div");
    popoverElementBody.classList.add("popover-body");
    popoverElementBody.textContent = messageBody;
    popoverElement.appendChild(popoverElementBody);
    const id = performance.now();
    this._popovers.push({
      id: performance.now(),
      element: popoverElement,
    });
    console.log(element.getBoundingClientRect())
    const {left ,top, height} = element.getBoundingClientRect();

    popoverElement.style.left = left + 'px';
    popoverElement.style.bottom = top - height +10 + 'px';
    document.body.appendChild(popoverElement);
    return id;
  }
  removePopover() {
    const popover = document.querySelector('.popover');
    document.body.removeChild(popover);
  }
}
