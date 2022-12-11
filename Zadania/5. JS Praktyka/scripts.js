window.onload = function () {
    let col;
    let row;

    document.getElementById('form').addEventListener('submit', function () {
        col = document.getElementById('col-num');
        row = document.getElementById('row-num');
        console.log(col)
        console.log(row)
    });
}