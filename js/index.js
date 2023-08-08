let inputbox= document.querySelector('.inputbox');
let displaybox= document.querySelector('.displaybox');
let historybox= document.querySelector('.history');
let anshistory= [];
let eqnhistory=[];
    function getval(val){
        if(inputbox.value==0){
            inputbox.value = val;
        } 
        else{
            inputbox.value += val;
        }
    }
    function getans(){
        let ans , store;

        displaybox.value = inputbox.value;
        store = inputbox.value;
        ans = eval(inputbox.value);
        eqnhistory.push(store);
        anshistory.push(ans);
        inputbox.value = ans;
    }
    function history(){
        for(let i=0; i<eqnhistory.length;i++)
        {
            historybox.innerHTML += "<div class='element'> <h3 class='small'>" + eqnhistory[i] +"</h3><h2>" + anshistory[i] + "</h2></div>";
            
            eqnhistory.pop();
            anshistory.pop();
        }
    }
    function clr(){
        inputbox.value = 0;
        displaybox.value = null;
    }
    // function clrhistory(){
    //     let store1 = historybox.value;
    //    alert('hii');
    //    console.log(store1);
    // }
    function clrhistory(){
        historybox.innerHTML="<div style='display:none;></div>";
    }