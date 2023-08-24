function calculate() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var operation = document.getElementById("operation").value;
    var results = document.getElementById("results");
        var result = 0;
        results.value =  "bruh";
    
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "minus":
            result = num1 - num2;
            break;
        case "multi":
            result = num1 * num2;
            break;
        case "divi":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        case "mode":
            result = num1 % num2;
            break;
        case "expo":
            result = Math.pow(num1, num2);
            break;
        default:
            result = "Invalid operation";
    }
    document.getElementById("results").value = result;

    const sentences = [
        "WooooooW ʘ‿ʘ",
        "Noooiiiceeee (٭°̧̧̧ω°̧̧̧٭)",
        "Bro this is basic... ( ◥◣_◢◤ )",
        "You don't need calculator for that!? (━┳━ _ ━┳━)",
        "Hamburger (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)",
        "Try Touching Grass.. (◐ω◑ )",
        "Do wanna build a snowman? ᕕ( ͡° ͜ʖ ͡° )ᕗ",
        "Banananaaaaaaa banananaaaaaaaa banana banana banana ( ͡° ͜ʖ├┬┴┬┴",
        "This is a Text (you know that right?) (︡• ͜ʖ•︠)",
        "Look behind you!!!! (●´⌓`●)" ,
        "There is a snack on the mirror... ( ͡• ͜ʖ ͡•)"
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];
    sentenceDisplay.textContent = randomSentence;
    // Earl John Vincent R. Perlas
}