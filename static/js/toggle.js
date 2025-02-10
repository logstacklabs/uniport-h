"use strict";

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

let currentTheme = localStorage.getItem('theme') || getSystemTheme();

const darkIcon = themeToggle.getAttribute("data-dark");
const lightIcon = themeToggle.getAttribute("data-light");

const updateTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.setAttribute("xlink:href", theme === "dark" ? darkIcon : lightIcon);
};

updateTheme(currentTheme);
document.documentElement.style.visibility = 'visible';

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  updateTheme(currentTheme);
  localStorage.setItem('theme', currentTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    currentTheme = e.matches ? 'dark' : 'light';
    updateTheme(currentTheme);
  }
});