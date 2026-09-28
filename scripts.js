const endpoint = "https://kea-alt-del.dk/t7/api/products";
const produktliste = document.querySelector(".produktliste");
fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);
  json.forEach((element) => {
    produktliste.innerHTML += `<article class="card">
  <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp alt="produktbillede"/>
  <h2>${element.productdisplayname}</h2>
  <h3>${element.gender}</h3>
  <p>${element.pris}</p>
  <p>${element.brandname}</p>
  </article>`;
  });
}

// const biler = [
//   {
//     pris: 23000,
//     model: "Turbo",
//     brand: "Lada",
//     farve: "Beige",
//     udstyr: ["rart", "sæder", "vinduer"],
//   },
//   {
//     pris: 50000,
//     model: "Super",
//     brand: "VW",
//     farve: "rød",
//     udstyr: ["rart", "sæder", "vinduer"],
//   },
// ];
// console.log(biler);

// const produktliste = document.querySelector("produktliste");

// // biler.forEach(visBiler);
// function visbiler(bil) {
//   produktliste.innerHTML += `<article class="card">
//   <h2>${bil.brand}</h2>
//   <h3>${bil.model}</h3>
//   <p>${bil.pris}</p>
//   <p>${bil.farve}</p>
//   </article>`;
// }
