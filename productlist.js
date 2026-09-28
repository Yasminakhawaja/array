const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

const produktliste = document.querySelector(".produktliste");
const h1 = document.querySelector("h1");

h1.textContent = cat;

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);

  json.forEach((produkt) => {
    const tildbudpris = Math.round(produkt.price - (produkt.price * produkt.discount) / 100);
    produktliste.innerHTML += `
      <a href="productdetails.html?id=${produkt.id}" class=${produkt.soldout ? "udsolgt" : ""}>
        <article class="card">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp" alt="produktbillede" />
          <h2>${produkt.productdisplayname}</h2>
          <h3>${produkt.brandname}</h3>
          ${
            produkt.discount
              ? `<p class="tildbudlabel">${produkt.discount}%</p>
               <p> Før kr.${produkt.price} NU ${tildbudpris},-<p/>`
              : `<p>kr. ${produkt.price},-</p>`
          }
          <p>${produkt.gender}</p>
          <p>${produkt.subcategory}</p>
        </article>
      </a>`;
  });
}
