


// get percentage calculaion formula 

function getperc() {


   var name =prompt ("enter your name")
    var obtMarks =document.getElementById("obt1").value;

    let tmMarks =document.getElementById("tm1").value;
     let res =(obtMarks/tmMarks)*100;
     document.querySelector("#res1").innerHTML= (<h1> dear$(name) your percentage is $ {res} </h1>)
    alert (res)
    console.log("dear" + name + "your percentage is " +res)
     

}

