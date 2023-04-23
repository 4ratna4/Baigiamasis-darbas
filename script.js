const skelbimaiWrapper = document.getElementById("skelbimai-wrapper");

const skelbimasOptionCreation = (skelbimas) => {
    console.log(skelbimas);
    const wrapper = document.createElement("div");
    const place = document.createElement("div")
    const image = document.createElement("img");
    const infoWrapper = document.createElement("div")
    const nameOfProduct = document.createElement("div");
    const price = document.createElement("div");
    const link = document.createElement("a");
    link.href = "./skelbimas.html";
    link.addEventListener("click", ()=>{
        localStorage.setItem("id", skelbimas.id)
    })
   
    wrapper.setAttribute("class", "skelbimas");
    place.setAttribute("class", "vieta");
    image.setAttribute("src", skelbimas.Nuotrauka);
    infoWrapper.setAttribute("class", "info-wrapper");
    nameOfProduct.setAttribute("class", "pavadinimas");
    price.setAttribute("class", "kaina");

    infoWrapper.append(nameOfProduct);
    infoWrapper.append(price)

    wrapper.append(place);
    wrapper.append(image);
    wrapper.append(infoWrapper);
 

    place.innerHTML = skelbimas.Vieta;
    nameOfProduct.innerHTML = skelbimas.Pavadinimas;
    price.innerHTML = skelbimas.Kaina + ` €`;

    link.append(wrapper)
    skelbimaiWrapper.append(link);
   

}








fetch("https://643d68336afd66da6af62780.mockapi.io/skelbimas")
.then((res) => {
    return res.json();
  })
  .then((data) => {
    data  
    .sort((a, b) => Number(a.Kaina) - Number(b.Kaina)) 
    .forEach((skelbimas) => {
    skelbimasOptionCreation(skelbimas);
    })
  });