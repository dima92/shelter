import petsData from "../assets/pets.json";

export function initPopup() {
  const popup = document.getElementById("pet-popup");
  if (!popup) return;

  const overlay = popup.querySelector(".popup__overlay");
  const closeBtn = popup.querySelector(".popup__close");

  const popupImg = popup.querySelector(".popup__img");
  const popupName = popup.querySelector(".popup__name");
  const popupTypeBreed = popup.querySelector(".popup__type-breed");
  const popupDesc = popup.querySelector(".popup__description");
  const popupAge = popup.querySelector(".popup__item-value:nth-child(2)");

  function openPopup(petName) {
    const pet = petsData.find(
      (item) => item.name.toLowerCase() === petName.toLowerCase(),
    );
    if (!pet) return;

    popupImg.src = pet.img;
    popupImg.alt = pet.name;
    popupName.textContent = pet.name;
    popupTypeBreed.textContent = `${pet.type} - ${pet.breed}`;
    popupDesc.textContent = pet.description;

    const listItems = popup.querySelectorAll(".popup__item");
    listItems[0].innerHTML = `<span class="popup__item-label">Age:</span> ${pet.age}`;
    listItems[1].innerHTML = `<span class="popup__item-label">Inoculations:</span> ${pet.inoculations.join(", ")}`;
    listItems[2].innerHTML = `<span class="popup__item-label">Diseases:</span> ${pet.diseases.join(", ")}`;
    listItems[3].innerHTML = `<span class="popup__item-label">Parasites:</span> ${pet.parasites.join(", ")}`;

    popup.classList.add("popup--open");
    document.body.classList.add("lock");
    popup.setAttribute("aria-hidden", "false");
  }

  function closePopup() {
    popup.classList.remove("popup--open");
    const isMenuOpen = document.querySelector(".header__nav--open");
    if (!isMenuOpen) {
      document.body.classList.remove("lock");
    }
    popup.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".pet-card");

    if (card) {
      e.preventDefault();
      const petName = card.querySelector(".pet-card__title").textContent.trim();
      openPopup(petName);
    }
  });

  closeBtn.addEventListener("click", closePopup);
  overlay.addEventListener("click", closePopup);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.classList.contains("popup--open")) {
      closePopup();
    }
  });
}
