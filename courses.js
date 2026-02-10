// =======================
// MODALS
// =======================

// Collect all modals
const modals = {
  kwk: document.getElementById("kwkModal"),
  gwc: document.getElementById("gwcModal"),
  mit: document.getElementById("mitModal"),
  yi: document.getElementById("yiModal"),
  gdi: document.getElementById("gdiModal"),
  w: document.getElementById("wModal"),
  gencyber: document.getElementById("gencyberModal"),
  coursera: document.getElementById("courseraModal")
};

// Helper to safely attach image → modal behavior
function attachModalTrigger(imgId, modal) {
  const img = document.getElementById(imgId);
  if (img && modal) {
    img.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }
}

// Attach all modal triggers
attachModalTrigger("kwk", modals.kwk);
attachModalTrigger("gwc", modals.gwc);
attachModalTrigger("mit", modals.mit);
attachModalTrigger("yi", modals.yi);
attachModalTrigger("gdi", modals.gdi);
attachModalTrigger("w", modals.w);
attachModalTrigger("gencyber", modals.gencyber);
attachModalTrigger("coursera", modals.coursera);

// Close all modals
function closeAllModals() {
  Object.values(modals).forEach(modal => {
    if (modal) modal.style.display = "none";
  });
}

// Close when clicking the X buttons
const closeButtons = document.getElementsByClassName("close");
Array.from(closeButtons).forEach(btn => {
  btn.addEventListener("click", closeAllModals);
});

// Close when clicking outside the modal
window.addEventListener("click", event => {
  Object.values(modals).forEach(modal => {
    if (modal && event.target === modal) {
      closeAllModals();
    }
  });
});


