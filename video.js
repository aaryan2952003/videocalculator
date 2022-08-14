// console.log('this is calculator');
var video = document.getElementById("myVideo");


function myFunction() {
    if (video.paused) {
        var btn = document.getElementById("myBtn");
        video.play();
        btn.innerHTML = "Pause";
    }
    else {
        video.pause();
        var btns = document.getElementById('myBtn');
        btns.innerHTML = "Play";
        // btn.innerHTML = "Play";
    }
}
(function () {
    // let screen = document.getElementsByClassName('screen');
    // let equal = document.getElementsByClassName('btn-blue');
    // let buttons = document.getElementsByClassName('btn');
    // let clear = document.getElementsByClassName('btn-red');
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-red');
    let equal = document.querySelector('.btn-blue');
    // let values;
    // var expr;
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            // console.log('you clicked the button');
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        }
        else {
            // let expr = screen.value;
            let answer = eval("screen.value");
            screen.value = answer;
            // console.log(screen.value);
        }
        // console.log('equal button is clicked');
    })


    clear.addEventListener('click', function (e) {
        screen.value = "";
    })


})();


