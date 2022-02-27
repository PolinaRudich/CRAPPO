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
var ratesGrid = document.querySelector(".image-analitics-grid");


const burger = document.querySelector('.burger');
if(burger) {
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        menuHeader.classList.toggle('_active');
    });
}

function createRateItem(rateData) {
    return `
    <img src="${rateData.logoSource}" class="bitcoin-card" alt="">
    <div class="bitcoin-text">
        <div class="bitcoin-abbr">${rateData.currencyShortName}</div>
        <div class="bitcoin-title">${rateData.currencyName}</div>
    </div>
    <div class="bitcoin-in-dollars">$${rateData.price}</div>
    <div class="percent-of-bitcoin">${rateData.percentageChange}</div>
    <div class="volume-of-bitcoin">$${rateData.volume}</div>
    `;
}



fetch('https://my-json-server.typicode.com/PolinaRudich/CRAPPO/rates')
    .then((response) => response.json())
    .then((json) => createRatesFromJson(json));

function createRatesFromJson(json) {
    let ratesHtml = '';
    let rateLiteCoinHtml = '';
    json.forEach(element => {
        if(element.percentageChange > 0)
        {
            element.percentageChange = "+" + element.percentageChange;
        }
        element.percentageChange = element.percentageChange + "%";
        let rateHtml = createRateItem(element);
        ratesHtml = ratesHtml + rateHtml;
    });
    ratesGrid.innerHTML = ratesHtml;
}