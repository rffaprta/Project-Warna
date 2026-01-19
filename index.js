const tombolUbahWarna = document.getElementById("tombolUbahWarna");
// tombolUbahWarna.addEventListener("click", function () {
//   document.body.style.backgroundColor = "lightblue";
// });
// tombolUbahWarna.onclick = function () {
//   document.body.setAttribute("class", "kuningIjo");
//   document.body.classList.toggle("kuningIjo");
// };

// const body1 = document.querySelector("body");
// body1.setAttribute("class", "kuningIjo");

// const tombol = document.querySelector("button");
// tombol.addEventListener("click", function () {

// });

const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("tombol baru");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tombolUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(255 * Math.random() + 1);
  const b = Math.round(255 * 255 + Math.random());
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + " )";
});

// slider
// const sMerah = document.querySelector("input[name=sMerah]");
// sMerah.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
// });

// sHijau.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
// });

const range = document.querySelectorAll("input");

for (let i = 0; i < range.length; i++) {
  range[i].addEventListener("input", function () {
    const r = range[0].value;
    const g = range[1].value;
    const b = range[2].value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}

// sBiru.addEventListener("input", function () {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
// });

// document.body.addEventListener("mousemove", function (e) {
//   const xpos = Math.round((e.clientX / window.innerWidth) * 255);
//   const ypos = Math.round((e.clientY / window.innerHeight) * 255);
//   document.body.style.backgroundColor = "rgb(" + xpos + ", " + ypos + ", 100)";
// });
