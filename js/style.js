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


