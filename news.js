document.addEventListener("DOMContentLoaded", () => {
    const source = document.querySelector("#all-news");
    const selected = document.querySelector("#selected-news");
    const other = document.querySelector("#other-news");

    if (!source || !selected || !other) return;

    const news = Array.from(source.querySelectorAll(".news-item"));

    news.sort((a, b) => {
        return new Date(b.dataset.date) - new Date(a.dataset.date);
    });

    news.forEach((item, index) => {
        const target = index < 4 ? selected : other;
        target.appendChild(item);
    });

    source.remove();

    const count = other.querySelectorAll(".news-item").length;
    const summary = document.querySelector(".news-toggle summary");

    if (summary) {
        summary.textContent = `More News (${count})`;
    }

    // Hide the dropdown if there are no additional news items.
    if (count === 0) {
        summary?.parentElement.remove();
    }
});
