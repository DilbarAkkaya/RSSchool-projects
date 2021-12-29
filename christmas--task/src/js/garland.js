export function createRainGarland(){
  let ns = "http://www.w3.org/2000/svg";
  let garlandSvg = document.createElementNS(ns,'svg');
  const treeBlock = document.querySelector('.tree-block');
  garlandSvg.classList.add('garland');
  garlandSvg.innerHTML = `
  <path d="M85 5 C 85 5, 100 15, 65 25,
  C 65 25, 85 35, 35 55,
  C 35 55, 35 85, 65 75,
  C 65 75, 80 105, 105 65,
  C 105 65, 120 95, 135 45,
  C 135 45, 150 85, 165 25,
  C 165 25, 180 35, 195 5,
  C 195 5, 210 25, 185 55,
  C 185 55, 195 85, 175 95,
  C 175 95, 185 105, 145 105,
  C 145 105, 155 125, 115 135,
  C 115 135, 95 175, 75 145,
  C 75 145, 65 165, 45 135,
  C 45 135, 35 165, 15 85,
  C 15 85, 0 125, 5 115,
  C 5 115, 0 105, 5 165,
  C 5 165, 15 195, 25 185,
  C 25 185, 15 225, 65 205,
  C 65 205, 55 235, 105 205,
  C 105 205, 125 255, 155 185,
  C 155 185, 175 265, 195 195,
  C 195 195, 205 265, 225 155,
  C 225 155, 235 205, 255 125,
  C 255 125, 255 205, 285 105,
  C 285 105, 315 205, 285 155,
  C 285 155, 305 285, 265 205,
  C 265 205, 285 285, 240 235,
  C 240 235, 265 295, 205 265,
  C 205 265, 225 315, 165 285,
  C 165 285, 185 325, 135 305,
  C 135 305, 125 355, 95 305,
  C 95 305, 65 385, 35 305,
  C 35 305, 15 385, 15 285,
  C 15 285, 5 365, 5 265,
  C 5 265, 0 325, 5 235,
  C 5 235, 0 325, 5 365,
    C 5 365, 15 400, 25 385,
    C 25 385, 25 425, 65 405,
    C 65 405, 75 445, 105 410,
    C 105 410, 115 445, 155 410,
    C 155 410, 135 455, 195 415,
    C 195 415, 205 445, 225 410,
    C 225 410, 245 455, 255 395,
    C 255 395, 275 435, 285 370,
    C 285 370, 285 445, 310 345,
    C 310 345, 305 445, 335 305,
    C 335 305, 325 405, 335 235,
    C 335 235, 365 465, 335 365,
    C 335 365, 355 455, 335 415,
    C 335 415, 325 465, 295 435,
    C 295 435, 305 465, 265 455,
    C 265 455, 265 485, 235 475,
    C 235 475, 245 500, 215 495,
    C 215 495, 205 500, 200 495,
    C 200 495, 185 500, 180 495,
    C 180 495, 175 500, 150 495,
    C 150 495, 165 500, 120 495,
    C 120 495, 75 500, 75 485,
    C 75 485, 45 500, 35 470,
    C 35 470, 25 500, 10 455,
    C 10 455, 5 495, 5 435
  " stroke="black" fill="transparent" />
<circle cx="85" cy="5" r="5" class="blue" />
<circle cx="65" cy="25" r="5" class="red" />
<circle cx="35" cy="55" r="5" class="green" />
<circle cx="65" cy="75" r="5" class="yellow" />
<circle cx="105" cy="65" r="5" class="red" />
<circle cx="135" cy="45" r="5" class="blue" />
<circle cx="165" cy="25" r="5" class="green" />
<circle cx="195" cy="5" r="5" class="yellow" />
<circle cx="185" cy="55" r="5" class="red" />
<circle cx="175" cy="95" r="5" class="green" />
<circle cx="145" cy="105" r="5" class="blue" />
<circle cx="115" cy="135" r="5" class="yellow" />
<circle cx="75" cy="145" r="5" class="red" />
<circle cx="45" cy="135" r="5" class="blue" />
<circle cx="15" cy="85" r="5" class="yellow" />
<circle cx="65" cy="75" r="5" class="yellow" />
<circle cx="105" cy="65" r="5" class="red" />
<circle cx="135" cy="45" r="5" class="blue" />
<circle cx="5" cy="115" r="5" class="green" />
<circle cx="5" cy="165" r="5" class="red" />
<circle cx="25" cy="185" r="5" class="blue" />
<circle cx="65" cy="205" r="5" class="yellow" />
<circle cx="105" cy="205" r="5" class="green" />
<circle cx="155" cy="185" r="5" class="yellow" />
<circle cx="195" cy="195" r="5" class="blue" />
<circle cx="225" cy="155" r="5" class="red" />
<circle cx="255" cy="125" r="5" class="green" />
<circle cx="285" cy="105" r="5" class="yellow" />
<circle cx="285" cy="155" r="5" class="red" />
<circle cx="265" cy="205" r="5" class="green" />
<circle cx="240" cy="235" r="5" class="blue" />
<circle cx="205" cy="265" r="5" class="yellow" />
<circle cx="165" cy="285" r="5" class="red" />
<circle cx="135" cy="305" r="5" class="blue" />
<circle cx="95" cy="305" r="5" class="green" />
<circle cx="35" cy="305" r="5" class="red" />
<circle cx="15" cy="285" r="5" class="blue" />
<circle cx="5" cy="265" r="5" class="yellow" />
<circle cx="5" cy="235" r="5" class="green" />
<circle cx="5" cy="365" r="5" class="blue" />
<circle cx="25" cy="385" r="5" class="red" />
<circle cx="65" cy="405" r="5" class="yellow" />
<circle cx="105" cy="410" r="5" class="green" />
<circle cx="155" cy="410" r="5" class="blue" />
<circle cx="195" cy="415" r="5" class="yellow" />
<circle cx="225" cy="410" r="5" class="green" />
<circle cx="255" cy="395" r="5" class="yellow" />
<circle cx="285" cy="370" r="5" class="red" />
<circle cx="310" cy="345" r="5" class="blue" />
<circle cx="335" cy="305" r="5" class="green" />
<circle cx="335" cy="235" r="5" class="yellow" />
<circle cx="335" cy="365" r="5" class="red" />
<circle cx="335" cy="415" r="5" class="blue" />
<circle cx="295" cy="435" r="5" class="green" />
<circle cx="265" cy="455" r="5" class="yellow" />
<circle cx="235" cy="475" r="5" class="red" />
<circle cx="215" cy="495" r="5" class="green" />
<circle cx="200" cy="495" r="5" class="blue" />
<circle cx="180" cy="495" r="5" class="red" />
<circle cx="150" cy="495" r="5" class="yellow" />
<circle cx="120" cy="495" r="5" class="green" />
<circle cx="75" cy="485" r="5" class="red" />
<circle cx="35" cy="470" r="5" class="blue" />
<circle cx="10" cy="455" r="5" class="yellow" />
<circle cx="5" cy="435" r="5" class="green" />`;
treeBlock.append(garlandSvg)
}

export function createRedGarland(){
  let ns = "http://www.w3.org/2000/svg";
  let garlandSvg = document.createElementNS(ns,'svg');
  const treeBlock = document.querySelector('.tree-block');
  garlandSvg.classList.add('garland');
  garlandSvg.innerHTML = `
  <path d="M85 5 C 85 5, 100 15, 65 25,
  C 65 25, 85 35, 35 55,
  C 35 55, 35 85, 65 75,
  C 65 75, 80 105, 105 65,
  C 105 65, 120 95, 135 45,
  C 135 45, 150 85, 165 25,
  C 165 25, 180 35, 195 5,
  C 195 5, 210 25, 185 55,
  C 185 55, 195 85, 175 95,
  C 175 95, 185 105, 145 105,
  C 145 105, 155 125, 115 135,
  C 115 135, 95 175, 75 145,
  C 75 145, 65 165, 45 135,
  C 45 135, 35 165, 15 85,
  C 15 85, 0 125, 5 115,
  C 5 115, 0 105, 5 165,
  C 5 165, 15 195, 25 185,
  C 25 185, 15 225, 65 205,
  C 65 205, 55 235, 105 205,
  C 105 205, 125 255, 155 185,
  C 155 185, 175 265, 195 195,
  C 195 195, 205 265, 225 155,
  C 225 155, 235 205, 255 125,
  C 255 125, 255 205, 285 105,
  C 285 105, 315 205, 285 155,
  C 285 155, 305 285, 265 205,
  C 265 205, 285 285, 240 235,
  C 240 235, 265 295, 205 265,
  C 205 265, 225 315, 165 285,
  C 165 285, 185 325, 135 305,
  C 135 305, 125 355, 95 305,
  C 95 305, 65 385, 35 305,
  C 35 305, 15 385, 15 285,
  C 15 285, 5 365, 5 265,
  C 5 265, 0 325, 5 235,
  C 5 235, 0 325, 5 365,
    C 5 365, 15 400, 25 385,
    C 25 385, 25 425, 65 405,
    C 65 405, 75 445, 105 410,
    C 105 410, 115 445, 155 410,
    C 155 410, 135 455, 195 415,
    C 195 415, 205 445, 225 410,
    C 225 410, 245 455, 255 395,
    C 255 395, 275 435, 285 370,
    C 285 370, 285 445, 310 345,
    C 310 345, 305 445, 335 305,
    C 335 305, 325 405, 335 235,
    C 335 235, 365 465, 335 365,
    C 335 365, 355 455, 335 415,
    C 335 415, 325 465, 295 435,
    C 295 435, 305 465, 265 455,
    C 265 455, 265 485, 235 475,
    C 235 475, 245 500, 215 495,
    C 215 495, 205 500, 200 495,
    C 200 495, 185 500, 180 495,
    C 180 495, 175 500, 150 495,
    C 150 495, 165 500, 120 495,
    C 120 495, 75 500, 75 485,
    C 75 485, 45 500, 35 470,
    C 35 470, 25 500, 10 455,
    C 10 455, 5 495, 5 435
  " stroke="black" fill="transparent" />
<circle cx="85" cy="5" r="5" class="redFill flash-1" />
<circle cx="65" cy="25" r="5" class="redFill flash-1" />
<circle cx="35" cy="55" r="5" class="redFill flash-1" />
<circle cx="65" cy="75" r="5" class="redFill flash-1" />
<circle cx="105" cy="65" r="5" class="redFill flash-1" />
<circle cx="135" cy="45" r="5" class="redFill flash-1" />
<circle cx="165" cy="25" r="5" class="redFill flash-1" />
<circle cx="195" cy="5" r="5" class="redFill flash-1" />
<circle cx="185" cy="55" r="5" class="redFill flash-1" />
<circle cx="175" cy="95" r="5" class="redFill flash-1" />
<circle cx="145" cy="105" r="5" class="redFill flash-1" />
<circle cx="115" cy="135" r="5" class="redFill flash-1" />
<circle cx="75" cy="145" r="5" class="redFill flash-1" />
<circle cx="45" cy="135" r="5" class="redFill flash-1" />
<circle cx="15" cy="85" r="5" class="redFill flash-1" />
<circle cx="65" cy="75" r="5" class="redFill flash-1" />
<circle cx="105" cy="65" r="5" class="redFill flash-1" />
<circle cx="135" cy="45" r="5" class="redFill flash-1" />
<circle cx="5" cy="115" r="5" class="redFill flash-1" />
<circle cx="5" cy="165" r="5" class="redFill flash-1" />
<circle cx="25" cy="185" r="5" class="redFill flash-1" />
<circle cx="65" cy="205" r="5" class="redFill flash-1" />
<circle cx="105" cy="205" r="5" class="redFill flash-1" />
<circle cx="155" cy="185" r="5" class="redFill flash-1" />
<circle cx="195" cy="195" r="5" class="redFill flash-1" />
<circle cx="225" cy="155" r="5" class="redFill flash-1" />
<circle cx="255" cy="125" r="5" class="redFill flash-1" />
<circle cx="285" cy="105" r="5" class="redFill flash-1" />
<circle cx="285" cy="155" r="5" class="redFill flash-1" />
<circle cx="265" cy="205" r="5" class="redFill flash-1" />
<circle cx="240" cy="235" r="5" class="redFill flash-1" />
<circle cx="205" cy="265" r="5" class="redFill flash-1" />
<circle cx="165" cy="285" r="5" class="redFill flash-1" />
<circle cx="135" cy="305" r="5" class="redFill flash-1" />
<circle cx="95" cy="305" r="5" class="redFill flash-1" />
<circle cx="35" cy="305" r="5" class="redFill flash-1" />
<circle cx="15" cy="285" r="5" class="redFill flash-1" />
<circle cx="5" cy="265" r="5" class="redFill flash-1" />
<circle cx="5" cy="235" r="5" class="redFill flash-1" />
<circle cx="5" cy="365" r="5" class="redFill flash-1" />
<circle cx="25" cy="385" r="5" class="redFill flash-1" />
<circle cx="65" cy="405" r="5" class="redFill flash-1" />
<circle cx="105" cy="410" r="5" class="redFill flash-1" />
<circle cx="155" cy="410" r="5" class="redFill flash-1" />
<circle cx="195" cy="415" r="5" class="redFill flash-1" />
<circle cx="225" cy="410" r="5" class="redFill flash-1" />
<circle cx="255" cy="395" r="5" class="redFill flash-1" />
<circle cx="285" cy="370" r="5" class="redFill flash-1" />
<circle cx="310" cy="345" r="5" class="redFill flash-1" />
<circle cx="335" cy="305" r="5" class="redFill flash-1" />
<circle cx="335" cy="235" r="5" class="redFill flash-1" />
<circle cx="335" cy="365" r="5" class="redFill flash-1" />
<circle cx="335" cy="415" r="5" class="redFill flash-1" />
<circle cx="295" cy="435" r="5" class="redFill flash-1" />
<circle cx="265" cy="455" r="5" class="redFill flash-1" />
<circle cx="235" cy="475" r="5" class="redFill flash-1" />
<circle cx="215" cy="495" r="5" class="redFill flash-1" />
<circle cx="200" cy="495" r="5" class="redFill flash-1" />
<circle cx="180" cy="495" r="5" class="redFill flash-1" />
<circle cx="150" cy="495" r="5" class="redFill flash-1" />
<circle cx="120" cy="495" r="5" class="redFill flash-1" />
<circle cx="75" cy="485" r="5" class="redFill flash-1" />
<circle cx="35" cy="470" r="5" class="redFill flash-1" />
<circle cx="10" cy="455" r="5" class="redFill flash-1" />
<circle cx="5" cy="435" r="5" class="redFill flash-1" />`;
treeBlock.append(garlandSvg)
}

export function createBlueGarland(){
  let ns = "http://www.w3.org/2000/svg";
  let garlandSvg = document.createElementNS(ns,'svg');
  const treeBlock = document.querySelector('.tree-block');
  garlandSvg.classList.add('garland');
  garlandSvg.innerHTML = `
  <path d="M85 5 C 85 5, 100 15, 65 25,
  C 65 25, 85 35, 35 55,
  C 35 55, 35 85, 65 75,
  C 65 75, 80 105, 105 65,
  C 105 65, 120 95, 135 45,
  C 135 45, 150 85, 165 25,
  C 165 25, 180 35, 195 5,
  C 195 5, 210 25, 185 55,
  C 185 55, 195 85, 175 95,
  C 175 95, 185 105, 145 105,
  C 145 105, 155 125, 115 135,
  C 115 135, 95 175, 75 145,
  C 75 145, 65 165, 45 135,
  C 45 135, 35 165, 15 85,
  C 15 85, 0 125, 5 115,
  C 5 115, 0 105, 5 165,
  C 5 165, 15 195, 25 185,
  C 25 185, 15 225, 65 205,
  C 65 205, 55 235, 105 205,
  C 105 205, 125 255, 155 185,
  C 155 185, 175 265, 195 195,
  C 195 195, 205 265, 225 155,
  C 225 155, 235 205, 255 125,
  C 255 125, 255 205, 285 105,
  C 285 105, 315 205, 285 155,
  C 285 155, 305 285, 265 205,
  C 265 205, 285 285, 240 235,
  C 240 235, 265 295, 205 265,
  C 205 265, 225 315, 165 285,
  C 165 285, 185 325, 135 305,
  C 135 305, 125 355, 95 305,
  C 95 305, 65 385, 35 305,
  C 35 305, 15 385, 15 285,
  C 15 285, 5 365, 5 265,
  C 5 265, 0 325, 5 235,
  C 5 235, 0 325, 5 365,
    C 5 365, 15 400, 25 385,
    C 25 385, 25 425, 65 405,
    C 65 405, 75 445, 105 410,
    C 105 410, 115 445, 155 410,
    C 155 410, 135 455, 195 415,
    C 195 415, 205 445, 225 410,
    C 225 410, 245 455, 255 395,
    C 255 395, 275 435, 285 370,
    C 285 370, 285 445, 310 345,
    C 310 345, 305 445, 335 305,
    C 335 305, 325 405, 335 235,
    C 335 235, 365 465, 335 365,
    C 335 365, 355 455, 335 415,
    C 335 415, 325 465, 295 435,
    C 295 435, 305 465, 265 455,
    C 265 455, 265 485, 235 475,
    C 235 475, 245 500, 215 495,
    C 215 495, 205 500, 200 495,
    C 200 495, 185 500, 180 495,
    C 180 495, 175 500, 150 495,
    C 150 495, 165 500, 120 495,
    C 120 495, 75 500, 75 485,
    C 75 485, 45 500, 35 470,
    C 35 470, 25 500, 10 455,
    C 10 455, 5 495, 5 435
  " stroke="black" fill="transparent" />
<circle cx="85" cy="5" r="5" class="blueFill flash-2" />
<circle cx="65" cy="25" r="5" class="blueFill flash-2" />
<circle cx="35" cy="55" r="5" class="blueFill flash-2" />
<circle cx="65" cy="75" r="5" class="blueFill flash-2" />
<circle cx="105" cy="65" r="5" class="blueFill flash-2" />
<circle cx="135" cy="45" r="5" class="blueFill flash-2" />
<circle cx="165" cy="25" r="5" class="blueFill flash-2" />
<circle cx="195" cy="5" r="5" class="blueFill flash-2" />
<circle cx="185" cy="55" r="5" class="blueFill flash-2" />
<circle cx="175" cy="95" r="5" class="blueFill flash-2" />
<circle cx="145" cy="105" r="5" class="blueFill flash-2" />
<circle cx="115" cy="135" r="5" class="blueFill flash-2" />
<circle cx="75" cy="145" r="5" class="blueFill flash-2" />
<circle cx="45" cy="135" r="5" class="blueFill flash-2" />
<circle cx="15" cy="85" r="5" class="blueFill flash-2" />
<circle cx="65" cy="75" r="5" class="blueFill flash-2" />
<circle cx="105" cy="65" r="5" class="blueFill flash-2" />
<circle cx="135" cy="45" r="5" class="blueFill flash-2" />
<circle cx="5" cy="115" r="5" class="blueFill flash-2" />
<circle cx="5" cy="165" r="5" class="blueFill flash-2" />
<circle cx="25" cy="185" r="5" class="blueFill flash-2" />
<circle cx="65" cy="205" r="5" class="blueFill flash-2" />
<circle cx="105" cy="205" r="5" class="blueFill flash-2" />
<circle cx="155" cy="185" r="5" class="blueFill flash-2" />
<circle cx="195" cy="195" r="5" class="blueFill flash-2" />
<circle cx="225" cy="155" r="5" class="blueFill flash-2" />
<circle cx="255" cy="125" r="5" class="blueFill flash-2" />
<circle cx="285" cy="105" r="5" class="blueFill flash-2" />
<circle cx="285" cy="155" r="5" class="blueFill flash-2" />
<circle cx="265" cy="205" r="5" class="blueFill flash-2" />
<circle cx="240" cy="235" r="5" class="blueFill flash-2" />
<circle cx="205" cy="265" r="5" class="blueFill flash-2" />
<circle cx="165" cy="285" r="5" class="blueFill flash-2" />
<circle cx="135" cy="305" r="5" class="blueFill flash-2" />
<circle cx="95" cy="305" r="5" class="blueFill flash-2" />
<circle cx="35" cy="305" r="5" class="blueFill flash-2" />
<circle cx="15" cy="285" r="5" class="blueFill flash-2" />
<circle cx="5" cy="265" r="5" class="blueFill flash-2" />
<circle cx="5" cy="235" r="5" class="blueFill flash-2" />
<circle cx="5" cy="365" r="5" class="blueFill flash-2" />
<circle cx="25" cy="385" r="5" class="blueFill flash-2" />
<circle cx="65" cy="405" r="5" class="blueFill flash-2" />
<circle cx="105" cy="410" r="5" class="blueFill flash-2" />
<circle cx="155" cy="410" r="5" class="blueFill flash-2" />
<circle cx="195" cy="415" r="5" class="blueFill flash-2" />
<circle cx="225" cy="410" r="5" class="blueFill flash-2" />
<circle cx="255" cy="395" r="5" class="blueFill flash-2" />
<circle cx="285" cy="370" r="5" class="blueFill flash-2" />
<circle cx="310" cy="345" r="5" class="blueFill flash-2" />
<circle cx="335" cy="305" r="5" class="blueFill flash-2" />
<circle cx="335" cy="235" r="5" class="blueFill flash-2" />
<circle cx="335" cy="365" r="5" class="blueFill flash-2" />
<circle cx="335" cy="415" r="5" class="blueFill flash-2" />
<circle cx="295" cy="435" r="5" class="blueFill flash-2" />
<circle cx="265" cy="455" r="5" class="blueFill flash-2" />
<circle cx="235" cy="475" r="5" class="blueFill flash-2" />
<circle cx="215" cy="495" r="5" class="blueFill flash-2" />
<circle cx="200" cy="495" r="5" class="blueFill flash-2" />
<circle cx="180" cy="495" r="5" class="blueFill flash-2" />
<circle cx="150" cy="495" r="5" class="blueFill flash-2" />
<circle cx="120" cy="495" r="5" class="blueFill flash-2" />
<circle cx="75" cy="485" r="5" class="blueFill flash-2" />
<circle cx="35" cy="470" r="5" class="blueFill flash-2" />
<circle cx="10" cy="455" r="5" class="blueFill flash-2" />
<circle cx="5" cy="435" r="5" class="blueFill flash-2" />`;
treeBlock.append(garlandSvg)
}

export function createYellowGarland(){
  let ns = "http://www.w3.org/2000/svg";
  let garlandSvg = document.createElementNS(ns,'svg');
  const treeBlock = document.querySelector('.tree-block');
  garlandSvg.classList.add('garland');
  garlandSvg.innerHTML = `
  <path d="M85 5 C 85 5, 100 15, 65 25,
  C 65 25, 85 35, 35 55,
  C 35 55, 35 85, 65 75,
  C 65 75, 80 105, 105 65,
  C 105 65, 120 95, 135 45,
  C 135 45, 150 85, 165 25,
  C 165 25, 180 35, 195 5,
  C 195 5, 210 25, 185 55,
  C 185 55, 195 85, 175 95,
  C 175 95, 185 105, 145 105,
  C 145 105, 155 125, 115 135,
  C 115 135, 95 175, 75 145,
  C 75 145, 65 165, 45 135,
  C 45 135, 35 165, 15 85,
  C 15 85, 0 125, 5 115,
  C 5 115, 0 105, 5 165,
  C 5 165, 15 195, 25 185,
  C 25 185, 15 225, 65 205,
  C 65 205, 55 235, 105 205,
  C 105 205, 125 255, 155 185,
  C 155 185, 175 265, 195 195,
  C 195 195, 205 265, 225 155,
  C 225 155, 235 205, 255 125,
  C 255 125, 255 205, 285 105,
  C 285 105, 315 205, 285 155,
  C 285 155, 305 285, 265 205,
  C 265 205, 285 285, 240 235,
  C 240 235, 265 295, 205 265,
  C 205 265, 225 315, 165 285,
  C 165 285, 185 325, 135 305,
  C 135 305, 125 355, 95 305,
  C 95 305, 65 385, 35 305,
  C 35 305, 15 385, 15 285,
  C 15 285, 5 365, 5 265,
  C 5 265, 0 325, 5 235,
  C 5 235, 0 325, 5 365,
    C 5 365, 15 400, 25 385,
    C 25 385, 25 425, 65 405,
    C 65 405, 75 445, 105 410,
    C 105 410, 115 445, 155 410,
    C 155 410, 135 455, 195 415,
    C 195 415, 205 445, 225 410,
    C 225 410, 245 455, 255 395,
    C 255 395, 275 435, 285 370,
    C 285 370, 285 445, 310 345,
    C 310 345, 305 445, 335 305,
    C 335 305, 325 405, 335 235,
    C 335 235, 365 465, 335 365,
    C 335 365, 355 455, 335 415,
    C 335 415, 325 465, 295 435,
    C 295 435, 305 465, 265 455,
    C 265 455, 265 485, 235 475,
    C 235 475, 245 500, 215 495,
    C 215 495, 205 500, 200 495,
    C 200 495, 185 500, 180 495,
    C 180 495, 175 500, 150 495,
    C 150 495, 165 500, 120 495,
    C 120 495, 75 500, 75 485,
    C 75 485, 45 500, 35 470,
    C 35 470, 25 500, 10 455,
    C 10 455, 5 495, 5 435
  " stroke="black" fill="transparent" />
<circle cx="85" cy="5" r="5" class="yellowFill flash-3" />
<circle cx="65" cy="25" r="5" class="yellowFill flash-3" />
<circle cx="35" cy="55" r="5" class="yellowFill flash-3" />
<circle cx="65" cy="75" r="5" class="yellowFill flash-3" />
<circle cx="105" cy="65" r="5" class="yellowFill flash-3" />
<circle cx="135" cy="45" r="5" class="yellowFill flash-3" />
<circle cx="165" cy="25" r="5" class="yellowFill flash-3" />
<circle cx="195" cy="5" r="5" class="yellowFill flash-3" />
<circle cx="185" cy="55" r="5" class="yellowFill flash-3" />
<circle cx="175" cy="95" r="5" class="yellowFill flash-3" />
<circle cx="145" cy="105" r="5" class="yellowFill flash-3" />
<circle cx="115" cy="135" r="5" class="yellowFill flash-3" />
<circle cx="75" cy="145" r="5" class="yellowFill flash-3" />
<circle cx="45" cy="135" r="5" class="yellowFill flash-3" />
<circle cx="15" cy="85" r="5" class="yellowFill flash-3" />
<circle cx="65" cy="75" r="5" class="yellowFill flash-3" />
<circle cx="105" cy="65" r="5" class="yellowFill flash-3" />
<circle cx="135" cy="45" r="5" class="yellowFill flash-3" />
<circle cx="5" cy="115" r="5" class="yellowFill flash-3" />
<circle cx="5" cy="165" r="5" class="yellowFill flash-3" />
<circle cx="25" cy="185" r="5" class="yellowFill flash-3" />
<circle cx="65" cy="205" r="5" class="yellowFill flash-3" />
<circle cx="105" cy="205" r="5" class="yellowFill flash-3" />
<circle cx="155" cy="185" r="5" class="yellowFill flash-3" />
<circle cx="195" cy="195" r="5" class="yellowFill flash-3" />
<circle cx="225" cy="155" r="5" class="yellowFill flash-3" />
<circle cx="255" cy="125" r="5" class="yellowFill flash-3" />
<circle cx="285" cy="105" r="5" class="yellowFill flash-3" />
<circle cx="285" cy="155" r="5" class="yellowFill flash-3" />
<circle cx="265" cy="205" r="5" class="yellowFill flash-3" />
<circle cx="240" cy="235" r="5" class="yellowFill flash-3" />
<circle cx="205" cy="265" r="5" class="yellowFill flash-3" />
<circle cx="165" cy="285" r="5" class="yellowFill flash-3" />
<circle cx="135" cy="305" r="5" class="yellowFill flash-3" />
<circle cx="95" cy="305" r="5" class="yellowFill flash-3" />
<circle cx="35" cy="305" r="5" class="yellowFill flash-3" />
<circle cx="15" cy="285" r="5" class="yellowFill flash-3" />
<circle cx="5" cy="265" r="5" class="yellowFill flash-3" />
<circle cx="5" cy="235" r="5" class="yellowFill flash-3" />
<circle cx="5" cy="365" r="5" class="yellowFill flash-3" />
<circle cx="25" cy="385" r="5" class="yellowFill flash-3" />
<circle cx="65" cy="405" r="5" class="yellowFill flash-3" />
<circle cx="105" cy="410" r="5" class="yellowFill flash-3" />
<circle cx="155" cy="410" r="5" class="yellowFill flash-3" />
<circle cx="195" cy="415" r="5" class="yellowFill flash-3" />
<circle cx="225" cy="410" r="5" class="yellowFill flash-3" />
<circle cx="255" cy="395" r="5" class="yellowFill flash-3" />
<circle cx="285" cy="370" r="5" class="yellowFill flash-3" />
<circle cx="310" cy="345" r="5" class="yellowFill flash-3" />
<circle cx="335" cy="305" r="5" class="yellowFill flash-3" />
<circle cx="335" cy="235" r="5" class="yellowFill flash-3" />
<circle cx="335" cy="365" r="5" class="yellowFill flash-3" />
<circle cx="335" cy="415" r="5" class="yellowFill flash-3" />
<circle cx="295" cy="435" r="5" class="yellowFill flash-3" />
<circle cx="265" cy="455" r="5" class="yellowFill flash-3" />
<circle cx="235" cy="475" r="5" class="yellowFill flash-3" />
<circle cx="215" cy="495" r="5" class="yellowFill flash-3" />
<circle cx="200" cy="495" r="5" class="yellowFill flash-3" />
<circle cx="180" cy="495" r="5" class="yellowFill flash-3" />
<circle cx="150" cy="495" r="5" class="yellowFill flash-3" />
<circle cx="120" cy="495" r="5" class="yellowFill flash-3" />
<circle cx="75" cy="485" r="5" class="yellowFill flash-3" />
<circle cx="35" cy="470" r="5" class="yellowFill flash-3" />
<circle cx="10" cy="455" r="5" class="yellowFill flash-3" />
<circle cx="5" cy="435" r="5" class="yellowFill flash-3" />`;
treeBlock.append(garlandSvg)
}

export function createGreenGarland(){
  let ns = "http://www.w3.org/2000/svg";
  let garlandSvg = document.createElementNS(ns,'svg');
  const treeBlock = document.querySelector('.tree-block');
  garlandSvg.classList.add('garland');
  garlandSvg.innerHTML = `
  <path d="M85 5 C 85 5, 100 15, 65 25,
  C 65 25, 85 35, 35 55,
  C 35 55, 35 85, 65 75,
  C 65 75, 80 105, 105 65,
  C 105 65, 120 95, 135 45,
  C 135 45, 150 85, 165 25,
  C 165 25, 180 35, 195 5,
  C 195 5, 210 25, 185 55,
  C 185 55, 195 85, 175 95,
  C 175 95, 185 105, 145 105,
  C 145 105, 155 125, 115 135,
  C 115 135, 95 175, 75 145,
  C 75 145, 65 165, 45 135,
  C 45 135, 35 165, 15 85,
  C 15 85, 0 125, 5 115,
  C 5 115, 0 105, 5 165,
  C 5 165, 15 195, 25 185,
  C 25 185, 15 225, 65 205,
  C 65 205, 55 235, 105 205,
  C 105 205, 125 255, 155 185,
  C 155 185, 175 265, 195 195,
  C 195 195, 205 265, 225 155,
  C 225 155, 235 205, 255 125,
  C 255 125, 255 205, 285 105,
  C 285 105, 315 205, 285 155,
  C 285 155, 305 285, 265 205,
  C 265 205, 285 285, 240 235,
  C 240 235, 265 295, 205 265,
  C 205 265, 225 315, 165 285,
  C 165 285, 185 325, 135 305,
  C 135 305, 125 355, 95 305,
  C 95 305, 65 385, 35 305,
  C 35 305, 15 385, 15 285,
  C 15 285, 5 365, 5 265,
  C 5 265, 0 325, 5 235,
  C 5 235, 0 325, 5 365,
    C 5 365, 15 400, 25 385,
    C 25 385, 25 425, 65 405,
    C 65 405, 75 445, 105 410,
    C 105 410, 115 445, 155 410,
    C 155 410, 135 455, 195 415,
    C 195 415, 205 445, 225 410,
    C 225 410, 245 455, 255 395,
    C 255 395, 275 435, 285 370,
    C 285 370, 285 445, 310 345,
    C 310 345, 305 445, 335 305,
    C 335 305, 325 405, 335 235,
    C 335 235, 365 465, 335 365,
    C 335 365, 355 455, 335 415,
    C 335 415, 325 465, 295 435,
    C 295 435, 305 465, 265 455,
    C 265 455, 265 485, 235 475,
    C 235 475, 245 500, 215 495,
    C 215 495, 205 500, 200 495,
    C 200 495, 185 500, 180 495,
    C 180 495, 175 500, 150 495,
    C 150 495, 165 500, 120 495,
    C 120 495, 75 500, 75 485,
    C 75 485, 45 500, 35 470,
    C 35 470, 25 500, 10 455,
    C 10 455, 5 495, 5 435
  " stroke="black" fill="transparent" />
<circle cx="85" cy="5" r="5" class="greenFill flash-4" />
<circle cx="65" cy="25" r="5" class="greenFill flash-4" />
<circle cx="35" cy="55" r="5" class="greenFill flash-4" />
<circle cx="65" cy="75" r="5" class="greenFill flash-4" />
<circle cx="105" cy="65" r="5" class="greenFill flash-4" />
<circle cx="135" cy="45" r="5" class="greenFill flash-4" />
<circle cx="165" cy="25" r="5" class="greenFill flash-4" />
<circle cx="195" cy="5" r="5" class="greenFill flash-4" />
<circle cx="185" cy="55" r="5" class="greenFill flash-4" />
<circle cx="175" cy="95" r="5" class="greenFill flash-4" />
<circle cx="145" cy="105" r="5" class="greenFill flash-4" />
<circle cx="115" cy="135" r="5" class="greenFill flash-4" />
<circle cx="75" cy="145" r="5" class="greenFill flash-4" />
<circle cx="45" cy="135" r="5" class="greenFill flash-4" />
<circle cx="15" cy="85" r="5" class="greenFill flash-4" />
<circle cx="65" cy="75" r="5" class="greenFill flash-4" />
<circle cx="105" cy="65" r="5" class="greenFill flash-4" />
<circle cx="135" cy="45" r="5" class="greenFill flash-4" />
<circle cx="5" cy="115" r="5" class="greenFill flash-4" />
<circle cx="5" cy="165" r="5" class="greenFill flash-4" />
<circle cx="25" cy="185" r="5" class="greenFill flash-4" />
<circle cx="65" cy="205" r="5" class="greenFill flash-4" />
<circle cx="105" cy="205" r="5" class="greenFill flash-4" />
<circle cx="155" cy="185" r="5" class="greenFill flash-4" />
<circle cx="195" cy="195" r="5" class="greenFill flash-4" />
<circle cx="225" cy="155" r="5" class="greenFill flash-4" />
<circle cx="255" cy="125" r="5" class="greenFill flash-4" />
<circle cx="285" cy="105" r="5" class="greenFill flash-4" />
<circle cx="285" cy="155" r="5" class="greenFill flash-4" />
<circle cx="265" cy="205" r="5" class="greenFill flash-4" />
<circle cx="240" cy="235" r="5" class="greenFill flash-4" />
<circle cx="205" cy="265" r="5" class="greenFill flash-4" />
<circle cx="165" cy="285" r="5" class="greenFill flash-4" />
<circle cx="135" cy="305" r="5" class="greenFill flash-4" />
<circle cx="95" cy="305" r="5" class="greenFill flash-4" />
<circle cx="35" cy="305" r="5" class="greenFill flash-4" />
<circle cx="15" cy="285" r="5" class="greenFill flash-4" />
<circle cx="5" cy="265" r="5" class="greenFill flash-4" />
<circle cx="5" cy="235" r="5" class="greenFill flash-4" />
<circle cx="5" cy="365" r="5" class="greenFill flash-4" />
<circle cx="25" cy="385" r="5" class="greenFill flash-4" />
<circle cx="65" cy="405" r="5" class="greenFill flash-4" />
<circle cx="105" cy="410" r="5" class="greenFill flash-4" />
<circle cx="155" cy="410" r="5" class="greenFill flash-4" />
<circle cx="195" cy="415" r="5" class="greenFill flash-4" />
<circle cx="225" cy="410" r="5" class="greenFill flash-4" />
<circle cx="255" cy="395" r="5" class="greenFill flash-4" />
<circle cx="285" cy="370" r="5" class="greenFill flash-4" />
<circle cx="310" cy="345" r="5" class="greenFill flash-4" />
<circle cx="335" cy="305" r="5" class="greenFill flash-4" />
<circle cx="335" cy="235" r="5" class="greenFill flash-4" />
<circle cx="335" cy="365" r="5" class="greenFill flash-4" />
<circle cx="335" cy="415" r="5" class="greenFill flash-4" />
<circle cx="295" cy="435" r="5" class="greenFill flash-4" />
<circle cx="265" cy="455" r="5" class="greenFill flash-4" />
<circle cx="235" cy="475" r="5" class="greenFill flash-4" />
<circle cx="215" cy="495" r="5" class="greenFill flash-4" />
<circle cx="200" cy="495" r="5" class="greenFill flash-4" />
<circle cx="180" cy="495" r="5" class="greenFill flash-4" />
<circle cx="150" cy="495" r="5" class="greenFill flash-4" />
<circle cx="120" cy="495" r="5" class="greenFill flash-4" />
<circle cx="75" cy="485" r="5" class="greenFill flash-4" />
<circle cx="35" cy="470" r="5" class="greenFill flash-4" />
<circle cx="10" cy="455" r="5" class="greenFill flash-4" />
<circle cx="5" cy="435" r="5" class="greenFill flash-4" />`;
treeBlock.append(garlandSvg)
}
