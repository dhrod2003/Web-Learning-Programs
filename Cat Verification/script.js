function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (x == "cat") {
      text = "You're right";
      document.getElementById("numb").style.borderColor = "green";
      document.getElementById("numb").style.borderWidth = "5px";
      document.getElementById("numb").style.borderRadius = "15%";
    } else {
      text = "You're wrong, this is a cat";
      document.getElementById("numb").style.borderColor = "red";
      document.getElementById("numb").style.borderWidth = "5px";
      document.getElementById("numb").style.borderRadius = "15%";
    }
    document.getElementById("demo").innerHTML = text;
    
}