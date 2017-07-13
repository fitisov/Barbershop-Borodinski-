var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var popupClose = document.querySelector(".close-btn");	
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var menu = document.querySelector(".icon-mobile");
var mobile = document.querySelector(".mobile-list");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");

	if (storage) {
		login.value = storage;
		password.focus();
	}	else {
			login.focus();
	}
});

popupClose.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-content-error");
});

form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
	event.preventDefault();
	popup.classList.add("modal-content-error");
} else {
	localStorage.setItem("login", login.value);
}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-content-error");
		}
	}
});

 menu.addEventListener("click", function(event) {
 		event.preventDefault();
 		mobile.classList.add("mobile-list-show");
 });

