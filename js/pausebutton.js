const btn2 = document.getElementById('button2');
var multipurpose2 = "true"

btn2.addEventListener('click', function handleClick() {
    console.log('Pressed multi purpose button');
    if (multipurpose2 == "true") {
        btn2.textContent = "Play";
        console.log('paused');
        multipurpose2 = "false";
    } else {
        btn2.textContent = "Pause";
        console.log('Played');
        multipurpose2 = "true";
    }

});