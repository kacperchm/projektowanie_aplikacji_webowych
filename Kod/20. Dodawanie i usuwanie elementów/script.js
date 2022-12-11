window.onload = function () {
    setTimeout(function (){
        let element = document.createElement('div');
        element.textContent = '5';
        document.getElementById('big-box').appendChild(element);

    },3000)

    setTimeout(function () {
        let childElement = document.getElementById('box-two');
        document.getElementById('big-box').removeChild(childElement);
    }, 5000)

}