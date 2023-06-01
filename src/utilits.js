import $ from "jquery";
import "jquery-mousewheel";
import "malihu-custom-scrollbar-plugin";
export const jqueryFuntion = () => {
  $(window).on("load", function () {
    /* ----------------------------------------------------------- */
    /*  PAGE PRELOADER
    /* ----------------------------------------------------------- */

    var preloader = $("#preloader");
    setTimeout(function () {
      preloader.addClass("preloaded");
    }, 800);
    if ($(window).width() > 1024) {
      setTimeout(function () {
        $(".header-inner").addClass("animated fadeInDown");
      }, 1500);
      setTimeout(function () {
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      }, 2200);
    } else {
      setTimeout(function () {
        $(".header-inner").addClass("animated fadeInDown");
      }, 1100);
      setTimeout(function () {
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      }, 1800);
    }

    /* ----------------------------------------------------------- */
    /*  SET ACTIVE MENU ITEM ON SCROLL
    /* ----------------------------------------------------------- */

    var homewidth = $(".home").width() - 10;
    var aboutwidth = homewidth + $(".about").width() + $(".facts").width() - 10;
    var portfoliowidth =
      aboutwidth +
      $(".portfolio .single-item .main-content").width() +
      $(".portfolio .single-item .details").width() +
      250 +
      65 +
      300 +
      $(".clients").width() -
      10;
    var contactwidth =
      portfoliowidth + $(".contact").width() + $(".testimonials").width() - 10;
    var blogwidth =
      contactwidth + $(".blog").width() + $(".copyright").width() - 10;

    /* ----------------------------------------------------------- */
    /*  HORIZONTAL SCROLL & REVEAL ANIMATIONS
    /* ----------------------------------------------------------- */

    function animateContent() {
      var divWidth = $("#wrapper").width() - $(window).width() / 2 + 270;
      var animated = $(".animated-layer");
      animated.each(function () {
        var anim = $(this);
        var offset = $(this).offset().left;
        if (offset < divWidth) {
          // Image Reveal Animation
          if (anim.hasClass("image-animation")) {
            anim.addClass("animated");
          }
          // Fade In Up Animation
          else if (anim.hasClass("fade-in-up-animation")) {
            anim.addClass("animated fadeInUp");
          }
          // Fade In Animation
          else if (anim.hasClass("fade-in-animation")) {
            anim.addClass("animated fadeIn");
          }
          // Fade In Down Animation
          else if (anim.hasClass("fade-in-down-animation")) {
            anim.addClass("animated fadeInDown");
          }
          // Fade In Right Animation
          else if (anim.hasClass("fade-in-right-animation")) {
            anim.addClass("animated fadeInRight");
          }
          // Fade In Right Animation
          else if (anim.hasClass("fade-in-left-animation")) {
            anim.addClass("animated fadeInLeft");
          }
        }
      });
    }

    function checkScroll() {
      if (
        Math.abs(parseInt($(".mCSB_container").css("left"))) > homewidth &&
        Math.abs(parseInt($(".mCSB_container").css("left"))) < aboutwidth
      ) {
        $(".menu ul li span").removeClass("active");
        $("#about-link").addClass("active");
      } else if (
        Math.abs(parseInt($(".mCSB_container").css("left"))) > aboutwidth &&
        Math.abs(parseInt($(".mCSB_container").css("left"))) < portfoliowidth
      ) {
        $(".menu ul li span").removeClass("active");
        $("#portfolio-link").addClass("active");
      } else if (
        Math.abs(parseInt($(".mCSB_container").css("left"))) > portfoliowidth &&
        Math.abs(parseInt($(".mCSB_container").css("left"))) < contactwidth
      ) {
        $(".menu ul li span").removeClass("active");
        $("#contact-link").addClass("active");
      } else if (
        Math.abs(parseInt($(".mCSB_container").css("left"))) > contactwidth &&
        Math.abs(parseInt($(".mCSB_container").css("left"))) < blogwidth
      ) {
        $(".menu ul li span").removeClass("active");
        $("#blog-link").addClass("active");
      } else {
        $(".menu ul li span").removeClass("active");
        $("#home-link").addClass("active");
      }
    }

    if ($("#wrapper").length) {
      if ($(window).width() > 1024) {
        $("#wrapper").mCustomScrollbar({
          axis: "x",
          theme: "dark-3",
          keyboard: { enable: true, scrollType: "stepless" },
          advanced: {
            autoExpandHorizontalScroll: true,
          },
          mouseWheel: {
            scrollAmount: 400,
          },
          callbacks: {
            whileScrolling: function () {
              animateContent();
              checkScroll();
            },
          },
        });
      } else {
        if (typeof window !== "undefined") {
          window.WOW = require("wowjs");
        }
        new WOW.WOW().init();
      }
    }
  });

  $(document).ready(function () {
    /* ----------------------------------------------------------- */
    /*  SAFARI BROWSER FIXES
    /* ----------------------------------------------------------- */

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      $("body").addClass("body-safari");
    }

    /* ----------------------------------------------------------- */
    /*  REMOVE # FROM URL
    /* ----------------------------------------------------------- */

    $("a[href='#']").on("click", function (e) {
      e.preventDefault();
    });

    function removeHash() {
      history.replaceState(
        "",
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      );
    }

    $("#menu li a").on("click", function (e) {
      setTimeout(() => {
        removeHash();
      }, 5);
    });

    /* ----------------------------------------------------------- */
    /*  REMOVE ANIMATIONS CLASSES IN DESKTOP
    /* ----------------------------------------------------------- */

    if ($(window).width() > 1024) {
      $(".fadeIn").removeClass("fadeIn");
      $(".fadeInUp").removeClass("fadeInUp");
      $(".fadeInDown").removeClass("fadeInDown");
      $(".fadeInRight").removeClass("fadeInRight");
      $(".fadeInLeft").removeClass("fadeInLeft");
    }

    /* ----------------------------------------------------------- */
    /*  MENU LINKS
    /* ----------------------------------------------------------- */

    $(".menu ul li span").on("click", function () {
      setTimeout(function () {
        $(this).toggleClass("active");
      }, 1600);
    });

    $("#home-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#home", {
        scrollInertia: 1500,
      });
    });

    $("#about-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#about", {
        scrollInertia: 1500,
      });
    });

    $("#portfolio-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#portfolio", {
        scrollInertia: 1500,
      });
    });

    $("#contact-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#contact", {
        scrollInertia: 1500,
      });
    });

    $("#blog-link").on("click", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#blog", {
        scrollInertia: 1500,
      });
    });

    $("#menu li a").on("click", function () {
      $("#checkboxmenu").trigger("click");
      $("body").toggleClass("overflow-hidden");
    });

    $("#menuToggle").on("click", function () {
      $("body").toggleClass("overflow-hidden");
    });

    /* ----------------------------------------------------------- */
    /*  CALL TO ACTION HOME
    /* ----------------------------------------------------------- */

    $("#cta").on("click", function () {
      if ($(window).width() > 1024) {
        $("#wrapper").mCustomScrollbar("scrollTo", "#about", {
          scrollInertia: 1500,
        });
      } else {
        $("html, body").animate({
          scrollTop: $("#my-photo").offset().top,
        });
      }
    });
  });
};
