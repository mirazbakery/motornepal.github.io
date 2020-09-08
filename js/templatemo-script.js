/**
 *	www.templatemo.com
 */

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function(){

	// Mobile menu
	$('.mobile-menu-icon').click(function(){
		$('.templatemo-nav').slideToggle();
	});

	$( window ).resize(function() {
		if($( window ).width() > 767) {
			$('.templatemo-nav').show();
		} else {
			$('.templatemo-nav').hide();
		}
	});

  // http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
  $('body').bind('touchstart', function() {});

});
function press1()
{
	document.getElementById('main').style.display='inline-block';
	document.getElementById('main1').style.display='none';
	document.getElementById('main2').style.display='none';
	document.getElementById('main3').style.display='none';
	document.getElementById('main4').style.display='none';
	document.getElementById('main5').style.display='none';
	document.getElementById('main6').style.display='none';
}
function press()
{
	document.getElementById('main1').style.display='inline-block';
	document.getElementById('main').style.display='none';
	document.getElementById('main2').style.display='none';
	document.getElementById('main3').style.display='none';
	document.getElementById('main4').style.display='none';
	document.getElementById('main5').style.display='none';
	document.getElementById('main6').style.display='none';
}
function press2()
{
	document.getElementById('main2').style.display='inline-block';
	document.getElementById('main1').style.display='none';
	document.getElementById('main').style.display='none';
	document.getElementById('main3').style.display='none';
	document.getElementById('main4').style.display='none';
	document.getElementById('main5').style.display='none';
	document.getElementById('main6').style.display='none';	
}
function press3()
{
		document.getElementById('main3').style.display='inline-block';
	document.getElementById('main1').style.display='none';
	document.getElementById('main2').style.display='none';
	document.getElementById('main').style.display='none';
	document.getElementById('main4').style.display='none';
	document.getElementById('main5').style.display='none';
	document.getElementById('main6').style.display='none';	
}
function press4()
{
			document.getElementById('main4').style.display='inline-block';
	document.getElementById('main3').style.display='none';
	document.getElementById('main2').style.display='none';
	document.getElementById('main1').style.display='none';
	document.getElementById('main').style.display='none';
	document.getElementById('main5').style.display='none';
	document.getElementById('main6').style.display='none';	
}
function press5()
{
			document.getElementById('main5').style.display='inline-block';
	document.getElementById('main4').style.display='none';
	document.getElementById('main3').style.display='none';
	document.getElementById('main2').style.display='none';
	document.getElementById('main1').style.display='none';
	document.getElementById('main').style.display='none';
	document.getElementById('main6').style.display='none';	
}
function press6()
{
			document.getElementById('main6').style.display='inline-block';
	document.getElementById('main5').style.display='none';
	document.getElementById('main4').style.display='none';
	document.getElementById('main3').style.display='none';
	document.getElementById('main2').style.display='none';
	document.getElementById('main1').style.display='none';
	document.getElementById('main').style.display='none';	
}