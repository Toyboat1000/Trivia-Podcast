const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');

var audio = new Audio('sounds/Whitenoise.wav');


btn2.addEventListener('click', function handleClick() {
        console.log('Played');
        audio.play();

});

btn3.addEventListener('click', function handleClick() {

    console.log('paused');
    audio.pause();

});