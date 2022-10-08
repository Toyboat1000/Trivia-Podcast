const btn2 = document.getElementById('button2');
var multipurpose2 = "true"

btn2.addEventListener('click', function handleClick() {
    
    if (multipurpose2 == "true") {
        btn2.textContent = "Play";
        console.log('Pressed multi purpose button');
    } else {
        btn2.textContent = "Pause";
    }

});