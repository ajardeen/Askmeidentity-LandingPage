//  navigation toggle script
const menu = document.getElementById("menu");
const infoElement = document.getElementById("infoElement");
menu.addEventListener("click",()=>{
    infoElement.classList.toggle("hidden");
});

const linkList= document.getElementById("linkList");
for(let i=0;i<4;i++){
    linkList.children[i].addEventListener("click",(e,element)=>{
        infoElement.classList.toggle("hidden");
    })
}
