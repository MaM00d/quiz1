var yes = 0;

function Add()
         {
           var num1, num2, sum,result,label;
           num1 = parseInt(document.getElementById("firstnumber").value);
           num2 = parseInt(document.getElementById("secondnumber").value);
           sum = num1 + num2;
           if(yes==0){
          result= document.createElement("div");
          result.id="result";
           document.getElementById("calculator").appendChild(result);
          label = document.createElement("label");
          label.id = "Answer";
        result.appendChild(label);
 
        yes = yes +1;
           }
          document.getElementById("Answer").innerHTML = sum;
         }
function Subtract()
         {
           var num1, num2, sub;
           num1 = parseInt(document.getElementById("firstnumber").value);
           num2 = parseInt(document.getElementById("secondnumber").value);
           sub = num1 - num2;
             if(yes==0){
          result= document.createElement("div");
          result.id="result";
           document.getElementById("calculator").appendChild(result);
          label = document.createElement("label");
          label.id = "Answer";
        result.appendChild(label);
 
        yes = yes +1;
           }
          
           document.getElementById("Answer").innerHTML = sub;
         }
         function Clear(){
         document.getElementById("firstnumber").value= "";
         document.getElementById("secondnumber").value= "";
         document.getElementById("result").remove();
         yes = 0;
         }