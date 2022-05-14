// Olá mundo!
console.log("Hello world! :)");
console.log("Design + Code by Elisa Sampaio, 2022");

// choose favicon randomly
let r = Math.floor(Math.random() * 4);

if (r == 0) {
  $('#fav').attr('href', 'images/favicon1.png');
} else if (r == 1) {
  $('#fav').attr('href', 'images/favicon2.png');
} else if (r == 2) {
  $('#fav').attr('href', 'images/favicon3.png');
} else if (r == 3) {
  $('#fav').attr('href', 'images/favicon4.png');
} else {}


//array with the number of Items
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//hide everything
for (var i = 0; i < 4; i++) {
  $('#idea' + i).hide();
}

function run() {
  //percursos diferentes para cada circulo
  let h = $('.shapes').height();
  let w = $('.shapes').width();
  // $('.div').css({'background': 'black'});

  function addItems(myItem) {
    //add shapes on different spots on the screen

    //get random X/Y value between window size
    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);

    //give shape an X/Y position
    $(myItem).css({
      'top': nh,
      'left': nw
    });
  }

  //run function for every Item
  for (var i = 1; i < 5; i++) {
    addItems('#item-A' + i);
    addItems('#item-B' + i);
    addItems('#item-C' + i);
    addItems('#item-D' + i);
  }

  function position(myclass) {
    // add random position on screen
    function makeNewPosition() {
      // can never go off screen limits
      let nh = Math.floor(Math.random() * h);
      let nw = Math.floor(Math.random() * w);
      return [nh, nw];
    }

    let newq = makeNewPosition()

    $(myclass).animate({
      top: newq[0],
      left: newq[1]
    }, 5000, function() {
      position(myclass);
    });
  }

  //run function for every Item
  for (var i = 1; i < 5; i++) {
    position('#item-A' + i);
    position('#item-B' + i);
    position('#item-C' + i);
    position('#item-D' + i);
  }
}

//Hide idea if click on blank s4creen
$('.shape').click(function() {
  $('#idea1').hide();
  $('#idea2').hide();
  $('#idea3').hide();
  $('#idea4').hide();
});

//SHAPE 1
// show ideas on shape click
$('.shape1').click(function() {
  $('#idea1').show();
  $('#idea2').hide();
  $('#idea3').hide();
  $('#idea4').hide();
  $('#idea1-01').show();

  for (var i = 2; i < 11; i++) {
    $('#idea1-0' + i).hide();
  }

  $('#shape1-counter').text('1');
});

// shape 1, right button click
$('#shape1-btn-r').click(function() {

  if ($('#idea1-01').is(":visible")) {
    $('#idea1-01').hide();
    $('#idea1-02').show();
    $('#shape1-counter').text('2');

  } else if ($('#idea1-02').is(":visible")) {
    $('#idea1-02').hide();
    $('#idea1-03').show();
    $('#shape1-counter').text('3');

  } else if ($('#idea1-03').is(":visible")) {
    $('#idea1-03').hide();
    $('#idea1-04').show();
    $('#shape1-counter').text('4');
  } else if ($('#idea1-04').is(":visible")) {
    $('#idea1-04').hide();
    $('#idea1-05').show();
    $('#shape1-counter').text('5');
  } else if ($('#idea1-05').is(":visible")) {
    $('#idea1-05').hide();
    $('#idea1-06').show();
    $('#shape1-counter').text('6');
  } else if ($('#idea1-06').is(":visible")) {
    $('#idea1-06').hide();
    $('#idea1-07').show();
    $('#shape1-counter').text('7');
  } else if ($('#idea1-07').is(":visible")) {
    $('#idea1-07').hide();
    $('#idea1-08').show();
    $('#shape1-counter').text('8');
  } else if ($('#idea1-08').is(":visible")) {
    $('#idea1-08').hide();
    $('#idea1-09').show();
    $('#shape1-counter').text('9');
  } else if ($('#idea1-09').is(":visible")) {
    $('#idea1-09').hide();
    $('#idea1-010').show();
    $('#shape1-counter').text('10');
    // alterar o icone do botão da direita
    $("#shape1-btn-r").attr("src", "images/check.svg");
  } else if ($('#idea1-010').is(":visible")) {
    //fechar a IDEA:
    $('#idea1').hide();
    // reset
    for (var i = 0; i < 11; i++) {
      $('#idea1-0' + i).hide();
    }
    // reset do icone do botão da direita
    $("#shape1-btn-r").attr("src", "images/right-arrow.svg");
  } else {}
});

// shape 1, left button click
$('#shape1-btn-l').click(function() {

  if ($('#idea1-01').is(":visible")) {
    $('#idea1-01').hide();
    $('#idea1-010').show();
    $('#shape1-counter').text('10');
    // alterar o icone do botão da direita
    $("#shape1-btn-r").attr("src", "images/check.svg");
  } else if ($('#idea1-010').is(":visible")) {
    $('#idea1-010').hide();
    $('#idea1-09').show();
    $('#shape1-counter').text('9');
    // reset do icone do botão da direita
    $("#shape1-btn-r").attr("src", "images/right-arrow.svg");
  } else if ($('#idea1-09').is(":visible")) {
    $('#idea1-09').hide();
    $('#idea1-08').show();
    $('#shape1-counter').text('8');
  } else if ($('#idea1-08').is(":visible")) {
    $('#idea1-08').hide();
    $('#idea1-07').show();
    $('#shape1-counter').text('7');
  } else if ($('#idea1-07').is(":visible")) {
    $('#idea1-07').hide();
    $('#idea1-06').show();
    $('#shape1-counter').text('6');
  } else if ($('#idea1-06').is(":visible")) {
    $('#idea1-06').hide();
    $('#idea1-05').show();
    $('#shape1-counter').text('5');
  } else if ($('#idea1-05').is(":visible")) {
    $('#idea1-05').hide();
    $('#idea1-04').show();
    $('#shape1-counter').text('4');
  } else if ($('#idea1-04').is(":visible")) {
    $('#idea1-04').hide();
    $('#idea1-03').show();
    $('#shape1-counter').text('3');
  } else if ($('#idea1-03').is(":visible")) {
    $('#idea1-03').hide();
    $('#idea1-02').show();
    $('#shape1-counter').text('2');
  } else if ($('#idea1-02').is(":visible")) {
    $('#idea1-02').hide();
    $('#idea1-01').show();
    $('#shape1-counter').text('1');
  } else {}
});

//SHAPE 2
$('.shape2').click(function() {
  $('#idea1').hide();
  $('#idea2').show();
  $('#idea3').hide();
  $('#idea4').hide();
  for (var i = 2; i < 9; i++) {
    $('#idea2-0' + i).hide();
  }
  $('#idea2-01').show();
  $('#shape2-counter').text('1');
});

// shape 1, right button click
$('#shape2-btn-r').click(function() {

  if ($('#idea2-01').is(":visible")) {
    $('#idea2-01').hide();
    $('#idea2-02').show();
    $('#shape2-counter').text('2');
  } else if ($('#idea2-02').is(":visible")) {
    $('#idea2-02').hide();
    $('#idea2-03').show();
    $('#shape2-counter').text('3');
  } else if ($('#idea2-03').is(":visible")) {
    $('#idea2-03').hide();
    $('#idea2-04').show();
    $('#shape2-counter').text('4');
  } else if ($('#idea2-04').is(":visible")) {
    $('#idea2-04').hide();
    $('#idea2-05').show();
    $('#shape2-counter').text('5');
  } else if ($('#idea2-05').is(":visible")) {
    $('#idea2-05').hide();
    $('#idea2-06').show();
    $('#shape2-counter').text('6');
  } else if ($('#idea2-06').is(":visible")) {
    $('#idea2-06').hide();
    $('#idea2-07').show();
    $('#shape2-counter').text('7');
  } else if ($('#idea2-07').is(":visible")) {
    $('#idea2-07').hide();
    $('#idea2-08').show();
    $('#shape2-counter').text('8');
    // alterar o icone do botão da direita
    $("#shape2-btn-r").attr("src", "images/check.svg");
  } else if ($('#idea2-08').is(":visible")) {
    //fechar a IDEA:
    $('#idea2').hide();
    // reset
    for (var i = 0; i < 9; i++) {
      $('#idea2-0' + i).hide();
    }
    // reset do icone do botão da direita
    $("#shape2-btn-r").attr("src", "images/right-arrow.svg");
  } else {}
});

// shape 2, left button click
$('#shape2-btn-l').click(function() {

  if ($('#idea2-01').is(":visible")) {
    $('#idea2-01').hide();
    $('#idea2-08').show();
    $('#shape2-counter').text('8');
    // alterar o icone do botão da direita
    $("#shape2-btn-r").attr("src", "images/check.svg");
  } else if ($('#idea2-08').is(":visible")) {
    $('#idea2-08').hide();
    $('#idea2-07').show();
    $('#shape2-counter').text('7');
    // reset do icone do botão da direita
    $("#shape2-btn-r").attr("src", "images/right-arrow.svg");
  } else if ($('#idea2-07').is(":visible")) {
    $('#idea2-07').hide();
    $('#idea2-06').show();
    $('#shape2-counter').text('6');
  } else if ($('#idea2-06').is(":visible")) {
    $('#idea2-06').hide();
    $('#idea2-05').show();
    $('#shape2-counter').text('5');
  } else if ($('#idea2-05').is(":visible")) {
    $('#idea2-05').hide();
    $('#idea2-04').show();
    $('#shape2-counter').text('4');
  } else if ($('#idea2-04').is(":visible")) {
    $('#idea2-04').hide();
    $('#idea2-03').show();
    $('#shape2-counter').text('3');
  } else if ($('#idea2-03').is(":visible")) {
    $('#idea2-03').hide();
    $('#idea2-02').show();
    $('#shape2-counter').text('2');
  } else if ($('#idea2-02').is(":visible")) {
    $('#idea2-02').hide();
    $('#idea2-01').show();
    $('#shape2-counter').text('1');
  } else {}
});

//SHAPE 3
// show ideas on shape click
$('.shape3').click(function() {
  $('#idea3').show();
  $('#idea1').hide();
  $('#idea2').hide();
  $('#idea4').hide();
  for (var i = 2; i < 13; i++) {
    $('#idea3-0' + i).hide();
  }
  $('#idea3-01').show();
  $('#shape3-counter').text('1');
});

// shape 3, right button click
$('#shape3-btn-r').click(function() {

  if ($('#idea3-01').is(":visible")) {
    $('#idea3-01').hide();
    $('#idea3-02').show();
    $('#shape3-counter').text('2');
  } else if ($('#idea3-02').is(":visible")) {
    $('#idea3-02').hide();
    $('#idea3-03').show();
    $('#shape3-counter').text('3');
  } else if ($('#idea3-03').is(":visible")) {
    $('#idea3-03').hide();
    $('#idea3-04').show();
    $('#shape3-counter').text('4');
  } else if ($('#idea3-04').is(":visible")) {
    $('#idea3-04').hide();
    $('#idea3-05').show();
    $('#shape3-counter').text('5');
  } else if ($('#idea3-05').is(":visible")) {
    $('#idea3-05').hide();
    $('#idea3-06').show();
    $('#shape3-counter').text('6');
  } else if ($('#idea3-06').is(":visible")) {
    $('#idea3-06').hide();
    $('#idea3-07').show();
    $('#shape3-counter').text('7');
  } else if ($('#idea3-07').is(":visible")) {
    $('#idea3-07').hide();
    $('#idea3-08').show();
    $('#shape3-counter').text('8');
  } else if ($('#idea3-08').is(":visible")) {
    $('#idea3-08').hide();
    $('#idea3-09').show();
    $('#shape3-counter').text('9');
  } else if ($('#idea3-09').is(":visible")) {
    $('#idea3-09').hide();
    $('#idea3-010').show();
    $('#shape3-counter').text('10');
  } else if ($('#idea3-010').is(":visible")) {
    $('#idea3-010').hide();
    $('#idea3-011').show();
    $('#shape3-counter').text('11');
  } else if ($('#idea3-011').is(":visible")) {
    $('#idea3-011').hide();
    $('#idea3-012').show();
    $('#shape3-counter').text('12');
    // alterar o icone do botão da direita
    $("#shape3-btn-r").attr("src", "images/check.svg");
  } else if ($('#idea3-012').is(":visible")) {
    //fechar a IDEA:
    $('#idea3').hide();
    // reset
    for (var i = 0; i < 13; i++) {
      $('#idea3-0' + i).hide();
    }
    // reset do icone do botão da direita
    $("#shape3-btn-r").attr("src", "images/right-arrow.svg");
  } else {}
});

// shape 3, left button click
$('#shape3-btn-l').click(function() {

  if ($('#idea3-01').is(":visible")) {
    $('#idea3-01').hide();
    $('#idea3-012').show();
    $('#shape3-counter').text('12');
    // alterar o icone do botão da direita
    $("#shape3-btn-r").attr("src", "images/check.svg");
  } else if ($('#idea3-012').is(":visible")) {
    $('#idea3-012').hide();
    $('#idea3-011').show();
    $('#shape3-counter').text('11');
    // reset do icone do botão da direita
    $("#shape3-btn-r").attr("src", "images/right-arrow.svg");
  } else if ($('#idea3-011').is(":visible")) {
    $('#idea3-011').hide();
    $('#idea3-010').show();
    $('#shape3-counter').text('10');
  } else if ($('#idea3-010').is(":visible")) {
    $('#idea3-010').hide();
    $('#idea3-09').show();
    $('#shape3-counter').text('9');
  } else if ($('#idea3-09').is(":visible")) {
    $('#idea3-09').hide();
    $('#idea3-08').show();
    $('#shape3-counter').text('8');
  } else if ($('#idea3-08').is(":visible")) {
    $('#idea3-08').hide();
    $('#idea3-07').show();
    $('#shape3-counter').text('7');
  } else if ($('#idea3-07').is(":visible")) {
    $('#idea3-07').hide();
    $('#idea3-06').show();
    $('#shape3-counter').text('6');
  } else if ($('#idea3-06').is(":visible")) {
    $('#idea3-06').hide();
    $('#idea3-05').show();
    $('#shape3-counter').text('5');
  } else if ($('#idea3-05').is(":visible")) {
    $('#idea3-05').hide();
    $('#idea3-04').show();
    $('#shape3-counter').text('4');
  } else if ($('#idea3-04').is(":visible")) {
    $('#idea3-04').hide();
    $('#idea3-03').show();
    $('#shape3-counter').text('3');
  } else if ($('#idea3-03').is(":visible")) {
    $('#idea3-03').hide();
    $('#idea3-02').show();
    $('#shape3-counter').text('2');
  } else if ($('#idea3-02').is(":visible")) {
    $('#idea3-02').hide();
    $('#idea3-01').show();
    $('#shape3-counter').text('1');
  } else {}
});

//SHAPE 4
// show ideas on shape click
$('.shape4').click(function() {
  $('#idea4').show();
  $('#idea1').hide();
  $('#idea2').hide();
  $('#idea3').hide();
  for (var i = 2; i < 11; i++) {
    $('#idea4-0' + i).hide();
  }
  $('#idea4-01').show();
  $('#shape4-counter').text('1');
});

// shape 4, right button click
$('#shape4-btn-r').click(function() {

  if ($('#idea4-01').is(":visible")) {
    $('#idea4-01').hide();
    $('#idea4-02').show();
    $('#shape4-counter').text('2');
  } else if ($('#idea4-02').is(":visible")) {
    $('#idea4-02').hide();
    $('#idea4-03').show();
    $('#shape4-counter').text('3');
  } else if ($('#idea4-03').is(":visible")) {
    $('#idea4-03').hide();
    $('#idea4-04').show();
    $('#shape4-counter').text('4');
  } else if ($('#idea4-04').is(":visible")) {
    $('#idea4-04').hide();
    $('#idea4-05').show();
    $('#shape4-counter').text('5');
  } else if ($('#idea4-05').is(":visible")) {
    $('#idea4-05').hide();
    $('#idea4-06').show();
    $('#shape4-counter').text('6');
  } else if ($('#idea4-06').is(":visible")) {
    $('#idea4-06').hide();
    $('#idea4-07').show();
    $('#shape4-counter').text('7');
  } else if ($('#idea4-07').is(":visible")) {
    $('#idea4-07').hide();
    $('#idea4-08').show();
    $('#shape4-counter').text('8');
  } else if ($('#idea4-08').is(":visible")) {
    $('#idea4-08').hide();
    $('#idea4-09').show();
    $('#shape4-counter').text('9');
  } else if ($('#idea4-09').is(":visible")) {
    $('#idea4-09').hide();
    $('#idea4-010').show();
    $('#shape4-counter').text('10');
    // alterar o icone do botão da direita
    $("#shape4-btn-r").attr("src", "images/check.svg");
  } else if ($('#idea4-010').is(":visible")) {
    //fechar a IDEA:
    $('#idea4').hide();
    // reset
    for (var i = 0; i < 11; i++) {
      $('#idea4-0' + i).hide();
    }
    // reset do icone do botão da direita
    $("#shape4-btn-r").attr("src", "images/right-arrow.svg");
  } else {}
});

// shape 4, left button click
$('#shape4-btn-l').click(function() {

  if ($('#idea4-01').is(":visible")) {
    $('#idea4-01').hide();
    $('#idea4-010').show();
    $('#shape4-counter').text('10');
    // alterar o icone do botão da direita
    $("#shape4-btn-r").attr("src", "images/check.svg");
  } else if ($('#idea4-010').is(":visible")) {
    $('#idea4-010').hide();
    $('#idea4-09').show();
    $('#shape4-counter').text('9');
    // reset do icone do botão da direita
    $("#shape4-btn-r").attr("src", "images/right-arrow.svg");
  } else if ($('#idea4-09').is(":visible")) {
    $('#idea4-09').hide();
    $('#idea4-08').show();
    $('#shape4-counter').text('8');
  } else if ($('#idea4-08').is(":visible")) {
    $('#idea4-08').hide();
    $('#idea4-07').show();
    $('#shape4-counter').text('7');
  } else if ($('#idea4-07').is(":visible")) {
    $('#idea4-07').hide();
    $('#idea4-06').show();
    $('#shape4-counter').text('6');
  } else if ($('#idea4-06').is(":visible")) {
    $('#idea4-06').hide();
    $('#idea4-05').show();
    $('#shape4-counter').text('5');
  } else if ($('#idea4-05').is(":visible")) {
    $('#idea4-05').hide();
    $('#idea4-04').show();
    $('#shape4-counter').text('4');
  } else if ($('#idea4-04').is(":visible")) {
    $('#idea4-04').hide();
    $('#idea4-03').show();
    $('#shape4-counter').text('3');
  } else if ($('#idea4-03').is(":visible")) {
    $('#idea4-03').hide();
    $('#idea4-02').show();
    $('#shape4-counter').text('2');
  } else if ($('#idea4-02').is(":visible")) {
    $('#idea4-02').hide();
    $('#idea4-01').show();
    $('#shape4-counter').text('1');
  } else {}
});


run();
