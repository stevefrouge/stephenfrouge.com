$(document).ready(function(){



	"use strict";
	
	/* =================================
	SUPERSLIDES
	=================================== */
	$('#slides').superslides({
		animation: 'fade',
		pagination: false,
		play: 5000
	});
	
	
	/* =================================
	WOW ANIMATION 
	=================================== */
	var wow = new WOW({
	boxClass:     'wow',      // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset:       50,          // distance to the element when triggering the animation (default is 0)
	mobile:       false        // trigger animations on mobile devices (true is default)
	});
	wow.init();
	
	
	/* =================================
	VERTICLE TEXT 
	=================================== */
	var current = 1; 
	var height = $('.roles').height(); 
	var numberDivs = $('.roles').children().length; 
	var first = $('.roles div:nth-child(1)'); 
	setInterval(function() {
		var number = current * -height;
		first.css('margin-top', number + 'px');
		if (current === numberDivs) {
			first.css('margin-top', '0px');
			current = 1;
		} else current++;
	}, 2000);
	
	
	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();
	  //alert(batas);
	  
	  if (top > batas) {
		jQuery('.main-menu').addClass('tiny');
		jQuery('.main-menu').css('opacity','1');
	  } else {
	   jQuery('.main-menu').removeClass('tiny'); 
	  }
	});
	
	
	/* =================================
	SKILL SECTION
	=================================== */
	$('.dial').each(function () { 
    
		var elm = $(this);
		var color = elm.attr("data-fgColor");  
		var perc = elm.attr("value");  

		elm.knob({ 
		   'value': 0, 
			'min':0,
			'max':100,
			'skin':'tron',
			'readOnly':true,
			'thickness':.1,
			'dynamicDraw': true,
			'displayInput':false
		});

		$({value: 0}).animate({ value: perc }, {
		  duration: 1000,
		  easing: 'swing',
		  progress: function () {                  elm.val(Math.ceil(this.value)).trigger('change')
		  }
		});

		//circular progress bar color
		$(this).append(function() {
		  // elm.parent().parent().find('.circular-bar-content').css('color',color);
		  elm.parent().parent().find('.circular-label-content label').text(perc+'%');
		});

	});
	
	
	/* =================================
	BACK TO TOP SECTION
	=================================== */
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	
	/* =================================
	TIMELINE
	=================================== */
	$(".timeline .item").eq(0).addClass("open");
		
	$(".timeline").children().eq(0)
		.find(".text-detail").slideDown()
		.addClass("open");

	$(".timeline").on("click",".item", function(){
		//ini = $(this);
		//console.log('klik', ini);
		$(this).find(".text-detail").slideDown();
		$(this).addClass("open");
		$(this).siblings('.item.open').find(".text-detail").slideUp();
		$(this).siblings('.item').removeClass("open");
	});
	
	
	$(".publications .item").eq(0).addClass("open");
		
	$(".publications").children().eq(0)
		.find(".text-detail").slideDown()
		.addClass("open");

	$(".publications").on("click",".item", function(){
		//ini = $(this);
		//console.log('klik', ini);
		$(this).find(".text-detail").slideDown();
		$(this).addClass("open");
		$(this).siblings('.item.open').find(".text-detail").slideUp();
		$(this).siblings('.item').removeClass("open");
	});
	
	
	
	/* =================================
	WAYPOINT
	=================================== */
	var mc = $('#subnav'),
	slide = $('.section'),
	button = $('.navbar-nav li'),
	mywindow = $(window),
    htmlbody = $('html,body');
	
	 
	/*slide.waypoint(function (event, direction) {

        var dataslide = $(this).attr('data-slide');
		
        if (direction === 'down') {
            $('.navbar-nav li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
		
        else {
             $('.navbar-nav li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });*/
	
	mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });
	
	button.click(function (e) {
        dataslide = $(this).attr('data-slide');
		if (typeof dataslide !== typeof undefined && dataslide !== false) {
			window.location.hash = $(this).attr('rel');
			e.preventDefault();
			goToByScroll(dataslide);
		}
    });
	$('.navbar-brand').click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
    });
	
	
	function goToByScroll(mc) {
		htmlbody = $('html,body');
		
		htmlbody.animate({
			scrollTop: $('.section[data-slide="' + mc + '"]').offset().top
		}, 1000);
	}
	
	
	
	/* map */
	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map
		var controlUIzoomIn= document.getElementById('cd-zoom-in'),
			controlUIzoomOut= document.getElementById('cd-zoom-out');
		controlDiv.appendChild(controlUIzoomIn);
		controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
			map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
			map.setZoom(map.getZoom()-1)
		});
	}

  if ($('#maps').length) {
	//set your google maps parameters
	var myLat = $('#maps').data('lat'),
	myLng = $('#maps').data('lng');

	
	var latitude = myLat,
		longitude = myLng,
		map_zoom = 14;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var marker_url = ( is_internetExplorer11 ) ? 'images/cd-icon-location.png' : 'images/cd-icon-location.svg';

	//define the basic color of your map, plus a value for saturation and brightness
	var main_color = '#000000',
		saturation_value= -80,
		brightness_value= 5;

	//we define here the style of the map
	var style= [
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},
		{ //poi stands for point of interest - don't show these lables on the map
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
			featureType: 'road.highway',
			elementType: 'labels',
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show local road lables on the map
			featureType: "road.local",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show arterial road lables on the map
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		},
		//style different elements on the map
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]

		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		}
	];

	//set google map options
	var map_options = {
		center: new google.maps.LatLng(latitude, longitude),
		zoom: map_zoom,
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		styles: style,
	}
	//inizialize the map
	var map = new google.maps.Map(document.getElementById('maps'), map_options);
	//add a custom marker to the map
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		map: map,
		visible: true,
		icon: marker_url,
	});

	var zoomControlDiv = document.createElement('div');
	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

	//insert the zoom div on the top left of the map
	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
  }
	
	
	
	
});