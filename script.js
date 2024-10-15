document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
    const menu = document.getElementById('mobile-menu-2');

    button.addEventListener('click', function () {
        menu.classList.toggle('hidden');
    });
});


function switchLogo() {
    const logo = document.getElementById('github-logo');
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkMode) {
        logo.src = 'assets/images/logo/github-mark-white.png';
    } else {
        logo.src = 'assets/images/logo/github-mark.png';
    }
}

switchLogo();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', switchLogo);
