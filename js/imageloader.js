window.addEventListener('load', function (e) {
  var imgs = document.querySelectorAll('[data-non-critical-src]');

  [].forEach.call(imgs, function (img) {
    img.src = img.dataset.nonCriticalSrc;
    img.removeAttribute('hidden');
  });
});
