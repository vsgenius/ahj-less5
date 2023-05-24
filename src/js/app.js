import { isValidCardHolder,isValidNumber } from "./validate";
const cardinput = document.getElementById('card-input');
const btnValid = document.getElementById('btn-Valid')
cardinput.addEventListener("keyup", (e) => {
    const res = isValidCardHolder(e.target.value);
    const hiddens = document.querySelectorAll('.image');
    for (let i = 0; i < hiddens.length; i++) {
        hiddens[i].classList.add('hidden');
     }
    if (res) {
        const value = document.getElementById(res);
        if (value) {
            value.classList.remove('hidden')
        }
    }
})
btnValid.addEventListener("click",(e)=>{
    e.preventDefault;;
    if (cardinput.value) {
        if (isValidNumber(cardinput.value)) {
            alert('Номер карты верный')
        } else {
            alert('Ошибка в номере карты')
        }
    }

})