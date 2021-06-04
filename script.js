var btn = document.querySelector('.theme-button');

btn.onclick = function() {
    btn.classList.toggle('light-theme');
    btn.classList.toggle('dark-theme');
}

