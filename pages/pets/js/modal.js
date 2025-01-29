const petsCardArray = [
  "Katrine",
  "Jennifer",
  "Woody",
  "Sophia",
  "Timmy",
  "Charly",
  "Scarlett",
  "Freddie",
];

function createArrayEightCards(petsCardArray) {
  const petsCards = [];
  for (let i = 0; i < 6; i++) {
    const arr = [];
    petsCards.push(arr);
    arr.length = 0;
    if (petsCards.length > 6) {
      break;
    }
    for (let j = 0; j < 8; j++) {
      const item = Math.floor(Math.random() * petsCardArray.length);
      if (arr.includes(petsCardArray[item])) {
        j--;
        continue;
      } else {
        arr.push(petsCardArray[item]);
      }
      if (arr.length > 8) {
        break;
      }
    }
  }
  return petsCards;
}

function createArraySixCards(petsCardArray) {
  const petsCards = [];
  for (let i = 0; i < 8; i++) {
    const arr = [];
    petsCards.push(arr);
    arr.length = 0;
    if (petsCards.length > 8) {
      break;
    }
    for (let j = 0; j < 6; j++) {
      const item = Math.floor(Math.random() * petsCardArray.length);
      if (arr.includes(petsCardArray[item])) {
        j--;
        continue;
      } else {
        arr.push(petsCardArray[item]);
      }
      if (arr.length > 6) {
        break;
      }
    }
  }
  return petsCards;
}

function createArrayThreeCards(petsCardArray) {
  const petsCards = [];
  for (let i = 0; i < 16; i++) {
    const arr = [];
    petsCards.push(arr);
    arr.length = 0;
    if (petsCards.length > 16) {
      break;
    }
    for (let j = 0; j < 3; j++) {
      const item = Math.floor(Math.random() * petsCardArray.length);
      if (arr.includes(petsCardArray[item])) {
        j--;
        continue;
      } else {
        arr.push(petsCardArray[item]);
      }
      if (arr.length > 3) {
        break;
      }
    }
  }
  return petsCards;
}

function createPaginationList(petName, src, index) {
  const listOfCards = document.querySelector(".figure__our-friends-cards");
  const figure = document.createElement("figure");
  figure.classList.add("figure__our-friends-card");
  figure.classList.add(`list-of-cards-${index}`);
  figure.setAttribute("id", petName);
  listOfCards.append(figure);
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", petName);
  figure.append(img);
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = petName;
  img.after(figcaption);
  const button = document.createElement("button");
  button.textContent = "Learn more";
  figcaption.after(button);
}

function createBoxWithPets(index) {
  const contentSize = document.documentElement.clientWidth;
  if (contentSize >= 1280) {
    const array = createArrayEightCards(petsCardArray);
    for (let i = 0; i < array[index].length; i++) {
      const item = array[index];
      for (let j = 0; j < pets.length; j++) {
        const petInfo = pets[j];
        if (item[i] === petInfo.name) {
          createPaginationList(petInfo.name, petInfo.img, index);
        }
      }
    }
  }
  if (contentSize >= 768 && 1280 > contentSize) {
    const array = createArraySixCards(petsCardArray);
    for (let i = 0; i < array[index].length; i++) {
      const item = array[index];
      for (let j = 0; j < pets.length; j++) {
        const petInfo = pets[j];
        if (item[i] === petInfo.name) {
          createPaginationList(petInfo.name, petInfo.img, index);
        }
      }
    }
  }
  if (contentSize < 768) {
    const array = createArrayThreeCards(petsCardArray);
    for (let i = 0; i < array[index].length; i++) {
      const item = array[index];
      for (let j = 0; j < pets.length; j++) {
        const petInfo = pets[j];
        if (item[i] === petInfo.name) {
          createPaginationList(petInfo.name, petInfo.img, index);
        }
      }
    }
  }
}

function checkFirstPage() {
  const buttonPagination = document.querySelector(".slider-button-center");
  const sliderButtonPrevPage = document.querySelector(".slider-button-prev");
  const sliderButtonToFirstPage = document.querySelector(
    ".slider-button-to-first"
  );
  if (buttonPagination.textContent === "1") {
    sliderButtonPrevPage.setAttribute("disabled", "");
    sliderButtonToFirstPage.setAttribute("disabled", "");
  }
}

function disableLastPage() {
  const contentSize = document.documentElement.clientWidth;
  const buttonPagination = document.querySelector(".slider-button-center");
  const sliderButtonNextPage = document.querySelector(".slider-button-next");
  const sliderButtonToLastPage = document.querySelector(
    ".slider-button-doublenext"
  );
  let pageNumber = "";
  if (contentSize >= 1280) {
    pageNumber = "6";
  } else if (contentSize >= 768 && 1280 > contentSize) {
    pageNumber = "8";
  } else if (contentSize < 768) {
    pageNumber = "16";
  }
  if (buttonPagination.textContent === pageNumber) {
    sliderButtonNextPage.setAttribute("disabled", "");
    sliderButtonToLastPage.setAttribute("disabled", "");
  }
}

function undisableFirstPage() {
  const sliderButtonPrevPage = document.querySelector(".slider-button-prev");
  const sliderButtonToFirstPage = document.querySelector(
    ".slider-button-to-first"
  );
  sliderButtonPrevPage.removeAttribute("disabled", "");
  sliderButtonToFirstPage.removeAttribute("disabled", "");
}

function undisableLastPage() {
  const contentSize = document.documentElement.clientWidth;
  const buttonPagination = document.querySelector(".slider-button-center");
  const sliderButtonNextPage = document.querySelector(".slider-button-next");
  const sliderButtonToLastPage = document.querySelector(
    ".slider-button-doublenext"
  );
  let pageNumber = "";
  if (contentSize >= 1280) {
    pageNumber = "6";
  } else if (contentSize >= 768 && 1280 > contentSize) {
    pageNumber = "8";
  } else if (contentSize < 768) {
    pageNumber = "16";
  }
  if (buttonPagination.textContent !== pageNumber) {
    sliderButtonNextPage.removeAttribute("disabled", "");
    sliderButtonToLastPage.removeAttribute("disabled", "");
  }
}

function disableFirstPage() {
  const sliderButtonPrevPage = document.querySelector(".slider-button-prev");
  const sliderButtonToFirstPage = document.querySelector(
    ".slider-button-to-first"
  );
  sliderButtonPrevPage.setAttribute("disabled", "");
  sliderButtonToFirstPage.setAttribute("disabled", "");
}

function createPages() {
  const contentSize = document.documentElement.clientWidth;
  if (contentSize >= 1280) {
    const eightCards = createArrayEightCards(petsCardArray);
    for (let i = 0; i < eightCards.length; i++) {
      createBoxWithPets(i);
    }
  } else if (contentSize >= 768 && 1280 > contentSize) {
    const sixCards = createArraySixCards(petsCardArray);
    for (let i = 0; i < sixCards.length; i++) {
      createBoxWithPets(i);
    }
  } else if (contentSize < 768) {
    const threeCards = createArrayThreeCards(petsCardArray);
    for (let i = 0; i < threeCards.length; i++) {
      createBoxWithPets(i);
    }
  }
}

createPages();

function changePage() {
  const buttonPagination = document.querySelector(".slider-button-center");
  const buttonPaginationTextContent = Number(buttonPagination.textContent);
  const pageNumber = document.querySelectorAll(".figure__our-friends-card");
  for (let i = 0; i < pageNumber.length; i++) {
    const item = pageNumber[i].classList[1].split("-");
    const numberOfList = Number(item[item.length - 1]) + 1;
    numberOfList !== buttonPaginationTextContent
      ? pageNumber[i].classList.add("hide-card")
      : pageNumber[i].classList.remove("hide-card");
  }
}

function showOnlyStartPage() {
  const cards = document.querySelectorAll(".figure__our-friends-card");
  for (let i = 0; i < cards.length; i++) {
    const item = cards[i].classList[1].split("-");
    const lastItem = item[item.length - 1];
    if (lastItem !== "0") {
      cards[i].classList.add("hide-card");
    }
  }
}

showOnlyStartPage();

function changePagePagination(event) {
  const target = event.target;
  const buttonNextPage = target.classList.contains("slider-button-next");
  const buttonPrevPage = target.classList.contains("slider-button-prev");
  const buttonLastPage = target.classList.contains("slider-button-doublenext");
  const buttonFirstPage = target.classList.contains("slider-button-to-first");
  const buttonPagination = document.querySelector(".slider-button-center");
  const targetPopup = target.closest(".popup-position");
  const popupBox = document.querySelector(".popup__container");
  const cardOfPet = target.closest("figure");
  let pageNumber = buttonPagination.textContent;
  if (Number(pageNumber) !== 0) {
    undisableFirstPage();
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
      addInformainoInsidePopup(cardOfPetId);
    }
  }
  if (buttonNextPage) {
    buttonPagination.textContent = Number(pageNumber) + 1;
    changePage();
    disableLastPage();
  }
  if (buttonPrevPage) {
    const newPage = Number(pageNumber) - 1;
    buttonPagination.textContent = newPage;
    changePage();
    undisableLastPage();
    if (newPage === 1) {
      disableFirstPage();
    }
  }
  if (buttonLastPage) {
    const contentSize = document.documentElement.clientWidth;
    if (contentSize >= 1280) {
      buttonPagination.textContent = "6";
    } else if (contentSize >= 768 && 1280 > contentSize) {
      buttonPagination.textContent = "8";
    } else if (contentSize < 768) {
      buttonPagination.textContent = "16";
    }
    changePage();
    disableLastPage();
    undisableFirstPage();
  }
  if (buttonFirstPage) {
    buttonPagination.textContent = "1";
    changePage();
    disableFirstPage();
    undisableLastPage();
  }
}

const sectionOurFriends = document.querySelector(".section__our-friends-box");
sectionOurFriends.addEventListener("click", changePagePagination);

createPopup = () => {
  const wrapper = document.querySelector(".wrapper__our-friends-cards");
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

function addInformainoInsidePopup(namePet) {
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

const bodyMain = document.body;
bodyMain.addEventListener("mouseover", (event) => {
  const target = event.target;
  const targetPopup = target.closest(".popup-position");
  const popupContainer = document.querySelector(".popup__container");
  if (popupContainer) {
    if (!targetPopup) {
      popupContainer.classList.add("popup-container-hover");
    } else {
      popupContainer.classList.remove("popup-container-hover");
    }
  } else {
    return;
  }
});
