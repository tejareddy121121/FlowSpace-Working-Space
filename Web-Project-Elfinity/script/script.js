const banner = document.getElementById('bannerInner');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;
    const progress = Math.min(scrollY / maxScroll, 1);

    const bottomOffset = 100 - progress * 50; 

    const clipPath =`
      polygon(
      0% 0%,
      100% 0%,
      100% ${bottomOffset}%,
      0% ${bottomOffset}%
      )
    `;

    banner.style.clipPath = clipPath;
  });


document.getElementById("placeInput").addEventListener("change", event => {
    const value = event.target.value.toLowerCase();
    const pages ={
        "tuileries": "tuileries.html",
        "commerce": "commerce.html",
        "triomphe": "triomphe.html",
        "gustave eiffel": "gustaveEiffel.html",
        "opéra": "opera.html",
        "borély": "borely.html"
    };
    if(pages[value]){
        window.location.href=pages[value];
    }
});
  
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card-item');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.dataset.filter;

    if (filterValue === "All") {
      cards.forEach(card => card.classList.remove('hidden'));
      return;
    }

    cards.forEach(card => {
      if (card.dataset.place === filterValue) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

AOS.init();