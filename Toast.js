import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const notification = (text) =>
  Toastify({
    text,
    duration: 3000,
    gravity: "bottom",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "white",
      color: "black",
      borderRadius: "4px"
    }
  }).showToast();
