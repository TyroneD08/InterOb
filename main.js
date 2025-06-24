document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  const revealSection = document.querySelector('.reveal-section');
  if (revealSection) {
    observer.observe(revealSection);
  }
});



  const searchForm = document.querySelector(".searchbar");
  if (searchForm) {
    const searchInput = searchForm.querySelector("input[name='q']");

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchTerm = searchInput.value;
      if (searchTerm.trim()) {
        sessionStorage.setItem("searchTerm", searchTerm);
        window.location.href = "https://38696.hosts2.ma-cloud.nl/Webshop/";
      }
    });
  }



window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

