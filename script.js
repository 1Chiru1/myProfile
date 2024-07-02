const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    darkModeIcon.classList.toggle('fa-moon');
    darkModeIcon.classList.toggle('fa-sun');
  });