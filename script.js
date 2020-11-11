function entryScroll() {
  document.getElementById('entryPoint').scrollIntoView({
    behavior: "smooth"
  });
}

function openGitHub(projectName = "") {
  window.open(`https://github.com/w-henderson/${projectName}`);
}

window.addEventListener('scroll', function (e) {
  document.documentElement.dataset.scroll = window.pageYOffset;
});