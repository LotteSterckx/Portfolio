
/* light and dark mode */
let darkLink = document.querySelectorAll("footer a")[0];
let lightLink = document.querySelectorAll("footer a")[1];
let hamburger = document.querySelector("#nav-toggle");
let mijnBody = document.querySelector("body");


function switchToLight() {
	mijnBody.classList.add("light");
}
function switchToDark() {
	mijnBody.classList.remove("light");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);


let menuKnop = document.querySelector("#nav-toggle");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
menuKnop.addEventListener("click",toonMenu);

window.addEventListener("click", function(event) {
      let dot = document.createElement("div");
      dot.className = "stip";
      dot.style.left = (event.pageX - 4) + "px";
      dot.style.top = (event.pageY - 4) + "px";
      document.body.appendChild(dot);
      console.log("Positie die werd aangeklikt: X=" + event.pageX + "px, Y=" + event.pageY + "px" );
});
