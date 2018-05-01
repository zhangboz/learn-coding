    var result = "";
// need to define global variable because if "var result" is 
// inside the "calculate()" function, every excution of it 
// would've made "result" = "", and add a single number 
// to it, so we will never get an extending string
    function calculate(){
      click = event.srcElement.innerText;
      if (click == "c"){
        result = "";
      }
      else
      {result += click;}
      display.innerText=result;
    }

    function calculateresult(){
       display.innerText=eval(result);
    }
   
