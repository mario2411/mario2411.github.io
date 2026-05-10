(function () {
  var flowerBtn = document.getElementById("flowerBtn");
  var messagePanel = document.getElementById("messagePanel");
  var hint = document.getElementById("hint");

  if (!flowerBtn || !messagePanel) return;

  flowerBtn.addEventListener("click", function () {
    var isOpen = flowerBtn.classList.toggle("is-open");
    flowerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");

    if (isOpen) {
      messagePanel.hidden = false;
      if (hint) hint.classList.add("is-hidden");
      messagePanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      messagePanel.hidden = true;
      if (hint) hint.classList.remove("is-hidden");
    }
  });
})();
