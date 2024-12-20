$(document).ready(function () {
  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.dataset.tab;

      // Удаляем активные классы
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Добавляем активные классы на выбранные элементы
      button.classList.add("active");
      document.getElementById(tabId).classList.add("active");
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
});
