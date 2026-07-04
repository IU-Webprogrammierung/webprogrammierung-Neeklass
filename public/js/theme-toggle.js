(function () {
  "use strict";

  var STORAGE_KEY = "theme";

  function getStoredTheme() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
    }
  }

  function getPreferredTheme() {
    var stored = getStoredTheme();
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  }

  function applyTheme(theme, button) {
    document.documentElement.setAttribute("data-theme", theme);

    if (button) {
      var isDark = theme === "dark";
      button.setAttribute("aria-pressed", isDark ? "true" : "false");
      button.textContent = isDark ? "Hell" : "Dunkel";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    applyTheme(getPreferredTheme(), button);

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next, button);
      setStoredTheme(next);
    });
  });
})();
