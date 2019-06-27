 <!--崩溃欺骗-->
  var OriginTitle = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
          $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
          document.title = '\(￣︶￣*\))点这里点这里〜';
          clearTimeout(titleTime);
      }
      else {
          $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
          document.title = '（ฅ>ω<*ฅ）噫我中了〜' + OriginTitle;
          titleTime = setTimeout(function () {
              document.title = OriginTitle;
          }, 2000);
      }
  });
