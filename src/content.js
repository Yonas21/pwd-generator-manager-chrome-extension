function generatePassword(length) {
	const lowercase = "abcdefghijklmnopqrstuvwxyz";
	const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numbers = "0123456789";
	const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

	// Ensure minimum length of 8 characters for strength
	length = Math.max(length, 8);

	let password = "";

	// Ensure at least one character from each category
	password += lowercase[Math.floor(Math.random() * lowercase.length)];
	password += uppercase[Math.floor(Math.random() * uppercase.length)];
	password += numbers[Math.floor(Math.random() * numbers.length)];
	password += symbols[Math.floor(Math.random() * symbols.length)];

	// Fill the rest of the password
	const allChars = lowercase + uppercase + numbers + symbols;
	for (let i = password.length; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * allChars.length);
		password += allChars[randomIndex];
	}

	// Shuffle the password to make it more random
	password = password
		.split("")
		.sort(() => Math.random() - 0.5)
		.join("");

	return password;
}

document.addEventListener("DOMContentLoaded", function () {
	const generateButton = document.getElementById("generate");
	const passwordDisplay = document.getElementById("password");

	generateButton.addEventListener("click", function () {
		const password = generatePassword(12);
		passwordDisplay.textContent = password;
	});
});

document.addEventListener("focusin", function (event) {
	if (event.target.type === "password") {
		const newPassword = generatePassword(12);

		// Show a tooltip-like suggestion
		event.target.setAttribute("placeholder", `Suggested: ${newPassword}`);

		// Listen for a double-click to insert the password
		event.target.addEventListener("dblclick", function () {
            console.log("new passwrord", newPassword)
			event.target.value = newPassword;
		});
	}
});
