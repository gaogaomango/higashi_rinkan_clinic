function loadContents() {
  // 共通部分
  if ($("#title")[0] != null) {
    $("#title").load("/header.html", function () {
      var $dir = location.href.split("/");
      var $dir1 = $dir[3];
      // 往診
      if ($dir1 === "house_calls") {
        // メニューをアクティブ状態に
        $("#oshin_list").addClass('active');
      } else {
        // メニューをアクティブ状態に
        $("#gairai_list").addClass('active');
      }

      var ua = navigator.userAgent.toLowerCase();
      var ver = navigator.appVersion.toLowerCase();

      // // IE(11以外)
      // var isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1);
      // // IE6
      // var isIE6 = isMSIE && (ver.indexOf('msie 6.') > -1);
      // // IE7
      // var isIE7 = isMSIE && (ver.indexOf('msie 7.') > -1);
      // // IE8
      // var isIE8 = isMSIE && (ver.indexOf('msie 8.') > -1);
      // // IE9
      // var isIE9 = isMSIE && (ver.indexOf('msie 9.') > -1);
      // // IE10
      // var isIE10 = isMSIE && (ver.indexOf('msie 10.') > -1);
      // // IE11
      // var isIE11 = (ua.indexOf('trident/7') > -1);
      // // IE
      // var isIE = isMSIE || isIE11;
      // // Edge
      // var isEdge = (ua.indexOf('edge') > -1);

      // Google Chrome
      var isChrome = (ua.indexOf('chrome') > -1) && (ua.indexOf('edge') == -1);
      // // Firefox
      // var isFirefox = (ua.indexOf('firefox') > -1);
      // Safari
      var isSafari = (ua.indexOf('safari') > -1) && (ua.indexOf('chrome') == -1);
      // // Opera
      // var isOpera = (ua.indexOf('opera') > -1);

      if (!isChrome && !isSafari) {
        if ($('#gairai_list').hasClass("active")) {
          $('#gairai_list').children('a').children('img').attr('src', '/img/btn-gairai2.png');
        } else {
          $('#gairai_list').children('a').children('img').attr('src', '/img/btn-gairai1.png');
        }

        if ($('#oshin_list').hasClass("active")) {
          $('#oshin_list').children('a').children('img').attr('src', '/img/btn-oshin2.png');
        } else {
          $('#oshin_list').children('a').children('img').attr('src', '/img/btn-oshin1.png');
        }
      }
    });
  }

  if ($("#clinickMap")[0] != null) {
    $("#clinickMap").load("/contents_map.html")
  }
  if ($("#openTime")[0] != null) {
    $("#openTime").load("/open_time.html");
  }
  if ($("#news")[0] != null) {
    $("#news").load("/news.html");
  }
  if ($("#booking")[0] != null) {
    $("#booking").load("/contents_booking.html");
  }

  var $dir = location.href.split("/");
  var $dir1 = $dir[3];
  var $dir2 = $dir[4];
  // 往診
  if ($dir1 === "house_calls") {
    if ($("#contentsHeader")[0] != null) {
      $("#contentsHeader").load("/house_calls/contents_header_house_calls.html", function () {
        if ($dir2 != null && $dir2 == "area.html") {
          $(".house_calls_area").addClass('active');
        } else if ($dir2 != null && $dir2 == "time_and_map.html") {
          $(".house_calls_map").addClass('active');
        } else {
          $(".house_calls_list").addClass('active');
        }
      });
    }
    if ($("#contentsHouseCallsFeature")[0] != null) {
      $("#contentsHouseCallsFeature").load("/house_calls/clinick_feature.html");
    }
    if ($("#contentsApplicationFlow")[0] != null) {
      $("#contentsApplicationFlow").load("/house_calls/contents_application_flow.html");
    }
    if ($("#contentsApplication")[0] != null) {
      $("#contentsApplication").load("/house_calls/contents_application.html");
    }
    if ($("#clinickAddress")[0] != null) {
      $("#clinickAddress").load("/house_calls/contents_address.html");
    }
    if ($("#houseCallsArea")[0] != null) {
      $("#houseCallsArea").load("/house_calls/contents_area.html");
    }
    if ($("#footer")[0] != null) {
      $("#footer").load("/house_calls/footer.html");
    }
    // 外来
  } else {
    if ($("#contentsHeader")[0] != null) {
      $("#contentsHeader").load("/contents_header.html");
    }
    if ($("#clinickFeature")[0] != null) {
      $("#clinickFeature").load("/clinick_feature.html");
    }
    if ($("#staffIntroduction")[0] != null) {
      $("#staffIntroduction").load("/staff_introduction.html");
    }
    if ($("#footer")[0] != null) {
      $("#footer").load("/footer.html");
    }
  }
}
function showContents() {
  // 画面がちらつくので一旦footerを消してから出す。
  $("footer").hide();
  //共通パーツ読み込み
  loadContents();
  // 画面がちらつくので一旦footerを消してから出す。
  $("footer").show();
}

//共通パーツ読み込み
showContents();

$(function () {
  $.pjax({
    area: 'main', //入れ替える部分
    link: 'a:not([target])'
  });
  moveToId();
});

$(document).on('pjax:render', function () {
  showContents();
});

// #で始まるアンカーをクリックした場合に処理
function moveToId() {
  $('a[href^=#]').click(function () {
    // スクロールの速度
    var speed = 1200; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
}
