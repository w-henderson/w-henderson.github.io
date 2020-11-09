function entryScroll() {
  document.getElementById('entryPoint').scrollIntoView({
    behavior: "smooth"
  });
}

function openGitHubProject(projectName) {
  window.open(`https://github.com/w-henderson/${projectName}`);
}