 $(document).ready(function(){
	 
	 $(function () {
        $('.customscrollbar').mCustomScrollbar({ axis: "y" });
     });
	 /*--- Start header ---*/
	 /* start navigation */	 
    //   $('.navbar-nav > li').click(function () {		
    //     $(this).toggleClass('active').siblings().removeClass('active'); 
    //     $(this).children('ul').slideDown();	
    //     $(this).siblings().children('ul').slideUp();
    //   });
        // $('.sub-dropdown').click(function () {		
        // $(this).toggleClass('active').siblings().removeClass('active'); 
        // $(this).children('ul').slideDown();	
        // $(this).siblings().children('ul').slideUp();
        // });

         $('.navbar-nav > li > a').click(function () {		
            $(this).parent().toggleClass('active').siblings().removeClass('active'); 
            $(this).next('ul').slideToggle();	
         });
         $('.sub-dropdown > a').click(function () {		
            $(this).toggleClass('active'); 
            $(this).next('ul').slideToggle();	
            $(this).siblings().children('ul').slideUp();
         });
      
	/* end navigation */
	/*--- Start menu toggle ---*/
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("on");
        $('.navigation').slideToggle();
    });
   /*--- End menu toggle ---*/
	
	/* start header right side option */
	$('.head-icon > a').click(function () {
        $('.head-userbox, .head-srchbox, .right-menu').addClass('open');
    });
	$('.head-userbox > i, .head-srchbox > a, .side-box-close-btn').click(function () {
        $('.head-userbox, .head-srchbox, .right-menu').removeClass('open');
    });
	/* end header right side option */
	
	/* start close div when click outside */
	$(document).click(function() {
	var navitem = $(".nav-item");
	var dropdown = $(".dropdown-menu");
    var container = $("#hideselcont");
	var clsuserbox = $(".head-userbtn");
	var clsrchbox = $(".head-srchbtn");
	var clsrmenubox = $(".head-rmbtn");
	if (!navitem.is(event.target) && !navitem.has(event.target).length) {
        $(".nav-item").removeClass('active');
		 $(".dropdown-menu").slideUp();
    }
    if (!container.is(event.target) && !container.has(event.target).length) {
        $(".cussel_cont").removeClass('arrow');
    }
	if (!clsuserbox.is(event.target) && !clsuserbox.has(event.target).length) {
        $(".head-userbox").removeClass('open');
    }
	if (!clsrchbox.is(event.target) && !clsrchbox.has(event.target).length) {
        $(".head-srchbox").removeClass('open');
    }
	if (!clsrmenubox.is(event.target) && !clsrmenubox.has(event.target).length) {
        $(".right-menu").removeClass('open');
    }
    });
	/* end close div when click outside */


/*--- End header ---*/
/* start custom select dropdown */
      $('.cussel_cont').click(function () {
          $(this).toggleClass('arrow');                
      });
/* end custom select dropdown */
	 /* tabs */
	 $('.tab-button > li').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parent().siblings().children().hide();
            $(this).parent().siblings().children().eq($(this).index()).show();          
        });
	/* End tabs */

	/* start owl carousel */
    $('.clients-logo').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        items: 3,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            768:{
                items:3
            }
           
        }
    })
    /* end owl carousel */

});

	/*--- Start panel ---*/
$('.panel-heading').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('.panel-body').slideUp();
    }
    else {
        $('.panel-heading').removeClass('active');
        $('.panel-body').slideUp();
        $(this).addClass('active');
        $(this).siblings('.panel-body').slideDown();
    }
});
/*--- End panel ---*/

 /* start two tab script */
      function openCity(evt, cityName) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          document.getElementById(cityName).style.display = "block";
          evt.currentTarget.className += " active";
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultCity").click();


        function openState(evt, stateName) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("statedesc");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          document.getElementById(stateName).style.display = "block";
          evt.currentTarget.className += " active";
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultState").click();
    /* end two tab script */

