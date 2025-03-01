document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate');
    const passwordDisplay = document.getElementById('password');

    generateButton.addEventListener('click', function() {
        const password = generatePassword(12);
        passwordDisplay.textContent = password;
    });

    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});