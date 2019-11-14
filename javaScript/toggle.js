function myFunction(x) {
    x.classList.toggle("change");
    var x = document.getElementById("burger");
    var y = document.getElementById("cat-section");
    var z = document.getElementById("value-b");
    var t = document.getElementById("fot");
    var h = document.getElementById("video-javaScript");
   
     
    

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      t.style.display = "none";
      h.style.display = "none";
    
      
    } else {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "block";
      t.style.display = "block";
      h.style.display = "block";
    }    
}
