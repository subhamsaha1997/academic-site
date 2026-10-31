document.addEventListener("DOMContentLoaded", () => {
    const source = document.querySelector("#all-publications");
    const selected = document.querySelector("#selected-publications");
    const other = document.querySelector("#other-publications");

    if (!source || !selected || !other) return;

    const publications = source.querySelectorAll("li");

    publications.forEach((paper) => {
        const target = paper.classList.contains("selected")
            ? selected
            : other;

        target.appendChild(paper.cloneNode(true));
    });

    source.remove();

    const count = other.querySelectorAll("li").length;
    document.querySelector(".publications-toggle summary")
        .textContent = `Other Publications (${count})`;
});
