// import "./styles/main.scss";

// 
// ======================================================/
window.addEventListener("load", function () {
  let images = document.getElementsByTagName("img");
  console.log("vanilla lazyloaded");
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
  // src: 'data-blazy', // Default is data-src

  // selector
  // selector: 'img', // all images

  // images inside container
  // container: '#scrolling-container', // Default is window

  // offset: 100, // Loads images 100px before they're visible

  // breakpoints: [{
  //   width: 420, // max-width
  //   src: 'data-src-small'
  // },
  // {
  //   width: 768, // max-width
  //   src: 'data-src-medium'
  // }],
  
  success: function (ele) {
    console.log("bLazy image loaded");
    console.log(ele.getAttribute("src"));
  },
  error: function (ele, msg) {
    if (msg === "missing") {
      console.log("bLazy data-src is missing");
    } else if (msg === "invalid") {
      console.log("bLazy data-src is invalid");
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
      console.log("echo-js loaded");
      console.log(`echo-js ${element} ${op}`);
      // element.classList.add("loaded");
    } else {
      console.log(op);
      // element.classList.remove("loaded");
    }
  }
});
// echo.render(); is also available for non-scroll callbacks
