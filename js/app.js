$(document).ready(function() {
	doIntro();
	playGame();
});

var hadoukenSound = false;
function playHadouken () {
  hadoukenSound = !hadoukenSound;
  if (hadoukenSound) {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
}

var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    $('#ryu-theme')[0].pause();
    $('#ryu-theme')[0].load();
    $('#sweet-pose')[0].play();
  }
}


function playGame() {
  $('.ryu').mouseenter(function() {
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-action').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-action').hide();  
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate(
        {'left': '1020px'},
        500,
        function() {
          $(this).stop();
          $(this).hide();
          $(this).css('left', '520px');
        }
      );
  })
  .mouseup(function() {
    $('.ryu-action').hide();
    $('.ryu-still').show();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      playCool();
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('#sweet-pose')[0].pause();
	  $('#sweet-pose')[0].load();
	  $('#ryu-theme')[0].play();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
}

function doIntro() {
  $('#ryu-theme')[0].volume = 0.3;
  $('#ryu-theme')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.created-in').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.instructions').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}
