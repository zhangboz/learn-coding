    var result = "";
// need to define global variable because if "var result" is 
// inside the "calculate()" function, every excution of it 
// would've made "result" = "", and add a single number 
// to it, so we will never get an extending string
    function calculate(){
<<<<<<< HEAD
      var gvar result = "";

      var finalresult = "";

      result+=event.srcElement.innerText;

=======
      click = event.srcElement.innerText;
      if (click == "c"){
        result = "";
      }
      else
      {result += click;}
>>>>>>> 8d6b712880e45f780140607ee90c32bc9bc7a8f7
      display.innerText=result;
    }

    function calculateresult(){
<<<<<<< HEAD

      finalresult=eval(result);

      display.innerText=finalresult;

    }

    function store_number(){

    }
=======
       display.innerText=eval(result);
    }
   
>>>>>>> 8d6b712880e45f780140607ee90c32bc9bc7a8f7
