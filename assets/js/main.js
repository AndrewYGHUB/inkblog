function toggleMenu() {
  var nav = document.getElementsByClassName("site-header-nav")[0];
  if (nav.style.display == "inline-flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "inline-flex";
  }
}

// 粒子连线初始化
jQuery(Particles.init({
      /*
      Option           | Type               | Default | Description
      =====================================================================================================
      selector         | string             | -       | Required: CSS selector of your canvas element
      maxParticles     | integer            | 100     | Optional: Maximum amount of particles
      sizeVariations   | integer            | 3       | Optional: Amount of size variations
      speed            | integer            | 0.5     | Optional: Movement speed of the particles
      color            | string or string[] | #000000 | Optional: Color(s) of the particles and connecting lines
      minDistance      | integer            | 120     | Optional: Distance in px for connecting lines
      connectParticles | boolean            | false   | Optional: true/false if connecting lines should be drawn
      responsive       | array              | null    | Optional: Array of objects containing breakpoints and options
       */
      selector: '.particles',
      maxParticles: 100,
      sizeVariations: 5,
      speed: 0.5,
      color: ['#ffffff', '#eeeeee', '#dddddd', '#cccccc', '#bbbbbb', '#aaaaaa'],
      minDistance: 100,
      connectParticles: true,
      responsive: [{
        breakpoint: 768,
        options: {
          maxParticles: 60,
          minDistance: 80
        }
      },{
        breakpoint: 425,
        options: {
          maxParticles: 50,
          minDistance: 70
        }
      },{
        breakpoint: 375,
        options: {
          maxParticles: 40,
          minDistance: 60
        }
      },{
        breakpoint: 320,
        options: {
          maxParticles: 30,
          minDistance: 50
        }
      }]
    }));
jQuery(function() {
  // 回到顶部
  function toTop () {
    var $toTop = $(".gotop");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= $(window).height()) {
        $toTop.css("display", "block").fadeIn();
      } else {
        $toTop.fadeOut();
      }
    });

    $toTop.on("click", function (evt) {
      var $obj = $("body,html");
      $obj.animate({
        scrollTop: 0
      }, 240);

      evt.preventDefault();
    });
  }

  toTop();
});
