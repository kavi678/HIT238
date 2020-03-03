function myFunctionabout() {
  if (document.getElementById("about_me").style.display == "none"){
  document.getElementById("about_me").style.display = "block";
document.getElementById("about1").innerHTML = "Less";}
  else {
    document.getElementById("about_me").style.display = "none";
    document.getElementById("about1").innerHTML = "More";
  }
}
function myFunctioneducation() {
  if (document.getElementById("education").style.display == "none"){
  document.getElementById("education").style.display = "block";
document.getElementById("edu1").innerHTML = "Less";}
  else {
    document.getElementById("education").style.display = "none";
    document.getElementById("edu1").innerHTML = "More";
  }
}
function myFunctionempl() {
  if (document.getElementById("empl").style.display == "none"){
  document.getElementById("empl").style.display = "block";
document.getElementById("empl1").innerHTML = "Less";}
  else {
    document.getElementById("empl").style.display = "none";
    document.getElementById("empl1").innerHTML = "More";
  }
}
function myMove() {
  var elem = document.getElementById("animate");
  var elem1 = document.getElementById("animate1");
  var elem2 = document.getElementById("animate2");
  var pos = 0;
  var d1 = -45;
  var d2 = 45;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      d1++;
      d2++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
      elem1.style.top = pos + 'px';
      elem1.style.left = pos + 'px';
      elem2.style.top = pos + 'px';
      elem2.style.left = pos + 'px';
      elem1.style.transform = 'skewX'+'('+d1+'deg'+')';
      elem2.style.transform = 'skewX'+'('+d2+'deg'+')';
    }

  }
}
