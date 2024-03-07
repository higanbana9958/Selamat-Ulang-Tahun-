var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  loop: true,
});

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';
  document.getElementById('stars').appendChild(star);
  setTimeout(function() {
      star.remove();
  }, 5000);
}

function createStars() {
  for (let i = 0; i < 100; i++) {
      createStar();
  }
}

swiper.on('slideChange', function () {
  if (swiper.realIndex === 6) {
      createStars();
  }
});
