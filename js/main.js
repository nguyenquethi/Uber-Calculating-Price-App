const UBER_CAR = 'uberCar';
const UBER_SUV = 'uberSUV';
const UBER_BLACK = 'uberBlack';

function countFirstKm (carType) {
    switch (carType) {
        case UBER_CAR:
            return 8000;
        case UBER_SUV:
            return 9000;
        case UBER_BLACK:
            return 10000;
    }
}

function countKm1to19 (carType) {
    switch (carType) {
        case UBER_CAR:
            return 7500;
        case UBER_SUV:
            return 8500;
        case UBER_BLACK:
            return 9500;
    }
}

function countAbove19Km (carType) {
    switch (carType) {
        case UBER_CAR:
            return 7000;
        case UBER_SUV:
            return 8000;
        case UBER_BLACK:
            return 9000;
    }
}

document.getElementById('btnCal').onclick = function(){
    // get user input
    // check user input is valid or not
    if (document.querySelector("input[name = 'selector']:checked") == null){
        alert("please choose the car option");
        return;
    }
    var carType = document.querySelector("input[name = 'selector']:checked").value;
    console.log(carType);

    // check the input of the Km number
    var kmNum = document.getElementById('txt-km').value * 1;
    if (kmNum == 0){
        alert('please enter the number of Km');
        return;
    }
    // checking the user input
    var waitingTime = document.getElementById('txt-thoiGianCho').value * 1;
    if (waitingTime == 0) {
        alert('please enter the time of waiting');
        return;
    }
    console.log(kmNum);
    console.log(waitingTime);

    var fisrtKmAmount = countFirstKm(carType);
    var amountFrom1to19 = countKm1to19(carType);
    var above19 = countAbove19Km(carType);

    
    console.log(fisrtKmAmount);
    console.log(amountFrom1to19);
    console.log(above19);

    // var sum = fisrtKmAmount + 18 * amountFrom1to19 + (32 - 19) * above19
    // console.log(sum);
    var sum = 0;
    if (kmNum == 1) {
        sum = fisrtKmAmount;
    } else if (kmNum > 1 && kmNum <= 19){
        sum = fisrtKmAmount + (kmNum - 1) * amountFrom1to19;
    } else {
        sum = fisrtKmAmount + 18 * amountFrom1to19 + (kmNum - 19) * above19;
    }
    console.log(sum);

    document.getElementById('divThanhTien').style.display = 'block';
    document.getElementById('xuatTien').innerHTML = `${sum.toLocaleString("it-IT", {
        currency: 'VND',
        style: 'currency',
    }) }`
}