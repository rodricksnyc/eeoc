//508 tabbing

$("a, button, input, [tabIndex='0'], #one, .closeRadio").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).css('outline', 'dashed 3px #4599ff')
  }

})
$("a, button, input, [tabIndex='0'], #one, .closeRadio").on('focusout', function() {
  $(this).css('outline', 'none')
})


$(".backButton").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).find('.circle').css('outline', 'dashed 3px #4599ff')
  }

})

$(".backButton").on('focusout', function() {
  $(this).find('.circle').css('outline', 'none')
})


//rotate caret

$('.collapse').on('show.bs.collapse', function () {

  $(this).closest('.sideBlock').addClass('aquaBackground')

  $(this).closest('.sideBlock').find('.borderShow').show()

  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(180deg)"
  });

});
$('.collapse').on('hide.bs.collapse', function () {
  $(this).closest('.sideBlock').find('.borderShow').hide()

  $(this).closest('.sideBlock').removeClass('aquaBackground')

  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(0deg)"
  });

});



//back to top


$('.back-to-top').click(() => {
  scrollfn("#overview");
})


$(window).scroll(function () {
  ((window.pageYOffset || document.documentElement.scrollTop) > 100) ? $('.back-to-top').css({ opacity: 1, visibility: "visible" }) : $('.back-to-top').css({ opacity: 0, visibility: "hidden" });
});

function scrollfn(e) {
  let $target = $(e),
  offSet = e === "#overview" ? 0 : $target.offset().top;
  $('html, body').stop().animate({
    'scrollTop': offSet
  }, 1200, 'swing');


}




if ($(document).innerWidth() > 1025 ) {

  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

      $('.side-menu-container').css({
        'top' : '-5%'
      })
    }
    else {

      $('.side-menu-container').css({
        'top' : '16rem'
      })

    }

  });

}

if ($(document).innerWidth() < 1025 ) {


  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

      $('.side-menu-container').css({
        'top' : 'unset'
      })
    }
    else {

      $('.side-menu-container').css({
        'top' : 'unset'
      })

    }

  });


}



if ($(document).innerWidth() < 992 ) {

  $('.panel-collapse').each(function() {
    $(this).removeClass('collapse').addClass('in')
  })

}


//mobile menu

if ($(document).innerWidth() < 992 && $(document).innerWidth() > 767) {

  $('.openIt').click(function() {



    setTimeout(function() {
      $('.openIt').addClass('closeIt')
    }, 600)

    if (!$(this).hasClass('closeIt')) {
      $(this).find('i').addClass('times')
      $('#slideOut').addClass('zIndex0')
      $('.side-menu-container').animate({
        'top' : '30%',
        'bottom' : '0'

      }, 500);

    }

    if ($(this).hasClass('closeIt')) {
      $(this).find('i').removeClass('times')
      $('#slideOut').removeClass('zIndex0')
      $('.side-menu-container').animate({
        'top' : '100%',
        'bottom' : '-100%'

      }, 500);


      setTimeout(function() {
        $('.openIt').removeClass('closeIt')
      }, 600)

    }


  })


}

if ($(document).innerWidth() <= 767) {

  $('.contractors').attr('src', 'images/mobile.svg')
  $('.openIt').click(function() {


    setTimeout(function() {
      $('.openIt').addClass('closeIt')
    }, 600)

    if (!$(this).hasClass('closeIt')) {
      $(this).find('i').addClass('times')
      $('#slideOut').addClass('zIndex0')

      $('.side-menu-container').animate({
        'top' : '0rem',
        'bottom' : '0'

      }, 500);

    }

    if ($(this).hasClass('closeIt')) {
      $(this).find('i').removeClass('times')
      $('#slideOut').removeClass('zIndex0')
      $('.side-menu-container').animate({
        'top' : '100%',
        'bottom' : '-100%'

      }, 500);


      setTimeout(function() {
        $('.openIt').removeClass('closeIt')
      }, 600)

    }


  })


}






//contact form

var contactChildren = $("#slideOut .modal-header [tabIndex], #slideOut .modal-body [tabIndex]").each(function() {
  $(this).attr('tabindex', '-1')
})

var open = function() {

  $('.contactUsOverlay').show();
  $(contactChildren).attr('tabindex', '0')

  $('#theform input').each(function () {
    $(this).attr('tabindex', '0');
  });

  $('.modal-content').addClass('opened')
  $("#slideOut").addClass('showSlideOut');
  setTimeout(function() {
    $('body').addClass('showContact')
  }, 300)

}
$('#one').keypress(
  open

).click(
  open
);



$('.contactUsOverlay').on('click', function(e) {

  if($('body').hasClass('showContact')) {

    $('.contactUsOverlay').hide()

    $(contactChildren).attr('tabindex', '-1')
    $('#theform input').each(function () {
      $(this).attr('tabindex', '-1');
    });

    $("#slideOut").removeClass('showSlideOut');

    setTimeout(function() {
      $('body').removeClass('showContact')
    }, 300)

  }
})

var close = function() {

  $('.contactUsOverlay').hide();
  $(contactChildren).attr('tabindex', '-1')
  $('#theform input').each(function () {
    $(this).attr('tabindex', '-1');
  });

  $("#slideOut").removeClass('showSlideOut');


}

$('#close').keypress(
  close

).click(
  close
);

$('#slideOut .form-check input').on('keyup', function(e) {

  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9 ) {

    $('#slideOut .form-check input').change(function (e) {

      setReasonActive();

    })

    function setReasonActive() {
      $('#slideOut .form-check input').each(function () {
        if ($(this).prop('checked')) {

          $(this).parents('.form-check').css('background' ,'#F1C4B2');
          $(this).closest('.form-check').find('label').css({
            'color': '#AF0323',
            'font-weight': '600'
          })
        }

        else {
          $(this).parents('.form-check').css( 'background' ,'transparent')
          $(this).closest('.form-check').find('label').css({

            'color' :'#032960',
            'font-weight': '400'
          })

        }
      })
    }

    setReasonActive()

  }
})


$('#slideOut .form-check input').change(function (e) {
  setReasonActive();

})

function setReasonActive() {
  $('#slideOut .form-check input').each(function () {
    if ($(this).prop('checked')) {

      $(this).parents('.form-check').css('background' ,'#F1C4B2');
      $(this).closest('.form-check').find('label').css({
        'color': '#AF0323',
        'font-weight': '600'
      })
    }

    else {
      $(this).parents('.form-check').css( 'background' ,'transparent')
      $(this).closest('.form-check').find('label').css({
        'color' :'#032960',
        'font-weight': '400'
      })

    }
  })

}

setReasonActive()




//validate and send message on contact form and toast message


$("#theform").validate(
  {
    rules:
    {
      email:
      {
        required: true,
        email: true

      }

    }
  });


  $('#sendMessage').click(function (e) {

    if(!$('#formControl1').val() == '' && !$('#formControl2').val() == '' )    {
      e.preventDefault()

      $(contactChildren).attr('tabindex', '-1')

      $('#theform input').each(function () {
        $(this).attr('tabindex', '-1');
      });

      $("#slideOut").removeClass('showSlideOut');


      setTimeout(function () {
        $('.toast').css('right', '0px')
        $('.toast').removeClass('transparent-opacity').addClass('animated slideInRight')
      }, 300)

      setTimeout(function () {
        $('.toast').removeClass('transparent-opacity').removeClass('animated slideInRight')
        $('.toast').addClass('transparent-opacity');
        $('.toast').removeClass('animated slideOutRight')

      }, 5000)
      setTimeout(function () {
        $('.toast').css('right', '-335px')
        $('.toast').addClass('animated slideOutRight')
      }, 4900)


    }


  });

  $('#theform input').keydown(function (event) {
    if(!$('#formControl1').val() == '' && !$('#formControl2').val() == '' )  {

      $('#sendMessage').addClass('activated')


    }

  })

  $("#slideOut .form-check").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $('.form-check').each(function() {
        $(this).addClass('focusClass')
      });

    }

  })

  //end contact form

  //carousel radio buttons

  $('.carousel-inner .yes').parent().addClass('yesBorder')
  $('.carousel-inner .no').parent().addClass('noBorder')

  $(".carousel-inner input").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $('.carousel-inner input').each(function() {
        $(this).css('opacity', '1')
        $(this).closest('.form-check-inline').find('label').addClass('noContent')
      });

    }

  })

  let changeColor = function() {

    var radio = $(this).find('input[type=radio]').prop('checked', true);

    $('input:not(:checked)').parent().removeClass("backgroundColor");
    $('input:checked').parent().addClass("backgroundColor");

    $('.beige').addClass('blueBackground')
    $('.carousel-control-next, .carousel-control-prev').css('color', '#015CAB')
  }

  $('.form-check-inline').keypress(
    changeColor

  ).click(
    changeColor
  );


  //show radio buttons


  let toggle = function() {

    $(this).addClass('toggle')

    $('.carousel').slideDown()

    $('.questionBox .hidden').show().css('display', 'flex')
    $('.questionBox .content').hide()
  }


  $('.questionBox').keypress(
    toggle

  ).click(
    toggle
  );


  let closeToggle = function(e) {
    e.stopPropagation()
    $('.questionBox').removeClass('toggle')

    $('.carousel').slideUp()

    $('.questionBox .hidden').hide()

    $('.questionBox .content').fadeIn()

  }


  $('.closeRadio, .clearClose').keypress(
    closeToggle

  ).click(
    closeToggle
  );



  //hide show the carousel arrows

  $('.carousel-control-prev').hide();

  $('#carouselExampleControls').on('slide.bs.carousel', function (e) {

    var slidingItemsAsIndex = $('.carousel-item').length - 1;

    if($(e.relatedTarget).index() == slidingItemsAsIndex ){
      $('.carousel-control-next').hide();
    }
    else{
      $('.carousel-control-next').show();
    }

    if($(e.relatedTarget).index() == 0){
      $('.carousel-control-prev').hide();
    }
    else{
      $('.carousel-control-prev').show();
    }

  })






  $('.next, .back').on("keyup", function (e) {


	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 13) {

		$('.questionBox .hidden .closeRadio').focus().css('outline', 'dashed 3px #4599ff')
	}

})


  //special cursor on mobile



  // var mouseX = 0, mouseY = 0;
  // var xp = 0, yp = 0;
  //
  // $(document).mousemove(function(e){
  //   mouseX = e.pageX - 30;
  //   mouseY = e.pageY - 30;
  // });
  //
  // setInterval(function(){
  //   xp += ((mouseX - xp)/6);
  //   yp += ((mouseY - yp)/6);
  //   $("#circle").css({left: xp +'px', top: yp +'px'});
  // }, 20);
