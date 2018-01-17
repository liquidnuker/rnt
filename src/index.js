// import "./styles/main.scss";

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
    if (msg === 'missing') {
      // Data-src is missing
    } else if (msg === 'invalid') {
      // Data-src is invalid
    }
  }
});