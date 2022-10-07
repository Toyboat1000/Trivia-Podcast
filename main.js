const btn1 = document.getElementById('button1');


btn1.addEventListener('click', function handleClick() {
  btn1.textContent = "clicked"
  //redirect page
  window.location.href = "https://www.google.com";

});