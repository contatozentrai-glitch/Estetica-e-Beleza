const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
function toggleMenu(open) {
  nav.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
}
menu.onclick = () => toggleMenu(menu.getAttribute('aria-expanded') !== 'true');
nav.onclick = () => toggleMenu(false);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) { toggleMenu(false); menu.focus(); }
});
const contacts = window.aurelleContacts;
const message = 'Olá! Conheci a Aurelle Beauty Studio pelo site e gostaria de saber mais sobre os agendamentos.';
const number = contacts.whatsappNumber.replace(/\D/g, '');
for (const link of document.querySelectorAll('#whatsapp,#footwa')) link.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
document.querySelector('#demo').hidden = Boolean(number);
if (contacts.instagramUrl) {
  const social = document.querySelector('#social');
  social.href = contacts.instagramUrl;
  social.hidden = false;
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('enter'); observer.unobserve(entry.target); }
  }));
  document.querySelectorAll('.section h2, .experience h2').forEach(item => observer.observe(item));
}
