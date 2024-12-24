$(document).ready(function () {
  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".drop-btn").on("click", function (event) {
    event.stopPropagation();
    $(".drop-hide").toggleClass("show");
    $(this).find("img").toggleClass("rotate");
  });

  $(document).on("click", function () {
    if ($(".drop-hide").hasClass("show")) {
      $(".drop-hide").removeClass("show");
      $(".drop-btn img").removeClass("rotate");
    }
  });

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
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));
        button.classList.add("active");
        tabs.querySelector(`#${tabId}`).classList.add("active");
      });
    });
  });

  function setupSwitchButtons(selector) {
    const buttons = document.querySelectorAll(selector);

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
        const mode = this.dataset.mode;
        console.log(`Selected mode: ${mode}`);
      });
    });
  }

  setupSwitchButtons(".switch-button");
  setupSwitchButtons(".switch-button2");

  $(function () {
    $("#slider-range").slider({
      range: "min",
      value: 0,
      min: 0,
      max: 100,
      slide: function (event, ui) {
        $("#slider-value1").val(ui.value);
      },
    });
    $("#slider-value1").val($("#slider-range").slider("value"));

    $("#slider-range2").slider({
      range: "min",
      value: 20,
      min: 0,
      max: 200,
      slide: function (event, ui) {
        $("#slider-value2").val(ui.value);
      },
    });
    $("#slider-value2").val($("#slider-range2").slider("value"));
  });
});

$(".drop-menu").click(function () {
  $(this).toggleClass("is-active");
  $(".menu-wrap").toggleClass("open");
  $("body, html").toggleClass("overflow");
});

$(".more").on("click", function () {
  $(".drop-menu-wrap").toggleClass("show");
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

const inputsPrices = document.querySelectorAll(".element");

inputsPrices.forEach(function (input) {
  IMask(input, {
    mask: Number,
    scale: 2,
    signed: false,
    thousandsSeparator: ",",
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ".",
    mapToRadix: [","],
  });
});
