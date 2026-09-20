const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('newsletter').addEventListener('submit',e=>{
  e.preventDefault();
  const toast=document.getElementById('toast');
  toast.classList.add('show');
  e.target.reset();
  setTimeout(()=>toast.classList.remove('show'),2500);
});