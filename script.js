function entryScroll() {
  document.getElementById('entryPoint').scrollIntoView({
    behavior: "smooth"
  });
}

function openGitHub(projectName = "") {
  window.open(`https://github.com/w-henderson/${projectName}`);
}