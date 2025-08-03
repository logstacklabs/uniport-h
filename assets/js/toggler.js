"use strict";
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const updateTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    const baseClass = 'fa-solid fa-xl fa-';
    themeIcon.className = baseClass + ((theme === "light") ? 'toggle-off' : 'toggle-on');
};

const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

updateTheme(savedTheme);
document.documentElement.style.visibility = 'visible'; // Remove FOUC guard

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
});

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', ({ matches }) => {
    if (!localStorage.getItem('theme')) {
        const currentTheme = matches ? 'light' : 'dark';
        updateTheme(currentTheme);
    }
});
