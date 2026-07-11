console.log("Script carregado!");

const topbar = document.getElementById('topbar');
  window.addEventListener('scroll', () => {
    topbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  const pills = document.querySelectorAll('.cat-pill');
  const sections = document.querySelectorAll('.category-section');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const target = document.getElementById(pill.dataset.target);
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.id;
        pills.forEach(p => p.classList.toggle('active', p.dataset.target === id));
      }
    });
  }, {rootMargin:'-160px 0px -70% 0px', threshold:0});

  sections.forEach(sec => observer.observe(sec));

const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".item-det");
const esc = document.querySelector(".fechar");

const modalImg = document.querySelector("#modal-img");
const modalName = document.querySelector("#modal-name");
const modalDesc = document.querySelector("#modal-desc");
const modalIng = document.querySelector("#modal-ingredients");
const modalPrice = document.querySelector("#modal-price");

cards.forEach(function(card){
    card.addEventListener("click", function(){

        const img = card.dataset.img;
        const name = card.dataset.name;
        const desc = card.dataset.desc;
        const ing = card.dataset.ingredients;
        const price = card.dataset.price;

        modalImg.src = img;
        modalName.textContent = name;
        modalDesc.textContent = desc;
        modalIng.textContent = ing;
        modalPrice.textContent = price;

        modal.classList.add("ativo");
    });


});

esc.addEventListener("click", function(){
    modal.classList.remove("ativo");
});
