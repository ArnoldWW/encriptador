import { notification } from "./Toast";

const $inputText = document.querySelector("#inputText");
const $btnEncrypt = document.querySelector("#btnEncrypt");
const $btnDecrypt = document.querySelector("#btnDecrypt");
const $resultText = document.querySelector("#resultText");
const $btnCopy = document.querySelector("#btnCopy");

$btnEncrypt.addEventListener("click", () => {
  if ($inputText.value.trim() === "") {
    $resultText.textContent =
      "El resultado de su texto encriptado aparecerá aquí";
    $btnCopy.classList.add("hidden");
    return notification("No hay texto para encriptar 🫷");
  }

  $btnCopy.classList.remove("hidden");

  const ciphertext = $inputText.value
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  $resultText.textContent = ciphertext;
  notification("Encriptado ✅");
});

$btnDecrypt.addEventListener("click", (e) => {
  if ($inputText.value.trim() === "") {
    $resultText.textContent =
      "El resultado de su texto encriptado aparecerá aquí";
    $btnCopy.classList.add("hidden");
    return notification("No hay texto para desencriptar 🫷");
  }

  $btnCopy.classList.remove("hidden");

  const decryptedText = $inputText.value
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  $resultText.textContent = decryptedText;
  notification("Desencriptado ✅");
});

$btnCopy.addEventListener("click", () => {
  const text = $resultText.textContent;

  navigator.clipboard
    .writeText(text)
    .then(function () {
      notification("Copiado ✅");
    })
    .catch(function (err) {
      notification("Error al copiar el texto");
      console.error(err);
    });
});
