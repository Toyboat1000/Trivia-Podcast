const btn2 = document.getElementById('button2');
var multipurpose2 = "true"
var audio = new Audio('audio_file.mp3');


btn2.addEventListener('click', function handleClick() {
    if (multipurpose2 == "true") {
        btn2.textContent = "Play";
        multipurpose2 = "false";
        console.log('paused');
        audio.pause();
       
    } 
    if (multipurpose2 == "false") {
        audio.play();
        btn2.textContent = "Pause";
        console.log('Played');
        multipurpose2 = "true";
    }

});