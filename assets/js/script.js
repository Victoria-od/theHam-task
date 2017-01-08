$(document).ready(function(){
	/*slider1 start*/
	$('.my-slider').slick({
		'arrows': false, 
		'draggable': false,
		'autoplay': true, 
		'autoplaySpeed': 3000, 
		'slidesToShow': 1 
	});
	
	$(document).on('click', '.my-slider-prev', function(e){
		e.preventDefault();
		$('.my-slider').slick('slickPrev');
	});
	
	$(document).on('click', '.my-slider-next', function(e){
		e.preventDefault();
		$('.my-slider').slick('slickNext');
	});
/*slider1 end*/

/*skillbar start*/
	$('.skillbar').skillBars({
		from: 0,
		speed: 4000, 
		interval: 100,
		decimals: 0,
		classes:{
    		skillBarBar : '.skillbar-bar',
    		skillBarPercent : '.skill-bar-percent'
  		}
	});
/*skillbar end*/

/*isotope start*/
$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});
/*isotope end*/

/*tabs*/
	$(document).on('click', '.tabs-menu li', function(){
		$('.horizontal-tabs .active').removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('data-tab');
		//var tab = $(this).data('tab');
		$('.tab-content[data-tab='+ tab +']').addClass('active');
	});
	/*tabs end*/


/*spincrement start*/
  var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 1200
            });
 
            show = false;
        }
    });
/*spincrement end*/

/*slider big photos start*/
	$('.slider-people-say').slick({
		'arrows': false, 
		'draggable': true,
		'autoplay': false, 
		//'autoplaySpeed': 4000, 
		'asNavFor': '.slider',
		'slidesToShow':1 
	});

/*slider big photos end*/
/*slider small photos start*/
	$('.slider').slick({
		'arrows': false, 
		'centerMode':false,
		'draggable': true,
		'autoplay': true, 
		'autoplaySpeed': 4000,
		'asNavFor': '.slider-people-say', 
		'slidesToShow':4 
	});

/*swith start*/
$(document).on('click', '.prev', function(e){
		e.preventDefault();
		$('.slider').slick('slickPrev');
	});
	
	$(document).on('click', '.next', function(e){
		e.preventDefault();
		$('.slider').slick('slickNext');
	});
/*swith end*/

/*slider small photos  end*/
/*checking up of the form start*/
 function isStrEmpty(str){
        return (str.length == 0);
    }
    
    $(document).on('keyup', '.validate', function(e){
        
        if ( isStrEmpty( $(this).val() ) ){
            $(this).addClass('error');        
        } else {
            $(this).removeClass('error');
        }
        
    });
    
    $(document).on('click', '#submit-login', function(e){
        
        e.preventDefault();
        
        var user_name_input     = $('#user-name'), 
            user_email_input    = $('#user-email');
        
        var user_name        	= user_name_input.val().trim(), 
            user_email      	= user_email_input.val().trim(); 
        
        user_name_input.val(user_name);
        user_email_input.val(user_email);
        
        var validated = true;
        $('.error-msg').html('');
        
        if ( isStrEmpty(user_name) ){
            user_name_input.addClass('error');
            validated = false;
        } else {
            user_name_input.removeClass('error');
        }
        
        if ( isStrEmpty(user_email) ){
            user_email_input.addClass('error');
            validated = false;
        } else {
            user_email_input.removeClass('error');
        }
             
        if (validated){
            console.log('User Name: ' + user_name);
            console.log('User Email: ' + user_email);
            $(this).html('Your message has been sent');
        } else {
            $('.error-msg').html('<p style="color: #731414; font-weight: 400;">You have not completed all fields</p>');
        }
        
    });
   

/*checking up of the form end*/
});

$(window).load(function(){
	
	$('.masonry-content').masonry({
		'itemSelector': '.masonry', 
		'gutter': '.masonry-gutter',
		'columnWidth': '.masonry-sizer',
		'percentPosition': true
	});
	
});
