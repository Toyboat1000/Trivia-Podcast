const submit = document.getElementById('submitbutton');


submit.addEventListener('click', function handleClick() {
    console.log('button1 clicked');

    if (document.getElementById('test1').checked) {
        alert("checked1");
    }

    if (document.getElementById('test2').checked) {
        alert("checked2");
    }

    if (document.getElementById('test3').checked) {
        alert("checked3");
    }
});