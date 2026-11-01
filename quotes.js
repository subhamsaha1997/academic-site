document.addEventListener("DOMContentLoaded", () => {
    const source = document.querySelector("#all-quotes");
    const selected = document.querySelector("#selected-quotes");
    const other = document.querySelector("#other-quotes");

    if (!source || !selected || !other) return;

    const quotes = source.querySelectorAll(".advisor-quote");

    quotes.forEach((quote) => {
        const target = quote.classList.contains("selected")
            ? selected
            : other;

        target.appendChild(quote.cloneNode(true));
    });

    source.remove();

    const count = other.querySelectorAll(".advisor-quote").length;

    document.querySelector(".quotes-toggle summary")
        .textContent = `More Wisdom (${count})`;
});
