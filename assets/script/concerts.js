/* =========================
   CONCERT SLIDER
   ========================= */
/* voor dit gedeelte heb ik hulp gekregen van een vriend van me: Tom, en hebben we ook gebruik gemaakt van de volgende bronnen:
  https://learndevtoday.com/how-to-build-image-carousel-slider/
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
  */

const cards = document.querySelectorAll(".concert-card");
const nextButton = document.querySelector(".concert-next");
const prevButton = document.querySelector(".concert-prev");

let currentIndex = 0;

function updateConcerts() {
  cards.forEach((card, index) => {
    card.classList.remove(
      "active",
      "previous",
      "next",
      "previous-two",
      "next-two",
    );

    const video = card.querySelector("video");

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    const previousIndex = (currentIndex - 1 + cards.length) % cards.length;

    const nextIndex = (currentIndex + 1) % cards.length;

    const previousTwoIndex = (currentIndex - 2 + cards.length) % cards.length;

    const nextTwoIndex = (currentIndex + 2) % cards.length;

    if (index === currentIndex) {
      card.classList.add("active");
    } else if (index === previousIndex) {
      card.classList.add("previous");
    } else if (index === nextIndex) {
      card.classList.add("next");
    } else if (index === previousTwoIndex) {
      card.classList.add("previous-two");
    } else if (index === nextTwoIndex) {
      card.classList.add("next-two");
    }
  });

  const activeCard = document.querySelector(".concert-card.active");
  const activeVideo = activeCard.querySelector("video");

  if (activeVideo) {
    activeVideo.play().catch(() => {
      console.log("Video could not autoplay.");
    });
  }
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateConcerts();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;

  updateConcerts();
});

updateConcerts();
