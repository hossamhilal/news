/*global $ */
$(document).ready(function ($) {
    'use strict';
    
     // SELECT PICKER
    $('select').niceSelect();
 
	$('.search-box .open').click(function (){
		$('.search-box').addClass('open-search');
	});

	$('.close-search').click(function () {
		$('.search-box').removeClass('open-search');
	});

    // START NEWS CAROUSEL 
    $('.home-carousel').owlCarousel({
        rtl:true,
		navSpeed:500,
		autoplay:true,
		loop:true,
		animateOut: 'slideOutRight',
		// animateIn: 'bounceIn',
		// animateOut: 'slideOutRight',
		// animateIn: 'slideInLeft',
		animateIn: 'fadeIn',
		// transitionStyle: "backSlide",
		// item:2,
		center: true,
        // margin:10,
        nav:true,
        navText: ["<i class='icofont icofont-rounded-right'></i>", "<i class='icofont icofont-rounded-left'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
				items:1,
				stagePadding: 120
            }
        }
    });
	
	$("ul#ticker01").liScroll();

	
	$(".show-results").click(function(){
		$(".voting-box").toggleClass('hide-voting');	
	});

	$(".hide-results").click(function () {
		$(".voting-box").removeClass('hide-voting');
	});
		
	
	$('.most-read-content .box').niceScroll();
	$('.most-read-content .box').niceScroll({
		cursorcolor: "rgb(219, 219, 219)", // change cursor color
		cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
		cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
		cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
		cursorheight: "30px",
		cursorborder: "1px solid rgb(219, 219, 219)", // css definition for cursor border
		cursorborderradius: "0px", // border radius in pixel for cursor
		/*background: "#ff9800"*/ // change css for rail background
	});

	// ===== Scroll to Top ==== 
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 500) {    // If page is scrolled more than 50px
			$('.scrol-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('.scrol-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('.scrol-top').click(function () {      // When arrow is clicked
		$('body,html').animate({
			scrollTop: 0                       // Scroll to top of body
		}, 1000);
	});

	
    
});
    
var fixd;
		function isGregLeapYear(year)
		{
		return year%4 == 0 && year%100 != 0 || year%400 == 0;
		}

		function gregToFixed(year, month, day)
		{
		var a = Math.floor((year - 1) / 4);
		var b = Math.floor((year - 1) / 100);
		var c = Math.floor((year - 1) / 400);
		var d = Math.floor((367 * month - 362) / 12);
		if (month <= 2)
		e = 0;
		else if (month > 2 && isGregLeapYear(year))
		e = -1;
		else
		e = -2;
		return 1 - 1 + 365 * (year - 1) + a - b + c + d + e + day;
		}
		function Hijri(year, month, day)
		{
		this.year = year;
		this.month = month;
		this.day = day;
		this.toFixed = hijriToFixed;
		this.toString = hijriToString;
		}
		function hijriToFixed()
		{
		return this.day + Math.ceil(29.5 * (this.month - 1)) + (this.year - 1) * 354 +
		Math.floor((3 + 11 * this.year) / 30) + 227015 - 1;
		}
		function hijriToString()
		{
		var months = new Array("محرم","صفر","ربيع أول","ربيع ثانى","جمادى أول","جمادى ثانى","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة");
		return this.day + " " + months[this.month - 1]+ " " + this.year;
		}
		function fixedToHijri(f)
		{
		var i=new Hijri(1100, 1, 1);
		i.year = Math.floor((30 * (f - 227015) + 10646) / 10631);
		var i2=new Hijri(i.year, 1, 1);
		var m = Math.ceil((f - 29 - i2.toFixed()) / 29.5) + 1;
		i.month = Math.min(m, 12);
		i2.year = i.year;
		i2.month = i.month;
		i2.day = 1;
		i.day = f - i2.toFixed() + 1;
		return i;
		}
		var tod=new Date();
		var weekday=new Array("الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت");
		var monthname=new Array("يناير","فبراير","مارس","إبريل","مايو","يونيو","يوليوز","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر");
		var y = tod.getFullYear();
		var m = tod.getMonth();
		var d = tod.getDate();
		var dow = tod.getDay();
		m++;
		fixd=gregToFixed(y, m, d);
		var h=new Hijri(1421, 11, 28);
		h = fixedToHijri(fixd);
document.getElementById('setdate').innerHTML = weekday[dow] + " " + d + " " + monthname[m] + " " + y;
 

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	// var s = today.getSeconds();
	m = checkTime(m);
	// s = checkTime(s);
	document.getElementById('clock').innerHTML = h + ":" + m ;
		// h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}
function checkTime(i) {
	if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
	return i;
}



// /**************  search  ******* */
// var s = $('input'),
// 	f = $('form'),
// 	a = $('.after'),
// 	m = $('h4');

// s.focus(function () {
// 	if (f.hasClass('open')) return;
// 	f.addClass('in');
// 	setTimeout(function () {
// 		f.addClass('open');
// 		f.removeClass('in');
// 	}, 1300);
// });

// a.on('click', function (e) {
// 	e.preventDefault();
// 	if (!f.hasClass('open')) return;
// 	s.val('');
// 	f.addClass('close');
// 	f.removeClass('open');
// 	setTimeout(function () {
// 		f.removeClass('close');
// 	}, 1300);
// })

// f.submit(function (e) {
// 	e.preventDefault();
// 	m.html('Thanks, high five!').addClass('show');
// 	f.addClass('explode');
// 	setTimeout(function () {
// 		s.val('');
// 		f.removeClass('explode');
// 		m.removeClass('show');
// 	}, 3000);
// })




