/* Прокрутка меню */
'use strict';
const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
const menuHeader = document.querySelector('.header-menu');
const arrowButtonsBefore = document.getElementsByClassName('circle-animated');
const arrowButtonAfter = document.querySelector('.start-mining');
var textAnimated = document.createElement('div');
var circleAnimated = document.createElement('div');
var arrowAnimated = document.createElement('div');
var element = document.querySelector(".circle-animated");
var bigArrow = document.querySelector(".arrow-circle");
var ratesGrid = document.querySelector(".image-analitics-grid");
var array = new Array();
var textBoxCalc = document.querySelector(".text");
var buttonCalc = document.querySelector(".calc");
var resultCalc = document.querySelector(".nums");
var resultCalcIndollars = document.querySelector(".diff-color");
var calcForm = document.querySelector(".calc-form");
var optionValue = document.getElementById('option-value').options;

//CALC

console.log(optionValue.selectedIndex);
function ClickToCalculate(){
var res = '';
 let summ = textBoxCalc.value;
 let convertedSumm;
 
    if(optionValue.selectedIndex===0){
        convertedSumm = summ *1000000000000;

    }
 
 if(optionValue.selectedIndex===1){
    convertedSumm = summ -1;
 }

 resultCalc.innerHTML = res + convertedSumm + " ETN";
 
}



const burger = document.querySelector('.burger');
if (burger) {
    burger.addEventListener("click", function (e) {
        burger.classList.toggle('_active');
        document.body.classList.toggle('_lock');
        menuHeader.classList.toggle('_active');
    });
}

function createRateItem(rateData, id) {
    return `
    <img src="${rateData.logoSource}" class="bitcoin-card" alt="">
    <div class="bitcoin-text">
        <div class="bitcoin-abbr">${rateData.currencyShortName}</div>
        <div class="bitcoin-title">${rateData.currencyName}</div>
    </div>
    <div id="price${id}" class="bitcoin-in-dollars"></div>
    <div id="percent${id}" class="percent-of-bitcoin"></div>
    <div id="volume${id}" class="volume-of-bitcoin">$</div>
    `;
}



fetch('https://my-json-server.typicode.com/PolinaRudich/CRAPPO/rates')
    .then((response) => response.json())
    .then((json) => { createRatesFromJson(json); createPercentage(json); });

function createRatesFromJson(json) {
    let ratesHtml = '';
    let rateLiteCoinHtml = '';
    json.forEach((element, index) => {
        var currentId = index;
        let rateHtml = createRateItem(element, currentId);
        ratesHtml = ratesHtml + rateHtml;


    });
    ratesGrid.innerHTML = ratesHtml;
    json.forEach((element, index) => {
        var currentId = index;
        createPercentage(element, currentId);
    });
}

function createPercentage(json, id) {
    var percentOfBitcoin = document.querySelector('#percent' + id);
    var priceOfBitcoin = document.querySelector('#price' + id);
    var volumeOfBitcoin = document.querySelector('#volume'+id);
    var i = 0;
    var j = 0;
    var q = 0;
    setInterval(function(){
        priceOfBitcoin.innerHTML = json.price[j];
        volumeOfBitcoin.innerHTML = json.volume[q];
        percentOfBitcoin.innerHTML = getPercentageString(json.percentageChange[i]);
        if (i + 1 == json.percentageChange.length) { 
            i = 0; 
        } 
        else { 
            i++; 
        } 
        if(j + 1 == json.price.length) { 
            j = 0; 
        } 
        else { 
            j++; 
        } 
        if(q + 1 == json.volume.length) { 
            q = 0; 
        } 
        else { 
            q++; 
        } 
 
     },500)


}


function getPercentageString(percentage) {
    if (percentage > 0) {
        percentage = "+" + percentage;
    }
    return percentage + "%";
}
