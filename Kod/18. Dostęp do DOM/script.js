window.onload = function () {
    //document.getElementById('big-box').style.border = '3px solid red';
    // document.querySelector('#big-box').style.border = '3px solid red';
    // document.querySelector('.boxes').style.border = '3px solid red';
    //let arr = document.getElementsByClassName('boxes');
    //let arr = document.getElementsByTagName('div');
    // let arr = document.querySelectorAll('#big-box div')

    // for(let e of arr) {
    //     e.style.border = '3px solid yellow';
    // }

    document.getElementById('box-two').parentNode.style.border = '3px solid blue';
    document.getElementById('box-two').previousElementSibling.style.border = '3px solid red';
    document.getElementById('box-two').nextElementSibling.style.border = '3px solid purple';
    document.getElementById('box-two').firstElementChild.style.border = '3px solid green';
    document.getElementById('big-box').lastElementChild.style.border = '3px solid white';
}