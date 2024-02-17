let inputbox = document.querySelector('.inputbox');
let displaybox = document.querySelector('.displaybox');
let historybox = document.querySelector('.history');
let anshistory = [];
let eqnhistory = [];
function getval(val) {
    if (inputbox.value == 0) {
        inputbox.value = val;
    }
    else {
        inputbox.value += val;
    }
}
function getans() {
    let ans, store;

    displaybox.value = inputbox.value;
    store = inputbox.value;
    ans = eval(inputbox.value);
    eqnhistory.push(store);
    anshistory.push(ans);
    inputbox.value = ans;
}

function history() {
    for (let i = 0; i < eqnhistory.length; i++) {
        historybox.innerHTML += "<div class='element mb-2 fw-bold'> <div class='text-secondary'>" + eqnhistory[i] + "</div><div class='text-primary'>" + anshistory[i] + "</div></div>";
        console.log(eqnhistory[i], anshistory[i])
        eqnhistory.pop();
        anshistory.pop();
    }
    document.querySelector(".main").style.display = "none";
    document.querySelector(".main2").style.display = "block";
}


function clr() {
    inputbox.value = 0;
    displaybox.value = null;
}
function clrhistory() {
    document.querySelector(".main").style.display = "block";
    document.querySelector(".main2").style.display = "none";
}

function clrHistoryData() {
    document.querySelector('.history').innerHTML = " ";
}
