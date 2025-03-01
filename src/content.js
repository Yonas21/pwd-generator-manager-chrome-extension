function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate');
    const passwordDisplay = document.getElementById('password');

    generateButton.addEventListener('click', function() {
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
			event.target.value = newPassword;
		});
	}
});