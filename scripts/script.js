'use strict';

const addAd = document.querySelector('.add__ad');
const modalAdd = document.querySelector('.modal__add');
const modalBtnSubmit = document.querySelector('.modal__btn-submit');
const modalSubmit = document.querySelector('.modal form');
const catalog = document.querySelector('.catalog');
const modalItem = document.querySelector('.modal__item');

addAd.addEventListener('click', ()=>{
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;

});

modalAdd.addEventListener('click', (e) =>{
    const target = e.target;
    if(target.classList.contains('modal__add') || target.classList.contains('modal__close')){
        modalAdd.classList.add('hide');
        modalSubmit.reset();
    }
}
);

catalog.addEventListener('click', (e) =>{
    const target = e.target;
    if(target.closest('.card')){
        modalItem.classList.remove('hide');
    }
});

modalItem.addEventListener('click', (e) =>{
    const target = e.target;
    if(target.classList.contains('modal__item') || target.classList.contains('modal__close')){
        modalItem.classList.add('hide');
    }
}
);

addEventListener('keydown', function(e){
    console.log(e.keyCode);
    if(e.keyCode == 27){
        const modals = document.querySelectorAll('.modal');
        for(let modal of modals){
            modal.classList.add('hide');
        }
    }
});