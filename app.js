var div = document.getElementById("container");
var button = document.getElementById("btn");
var img = document.getElementById("img");

button.onclick = ()=>{
    
    img.setAttribute("src", "assets/img/down.png")

    if (div.style.display === 'none') {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
        img.setAttribute("src", "assets/img/up.png")
      }
}
