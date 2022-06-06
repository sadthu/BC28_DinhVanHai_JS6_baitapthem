printNumber.onclick = function () {
    var inNumber = document.getElementById('inNumber').value;
    var numberPrime = '';
    for (var i = 2; i <= inNumber; i++) {
        if (searchPrime(i) == 0) {
            numberPrime += i + ' ';
        }
    }
    document.getElementById('result').innerHTML = numberPrime;
}
function searchPrime (x) {
    var uoc = 0;
    for (var i = 2; i < x; i++) {
        if (x % i == 0) {
            uoc = 1;
            break;
        } 
    }
    return uoc;
}