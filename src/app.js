document.getElementById("btn").addEventListener("mousedown", fetchAdvice);
const quote = document.querySelector(".card__quote");

async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const { slip } = data;
    quote.innerText = slip.advice;
}

// fetchAdvice();
