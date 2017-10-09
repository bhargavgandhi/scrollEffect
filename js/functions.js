var birdboxHeight = $('.bird-box').height();
var count = 0;
$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  didScroll = true;

  //console.log(wScroll);

  if (wScroll <= birdboxHeight) {


    $('.logo').css({
      'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.back-bird').css({
      'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.fore-bird').css({
      'transform': 'translate(0px, -' + wScroll / 40 + '%)'
    });
  }


  if (wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i) {

      setTimeout(function() {
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });
  }



  if (wScroll > $('.large-window').offset().top - $(window).height()) {

    $('.large-window').css({
      'background-position': 'center ' + (wScroll - $('.large-window').offset().top) + 'px'
    });

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({
      'opacity': opacity
    });

  }

  if (wScroll > $('.blog-posts').offset().top - $(window).height()) {

    var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350);

    $('.post-1').css({
      'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)'
    });


    $('.post-3').css({
      'transform': 'translate(' + Math.abs(offset) + 'px,' + Math.abs(offset * 0.2) + 'px)'
    });
  }
  // var totHeight = $('header').height() + $('#content1').height();
  // totHeight = parseInt(totHeight) + 100;
  //
  // if (wScroll >= totHeight) {
  //   //console.log("end of content2" + totHeight + " wScroll - " + wScroll);
  //   $("#content1").css({
  //     'margin-bottom': 0
  //   })
  //   $("#content2").css({
  //     'position': 'relative',
  //     'top': 0,
  //     'width': '100%'
  //   })
  // } else {
  //
  //   if ((wScroll > $('.blog-posts').offset().top - ($(window).height() / 1.4)) && wScroll < totHeight) {
  //     count++;
  //     if (count == 1) {
  //       $("#content1").css({
  //         'margin-bottom': 2000
  //       });
  //       $("#content2").css({
  //         'position': 'fixed',
  //         'top': 0,
  //         'width': '100%'
  //       });
  //     }
  //   }
  // }


});


// // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var totHeight = $('header').height() + $('#content1').height();
totHeight = parseInt(totHeight) + 100;
var delta = totHeight;

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  // if (Math.abs(lastScrollTop - st) <= delta)
  //   return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop) {
    // Scroll down
    console.log(st);

    if (st >= delta) {
      //console.log("end of content2" + totHeight + " wScroll - " + wScroll);
      $("#content1").css({
        'margin-bottom': 0
      })
      $("#content2").css({
        'position': 'relative',
        'top': '100px',
        'margin-top' : '100px',
        'width': '100%'
      })
    } else {

      if ((st > $('.blog-posts').offset().top - ($(window).height() / 1.4)) && st < delta) {
        count++;
        if (count == 1) {
          $("#content1").css({
            'margin-bottom': 1500
          });
          $("#content2").css({
            'position': 'fixed',
            'top': '100px',
            'margin-top' : '0px',
            'width': '100%'
          });
        }
      }
    }


  } else {
    // Scroll Up

    // if (st <= delta) {
    //   //console.log("end of content2" + totHeight + " wScroll - " + wScroll);
    //   $("#content1").css({
    //     'margin-bottom': 0
    //   })
    //   $("#content2").css({
    //     'position': 'relative',
    //     'top': 0,
    //     'width': '100%'
    //   })
    // } else {
      count=0;
      if ((st < $('#endContent2').offset().top + ($(window).height()/10))) {
        count++;
        if (count == 1) {
          $("#content1").css({
            'margin-bottom': 1500
          });
          $("#content2").css({
            'position': 'fixed',
            'top': '100px',
            'width': '100%'
          });
        }
      }
    //}
  }

  lastScrollTop = st;
}
