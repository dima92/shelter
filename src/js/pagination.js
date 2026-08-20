import petsData from "../assets/pets.json";

export function initPagination() {
  const grid = document.querySelector(".pets-page__grid");
  const btnFirst = document.getElementById("btn-first");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnLast = document.getElementById("btn-last");
  const pageNumSpan = document.getElementById("page-num");

  if (!grid || !btnFirst || !btnPrev || !btnNext || !btnLast || !pageNumSpan)
    return;

  let fullPetsList = [];
  let currentPage = 1;
  let itemsPerPage = getItemsPerPage();

  function getItemsPerPage() {
    if (window.innerWidth >= 1024) return 8;
    if (window.innerWidth >= 768) return 6;
    return 3;
  }

  function generate48Pets() {
    let list = [];
    for (let i = 0; i < 6; i++) {
      const shuffled = [...petsData].sort(() => Math.random() - 0.5);
      list.push(...shuffled);
    }
    return list;
  }

  function renderPage() {
    itemsPerPage = getItemsPerPage();
    const totalPages = fullPetsList.length / itemsPerPage;

    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = fullPetsList.slice(start, end);

    grid.innerHTML = pageItems
      .map(
        (pet) => `
      <article class="pet-card">
        <img src="${pet.img}" alt="${pet.name}" class="pet-card__img">
        <h3 class="pet-card__title">${pet.name}</h3>
        <button class="button button--secondary pet-card__button">Learn more</button>
      </article>
    `,
      )
      .join("");

    pageNumSpan.textContent = currentPage;

    updateButtonsState(totalPages);
  }

  function updateButtonsState(totalPages) {
    if (currentPage === 1) {
      btnFirst.disabled = true;
      btnPrev.disabled = true;
    } else {
      btnFirst.disabled = false;
      btnPrev.disabled = false;
    }

    if (currentPage === totalPages) {
      btnNext.disabled = true;
      btnLast.disabled = true;
    } else {
      btnNext.disabled = false;
      btnLast.disabled = false;
    }
  }

  btnNext.addEventListener("click", () => {
    currentPage++;
    renderPage();
  });

  btnPrev.addEventListener("click", () => {
    currentPage--;
    renderPage();
  });

  btnFirst.addEventListener("click", () => {
    currentPage = 1;
    renderPage();
  });

  btnLast.addEventListener("click", () => {
    const totalPages = fullPetsList.length / itemsPerPage;
    currentPage = totalPages;
    renderPage();
  });

  fullPetsList = generate48Pets();
  renderPage();

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      renderPage();
    }, 200);
  });
}
