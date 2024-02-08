// Update year in footer tag
const updateYear = new Date().getFullYear();
const copyrightElement = document.getElementById("copyright");

copyrightElement.innerHTML = "© " + updateYear + " Kanan N. All rights reserved.";
