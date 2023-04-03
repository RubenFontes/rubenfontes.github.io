var div = document.getElementById("container");
var button = document.getElementById("btn");
var img = document.getElementById("img");


button.onmouseover = () => button.style.textDecoration = "underline";
button.onmouseout = () => button.style.textDecoration = "none";

button.onclick = () => {
    
img.setAttribute("src", "assets/img/minus-thin-dark.png");

  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
    img.setAttribute("src", "assets/img/plus-thin-dark.png");
  }
}

