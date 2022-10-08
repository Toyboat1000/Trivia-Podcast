const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');

var audio = new Audio('audio_file.mp3');


btn2.addEventListener('click', function handleClick() {
        btn2.textContent = "Pause";
        console.log('Played');
        audio.play();

});

btn3.addEventListener('click', function handleClick() {
    btn3.textContent = "Play";
    console.log('paused');
    audio.pause();

});