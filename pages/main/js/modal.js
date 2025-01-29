createPopup = () => {
  const wrapper = document.querySelector(".our-friends-main");
  const popupContainer = document.createElement("section");
  popupContainer.classList.add("popup__container");
  wrapper.append(popupContainer);
  const popupCard = document.createElement("div");
  popupCard.classList.add("popup-card");
  popupContainer.append(popupCard);
  const buttonClosePopup = document.createElement("button");
  buttonClosePopup.classList.add("button-close-popup");
  popupCard.append(buttonClosePopup);
  const popupPosition = document.createElement("div");
  popupPosition.classList.add("popup-position");
  buttonClosePopup.after(popupPosition);
  const imgPet = document.createElement("img");
  imgPet.classList.add("image__pet");
  popupPosition.append(imgPet);
  const imgInformation = document.createElement("div");
  imgInformation.classList.add("pet__information");
  imgPet.after(imgInformation);
  const petName = document.createElement("h2");
  petName.classList.add("pet__name");
  imgInformation.append(petName);
  const petSort = document.createElement("p");
  petSort.classList.add("pet__sort");
  petName.after(petSort);
  const petDescription = document.createElement("p");
  petDescription.classList.add("pet__description");
  petSort.after(petDescription);
  const petListHealthy = document.createElement("ul");
  petListHealthy.classList.add("pet__list-of-healthy");
  petDescription.after(petListHealthy);
  const petAge = document.createElement("li");
  petAge.classList.add("pet__age");
  petListHealthy.append(petAge);
  const petInoculation = document.createElement("li");
  petInoculation.classList.add("pet__inoculation");
  petAge.after(petInoculation);
  const petDiseases = document.createElement("li");
  petDiseases.classList.add("pet__diseases");
  petInoculation.after(petDiseases);
  const petParasites = document.createElement("li");
  petParasites.classList.add("pet__parasites");
  petDiseases.after(petParasites);
  const bodyMain = document.body;
  bodyMain.classList.add("body");
}

addInformationInsidePopup = (namePet) => {
  let pet;
  for (let i = 0; i < pets.length; i++) {
    const item = pets[i];
    if (item.name === namePet) {
      pet = item;
    }
  }
  const imgPet = document.querySelector(".image__pet");
  imgPet.setAttribute("src", pet.img);
  imgPet.setAttribute("alt", pet.name);
  const petName = document.querySelector(".pet__name");
  petName.textContent = pet.name;
  const petSort = document.querySelector(".pet__sort");
  petSort.textContent = pet.type;
  const petDescription = document.querySelector(".pet__description");
  petDescription.textContent = pet.description;
  const petAge = document.querySelector(".pet__age");
  petAge.textContent = `Age: ${pet.age}`;
  const petInoculation = document.querySelector(".pet__inoculation");
  petInoculation.textContent = `Inoculations: ${pet.inoculations.join(" ")}`;
  const petDiseases = document.querySelector(".pet__diseases");
  petDiseases.textContent = `Diseases: ${pet.diseases.join(" ")}`;
  const petParasites = document.querySelector(".pet__parasites");
  petParasites.textContent = `Parasites: ${pet.parasites.join(" ")}`;
}

const petsCardArray = [
  {id: "Katrine", visible: true},
  {id: "Jennifer", visible: true},
  {id: "Woody", visible: true},
  {id: "Sophia", visible: false},
  {id: "Timmy", visible: false},
  {id: "Charly", visible: false},
  {id: "Scarlett", visible: false},
  {id: "Freddie", visible: false},
];

const bodyMain = document.body;
bodyMain.addEventListener('mouseover', (event) => {
  const target = event.target;
  const targetPopup = target.closest(".popup-position");
  const popupContainer = document.querySelector('.popup__container');
  if (popupContainer) {
    if (!targetPopup) {
      popupContainer.classList.add('popup-container-hover');
    } else {
      popupContainer.classList.remove('popup-container-hover');
    }
  } else {
    return;
  }
})

const sliderButtonClick = document.querySelector(".our-friends-main");
sliderButtonClick.addEventListener("click", swapCard);

function swapCard(event) {
  const target = event.target;
  const targetPopup = target.closest(".popup-position");
  const popupBox = document.querySelector(".popup__container");
  const contentSize = document.documentElement.clientWidth;
  const sliderButton = target.classList.contains("slider-button");
  const arraywithUnvisibleCards = [];
  const arraywitRandomCards = [];
  const cardOfPet = target.closest(".our-friends-pet");
  for (let i = 0; i < petsCardArray.length; i++) {
    const item = petsCardArray[i];
    if (!item.visible) {
      arraywithUnvisibleCards.push(item);
    }
  }
  if (popupBox) {
    if (!targetPopup) {
      popupBox.remove();
      const bodyMain = document.body;
      bodyMain.classList.remove("body");
    }
  } else if (!popupBox) {
    if (cardOfPet) {
      const cardOfPetId = cardOfPet.getAttribute("id");
      createPopup();
      addInformationInsidePopup(cardOfPetId);
    }
    if (sliderButton) {
      for (let i = 0; i < 3; i++) {
        const item =
          arraywithUnvisibleCards[
            Math.floor(Math.random() * arraywithUnvisibleCards.length)
            ];
        if (arraywitRandomCards.includes(item.id)) {
          i--;
          continue;
        }
        arraywitRandomCards.push(item.id);
      }
      if (contentSize < 1280) {
        arraywitRandomCards.pop();
      }
      if (768 > contentSize) {
        arraywitRandomCards.pop();
      }
      for (let i = 0; i < petsCardArray.length; i++) {
        const item = petsCardArray[i];
        const cardtId = document.getElementById(item.id);
        if (arraywitRandomCards.includes(item.id)) {
          const woody = document.getElementById("Woody");
          woody.classList.remove("figure__our-friends-card-3");
          const jennifer = document.getElementById("Jennifer");
          jennifer.classList.remove("figure__our-friends-card-2");
          item.visible = true;
        } else {
          item.visible = false;
        }
        if (item.visible) {
          const leftButtonSlider = document.querySelector('.slider-button-left');
          const rightButtonSlider = document.querySelector('.slider-button-right');
          const leftButtonSliderMobile = document.querySelector('.slider-button-left-mobile');
          const rightButtonSliderMobile = document.querySelector('.slider-button-right-mobile');
          cardtId.classList.remove("card-none");
          if (leftButtonSlider === target || leftButtonSliderMobile === target) {
            cardtId.classList.add('animate-left');
          } else if (rightButtonSlider === target || rightButtonSliderMobile === target) {
            cardtId.classList.add('animate-right');
          }
        } else {
          cardtId.classList.add("card-none");
        }
      }
    }
  }
}
