function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate");
    const passwordDisplay = document.getElementById("password");
    const copyButton = document.getElementById("copy");

    generateButton.addEventListener("click", function() {
        const passwordLength = parseInt(document.getElementById("length").value) || 12;
        const newPassword = generatePassword(passwordLength);
        console.log("newPassword================================", newPassword);
        passwordDisplay.value = newPassword;
        generatedPassword.textContent = newPassword;
    });

    copyButton.addEventListener("click", function () {
		if (passwordDisplay.value) {
			passwordDisplay.select();
			passwordDisplay.setSelectionRange(0, 99999); // For mobile devices
			document.execCommand("copy");

			// Show a confirmation message
			copyButton.textContent = "Copied!";
			setTimeout(() => {
				copyButton.textContent = "Copy to Clipboard";
			}, 1500);
		}
	});
});