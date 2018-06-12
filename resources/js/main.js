$(document).ready(function() {
  lightsOut.renderGame($('.game'));

});


var lightsOut = {};

lightsOut.renderGame = function($game) {
  $game.empty();
  var $gameField = $('<div id="squarerow" class="sr sr1">'
                      + '</div>'
                      + '<div id="squarerow" class="sr sr2">'
                      + '</div>'
                      + '<div id="squarerow" class="sr sr3">'
                      + '</div>');

  $game.append($gameField);

//  creat the square variables and setting an on/off state
  var $gameSquare1 = $('<div class="square sq1"></div>');
  var $gameSquare2 = $('<div class="square sq2"></div>');
  var $gameSquare3 = $('<div class="square sq3"></div>');
  var $gameSquare4 = $('<div class="square sq4"></div>');
  var $gameSquare5 = $('<div class="square sq5"></div>');
  var $gameSquare6 = $('<div class="square sq6"></div>');
  var $gameSquare7 = $('<div class="square sq7"></div>');
  var $gameSquare8 = $('<div class="square sq8"></div>');
  var $gameSquare9 = $('<div class="square sq9"></div>');

// to create a random board on page load, using Math.random for the state attribute
  var randState = function() {
      if (Math.floor(Math.random()*2) === 0) {
        return true;
      } else {
        return false;
      };
  };
  $gameSquare1.data("state", randState());
  $gameSquare2.data("state", randState());
  $gameSquare3.data("state", randState());
  $gameSquare4.data("state", randState());
  $gameSquare5.data("state", randState());
  $gameSquare6.data("state", randState());
  $gameSquare7.data("state", randState());
  $gameSquare8.data("state", randState());
  $gameSquare9.data("state", randState());


  // block of code for setting the state of each square
  if ($gameSquare1.data("state") === false) {
    $gameSquare1.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare1.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare2.data("state") === false) {
    $gameSquare2.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare2.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare3.data("state") === false) {
    $gameSquare3.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare3.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare4.data("state") === false) {
    $gameSquare4.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare4.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare5.data("state") === false) {
    $gameSquare5.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare5.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare6.data("state") === false) {
    $gameSquare6.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare6.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare7.data("state") === false) {
    $gameSquare7.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare7.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare8.data("state") === false) {
    $gameSquare8.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare8.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare9.data("state") === false) {
    $gameSquare9.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare9.css('background-color', 'rgb(63, 210, 255)');
  };


  // rendering of the game board
  $('.sr1').append($gameSquare1, $gameSquare2, $gameSquare3);
  $('.sr2').append($gameSquare4, $gameSquare5, $gameSquare6);
  $('.sr3').append($gameSquare7, $gameSquare8, $gameSquare9);

  // changing of squares state by clicking on them, click functions for each square
  $gameSquare1.click(function() {
    if ($(this).data("state") === true) {
      $(this).data('state', false);
    } else {
      $(this).data('state', true);
    };
    if ($gameSquare2.data('state') === true) {
      $gameSquare2.data('state', false);
    } else {
      $gameSquare2.data('state', true);
    };
    if ($gameSquare4.data('state') === true) {
      $gameSquare4.data('state', false);
    } else {
      $gameSquare4.data('state', true);
    }
  // necessary block of code for the squares to render the change in css
  if ($gameSquare1.data("state") === false) {
    $gameSquare1.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare1.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare2.data("state") === false) {
    $gameSquare2.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare2.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare4.data("state") === false) {
    $gameSquare4.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare4.css('background-color', 'rgb(63, 210, 255)');
  };
  // win condition on click, delay set for the alert to come after squares change color
  if (($gameSquare1.data('state') === true) && ($gameSquare2.data('state') === true)
  && ($gameSquare3.data('state') === true) && ($gameSquare4.data('state') === true) &&
  ($gameSquare5.data('state') === true) && ($gameSquare6.data('state') === true) &&
  ($gameSquare7.data('state') === true) && ($gameSquare8.data('state') === true) &&
  ($gameSquare9.data('state') === true)) {
    setTimeout(function() {alert("Congratulations! You Win!")}, 100 );
  };
});

$gameSquare2.click(function() {
  if ($(this).data('state') === true) {
    $(this).data('state', false);
  } else {
    $(this).data('state', true);
  };
  if ($gameSquare1.data('state') === true) {
    $gameSquare1.data('state', false);
  } else {
    $gameSquare1.data('state', true);
  };
  if ($gameSquare3.data('state') === true) {
    $gameSquare3.data('state', false);
  } else {
    $gameSquare3.data('state', true);
  };
  if ($gameSquare5.data('state') === true) {
    $gameSquare5.data('state', false);
  } else {
    $gameSquare5.data('state', true);
  };
  // rendering css state change
  if ($gameSquare1.data("state") === false) {
    $gameSquare1.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare1.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare2.data("state") === false) {
    $gameSquare2.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare2.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare3.data("state") === false) {
    $gameSquare3.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare3.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare5.data("state") === false) {
    $gameSquare5.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare5.css('background-color', 'rgb(63, 210, 255)');
  };
  // win condition on click, delay set for the alert to come after squares change color
  if (($gameSquare1.data('state') === true) && ($gameSquare2.data('state') === true)
  && ($gameSquare3.data('state') === true) && ($gameSquare4.data('state') === true) &&
  ($gameSquare5.data('state') === true) && ($gameSquare6.data('state') === true) &&
  ($gameSquare7.data('state') === true) && ($gameSquare8.data('state') === true) &&
  ($gameSquare9.data('state') === true)) {
    setTimeout(function() {alert("Congratulations! You Win!")}, 100 );
  };
});

$gameSquare3.click(function() {
  if ($(this).data('state') === true) {
    $(this).data('state', false);
  } else {
    $(this).data('state', true);
  };
  if ($gameSquare2.data('state') === true) {
    $gameSquare2.data('state', false);
  } else {
    $gameSquare2.data('state', true);
  };
  if ($gameSquare6.data('state') === true) {
    $gameSquare6.data('state', false);
  } else {
    $gameSquare6.data('state', true);
  };
  // rendering css state change
  if ($gameSquare2.data("state") === false) {
    $gameSquare2.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare2.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare3.data("state") === false) {
    $gameSquare3.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare3.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare6.data("state") === false) {
    $gameSquare6.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare6.css('background-color', 'rgb(63, 210, 255)');
  };
  // win condition on click, delay set for the alert to come after squares change color
  if (($gameSquare1.data('state') === true) && ($gameSquare2.data('state') === true)
  && ($gameSquare3.data('state') === true) && ($gameSquare4.data('state') === true) &&
  ($gameSquare5.data('state') === true) && ($gameSquare6.data('state') === true) &&
  ($gameSquare7.data('state') === true) && ($gameSquare8.data('state') === true) &&
  ($gameSquare9.data('state') === true)) {
    setTimeout(function() {alert("Congratulations! You Win!")}, 100 );
  };
});

$gameSquare4.click(function() {
  if ($(this).data('state') === true) {
    $(this).data('state', false);
  } else {
    $(this).data('state', true);
  };
  if ($gameSquare1.data('state') === true) {
    $gameSquare1.data('state', false);
  } else {
    $gameSquare1.data('state', true);
  };
  if ($gameSquare5.data('state') === true) {
    $gameSquare5.data('state', false);
  } else {
    $gameSquare5.data('state', true);
  };
  if ($gameSquare7.data('state') === true) {
    $gameSquare7.data('state', false);
  } else {
    $gameSquare7.data('state', true);
  };
  // rendering css state change
  if ($gameSquare1.data("state") === false) {
    $gameSquare1.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare1.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare4.data("state") === false) {
    $gameSquare4.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare4.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare5.data("state") === false) {
    $gameSquare5.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare5.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare7.data("state") === false) {
    $gameSquare7.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare7.css('background-color', 'rgb(63, 210, 255)');
  };
  // win condition on click, delay set for the alert to come after squares change color
  if (($gameSquare1.data('state') === true) && ($gameSquare2.data('state') === true)
  && ($gameSquare3.data('state') === true) && ($gameSquare4.data('state') === true) &&
  ($gameSquare5.data('state') === true) && ($gameSquare6.data('state') === true) &&
  ($gameSquare7.data('state') === true) && ($gameSquare8.data('state') === true) &&
  ($gameSquare9.data('state') === true)) {
    setTimeout(function() {alert("Congratulations! You Win!")}, 100 );
  };
});

$gameSquare5.click(function() {
  if ($(this).data('state') === true) {
    $(this).data('state', false);
  } else {
    $(this).data('state', true);
  };
  if ($gameSquare2.data('state') === true) {
    $gameSquare2.data('state', false);
  } else {
    $gameSquare2.data('state', true);
  };
  if ($gameSquare4.data('state') === true) {
    $gameSquare4.data('state', false);
  } else {
    $gameSquare4.data('state', true);
  };
  if ($gameSquare6.data('state') === true) {
    $gameSquare6.data('state', false);
  } else {
    $gameSquare6.data('state', true);
  };
  if ($gameSquare8.data('state') === true) {
    $gameSquare8.data('state', false);
  } else {
    $gameSquare8.data('state', true);
  };
  // rendering css state change
  if ($gameSquare2.data("state") === false) {
    $gameSquare2.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare2.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare4.data("state") === false) {
    $gameSquare4.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare4.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare5.data("state") === false) {
    $gameSquare5.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare5.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare6.data("state") === false) {
    $gameSquare6.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare6.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare8.data("state") === false) {
    $gameSquare8.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare8.css('background-color', 'rgb(63, 210, 255)');
  };
  // win condition on click, delay set for the alert to come after squares change color
  if (($gameSquare1.data('state') === true) && ($gameSquare2.data('state') === true)
  && ($gameSquare3.data('state') === true) && ($gameSquare4.data('state') === true) &&
  ($gameSquare5.data('state') === true) && ($gameSquare6.data('state') === true) &&
  ($gameSquare7.data('state') === true) && ($gameSquare8.data('state') === true) &&
  ($gameSquare9.data('state') === true)) {
    setTimeout(function() {alert("Congratulations! You Win!")}, 100 );
  };
});

$gameSquare6.click(function() {
  if ($(this).data('state') === true) {
    $(this).data('state', false);
  } else {
    $(this).data('state', true);
  };
  if ($gameSquare3.data('state') === true) {
    $gameSquare3.data('state', false);
  } else {
    $gameSquare3.data('state', true);
  };
  if ($gameSquare5.data('state') === true) {
    $gameSquare5.data('state', false);
  } else {
    $gameSquare5.data('state', true);
  };
  if ($gameSquare9.data('state') === true) {
    $gameSquare9.data('state', false);
  } else {
    $gameSquare9.data('state', true);
  };
  // rendering css state change
  if ($gameSquare3.data("state") === false) {
    $gameSquare3.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare3.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare5.data("state") === false) {
    $gameSquare5.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare5.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare6.data("state") === false) {
    $gameSquare6.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare6.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare9.data("state") === false) {
    $gameSquare9.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare9.css('background-color', 'rgb(63, 210, 255)');
  };
  // win condition on click, delay set for the alert to come after squares change color
  if (($gameSquare1.data('state') === true) && ($gameSquare2.data('state') === true)
  && ($gameSquare3.data('state') === true) && ($gameSquare4.data('state') === true) &&
  ($gameSquare5.data('state') === true) && ($gameSquare6.data('state') === true) &&
  ($gameSquare7.data('state') === true) && ($gameSquare8.data('state') === true) &&
  ($gameSquare9.data('state') === true)) {
    setTimeout(function() {alert("Congratulations! You Win!")}, 100 );
  };
});

$gameSquare7.click(function() {
  if ($(this).data('state') === true) {
    $(this).data('state', false);
  } else {
    $(this).data('state', true);
  };
  if ($gameSquare4.data('state') === true) {
    $gameSquare4.data('state', false);
  } else {
    $gameSquare4.data('state', true);
  };
  if ($gameSquare8.data('state') === true) {
    $gameSquare8.data('state', false);
  } else {
    $gameSquare8.data('state', true);
  };
  // rendering css state change
  if ($gameSquare4.data("state") === false) {
    $gameSquare4.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare4.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare7.data("state") === false) {
    $gameSquare7.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare7.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare8.data("state") === false) {
    $gameSquare8.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare8.css('background-color', 'rgb(63, 210, 255)');
  };
  // win condition on click, delay set for the alert to come after squares change color
  if (($gameSquare1.data('state') === true) && ($gameSquare2.data('state') === true)
  && ($gameSquare3.data('state') === true) && ($gameSquare4.data('state') === true) &&
  ($gameSquare5.data('state') === true) && ($gameSquare6.data('state') === true) &&
  ($gameSquare7.data('state') === true) && ($gameSquare8.data('state') === true) &&
  ($gameSquare9.data('state') === true)) {
    setTimeout(function() {alert("Congratulations! You Win!")}, 100 );
  };
});

$gameSquare8.click(function() {
  if ($(this).data('state') === true) {
    $(this).data('state', false);
  } else {
    $(this).data('state', true);
  };
  if ($gameSquare7.data('state') === true) {
    $gameSquare7.data('state', false);
  } else {
    $gameSquare7.data('state', true);
  };
  if ($gameSquare5.data('state') === true) {
    $gameSquare5.data('state', false);
  } else {
    $gameSquare5.data('state', true);
  };
  if ($gameSquare9.data('state') === true) {
    $gameSquare9.data('state', false);
  } else {
    $gameSquare9.data('state', true);
  };
  // css render state change
  if ($gameSquare5.data("state") === false) {
    $gameSquare5.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare5.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare7.data("state") === false) {
    $gameSquare7.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare7.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare8.data("state") === false) {
    $gameSquare8.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare8.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare9.data("state") === false) {
    $gameSquare9.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare9.css('background-color', 'rgb(63, 210, 255)');
  };
  // win condition on click, delay set for the alert to come after squares change color
  if (($gameSquare1.data('state') === true) && ($gameSquare2.data('state') === true)
  && ($gameSquare3.data('state') === true) && ($gameSquare4.data('state') === true) &&
  ($gameSquare5.data('state') === true) && ($gameSquare6.data('state') === true) &&
  ($gameSquare7.data('state') === true) && ($gameSquare8.data('state') === true) &&
  ($gameSquare9.data('state') === true)) {
    setTimeout(function() {alert("Congratulations! You Win!")}, 100 );
  };
});

$gameSquare9.click(function() {
  if ($(this).data('state') === true) {
    $(this).data('state', false);
  } else {
    $(this).data('state', true);
  };
  if ($gameSquare6.data('state') === true) {
    $gameSquare6.data('state', false);
  } else {
    $gameSquare6.data('state', true);
  };
  if ($gameSquare8.data('state') === true) {
    $gameSquare8.data('state', false);
  } else {
    $gameSquare8.data('state', true);
  };
  // css render state change
  if ($gameSquare6.data("state") === false) {
    $gameSquare6.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare6.css('background-color', 'rgb(63, 210, 255)');
    };
  if ($gameSquare8.data("state") === false) {
    $gameSquare8.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare8.css('background-color', 'rgb(63, 210, 255)');
  };
  if ($gameSquare9.data("state") === false) {
    $gameSquare9.css('background-color', 'rgb(14, 44, 66)');
  } else {
    $gameSquare9.css('background-color', 'rgb(63, 210, 255)');
  };
  // win condition on click, delay set for the alert to come after squares change color
  if (($gameSquare1.data('state') === true) && ($gameSquare2.data('state') === true) &&
  ($gameSquare3.data('state') === true) && ($gameSquare4.data('state') === true) &&
  ($gameSquare5.data('state') === true) && ($gameSquare6.data('state') === true) &&
  ($gameSquare7.data('state') === true) && ($gameSquare8.data('state') === true) &&
  ($gameSquare9.data('state') === true)) {
    setTimeout(function() {alert("Congratulations! You Win!")}, 100 );
  };
});
};
