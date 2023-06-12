
let thembutton = document.querySelector(' .thembutton');
thembutton.addEventListener("click", function () {
document.body.classList.toggle("dark-theme");
});
function playAudio(url){
    let i=0
    if (i==0){
    new Audio(url).play();
    i++;
}else{
Audio.pause();
i--;
}
}