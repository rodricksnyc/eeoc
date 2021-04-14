//IE message

var version = detectIE();

if (version === false) {} else if (version >= 12) {} else {
  $('#myModal2').modal('show');
}

function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {

    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {

    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {

    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return false;
}



//IE message end






//508 tabbing

$("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).css('outline', 'dashed 3px #4599ff')
  }

})
$("a, button, input, [tabIndex='0'], #one, .closeRadio, .card-link").on('focusout', function() {
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

$(".faq a").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).find('.whiteBox').css('outline', 'dashed 3px #4599ff')
  }

})
$(".faq a").on('focusout', function() {
  $(this).find('.whiteBox').css('outline', 'none')
})


$(".sideBlock a").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).find('.caret-down').css('outline', 'dashed 3px #4599ff')
  }

})
$(".sideBlock a").on('focusout', function() {
  $(this).find('.caret-down').css('outline', 'none')
})




//active state for list items


var links = window.location.href

$('.sideBlock a').each(function() {
  if (this.href === links) {
    $(this).closest('li').addClass('active');
  }
  // else {
  //   $(this).closest('li').removeClass('active');
  // }

  if ($('li.active').parent().parent().hasClass('panel-body')){
    $('li.active').closest('.panel-collapse').addClass('show')
    $('li.active').closest('.sideBlock').addClass('darkerBackground')

    $('li.active').closest('.sideBlock').find('.caret-down').css({
      transform: "rotate(180deg)"
    });

    $('li.active').closest('.sideBlock').find('.panel-body').addClass('ten')

  }


});

var topLink = window.location.href

$('.top').each(function() {
  if (this.href === topLink) {

    $(this).closest('li').addClass('activated');
    $('.activated').find('.panel-collapse').addClass('show')
    $('.activated').addClass('darkerBackground')
    $(this).addClass('opened')

    $('.activated').find('.caret-down').css({
      transform: "rotate(180deg)"
    });
  }
  else {

    $(this).closest('li').removeClass('activated');
  }



});



//rotate caret

$('.collapse').on('show.bs.collapse', function () {

  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(180deg)"
  });

});
$('.collapse').on('hide.bs.collapse', function () {

  $('a[href="#' + this.id + '"] .caret-down').css({
    transform: "rotate(0deg)"
  });

});




$('.sideBlock.panel a').on('click', function(e) {

  $(this).toggleClass('flipThis')

  if ($(this).hasClass('flipThis')) {

    $(this).closest('li').find(".active").css('background', 'transparent')
    $(this).closest('li').find('.top').removeClass('opened')
    // $(this).closest('li').find(".active").addClass('blueAdded')

    $(this).closest('li').find('.panel-body').addClass('ten')

  }

  if (!$(this).hasClass('flipThis')) {
    $(this).closest('li').find('.panel-body').removeClass('ten')

    $(this).closest('li').find(".active").stop().delay(400).queue(function () {
      $(this).css('background' , '#09579A')

    })
    $(this).closest('.darkerBackground').find(".top").stop().delay(400).queue(function () {
      $(this).addClass('opened')

    })

  }


})




//back to top

// 
// $('.back-to-top').click(() => {
//   scrollfn("#overview");
// })

$('.back-to-top').on('click', function() {
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


if ($(document).innerWidth() > 1250 ) {

  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - .02*$(document).height()) {

      $('.side-menu-container').css({
        'top' : '-4%'
      })
    }
    else {

      $('.side-menu-container').css({
        'top' : '10.25rem'
      })

    }

  });

}


if ($(document).innerWidth() > 1024 && $(document).innerWidth() < 1250 ) {

  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - .05*$(document).height()) {

      $('.side-menu-container').css({
        'top' : '-40%'
      })
    }
    else {

      $('.side-menu-container').css({
        'top' : '10.25rem'
      })

    }

  });

}

if ($(document).innerWidth() < 1025 ) {


  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

      $('.side-menu-container').css({
        'top' : '10.25rem'
      })
    }
    else {

      $('.side-menu-container').css({
        'top' : '10.25rem'
      })

    }

  });


}



if ($(document).innerWidth() < 992 ) {

  $('.hoverEffect').closest('body').find('header').addClass('EEO1')

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

var contactChildren = $("#slideOut .modal-header [tabIndex], #slideOut .modal-body [tabIndex], #slideOut").each(function() {
  $(this).attr('tabindex', '-1')
})


var contactTabs = $("#slideOut a").each(function() {
  $(this).attr('tabindex', '-1')

})



var open = function() {

  $('.contactUsOverlay').show();
  $(contactChildren, contactTabs).attr('tabindex', '1')


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

    $(contactChildren, contactTabs).attr('tabindex', '-1')
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
  $(contactChildren, contactTabs).attr('tabindex', '-1')
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


  $(".survey-container .form-check").on("keyup", function (e) {

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

  //smooth scroll Topics

  $(".scrollIt").on("click", function(event) {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
        &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex','-1');
              $target.focus();
            }
          });
        }
      }
    });

    //hover effects for EEO1




    var allStickyRels = $("figure.effect-lily");

    var firstChild = $("figure.effect-lily").first().addClass('activeState')

    $(allStickyRels).attr("tabIndex", "0")

    var closeAllStickyRels = function(){
      for( i=0; i<allStickyRels.length; i++ ){
        $(allStickyRels[i]).removeClass("activeState");
      }
    }

    $("figure.effect-lily").mouseenter(function(){
      if($(this).hasClass('activeState')) {
        /* already open */
      } else {
        closeAllStickyRels();
        $(this).addClass("activeState");
      };
    });
    $("figure.effect-lily").focus(function(){
      if($(this).hasClass('activeState')) {
        /* already open */
      } else {
        closeAllStickyRels();
        $(this).addClass("activeState");
      };
    });

    $('.hoverEffect').mouseleave(function() {
      var firstChild = $("figure.effect-lily").first().addClass('activeState')
      $('figure.effect-lily').not(firstChild).removeClass("activeState");
    })

//eye toggle



function show() {
  var p = $('#AccessCode');
  p.attr('type', 'text');
}

function hide() {
  var p = $('#AccessCode');
  p.attr('type', 'password');
}


var pwShown = 0;

var togglepwd = function() {

  if (pwShown == 0) {
    pwShown = 1;
    show();

    $("#eye").replaceWith('<i id="eye" class="fas fa-eye-slash" aria-hidden="true"></i>');




  } else {
    pwShown = 0;
    hide();

    $("#eye").replaceWith('<i id="eye" class="far fa-eye" aria-hidden="true"></i>');

  }

}

$('#togglepwd, .togglePassword').keypress(
  togglepwd

).click(
  togglepwd
);





var expand1 = function() {

	 $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $('.expandAll1 .collapse').collapse('toggle');


if ( $(this).html() == 'Collapse All') {
	$('.changeIcon').replaceWith('<i class="far fa-compress-arrows-alt darkBlue changeIcon"></i>')


}

if ( $(this).html() == 'Expand All') {
	$('.changeIcon').replaceWith('<i class="fal fa-expand-alt darkBlue changeIcon"></i>')
}

}

$('#toggleAccordion').keypress(
	expand1

).click(
	expand1
);


var expand2 = function() {

	 $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $('.expandAll2 .collapse').collapse('toggle');


if ( $(this).html() == 'Collapse All') {
	$('.changeIcon2').replaceWith('<i class="far fa-compress-arrows-alt darkBlue changeIcon2"></i>')


}

if ( $(this).html() == 'Expand All') {
	$('.changeIcon2').replaceWith('<i class="fal fa-expand-alt darkBlue changeIcon2"></i>')
}

}

$('#toggleAccordion2').keypress(
	expand2

).click(
	expand2
);



var expand3 = function() {

	 $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $('.expandAll3 .collapse').collapse('toggle');


if ( $(this).html() == 'Collapse All') {
	$('.changeIcon3').replaceWith('<i class="far fa-compress-arrows-alt darkBlue changeIcon3"></i>')


}

if ( $(this).html() == 'Expand All') {
	$('.changeIcon3').replaceWith('<i class="fal fa-expand-alt darkBlue changeIcon3"></i>')
}

}

$('#toggleAccordion3').keypress(
	expand3

).click(
	expand3
);


var expand4 = function() {

	 $(this).html() == "Collapse All" ? $(this).html('Expand All') : $(this).html('Collapse All');
    $('.expandAll4 .collapse').collapse('toggle');


if ( $(this).html() == 'Collapse All') {
	$('.changeIcon4').replaceWith('<i class="far fa-compress-arrows-alt darkBlue changeIcon4"></i>')


}

if ( $(this).html() == 'Expand All') {
	$('.changeIcon3').replaceWith('<i class="fal fa-expand-alt darkBlue changeIcon4"></i>')
}

}

$('#toggleAccordion4').keypress(
	expand4

).click(
	expand4
);



$('.square input:checkbox').keypress(function (e) {
	e.preventDefault();
	if ((e.keyCode ? e.keyCode : e.which) == 13) {
		$(this).trigger('click');
	}

});


$('.form-check-input').on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {

		$(this).parent().find('label').addClass('activate')
	}

})

$('.form-check-input').on('focusout', function() {
	$(this).parent().find('label').removeClass('activate')
})





//sort



$('.sortCity').on('click', function() {
	if (!$('.sortCity').hasClass('ascending')) {

		var ascendOrderedDivs2 = $('.barWrapper').sort(function(a, b) {
			return $(a).find(".city").text() > $(b).find(".city").text() ? 1 : -1;
		});


		$(".renderRecords").html(ascendOrderedDivs2);
		setTimeout(function() {
			$('.sortCity').addClass('ascending')
		}, 600)

		$('.title i').each(function() {
			$('.title i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-up"></i>')
	}

	if ($('.sortCity').hasClass('ascending')) {


		var descendOrderedDivs2 = $('.barWrapper').sort(function(a, b) {
			return $(a).find(".city").text() > $(b).find(".city").text() ? -1 : 1;
		});


		$(".renderRecords").html(descendOrderedDivs2);
		setTimeout(function() {
			$('.sortCity').removeClass('ascending')
		}, 600)

		$('.title i').each(function() {
			$('.title i').replaceWith('<i class="far fa-sort"></i>')
		})

		$(this).find('i').replaceWith('<i class="fad fa-sort-down"></i>')

	}

});

$('.sortState').on('click', function() {
	if (!$('.sortState').hasClass('ascending')) {

		var ascendOrderedDivs2 = $('.barWrapper').sort(function(a, b) {
			return $(a).find(".state").text() > $(b).find(".state").text() ? 1 : -1;
		});


		$(".renderRecords").html(ascendOrderedDivs2);
		setTimeout(function() {
			$('.sortState').addClass('ascending')
		}, 600)

		$('.title i').each(function() {
			$('.title i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-up"></i>')
	}

	if ($('.sortState').hasClass('ascending')) {

		var descendOrderedDivs2 = $('.barWrapper').sort(function(a, b) {
			return $(a).find(".state").text() > $(b).find(".state").text() ? -1 : 1;
		});


		$(".renderRecords").html(descendOrderedDivs2);
		setTimeout(function() {
			$('.sortState').removeClass('ascending')
		}, 600)

		$('.title i').each(function() {
			$('.title i').replaceWith('<i class="far fa-sort"></i>')
		})

		$(this).find('i').replaceWith('<i class="fad fa-sort-down"></i>')

	}

});


$('.sortId').on('click', function() {

	if (!$('.sortId').hasClass('ascending')) {
		var ascendOrderedDivs4 = $('.barWrapper').sort(function(a, b) {
			return $(a).find(".id").text().toString().localeCompare($(b).find(".id").text().toString(), undefined, {
				numeric: true,
				sensitivity: 'base'
			});
		});


		$(".renderRecords").html(ascendOrderedDivs4);
		setTimeout(function() {
			$('.sortId').addClass('ascending')
		}, 400)

		$('.title i').each(function() {
			$('.title i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-up"></i>')
	}
	if ($('.sortId').hasClass('ascending')) {
		var descendOrderedDivs4 = $('.barWrapper').sort(function(a, b) {
			return $(b).find(".id").text().toString().localeCompare($(a).find(".id").text().toString(), undefined, {
				numeric: true,
				sensitivity: 'base'
			});
		});


		$(".renderRecords").html(descendOrderedDivs4);
		setTimeout(function() {
			$('.sortId').removeClass('ascending')
		}, 400)

		$('.title i').each(function() {
			$('.title i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-down"></i>')
	}
});


$('.sortName').on('click', function() {

	if (!$('.sortName').hasClass('ascending')) {

		var ascendOrderedDivs5 = $('.barWrapper').sort(function(a, b) {
			return $(a).find(".name").text() > $(b).find(".name").text() ? 1 : -1;
		});


		$(".renderRecords").html(ascendOrderedDivs5);
		setTimeout(function() {
			$('.sortName').addClass('ascending')
		}, 600)

		$('.title i').each(function() {
			$('.title i').replaceWith('<i class="far fa-sort"></i>')
		})

		$(this).find('i').replaceWith('<i class="fad fa-sort-up"></i>')

	}

	if ($('.sortName').hasClass('ascending')) {

		var descendOrderedDivs5 = $('.barWrapper').sort(function(a, b) {
			return $(a).find(".name").text() > $(b).find(".name").text() ? -1 : 1;
		});

		$(".renderRecords").html(descendOrderedDivs5);
		setTimeout(function() {
			$('.sortName').removeClass('ascending')
		}, 600)

		$('.title  i').each(function() {
			$('.title  i').replaceWith('<i class="far fa-sort"></i>')
		})

		$(this).find('i').replaceWith('<i class="fad fa-sort-down"></i>')

	}

});



$('.sortYear').on('click', function() {

	if (!$('.sortYear').hasClass('ascending')) {

		var ascendOrderedDivs10 = $('.barWrapper').sort(function(a, b) {

			return parseFloat($(a).find('.year').text()) > parseFloat($(b).find('.year').text()) ? 1 : -1;

		});

		$(".renderRecords").html(ascendOrderedDivs10);
		setTimeout(function() {
			$('.sortYear').addClass('ascending')
		}, 400)

		$('.title i').each(function() {
			$('.title  i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-up"></i>')
	}

	if ($('.sortYear').hasClass('ascending')) {

		var descendOrderedDivs10 = $('.barWrapper').sort(function(a, b) {

			return parseFloat($(a).find('.year').text()) > parseFloat($(b).find('.year').text()) ? -1 : 1;

		});
		$(".renderRecords").html(descendOrderedDivs10);
		setTimeout(function() {
			$('.sortYear').removeClass('ascending')
		}, 500)

		$('.title i').each(function() {
			$('.title  i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-down"></i>')
	}
});

$('.sortZip').on('click', function() {

	if (!$('.sortZip').hasClass('ascending')) {

		var ascendOrderedDivs10 = $('.barWrapper').sort(function(a, b) {

			return parseFloat($(a).find('.zip').text()) > parseFloat($(b).find('.zip').text()) ? 1 : -1;

		});

		$(".renderRecords").html(ascendOrderedDivs10);
		setTimeout(function() {
			$('.sortZip').addClass('ascending')
		}, 400)

		$('.title i').each(function() {
			$('.title  i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-up"></i>')
	}

	if ($('.sortZip').hasClass('ascending')) {

		var descendOrderedDivs10 = $('.barWrapper').sort(function(a, b) {

			return parseFloat($(a).find('.zip').text()) > parseFloat($(b).find('.zip').text()) ? -1 : 1;

		});
		$(".renderRecords").html(descendOrderedDivs10);
		setTimeout(function() {
			$('.sortZip').removeClass('ascending')
		}, 500)

		$('.title i').each(function() {
			$('.title  i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-down"></i>')
	}
});

$('.sortStatus').on('click', function() {

	if (!$('.sortStatus').hasClass('ascending')) {

		var ascendOrderedDivs5 = $('.barWrapper').sort(function(a, b) {
			return $(a).find(".status").text() > $(b).find(".status").text() ? 1 : -1;
		});


		$(".renderRecords").html(ascendOrderedDivs5);
		setTimeout(function() {
			$('.sortStatus').addClass('ascending')
		}, 600)

		$('.title i').each(function() {
			$('.title i').replaceWith('<i class="far fa-sort"></i>')
		})

		$(this).find('i').replaceWith('<i class="fad fa-sort-up"></i>')

	}

	if ($('.sortStatus').hasClass('ascending')) {

		var descendOrderedDivs5 = $('.barWrapper').sort(function(a, b) {
			return $(a).find(".status").text() > $(b).find(".status").text() ? -1 : 1;
		});

		$(".renderRecords").html(descendOrderedDivs5);
		setTimeout(function() {
			$('.sortStatus').removeClass('ascending')
		}, 600)

		$('.title  i').each(function() {
			$('.title  i').replaceWith('<i class="far fa-sort"></i>')
		})

		$(this).find('i').replaceWith('<i class="fad fa-sort-down"></i>')

	}

});


$('.sortEmployees').on('click', function() {

	if (!$('.sortEmployees').hasClass('ascending')) {

		var ascendOrderedDivs10 = $('.barWrapper').sort(function(a, b) {

			return parseFloat($(a).find('.employees').text()) > parseFloat($(b).find('.employees').text()) ? 1 : -1;

		});

		$(".renderRecords").html(ascendOrderedDivs10);
		setTimeout(function() {
			$('.sortEmployees').addClass('ascending')
		}, 400)

		$('.title i').each(function() {
			$('.title  i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-up"></i>')
	}

	if ($('.sortEmployees').hasClass('ascending')) {

		var descendOrderedDivs10 = $('.barWrapper').sort(function(a, b) {

			return parseFloat($(a).find('.employees').text()) > parseFloat($(b).find('.employees').text()) ? -1 : 1;

		});
		$(".renderRecords").html(descendOrderedDivs10);
		setTimeout(function() {
			$('.sortEmployees').removeClass('ascending')
		}, 500)

		$('.title i').each(function() {
			$('.title  i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-down"></i>')
	}
});



$('.sortLocations').on('click', function() {

	if (!$('.sortLocations').hasClass('ascending')) {

		var ascendOrderedDivs10 = $('.barWrapper').sort(function(a, b) {

			return parseFloat($(a).find('.locations').text()) > parseFloat($(b).find('.locations').text()) ? 1 : -1;

		});

		$(".renderRecords").html(ascendOrderedDivs10);
		setTimeout(function() {
			$('.sortLocations').addClass('ascending')
		}, 400)

		$('.title i').each(function() {
			$('.title  i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-up"></i>')
	}

	if ($('.sortLocations').hasClass('ascending')) {

		var descendOrderedDivs10 = $('.barWrapper').sort(function(a, b) {

			return parseFloat($(a).find('.locations').text()) > parseFloat($(b).find('.locations').text()) ? -1 : 1;

		});
		$(".renderRecords").html(descendOrderedDivs10);
		setTimeout(function() {
			$('.sortLocations').removeClass('ascending')
		}, 500)

		$('.title i').each(function() {
			$('.title  i').replaceWith('<i class="far fa-sort"></i>')
		})
		$(this).find('i').replaceWith('<i class="fad fa-sort-down"></i>')
	}
});
