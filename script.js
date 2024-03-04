let show = true;
const menuContent = document.querySelector(".content");
const menuToggle = menuContent.querySelector(".menu-toggle");

menuToggle.addEventListener('click', ()=>{
    menuContent.classList.toggle('on', show);
    show = !show;
    
});

const menuPorque = document.querySelector(".porque-prime");
const menuTogglePorque = menuPorque.querySelector(".menu-toggle-porque1");

menuTogglePorque.addEventListener('click', ()=>{
    menuPorque.classList.toggle('on', show);
    show = !show;
    
});

const menuTogglePorque2 = menuPorque.querySelector(".menu-toggle-porque2");

menuTogglePorque2.addEventListener('click', ()=>{
    menuPorque.classList.toggle('onn', show);
    show = !show;
    
});

/* --------------- BOTÔES DA SESSÂO "PERGUNTAS" --------------- */

/* PERGUNTA 1 */

const menuPerguntas = document.querySelector(".perguntas");
const menuTogglePerguntas = menuPerguntas.querySelector(".perguntas-menu-toggle-1");

menuTogglePerguntas.addEventListener('click', ()=>{
    menuPerguntas.classList.toggle('on-1', show);
    show = !show;
    
});



/* PERGUNTA 2 */

const menuPerguntas2 = document.querySelector(".perguntas");
const menuTogglePerguntas2 = menuPerguntas.querySelector(".perguntas-menu-toggle-2");

menuTogglePerguntas2.addEventListener('click', ()=>{
    menuPerguntas2.classList.toggle('on-2', show);
    show = !show;
    
});



/* PERGUNTA 3 */

const menuPerguntas3 = document.querySelector(".perguntas");
const menuTogglePerguntas3 = menuPerguntas.querySelector(".perguntas-menu-toggle-3");

menuTogglePerguntas3.addEventListener('click', ()=>{
    menuPerguntas3.classList.toggle('on-3', show);
    show = !show;
    
});



/* PERGUNTA 4 */

const menuPerguntas4 = document.querySelector(".perguntas");
const menuTogglePerguntas4 = menuPerguntas.querySelector(".perguntas-menu-toggle-4");

menuTogglePerguntas4.addEventListener('click', ()=>{
    menuPerguntas4.classList.toggle('on-4', show);
    show = !show;
    
});



/* PERGUNTA 5 */

const menuPerguntas5 = document.querySelector(".perguntas");
const menuTogglePerguntas5 = menuPerguntas.querySelector(".perguntas-menu-toggle-5");

menuTogglePerguntas5.addEventListener('click', ()=>{
    menuPerguntas5.classList.toggle('on-5', show);
    show = !show;
    
});



/* PERGUNTA 6 */

const menuPerguntas6 = document.querySelector(".perguntas");
const menuTogglePerguntas6 = menuPerguntas.querySelector(".perguntas-menu-toggle-6");

menuTogglePerguntas6.addEventListener('click', ()=>{
    menuPerguntas6.classList.toggle('on-6', show);
    show = !show;
    
});



/* PERGUNTA 7 */

const menuPerguntas7 = document.querySelector(".perguntas");
const menuTogglePerguntas7 = menuPerguntas.querySelector(".perguntas-menu-toggle-7");

menuTogglePerguntas7.addEventListener('click', ()=>{
    menuPerguntas7.classList.toggle('on-6', show);
    show = !show;
    
});