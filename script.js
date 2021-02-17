function entryScroll() {
  document.getElementById('entryPoint').scrollIntoView({
    behavior: "smooth"
  });
}

function openGitHub(projectName = "") {
  window.open(`https://github.com/w-henderson/${projectName}`);
}

function scrollToAnchor(name) {
  document.querySelector("nav").className = "";
  document.querySelector(`a[name="${name}"]`).scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, null, `#${name}`);
}

function toggleMenu() {
  let menuActive = document.querySelector("nav").className === "shown";
  document.querySelector("nav").className = menuActive ? "" : "shown";
}

window.addEventListener('scroll', function (e) {
  document.documentElement.dataset.scroll = window.pageYOffset;
});