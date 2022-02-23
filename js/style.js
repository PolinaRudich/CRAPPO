/* Прокрутка меню */
'use strict';
const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
const menuHeader = document.querySelector('.header-menu');
const arrowButtonsBefore = document.getElementsByClassName('circle-animated');
const arrowButtonAfter = document.querySelector('.start-mining');
var textAnimated = document.createElement('div');
var circleAnimated = document.createElement('div');
var arrowAnimated = document.createElement('div');
var element  = document.querySelector(".circle-animated");
var bigArrow = document.querySelector(".arrow-circle");

const burger = document.querySelector('.burger');
if(burger) {
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        menuHeader.classList.toggle('_active');
    });
}
if(arrowButtonsBefore) {

    for (let arrowButtonBefore of arrowButtonsBefore) {
        arrowButtonBefore.addEventListener("mouseenter", function(e) {
            
            console.log(e);
            bigArrow.classList.toggle('_visibility-collapsed');
            element.appendChild(circleAnimated);
            element.appendChild(textAnimated);
            circleAnimated.appendChild(arrowAnimated);
            textAnimated.classList.toggle("start-mining-animated-text");
            textAnimated.innerHTML = "Start mining now";
            circleAnimated.classList.toggle('try-arrow');
            arrowAnimated.classList.toggle('arrow');
            arrowButtonBefore.classList.toggle('_passive');
            arrowButtonAfter.classList.toggle('_active');
        });

        arrowButtonBefore.addEventListener('mouseleave', function(e){
            arrowButtonBefore.classList.toggle('_passive');
            arrowButtonAfter.classList.toggle('_active');
            circleAnimated.classList.toggle('try-arrow');
            arrowAnimated.classList.toggle('arrow');
            bigArrow.classList.toggle('_visibility-collapsed');
            textAnimated.classList.toggle("start-mining-animated-text");
        })
    };
        
}

