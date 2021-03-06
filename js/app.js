/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
//set the starting time  to measure the speed of the code

//select a ul tag in nav
const navbarMenu = document.getElementById("navbar__list");
//select sections
const sections = document.querySelectorAll("section");

//build a nav
function createNav(){
  for (let item of sections){
    let section = document.createElement("li");
    section.className = "menu__link";
    section.dataset.nav = item.id;
    section.innerText = item.dataset.nav;
    navbarMenu.appendChild(section);
  };  
};
createNav();

// make section active
function makeActive(){
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    if(box.top <= 150 && box.bottom >= 150){
      const id = section.getAttribute("id");
      document.querySelector(`.${id}`).classList.add("active");      
      section.classList.add('your-active-class');      
    }else{
      const id = section.getAttribute("id");
      document.querySelector(`.${id}`).classList.remove('active');
      section.classList.remove('your-active-class');      
    }
  }
}

document.addEventListener("scroll", function(){
  makeActive()
});
