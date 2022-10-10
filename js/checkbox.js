const submit = document.getElementById('submitbutton');
let questionamount = 3;

submit.addEventListener('click', function handleClick() {
    let score = 0;
    console.log('button1 clicked');

    if (document.getElementById('test1').checked) {
        console.log("checked1");
        score += 1;
    }

    if (document.getElementById('test8').checked) {
        console.log("checked8");
        score += 1;
    }

    if (document.getElementById('test4').checked) {
        console.log("checked4");
        score += 1;
    }

    alert("Your score is " + score + " out of " + questionamount);


});