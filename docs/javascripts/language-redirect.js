/**
 * Auto-detect browser language and redirect Polish users to /pl/ on first visit.
 * Respects manual language switching via the language selector.
 */
(function () {
  var STORAGE_KEY = "wr-lang-chosen";

  // If user has manually chosen a language before, don't redirect
  if (localStorage.getItem(STORAGE_KEY)) {
    return;
  }

  var lang = navigator.language || navigator.userLanguage || "";
  var isPolish = lang.toLowerCase().indexOf("pl") === 0;
  var onDefaultSite = window.location.pathname === "/" ||
    window.location.pathname === "/index.html";

  if (isPolish && onDefaultSite) {
    window.location.replace("/pl/");
  }

  // Mark language as chosen when user clicks the language selector
  document.addEventListener("DOMContentLoaded", function () {
    var langLinks = document.querySelectorAll(".md-header__topic .md-select__link, .md-select__item a[hreflang]");
    langLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        localStorage.setItem(STORAGE_KEY, "1");
      });
    });

    // Also detect clicks on alternate language links in the header
    var alternateLinks = document.querySelectorAll("a[hreflang]");
    alternateLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        localStorage.setItem(STORAGE_KEY, "1");
      });
    });
  });
})();
