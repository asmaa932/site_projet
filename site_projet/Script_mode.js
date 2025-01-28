// selection de class
const btnMode = document.querySelector("#mode");

// fnct mode nuit
btnMode.addEventListener("click", () => {
  const styleNuit = document.querySelector('link[title="Mode Sombre"]');
  const isNightMode = document.body.classList.contains("nightMode");

  if (isNightMode) {
    document.body.classList.remove("nightMode");
    styleNuit.disabled = true;
    styleNuit.disabled = true;
  } else {
    document.body.classList.add("nightMode");
    document
      .querySelectorAll('link[rel="alternate stylesheet"]')
      .forEach((link) => (link.disabled = true));
    styleNuit.disabled = false;

    // raffraichissement du style
    setTimeout(() => {
      styleNuit.disabled = false;
    }, 0);
  }
});

// autre style
document.querySelectorAll("[data-style]").forEach((button) => {
  button.addEventListener("click", () => {
    const styleTitle = button.getAttribute("data-style");
    const targetStyle = document.querySelector(`link[title="${styleTitle}"]`);

    if (targetStyle.disabled) {
      document
        .querySelectorAll('link[rel="alternate stylesheet"]')
        .forEach((link) => (link.disabled = true));
      document.body.classList.remove("nightMode");
      targetStyle.disabled = false;
      setTimeout(() => {
        targetStyle.disabled = false;
      }, 0);
    } else {
      targetStyle.disabled = true;
    }
  });
});
