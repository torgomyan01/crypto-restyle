$(document).ready(function () {
  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".drop-btn").on("click", function (event) {
    event.stopPropagation(); // Остановить всплытие события
    $(".drop-hide").toggleClass("show");
    $(this).find("img").toggleClass("rotate");
  });

  // Закрытие меню при клике вне него
  $(document).on("click", function () {
    if ($(".drop-hide").hasClass("show")) {
      $(".drop-hide").removeClass("show");
      $(".drop-btn img").removeClass("rotate");
    }
  });

  // Остановить всплытие события при клике внутри меню
  $(".drop-hide").on("click", function (event) {
    event.stopPropagation();
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

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Убираем активный класс у всех кнопок
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Добавляем активный класс к нажатой кнопке
      this.classList.add("active");

      // Логика в зависимости от выбранного режима
      const mode = this.dataset.mode;
    });
  });

  $(function () {
    // Слайдер 1
    $("#slider-range").slider({
      range: "min",
      value: 0, // Начальное значение
      min: 0,
      max: 100,
      slide: function (event, ui) {
        // Обновляем значение в поле ввода
        $("#slider-value1").val(ui.value);
      },
    });
    // Устанавливаем начальное значение
    $("#slider-value1").val($("#slider-range").slider("value"));

    // Слайдер 2
    $("#slider-range2").slider({
      range: "min",
      value: 20, // Начальное значение
      min: 0,
      max: 200,
      slide: function (event, ui) {
        // Обновляем значение в поле ввода
        $("#slider-value2").val(ui.value);
      },
    });
    // Устанавливаем начальное значение
    $("#slider-value2").val($("#slider-range2").slider("value"));
  });

  $(".element").priceFormat({
    prefix: "",
    centsSeparator: ",",
    thousandsSeparator: ".",
  });
});

const tabsButtons = $(".tabs-buttons button");
const tabsButtonsActive = $(".tabs-buttons button.active");

tabsButtons.on("click", function (e) {
  const btnInfo = this.getBoundingClientRect();

  $(this)
    .parent()
    .css({
      "--solidWidth": `${btnInfo.width}px`,
      "--solidLeft": `${this.offsetLeft}px`,
    });
});

tabsButtonsActive.each((index, element) => {
  const btnInfo = element.getBoundingClientRect();

  $(element)
    .parent()
    .css({
      "--solidWidth": `${btnInfo.width}px`,
      "--solidLeft": `${element.offsetLeft}px`,
    });
});
