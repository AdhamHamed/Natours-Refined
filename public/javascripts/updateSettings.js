import axios from "axios";
import { showAlert } from "./alert";

const userDataForm = document.querySelector(".form-user-data");
const userPasswordForm = document.querySelector(".form-user-password");

export const updateSettings = async (data, type) => {
	try {
		const url =
			type === "password"
				? "/api/v1/users/updateMyPassword"
				: "/api/v1/users/updateMe";

		const res = await axios({
			method: "PATCH",
			url,
			data,
		});
		if (res.data.status === "success") {
			showAlert(`success`, `${type.toUpperCase()} Updated Successfully!`);
		}
	} catch (err) {
		showAlert("error", err.response.data.message);
	}
};

if (userDataForm) {
	userDataForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const form = new FormData();
		form.append("name", document.getElementById("name").value);
		form.append("email", document.getElementById("email").value);
		form.append("photo", document.getElementById("photo").files[0]);

		updateSettings(form, "data");
	});
}

if (userPasswordForm) {
	userPasswordForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		document.querySelector(".btn--save-password").innerHTML = "Updating...";
		const passwordCurrent = document.getElementById("password-current").value;
		const password = document.getElementById("password").value;
		const passwordConfirm = document.getElementById("password-confirm").value;
		await updateSettings(
			{ passwordCurrent, password, passwordConfirm },
			"password"
		);
		document.querySelector(".btn--save-password").innerHTML = "Save password";
		document.getElementById("password-current").value = "";
		document.getElementById("password").value = "";
		document.getElementById("password-confirm").value = "";
	});
}
