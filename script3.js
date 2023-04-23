const button = document.getElementById("submit-button");

button.addEventListener("click", () => {
  const name = document.getElementById("Pavadinimas").value;
  const price = document.getElementById("Kaina").value;
  const place = document.getElementById("Vieta").value;
  const photo = document.getElementById("Nuotrauka").value;
  const description = document.getElementById("Aprasymas").value;

const newSkelbimas = {
  Pavadinimas: name,
  Kaina: price,
  Vieta: place,
  Nuotrauka: photo,
  Aprasymas: description,
};


  fetch(`https://643d68336afd66da6af62780.mockapi.io/skelbimas` , {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSkelbimas),
  })
  .then((data) => {
return data.json();
  })
  .then((data)=> {
const successMessage = document.getElementById("success-message");
successMessage.innerHTML = "Skelbimas sėkmingai įdėtas";

setTimeout(() => {
  window.location.replace("./index.html");
}, 1000);

  });
});


