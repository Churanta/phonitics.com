var container = document.querySelector('.container');
var loading = document.querySelector('.loading');

// Load the animation
var animation = lottie.loadAnimation({
  container: document.getElementById('animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets6.lottiefiles.com/packages/lf20_hwm68tlm.json'
});
animation.setSpeed(1.9);
animation.setSubframe(false);
animation.setQuality('low');
animation.setSize('20%', '20%');

// Hide the loading message when the animation has loaded
animation.addEventListener('DOMLoaded', function() {
  container.removeChild(loading);
});

