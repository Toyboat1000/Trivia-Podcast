const btn2 = document.getElementById('button2');
var multipurpose2 = "true"

btn2.addEventListener('click', function handleClick() {
    console.log('Pressed multi purpose button');
    if (multipurpose2 == "true") {
        btn2.textContent = "Play";
    } else {
        btn2.textContent = "Pause";
    }

});