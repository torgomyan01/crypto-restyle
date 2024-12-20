$(document).ready(function () {
  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  const tabGroups = document.querySelectorAll(".tabs");

  tabGroups.forEach((tabs) => {
    const tabButtons = tabs.querySelectorAll(".tab-button");
    const tabContents = tabs.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tabId = button.dataset.tab;

        // Удаляем активные классы только внутри текущей группы
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Добавляем активные классы на выбранные элементы
        button.classList.add("active");
        tabs.querySelector(`#${tabId}`).classList.add("active");
      });
    });
  });

  const buttons = document.querySelectorAll(".switch-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Убираем активный класс у всех кнопок
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Добавляем активный класс к нажатой кнопке
      button.classList.add("active");

      // Логика в зависимости от выбранного режима
      const mode = button.dataset.mode;
      console.log(`Выбран режим: ${mode}`); // Пример
    });
  });

  $(function () {
    $("#slider-range").slider();
  });
  $(function () {
    $("#slider-range2").slider();
  });
});
