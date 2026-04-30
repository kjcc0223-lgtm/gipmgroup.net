
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('[data-menu]');
  const nav = document.querySelector('.mobile-nav');
  if(btn && nav){ btn.addEventListener('click', () => nav.classList.toggle('open')); }
  document.querySelectorAll('[data-prayed]').forEach((b)=>{
    b.addEventListener('click',()=>{
      b.textContent='기도 참여 완료';
      b.classList.add('primary');
    });
  });
  const year = document.querySelector('[data-year]');
  if(year) year.textContent = new Date().getFullYear();
});
