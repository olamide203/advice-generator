document.getElementById("btn").addEventListener("mousedown", fetchAdvice);
const quote = document.querySelector(".card__quote");
const quoteId = document.querySelector(".quote__id");

async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice", {
        method: "GET",
        cache: "reload",
    });
    const data = await response.json();
    const { slip } = data;
    quote.innerText = slip.advice;
    quoteId.innerText = slip.id;
}
