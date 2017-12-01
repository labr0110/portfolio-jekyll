(function() {

  var document1 = $(document),
      bannerContent = $('div.banner-content');

  document1.on('scroll', function() {
      var currScrollPos = document1.scrollTop();
      bannerContent.css('background-position', '0 ' + -currScrollPos/4 + 'px');
  });


})();
