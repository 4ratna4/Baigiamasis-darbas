const skelbimasId = localStorage.getItem("id");
// console.log(skelbimasId);


const addElementToScreen = (data) => {
const skelbimasPhoto = document.getElementById(`photo`);
skelbimasPhoto.style.backgroundImage = `url(${data.Nuotrauka})`
console.log(data);

const title = document.getElementById("daikto-pavadinimas");
title.innerHTML = data.Pavadinimas;

const price = document.getElementById("daikto-kaina");
price.innerHTML = data.Kaina + " €";

const place = document.getElementById("daikto-vieta");
place.innerHTML = data.Vieta;

const description = document.getElementById("daikto-aprasymas");
description.innerHTML = data.Aprasymas;
}

fetch(`https://643d68336afd66da6af62780.mockapi.io/skelbimas/${skelbimasId}`)
.then((res) => {
    return res.json();
  })
  .then((data) => {
    addElementToScreen(data);
  });


  const button = document.getElementById("delete-button");  
  button.addEventListener("click", () => {
      
    fetch(`https://643d68336afd66da6af62780.mockapi.io/skelbimas/${skelbimasId}` , {
      method: "DELETE",
    })
    .then((data) => {
  return data.json();
    })
    .then((data)=> {
  const successMessage = document.getElementById("success-message");
  successMessage.innerHTML = "Skelbimas sėkmingai pašalintas";

  setTimeout(() => {
    window.location.replace("./index.html");
  }, 1000);
  
    });
  });
