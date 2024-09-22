// 문서준비이벤트
$(function () {
  // scroll 
  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 919) {
      $("#header").addClass("fix");
    } else {
      $("#header").removeClass("fix");
    }
  });


  // header
  $("#header").mouseenter(function () {
    $("#header").addClass("active");
  });

  $("#header").mouseleave(function () {
    $("#header").removeClass("active");
  });

  // depth2 gnb
  $(".depth2, .depth2_bg").hide();
  $(".gnb > li").mouseenter(function () {
    $("#header").addClass("active");
    $(this).find(".depth2").stop().fadeIn();
    $(".depth2_bg").stop().slideDown();
  });

  $(".gnb > li").mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().slideUp();
  });

  // ham
  $(".mgnb_wrap").hide();
  $(".ham").click(function () {
    $(".mgnb_wrap").fadeIn();
    $(".mdepth2").slideDown();
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
    $(".mgnb_wrap, .dim").fadeOut();
    $(".mgnb").animate({ "right": "-100%" });
    $(".mgnb > li").removeClass("active");
    $(".mdepth2").slideUp();
  });

  // mgnb
  $(".mgnb > li").mouseenter(function () {
    $(this).addClass("over");
  });

  $(".mgnb > li").mouseleave(function () {
    $(this).removeClass("over");
  });

  $(".mgnb > li ").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(this).find(".mdepth2").stop().slideDown();
    $(this).siblings().find(".mdepth2").slideUp();
  });

  $(".mgnb > li:last-child").mouseenter(function () {
    $(".mgnb_wrap").find(".mgnb_close").css({ "color": "#B49759", "transition": "all 0.5s" })
  });

  $(".mgnb > li:last-child").mouseleave(function () {
    $(".mgnb_wrap").find(".mgnb_close").css({ "color": "#fff" })
  });

});