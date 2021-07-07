const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navBar');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const html = document.querySelector('html');
const menuItems1 = document.querySelector('.menuItems1');
const menuItems2 = document.querySelector('.menuItems2');
const menuItems3 = document.querySelector('.menuItems3');
const menuItems4 = document.querySelector('.menuItems4');
const menuItems5 = document.querySelector('.menuItems5');


hamburger.addEventListener('click', function(){
  this.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})

menuItems1.addEventListener('click', function(){
  hamburger.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})

menuItems2.addEventListener('click', function(){
  hamburger.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})

menuItems3.addEventListener('click', function(){
  hamburger.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})

menuItems4.addEventListener('click', function(){
  hamburger.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})

menuItems5.addEventListener('click', function(){
  hamburger.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})