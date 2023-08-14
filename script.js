const features = document.querySelector("#features");
const company = document.querySelector("#company");
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const featuresContent = document.querySelector("#features-container");
const companyContent = document.querySelector("#company-container");
const main = document.querySelector("#main");
const body = document.querySelector("#body");

const navbar = document.querySelector("#nav");

function featuresNav(){
    arrow1.classList.toggle("active");
    arrow2.classList.remove("active");
    featuresContent.classList.toggle("features-nav");
    companyContent.classList.remove("company-nav");
    
}

function companyNav(){
    arrow2.classList.toggle("active");
    arrow1.classList.remove("active");
    companyContent.classList.toggle("company-nav");
    featuresContent.classList.remove("features-nav");
}

function removeNav(){
    arrow1.classList.remove("active");
    arrow2.classList.remove("active");
    featuresContent.classList.remove("features-nav");
    companyContent.classList.remove("company-nav");
}

const openmenu = document.querySelector(".open-menu");

openmenu.addEventListener("click", ()=>{
    navbar.classList.add("active");
    closemenu.style.display = "block";
    openmenu.style.display = "none";
    body.classList.add("active");
})

const closemenu = document.querySelector(".close-menu");

closemenu.addEventListener("click", ()=>{
    navbar.classList.remove("active");
    closemenu.style.display = "none";
    openmenu.style.display = "block";
    arrow1.classList.remove("active");
    arrow2.classList.remove("active");
    featuresContent.classList.remove("features-nav");
    companyContent.classList.remove("company-nav");
    body.classList.remove("active");
})

features.addEventListener("click", featuresNav);
company.addEventListener("click", companyNav);
main.addEventListener("click", removeNav);