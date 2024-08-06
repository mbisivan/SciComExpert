document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".comment").forEach(comment => {
        const sentenceId = comment.getAttribute("data-sentence");
        const sentence = document.getElementById(sentenceId);
        if (sentence) {
            const rect = sentence.getBoundingClientRect();
            const commentRect = comment.getBoundingClientRect();
            comment.style.top = `${rect.top + window.scrollY}px`;
            comment.style.left = `${rect.right + 20}px`; // Adjust the distance from the sentence
        }
    });
});
