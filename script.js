function entryScroll() {
  document.getElementById('entryPoint').scrollIntoView({
    behavior: "smooth"
  });
}

function openGitHub(projectName = "") {
  window.open(`https://github.com/w-henderson/${projectName}`);
}

window.addEventListener('scroll', function (e) {
  if (window.pageYOffset == 0) {
    document.body.className = "";
  } else {
    document.body.className = "scrollShown";
  }
});