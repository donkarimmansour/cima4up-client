// $('body').on('click','#GoToTop',function(){
//     $('html,body').animate({scrollTop:0}, 300);
// });

// $('body').on('click', '.Dropdown', function(){
// 	$('.Dropdown').not(this).removeClass('active');
// 	$(this).toggleClass('active');
// });

// //mobile button toggle
// $('body').on('click','.OpenFilter',function(){
// 	var th = $('.FilterSidebar');
 
// 	if(th != undefined && th.hasClass('show')){

// 		$('body, html').animate({"scrollTop": ($('.FilterSidebar').offset().top - 120)},500);

// 		th.toggleClass('show');

// 		$('.SearchMobile').find('span').html('البحث المتخصص');

// 	}else if(th != undefined){

// 		$('.SearchMobile').find('span').html('أغلاق البحث المخصص');

// 		th.toggleClass('show');

// 		$('body, html').animate({"scrollTop": ($('.FilterSidebar').offset().top - 120)},500);

// 	}

// 	return false;

// });


// //mobile text toggle
// $('body').on('click','.SearchMobile',function(){

// 	var th = $('.FilterSidebar');

// 	if($(this).parent().hasClass('show')){

// 		$(this).parent().toggleClass('show');

// 		$('.SearchMobile').find('span').html('البحث المتخصص');

// 	}else{

// 		$(this).parent().toggleClass('show');

// 		$('.SearchMobile').find('span').html('أغلاق البحث المخصص');

// 		$('body, html').animate({"scrollTop": ($('.FilterSidebar').offset().top - 120)},500);

// 	}

// });


// // open select asaid
// // $('body').on('click', '.MainPage > .FilterSidebar > aside > h2', function(){
// // 	$(this).parent().toggleClass('active').siblings().removeClass('active');
// // });



// // // open select year Dropdown
// // $('body').on('click', '.ScrolledDropdown > li > a , .DropdownTitle > li > a', function(){


// // 		if( $(this).parent().data('fill') == 'all' ) {

// // 			Ttext = $(this).find('span').text();

// // 			if($(this).parent().hasClass('active')){			

// // 				$(this).parent().toggleClass('active');
// // 				$(this).parent().parent().parent().parent().parent().find('h2 > em').text("").css({"display":'none'})

// // 				$(this).find('i').attr("class","ion ion-ios-add");

// // 			}else{

// // 				$(this).parent().toggleClass('active');
// // 				$(this).parent().parent().parent().parent().parent().find('h2 > em').text(Ttext).css({"display":'block'})

// // 				$(this).find('i').attr("class","ion ion-md-remove");

// // 			}

// // 		}


// // 	return false; 

// // });



// // open select year Dropdown
// // $('body').on('click', '.FilterSidebar .Dropdown .DropdownList > li > a', function(){

// // 	$(this).parent().addClass('active');

// // 	$(this).parent().parent().parent().find('.DropdownTitle span').text($(this).text());

// // });

// // // open select year Dropdown one
// // $('body').on('click', '.Dropdown.YearFrom .DropdownList > li > a', function(){
// //         $(this).parent().parent().parent().find('.DropdownTitle span').text('من : '+$(this).text());

// //  });

// // // open select year Dropdown one
// // $('body').on('click', '.Dropdown.YearTo .DropdownList > li > a', function(){
// // 		$(this).parent().parent().parent().find('.DropdownTitle span').text('إلي : '+$(this).text());
// // });



// var FixedStaff = function(){

// 	if( $(window).scrollTop() >= 50 ) {

// 		$('header').addClass('fixed');

// 	}

// 	if( $(window).scrollTop() == 0 ) {

// 		$('header').removeClass('fixed');

// 	}
	

// 	if( $(window).scrollTop() >= 5 ) {

// 		$('.StikyBottom').addClass('stickIT');

// 	}

// 	if( $(window).scrollTop() == 0 ) {

// 		$('.StikyBottom').removeClass('stickIT');

// 	}


// 	if( $(window).scrollTop() > 300 ){

// 		$('#GoToTop').addClass('ShowTop');

// 	}

// 	if( $(window).scrollTop() == 0 ){

// 		$('#GoToTop').removeClass('ShowTop');

// 	}

// };



// $(window).on('scroll', FixedStaff);

// 	if( $('.MiniSliders').length > 0 ) {
 
// 		$('.MiniSliders').each(function(els, el){

// 			if( !$(el).hasClass('owl-loaded') ) {

// 				$(el).owlCarousel({

// 			    autoplay:true,

// 			    autoplayTimeout:3000,

// 			    autoplayHoverPause:true,

// 	        autoWidth: true,

// 	        stopOnHover: true,

// 	        margin:10,

// 	        mouseDrag: false,

// 	        singleItem: true,

// 	        loop: true,

// 	        rtl: true,

// 	        nav:true,

// 	        addClassActive: true,

// 					navText : ["<a class='Slides-prev'><i class='ion ion-ios-arrow-back'></i></a>","<a class='Slides-next'><i class='ion ion-ios-arrow-forward'></i></a>"],

// 				});

// 			}

// 		});

// 	}



// 		if( $('.InnserCarusel').length > 0 ) {

// 				$('.InnserCarusel').each(function(els, el){
		
// 					if( !$(el).hasClass('owl-loaded') ) {
		
// 						$(el).owlCarousel({
		
// 							stopOnHover: true,
		
// 							smartSpeed: 200,
		
// 							nav:true,
		
// 							//items: 5,
		
// 							mouseDrag: false,
		
// 							slideBy:1,
		
// 							loop: true,
		
// 							rtl: true,
		
// 							navText : ["<a class='Slides-prev'><i class='ion ion-ios-arrow-back'></i></a>","<a class='Slides-next'><i class='ion ion-ios-arrow-forward'></i></a>"],
		
// 							responsive : {
		
// 								320 : {
		
// 									items:1,
		
// 								},
		
// 								500 : {
		
// 									items:2,
		
// 								},
		
// 								970 : {
		
// 									items:3,
		
// 								},
		
// 								1000 : {
		
// 									items:4,
		
// 								},
		
// 								1200 : {
		
// 									items:5,
		
// 								},
		
// 							}
		
// 						});
		
		
		
// 					}
		
// 				});
		
// 			}
		


// 		let RAlert = '<div id="error-box" class="NewAlert">';

// 		RAlert += '<i class="ion ion-md-close" onclick="$(this).parent().remove();"></i>';

// 		RAlert += '<div class="face2">';

// 		RAlert += '<div class="eye"></div>';

// 		RAlert += '<div class="eye right"></div>';

// 		RAlert += '<div class="mouth sad"></div>';

// 		RAlert += '</div>';

// 		RAlert += '<div class="shadow move"></div>';

// 		RAlert += '<div class="message"><h1 class="alert">يجب عليك <a href="/community/join/">تسجيل الدخول</a> فى سيما فور أب .. او <a href="/community/signup/">سجّل عضويتك</a> الآن مجاناََ</h1></div>';

// 		RAlert += '</div>';

// 		$('body').append(RAlert);