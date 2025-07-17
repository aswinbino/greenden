var sidenav = document.getElementById("sidenav");
  var menuicon = document.getElementById("menuicon");
 var closenav =document. getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = "0"
  })
  closenav.addEventListener("click", function () {

  sidenav.style.right = "-50%"})


  var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");

var productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (var count = 0; count < productList.length; count++) {
    var productName = productList[count].querySelector("h1");

    if (productName.textContent.toUpperCase().includes(enteredValue)) {
      productList[count].style.display = "block";
    } else {
      productList[count].style.display = "none";
    }
  }
});
