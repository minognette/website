let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');
let closeCancelButton = document.querySelector('.cancel');
let SubmitButton = document.querySelector('.submit');
let ClsButton = document.querySelector('.cls');
let Prst = document.querySelector('.prosto');


openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

closeCancelButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

SubmitButton.addEventListener('click', () => {
    Prst.classList.add('active');
});

ClsButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    Prst.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        Prst.classList.remove('active');
    }
});