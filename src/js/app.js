import { Popover } from "./popover"
const messageHeader = 'Popover title';
const messageBody = 'И вот несколько удивительных материалов. Это очень увлекательно. Верно? ';
const popoverFactory = new Popover();
const btn = document.getElementById('btn-popover');
btn.addEventListener('click', (e) => {
    e.preventDefault;
        if (document.querySelector('.popover')) {
            popoverFactory.removePopover();
        } else {
            popoverFactory.showPopoper(messageHeader,messageBody,e.target);
        }


})
