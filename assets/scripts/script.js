"use strict";
let userRating;
const feedbackRatings = document.querySelectorAll(".feedback-rating");
const feedbackSubmit = document.querySelector(".feedback-submit");
const feedbackCard = document.querySelector(".feedback-card");
const feedbackAnswerCard = document.querySelector(".feedback-answer-card");
const feedbackRatingResult = document.querySelector(".feedback-rating-result");
for (const feedbackRating of feedbackRatings) {
    feedbackRating.addEventListener("click", () => {
        for (const feedbackRating of feedbackRatings) {
            feedbackRating.className = "feedback-rating";
        }
        userRating = feedbackRating.textContent;
        feedbackRatingResult.textContent = `You selected ${userRating} out of 5`;
        feedbackRating.classList.toggle("toggle");
    });
}
feedbackSubmit === null || feedbackSubmit === void 0 ? void 0 : feedbackSubmit.addEventListener("click", () => {
    feedbackCard === null || feedbackCard === void 0 ? void 0 : feedbackCard.classList.toggle("hidden");
    feedbackAnswerCard === null || feedbackAnswerCard === void 0 ? void 0 : feedbackAnswerCard.classList.toggle("visible");
});
