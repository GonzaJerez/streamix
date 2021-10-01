'use strict';

const menu = document.querySelector('#menu');
const aside = document.querySelector('#aside');

document.querySelector('#botonMenu').addEventListener('click', ()=> {
    menu.style.width= '70%';
    aside.style.width= '0%';
})

document.querySelectorAll('.back').forEach( e => {
    e.addEventListener( 'click', ()=>{
        menu.style.width= '0%';
        aside.style.width= '0%';
    })
})

document.querySelector('#userMenu').addEventListener('click', ()=>{
    aside.style.width = '70%';
    menu.style.width= '0%';
})