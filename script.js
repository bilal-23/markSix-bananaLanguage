"use strict";
const inputText = document.querySelector("#translate-input");
const outputText = document.querySelector("#translate-output");
const translateBtn = document.querySelector(".btn");

const url = "https://api.funtranslations.com/translate/minion.json?text=";

async function translate() {
    const text = inputText.value;
    try {
        const res = await fetch(url + text);
        const data = await res.json();
        if (res.status === 429) {
            throw new Error(data.error.message)
        }
        const translatedText = data.contents.translated;
        outputText.textContent = translatedText;
    }
    catch (err) {
        alert(err);
    }
}

translateBtn.addEventListener("click", translate);