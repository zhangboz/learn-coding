    function calculate(){
      var result = "";

      var finalresult = "";

      result+=event.srcElement.innerText;

      display.innerText=result;

    }

    function calculateresult(){

      finalresult=eval(result);

      display.innerText=finalresult;

    }