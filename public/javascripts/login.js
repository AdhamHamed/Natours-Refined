import axios from "axios";
import { showAlert } from "./alert";

const loginForm = document.querySelector(".form");
const logoutBtn = document.querySelector(".nav__el--logout");

export const login = async (email, password) => {
	try {
		const res = await axios({
			method: "POST",
			url: "/api/v1/users/login",
			data: {
				email,
				password,
			},
		});
		if (res.data.status === "success") {
			showAlert("success", "Logged In Successfully!");
			window.setTimeout(() => {
				location.assign("/");
			}, 1500);
		}
	} catch (err) {
		showAlert("error", err.response.data.message);
	}
};

export const logout = async () => {
	try {
		const res = await axios({
			method: "GET",
			url: "/api/v1/users/logout",
		});
		if (res.data.status === "success") {
			location.assign("/");
		}
	} catch (err) {
		showAlert("error", "Error Logging Out! Try Again.");
	}
};

if (loginForm) {
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		login(email, password);
	});
}

if (logoutBtn) {
	logoutBtn.addEventListener("click", logout);
}
