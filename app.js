function changeColor() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color-code").value = randomColor;
    document.getElementById("color-container").style.display = "block";
  }
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  