let language = "CAT";
let languageInputs = document.getElementsByTagName("input");

// let headerHome = document.querySelector("#header-home");
// let headerShop = document.querySelector("#header-shop");
// let headerContact = document.querySelector("#header-contact");

window.addEventListener("DOMContentLoaded", (event) => {
	if (sessionStorage.language){
		if (sessionStorage.language == "CAT"){
			document.getElementById("lang-CAT").checked = true;
			setLangCAT();
		}
		if (sessionStorage.language == "EN"){
			document.getElementById("lang-EN").checked = true;
			setLangEN();
		}
	} else {
		document.getElementById("lang-CAT").checked = true;
		sessionStorage.setItem("language", "CAT")
		setLangCAT();
	}
});

for (let i=0; i < languageInputs.length; i++){
	languageInputs[i].addEventListener("click", function(){
		checkLanguage();
	})
}

function checkLanguage(){
	if(document.getElementById("lang-CAT").checked) {
  		sessionStorage.setItem("language", "CAT");
  		setLangCAT();
	}else if(document.getElementById("lang-EN").checked) {
  		sessionStorage.setItem("language", "EN");
  		setLangEN();
	}
}

function setLangCAT(){
	// headerHome.innerHTML = "Home";
	// headerShop.innerHTML = "Tienda";
	// headerContact.innerHTML = "Contacto";
}

function setLangEN(){
	// headerHome.innerHTML = "Home";
	// headerShop.innerHTML = "Shop";
	// headerContact.innerHTML = "Contact";
}