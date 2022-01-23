(()=>{"use strict";var e={307:(e,t,n)=>{n.r(t)},781:()=>{console.log("%c Самооценка 85/190","color:#fff;background: #000"),console.log("%c Базовая структура: (+5) На сайте должно быть два вида: «Гараж» и «Победители».","color:#fff;background: #000"),console.log("%c (+5) Представление «Гараж» должно содержать его название, номер страницы и полное количество объектов в базе (сколько машин у пользователя в гараже).","color:#fff;background: #000"),console.log("%c (+5) Представление «Победители» должно содержать его название, номер страницы и полное количество элементов в базе данных (сколько записей содержит таблица победителей).","color:#fff;background: #000"),console.log("%c (+10) Состояние просмотра должно сохраняться, когда пользователь переключается с одного представления на другое. Например, номер страницы не должен сбрасываться, элементы управления вводом должны содержать то, что они содержали до переключения и т. д.)","color:#fff;background: #000"),console.log("%c Вид «Гараж»: (+15) Пользователь должен иметь возможность создавать, обновлять, удалять автомобили и видеть список автомобилей. У автомобиля всего два атрибута: «имя» и «цвет». Для операции «удалить» автомобиль должен быть удален как из таблицы «гараж», так и из таблицы «победители».","color:#fff;background: #000"),console.log("%c (+10) Пользователь должен иметь возможность выбрать любой цвет из палитры RGB, как здесь, и увидеть изображение автомобиля, окрашенного в выбранный цвет и название автомобиля.","color:#fff;background: #000"),console.log("%c (+5) Рядом с изображением автомобиля должны быть кнопки для обновления его атрибутов или удаления.","color:#fff;background: #000"),console.log("%c (+10) На виде 'Гараж' должна быть нумерация страниц (7 машин на одной странице). ","color:#fff;background: #000"),console.log("%c (+10) Должна быть кнопка создания случайных машин (100 машин за клик). Название должно быть собрано из двух случайных частей, например «Tesla» + «Model S» или «Ford» + «Mustang» (не менее 10 разных имен для каждой части). Цвет также должен генерироваться случайным образом.","color:#fff;background: #000"),console.log("%c (0) Автомобильная анимация","color:#fff;background: #000"),console.log("%c (0) Анимация гонки:","color:#fff;background: #000"),console.log("%c Вид «Победители» (+10)","color:#fff;background: #000"),console.log("%c (+5) Должна быть нумерация страниц (10 победителей на одной странице).","color:#fff;background: #000"),console.log("%c (+5) Таблица должна содержать следующие столбцы: «№», «Изображение автомобиля», «Название автомобиля», «Количество побед», «Лучшее время в секундах» (названия столбцов могут отличаться). Если один и тот же автомобиль выигрывает более одного раза, количество побед должно быть увеличено, а лучшее время должно быть сохранено, только если оно лучше сохраненного.","color:#fff;background: #000")},753:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function d(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(d,i)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.updateCar=t.deleteCar=t.createCar=t.getCar=t.getCars=void 0;const a=n(632);t.getCars=(e=1,t=7)=>o(void 0,void 0,void 0,(function*(){const n=yield fetch(`${a.garage}?_page=${e}&_limit=${t}`);return{items:yield n.json(),count:n.headers.get("X-Total-Count")}})),t.getCar=e=>o(void 0,void 0,void 0,(function*(){return(yield fetch(`${a.garage}/${e}`)).json()})),t.createCar=e=>o(void 0,void 0,void 0,(function*(){return(yield fetch(a.garage,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json()})),t.deleteCar=e=>o(void 0,void 0,void 0,(function*(){return(yield fetch(`${a.garage}/${e}`,{method:"DELETE"})).json()})),t.updateCar=(e,t)=>o(void 0,void 0,void 0,(function*(){return(yield fetch(`${a.garage}/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json()}))},327:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={carsPage:1,carsCount:4,winnersPage:1,winnersCount:1,view:"garage",sortBy:null,sortOrder:null}},632:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.names=t.models=t.winners=t.engine=t.garage=void 0;const n="http://127.0.0.1:3000";t.garage=`${n}/garage`,t.engine=`${n}/engine`,t.winners=`${n}/winners`,t.models=["Tesla","Mersedes","BMW","Toyota","Zhiguli","Moskwich","Opel","Aston Martin","Porshe"],t.names=["Model S","CLK","X5","Camry","Combi","9","Corsa","DB9","Cayene"]},179:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function d(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(d,i)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.renderAppHTML=void 0;const a=n(924),r=n(825);t.renderAppHTML=()=>o(void 0,void 0,void 0,(function*(){const e=`<div class="menu">\n  <button class="button garage-menu-button primary" id="garage-menu">To Garage</button>\n  <button class="button winners-menu-button primary" id="winners-menu">To winners</button>\n</div>\n<div id="garage-view">\n${(0,a.renderGarageView)()}\n</div>\n</div>\n<div id="winners-view" style="display: none">\n${(0,r.renderWinners)()}\n</div>\n<div class="pagination">\n  <button class="button primary prev-button" id="prev">Prev</button>\n  <button class="button primary next-button" id="next">Next</button>\n</div>\n  `,t=document.createElement("div");t.classList.add("wrapper"),t.innerHTML=e,document.body.append(t)}))},924:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function d(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(d,i)}c((o=o.apply(e,t||[])).next())}))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.renderGarageView=t.renderHeaderOfGarage=t.renderCarImage=void 0;const r=n(753),d=a(n(327));t.renderCarImage=e=>`<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"\n "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">\n<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 981.000000 550.000000"\n preserveAspectRatio="xMidYMid meet">\n\n<g transform="translate(0.000000,550.000000) scale(0.100000,-0.100000)"\nstyle="fill:${e}" stroke="none">\n<path d="M3040 5491 c-432 -7 -412 -4 -543 -73 -81 -43 -263 -223 -346 -343\n-34 -49 -143 -227 -242 -396 -253 -428 -360 -571 -489 -657 -117 -79 -139 -83\n-465 -93 -390 -11 -511 -37 -658 -142 -161 -115 -249 -265 -278 -472 -15 -110\n-23 -1398 -11 -1702 10 -238 10 -243 39 -305 54 -115 144 -200 278 -265 95\n-45 149 -53 429 -61 l239 -7 38 -118 c83 -256 233 -467 442 -623 458 -341\n1106 -287 1517 125 156 157 248 321 315 563 l16 58 1584 0 c872 0 1585 -2\n1585 -4 0 -21 69 -228 96 -285 171 -371 556 -641 969 -680 466 -45 931 224\n1155 669 18 35 49 116 70 180 l37 115 229 8 c126 4 262 14 303 22 97 19 194\n77 288 171 97 99 140 186 153 309 12 116 13 1212 0 1328 -12 113 -40 166 -150\n277 -106 107 -228 189 -435 290 -365 179 -810 329 -1414 476 -146 36 -290 76\n-320 90 -142 64 -457 380 -861 864 -264 317 -435 473 -615 567 -134 69 -216\n93 -345 103 -144 11 -2077 18 -2610 11z m1080 -976 l0 -585 -1111 0 c-837 0\n-1108 3 -1103 12 4 6 32 45 62 87 30 42 120 186 199 321 199 335 272 452 337\n539 60 82 138 166 170 184 29 17 248 23 894 25 l552 2 0 -585z m1653 529 c51\n-26 112 -60 137 -77 85 -58 253 -232 450 -467 183 -218 261 -307 436 -497 l67\n-73 -1172 0 -1171 0 0 587 0 586 580 -6 581 -7 92 -46z m1930 -1570 c716 -179\n1168 -342 1499 -540 130 -78 180 -124 198 -185 10 -33 14 -176 17 -578 5 -590\n1 -643 -48 -710 -51 -72 -64 -75 -323 -75 l-228 -1 -37 115 c-111 345 -345\n613 -652 748 -202 88 -381 120 -575 101 -170 -16 -272 -43 -407 -110 -124 -62\n-194 -114 -317 -238 -169 -170 -259 -319 -316 -523 l-27 -98 -1583 0 -1583 0\n-11 43 c-60 233 -152 398 -315 566 -243 251 -508 365 -845 364 -313 -1 -615\n-132 -837 -366 -136 -143 -220 -287 -283 -485 l-38 -117 -138 -3 c-177 -4\n-351 11 -392 32 -70 36 -67 -1 -70 816 -3 804 4 1041 36 1112 25 58 74 113\n131 146 l46 27 930 6 c512 3 2059 6 3438 7 l2508 2 222 -56z m-5351 -1535 c62\n-13 191 -75 257 -123 178 -131 298 -338 320 -551 36 -355 -151 -661 -499 -816\n-53 -23 -63 -24 -275 -24 l-220 0 -79 38 c-195 93 -324 225 -425 436 l-36 76\n-3 167 c-4 192 4 244 54 349 102 213 283 374 499 445 50 16 333 18 407 3z\nm5483 0 c148 -27 342 -163 451 -314 56 -79 110 -193 125 -263 6 -33 10 -121 7\n-221 l-3 -166 -36 -76 c-100 -210 -231 -344 -425 -436 l-79 -38 -197 -3 c-223\n-4 -258 2 -374 64 -419 222 -557 731 -304 1117 69 106 202 227 303 277 45 22\n111 47 147 54 79 17 304 20 385 5z"/>\n</g>\n</svg>\n`;t.renderHeaderOfGarage=()=>o(void 0,void 0,void 0,(function*(){yield(0,r.getCars)().then((e=>{const t=document.getElementById("garage-view"),n=document.createDocumentFragment(),o=document.createElement("div");o.id="header-garage";const a=document.createElement("h1");a.classList.add("header"),a.innerHTML=`Garage ${e.count}`;const r=document.createElement("h2");r.innerHTML=`Page #${d.default.carsPage}`,o.append(a),o.append(r),n.append(o),t.append(n)}))})),t.renderGarageView=()=>((0,t.renderHeaderOfGarage)(),o(void 0,void 0,void 0,(function*(){yield(0,r.getCars)().then((e=>{const n=document.getElementById("garage-view"),o=document.createDocumentFragment(),a=document.createElement("ul");a.classList.add("garage"),e.items.forEach((e=>{const n=document.createElement("li");n.innerHTML=(({id:e,name:n,color:o,isEngineStarted:a})=>`\n<div class = "general-buttons">\n<button class="button select-button" id="select-car-${e}">Select</button>\n<button class="button remove-button" id="remove-car-${e}">Remove</button>\n<span class="car-name">${n}</span>\n</div>\n<div class="road">\n<div class="launch-pad">\n  <div class="control-panel">\n    <button class="icon start-engine-button" id="start-engine-car-${e}" ${a?"disabled":""}>A</button>\n    <button class="icon stop-engine-button" id="stop-engine-car-${e}" ${a?"":"disabled"}>B</button>\n  </div>\n  <div class="car" id="car-${e}">\n    ${(0,t.renderCarImage)(o)}\n  </div>\n</div>\n<div class="flag" id="flag-${e}">🚩</div>\n</div>`)(e),a.append(n)})),o.append(a),n.appendChild(o)}))})),'<div>\n  <form class="form" id="create">\n    <input type="text" class="input" id="create-name" name="name">\n    <input type="color" class="color" name="color" id="create-color" value="#ffffff">\n    <button class="button" id="create-submit" type="submit">Create</button>\n  </form>\n  <form class="form" id="update">\n    <input type="text" class="input" id="update-name" name="name" disabled>\n    <input type="color" class="color" name="color" id="update-color" value="#ffffff">\n    <button class="button" id="update-submit" type="submit">Update</button>\n  </form>\n</div><div class="race-controls">\n  <button class="button race-button primary" id="race">Race</button>\n  <button class="button reset-button primary" id="reset">Reset</button>\n  <button class="button generator-button" id="generator">Generate cars</button>\n</div>')},515:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function d(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(d,i)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.listen=void 0;const a=n(753),r=n(566),d=n(825),i=n(332);let c=null;t.listen=()=>{document.addEventListener("click",(e=>o(void 0,void 0,void 0,(function*(){if(e.target.classList.contains("garage-menu-button")&&(document.getElementById("garage-view").style.display="block",document.getElementById("winners-view").style.display="none"),e.target.classList.contains("winners-menu-button")&&(document.getElementById("winners-view").style.display="block",document.getElementById("garage-view").style.display="none",document.getElementById("winners-view").innerHTML=(0,d.renderWinners)()),e.target.classList.contains("generator-button")){e.target.disabled=!0;const t=(0,r.generateRandomCars)();console.log(t),yield Promise.all(t.map((e=>(0,a.createCar)(e)))),(0,i.updateGarageView)(),e.target.disabled=!1}if(e.target.classList.contains("remove-button")){const t=+e.target.id.split("remove-car-")[1];yield(0,a.deleteCar)(t),(0,i.updateGarageView)()}if(e.target.classList.contains("select-button")){const t=e.target.id.split("select-car-")[1];c=yield(0,a.getCar)(Number(t));const n=c.name,o=c.color,r=document.getElementById("update-name"),d=document.getElementById("update-color"),i=document.getElementById("update-submit");r.value=n,d.value=o,r.disabled=!1,d.disabled=!1,i.disabled=!1}})))),document.getElementById("create").addEventListener("submit",(e=>o(void 0,void 0,void 0,(function*(){e.preventDefault();const t=document.getElementById("create-name"),n=document.getElementById("create-color"),o={name:t.value,color:n.value};yield(0,a.createCar)(o),(0,i.updateGarageView)(),t.value="",n.value="#ffffff"})))),document.getElementById("update").addEventListener("submit",(e=>o(void 0,void 0,void 0,(function*(){e.preventDefault();const t=document.getElementById("update-name"),n=document.getElementById("update-color"),o=document.getElementById("update-submit"),r={name:t.value,color:n.value};if(c){const e=c.id;yield(0,a.updateCar)(e,r)}(0,i.updateGarageView)(),t.value="",n.value="#ffffff",t.disabled=!0,n.disabled=!0,o.disabled=!0}))))}},332:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.updateGarageView=void 0;const o=n(407),a=n(924);t.updateGarageView=()=>{document.getElementById("header-garage").remove(),document.querySelector(".garage").remove(),(0,a.renderGarageView)(),(0,o.updateStateGarage)()}},566:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateRandomCars=void 0;const o=n(632),a=()=>{let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e};t.generateRandomCars=(e=100)=>new Array(e).fill(1).map((()=>({name:`${o.models[Math.floor(Math.random()*o.models.length)]} ${o.names[Math.floor(Math.random()*o.models.length)]}`,color:a()})))},825:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.renderWinners=void 0;const a=o(n(327));t.renderWinners=()=>`\n<h1>Winners (${a.default.winnersCount})</h1>\n<h2>Page #${a.default.winnersPage}</h2>\n<table class="table" cellspacing="0" border="0" cellpadding="0">\n<thead>\n  <th>Number</th>\n  <th>Car</th>\n  <th>Name</th>\n  <th class="table-button table-wins ${"wins"===a.default.sortBy?a.default.sortOrder:""}" id="sort-by-wins">Wins</th>\n  <th class="table-button table-time ${"time"===a.default.sortBy?a.default.sortOrder:""}" id="sort-by-time">Best time (seconds)</th>\n</thead>\n<tbody>\n<tr>\n    <td>1</td>\n    <td>Картинка</td>\n    <td>Имя</td>\n    <td>Количество побед</td>\n    <td>Лучшее время</td>\n  </tr>\n</tbody>\n</table>`},53:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function d(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(d,i)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const a=n(179),r=n(515),d=n(407);n(781),n(307),document.addEventListener("DOMContentLoaded",(()=>o(void 0,void 0,void 0,(function*(){(0,a.renderAppHTML)(),yield(0,d.updateStateGarage)(),(0,r.listen)()}))))},407:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function d(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(d,i)}c((o=o.apply(e,t||[])).next())}))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.updateStateGarage=void 0;const r=a(n(327)),d=n(753);t.updateStateGarage=()=>o(void 0,void 0,void 0,(function*(){const{items:e}=yield(0,d.getCars)(),t=e.length;r.default.carsCount=t,7*r.default.carsPage<r.default.carsCount?document.getElementById("next").disabled=!1:document.getElementById("next").disabled=!0,r.default.carsPage>1?document.getElementById("prev").disabled=!1:document.getElementById("prev").disabled=!0}))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(53)})();