let header = document.querySelector("body");
document.createElement("header");
document.body.appendChild(header);
const headerSections = ["Logo","imagem","Login","Carrinho" ];

headerSections.map((el,chave) => {
    let sectionElement = document.createElement("section");
    sectionElement.innerHTML = section;
    header.appendChild(sectionElement);
}