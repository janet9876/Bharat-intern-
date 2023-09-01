document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertBtn = document.getElementById("convert-btn");
    const emojiDiv = document.getElementById("emoji");

    convertBtn.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);

        // Display an emoji based on the temperature
        if (fahrenheit < 32) {
            emojiDiv.textContent = "❄️";
        } else if (fahrenheit > 80) {
            emojiDiv.textContent = "🔥";
        } else {
            emojiDiv.textContent = "😊";
        }
    });
});
