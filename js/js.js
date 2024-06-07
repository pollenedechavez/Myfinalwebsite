function calc1(num1,num2){
    return Number(num1)+Number(num2);
  }
  function calc2(num1,num2){
    return Number(num1)-Number(num2);
  }
  function calc3(num1,num2){
    return Number(num1)*Number(num2);
  } 
 function calc4(num1,num2){
    return Number(num1)/Number(num2);
  }
  
function changecolor(){
  document.getElementById('JavaScript').style.color="blue";
}
function changecolor2(){
  document.getElementById('JavaScript').style.color="red";
}
function changeimage(){
  document.getElementById('Smile').src="images/smile.jpg";
}
function changetext(){
   txt=document.getElementById("input1").value;
  document.getElementById('JavaScript').innerHTML=txt;
}

function input1(){
  document.getElementById("label1").style.color="red";
  document.getElementById("label3").style.color="green";   
}
function input2(){
  document.getElementById("label2").style.color="red";
  document.getElementById("label3").style.color="green";
  
}
function input3(){
  document.getElementById("label3").style.color="green";
}

