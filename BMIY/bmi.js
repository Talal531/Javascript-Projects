
function clearfunc(){
    var clr = document.getElementById("BMI");
    clr.reset();
    var clrResult = document.getElementById("RC").value;
    clrResult.reset();
}

function calcfunc(){
    var n = document.getElementById("name").value;
    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;
    
    if(n == ''){
        alert("Please Enter Your Name");
    }else if(h == ''){
        alert("Please Enter Height in Centimeter");
    }else if(w == ''){
        alert("Please Enter Weight in Kilograms");
    }else if(h <= 0){
        alert("Height should be in Positive number");
    }else if(w <=0){
        alert('Weight Should be in Positive Number');
    }else{
        var finalbmi = w/(h/100*h/100);
        var result = document.getElementById('resultRemarks');
        result.textContent = 'Hi ' + '<b style="color:black;">' + n + '</b>' + ', ' + 'Your BMI is: ' + finalbmi.toFixed(2) + '.';

        if(finalbmi>0 && finalbmi<=18.5){
            result.className = 'uNder';
            var msg1 = 'Under Weight..!';
            result.innerHTML = result.textContent + '</br>' + msg1;
        }else if(finalbmi>18.5 && finalbmi<=25){
             result.className = 'iDeal';
            var msg2 = 'Ideal Weight..!';
            result.innerHTML = result.textContent + '</br>' + msg2;
        }else if(finalbmi>25 && finalbmi<=30){
            result.className = 'oVer';
            var msg3 = 'Over Weight..!';
            result.innerHTML = result.textContent + '</br>' + msg3;
        }else{
            result.className = 'oBese';
            var msg4 = 'Obese..!';
            result.innerHTML = result.textContent + '</br>' + msg4;
        }
    }
}

function checkUsername(){
var n = document.getElementById("name").value;
var n_msg= document.getElementById('n_error_msg');
    if(n == ''){
        n_msg.textContent = '* Required Field';
    }else{
        n_msg.textContent='';
    }
}

function checkHeight(){
    var h = document.getElementById("height").value;
    var h_msg= document.getElementById('h_error_msg');
     if(h == ''){
        h_msg.textContent = '* Required Field';
    }else{
        h_msg.textContent='';
    }
}

function checkWeight(){
    var w = document.getElementById("weight").value;
    var w_msg= document.getElementById('w_error_msg');
     if(w == ''){
        w_msg.textContent = '* Required Field';
    }else{
        w_msg.textContent='';
    }
}