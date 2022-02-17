/* Прокрутка меню */
'use strict';
const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
const menuHeader = document.querySelector('.header-menu');

if(menuLinks.length>0){
    menuLinks.forEach(menuLink=>{
        menuLink.addEventListener("click",onMenuLinkClick);
    });
    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto&&document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if(burger.classList.contains('_active')){
                burger.classList.remove('_active');
                document.body.classList.remove('_lock');
                menuHeader.classList.remove('_active');
            };
            window.scrollTo({
                top:gotoBlockValue,
                behavior:"smooth"
            });
            e.preventDefault();
            
        }
    }
}
const burger = document.querySelector('.burger');
if(burger){
    burger.addEventListener("click", function(e){
        burger.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        menuHeader.classList.toggle('_active');
    });
}
