let button = document.querySelector('.setting');
let sezeSetnh = document.querySelector('.size-seting');
let Body = document.querySelector('body')
let control = document.querySelector('.controlc');
let collorset = document.querySelector('.filter');
let pixels = document.querySelector('.pixels');
button.onclick = function(){
    control.classList.toggle('shown');
}
collorset.onchange =function(){
    Body.style.color = collorset.value;  
}
sezeSetnh.onchange = function(){
    pixels.textContent = sezeSetnh.value;
    Body.style.fontSize = sezeSetnh.value + 'px';
}
