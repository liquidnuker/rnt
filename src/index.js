// import "./styles/main.scss";

// 
// ======================================================/
window.addEventListener("load", function () {
  let images = document.getElementsByTagName("img");
  console.log("img loaded");
  for (let i = 0, l = images.length; i < l; i++) {
    if (images[i].getAttribute("data-src")) {
      images[i].setAttribute("src", images[i].getAttribute("data-src"));
    }
  }
}, false);

// 
// ======================================================/
// import Blazy from "./js/vendor/bLazy.min.js"; // ok
import Blazy from "blazy"; // ok

let bLazy = new Blazy({
  success: function (ele) {
    // Image has loaded
    // Do your business here
    console.log(ele.getAttribute("src"));
  },
  error: function (ele, msg) {
    if (msg === "missing") {
      // Data-src is missing
    } else if (msg === "invalid") {
      // Data-src is invalid
    }
  }
});

// 
// ======================================================/
import echo from "echo-js"; // ok

echo.init({
  offset: 100,
  throttle: 250,
  unload: false,
  callback: function (element, op) {
    if (op === "load") {
      console.log(op);
      // element.classList.add("loaded");
    } else {
      console.log(op);
      // element.classList.remove("loaded");
    }
  }
});
// echo.render(); is also available for non-scroll callbacks
