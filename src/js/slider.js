import petsData from "../assets/pets.json";

export function initSlider() {
  const track = document.querySelector(".slider__track");
  const btnPrev = document.querySelector(".slider__arrow--prev");
  const btnNext = document.querySelector(".slider__arrow--next");

  if (!track || !btnPrev || !btnNext) return;

  let currentCards = [];
  let pastCards = [];

  function getCountCards() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function generateCards() {
    const count = getCountCards();
    const newCards = [];

    while (newCards.length < count) {
      const randomIndex = Math.floor(Math.random() * petsData.length);
      const randomPet = petsData[randomIndex];

      if (!newCards.includes(randomPet) && !currentCards.includes(randomPet)) {
        newCards.push(randomPet);
      }
    }

    pastCards = [...currentCards];
    currentCards = [...newCards];
    return currentCards;
  }

  function createCardHTML(pet) {
    return `
      <article class="pet-card">
        <img src="${pet.img}" alt="${pet.name}" class="pet-card__img">
        <h3 class="pet-card__title">${pet.name}</h3>
        <button class="button button--secondary pet-card__button">Learn more</button>
      </article>
    `;
  }

  function renderSlider(direction = "next") {
    const cards = generateCards();

    const cardsHTML = cards.map((pet) => createCardHTML(pet)).join("");
    track.style.opacity = "0";

    setTimeout(() => {
      track.innerHTML = cardsHTML;
      track.style.opacity = "1";
    }, 150);
  }

  btnNext.addEventListener("click", () => renderSlider("next"));
  btnPrev.addEventListener("click", () => renderSlider("prev"));

  renderSlider();

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      renderSlider();
    }, 200);
  });
}
