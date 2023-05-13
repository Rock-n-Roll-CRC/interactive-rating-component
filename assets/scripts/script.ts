let userRating: string | null;

const feedbackRatings: NodeListOf<HTMLDivElement> =
  document.querySelectorAll(".feedback-rating");
const feedbackSubmit: HTMLButtonElement | null =
  document.querySelector(".feedback-submit");
const feedbackCard: HTMLElement | null =
  document.querySelector(".feedback-card");
const feedbackAnswerCard: HTMLElement | null = document.querySelector(
  ".feedback-answer-card"
);
const feedbackRatingResult: HTMLDivElement | null = document.querySelector(
  ".feedback-rating-result"
);

for (const feedbackRating of feedbackRatings) {
  feedbackRating.addEventListener("click", () => {
    for (const feedbackRating of feedbackRatings) {
      feedbackRating.className = "feedback-rating";
    }

    userRating = feedbackRating.textContent;
    feedbackRatingResult!.textContent = `You selected ${userRating} out of 5`;

    feedbackRating.classList.toggle("toggle");
  });
}

feedbackSubmit?.addEventListener("click", () => {
  feedbackCard?.classList.toggle("hidden");
  feedbackAnswerCard?.classList.toggle("visible");
});
