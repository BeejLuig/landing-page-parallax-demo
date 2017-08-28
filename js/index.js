'use strict';

(function () {
  window.onscroll = function (e) {
    var parallax = document.querySelectorAll(".parallax");
    var movement = pageYOffset * 0.26;

    parallax.forEach(function (el) {
      var translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      el.style.transform = translate3d;
    });
  };
})();