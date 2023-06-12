let Big = document.querySelector('.imagecoints');
let smallImg = document.querySelector('.galery-small');
let bigImg = Big.querySelector('img');
let smallimgs = smallImg.querySelectorAll('img');
let likes=[];
let button=document.querySelector('.like')

bigImg.src = smallImg[0];

for (let img of smallimgs) {
    img.onclick=function(){
        bigImg.src = img.src;
        button.onclick=function(){
            console.log(indexofimg[img]);
        }
        
        
    }
    
}
button.onclick=function(){
    console.log(indexof(img));
}