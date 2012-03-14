/*
	 cozyfrank, Mar 14 2012
assig	:	mywaytshirts.in
 */
$(document).ready(function(){
								//alert("ok");
								/*$('.tabsdiv').css({opacity:0});
								$('.restofbodydiv').css({opacity:0});
								$('.tail').css({opacity:0});
								$('.tagline').css({opacity:0});
								$(window).mousemove(function(){	
												$('.tabsdiv').animate({opacity:1}, 3000);
												$('.tagline').animate({opacity:1}, 3000);
												$('.restofbodydiv').animate({opacity:1}, 2000);
												$('.tail').animate({opacity:1}, 500);
												});*/
								$(".tabitemdiv").hover(
												function(){
												$(this).addClass("tabitemdivhover");	
												var tabtext = $(this).text();
												$("div.restofbodydiv").find('p[name~="tabbanner"]').hide(1, function(){
																$(this).replaceWith("<p class=\"tabbanner\" name=\"tabbanner\"></p>"); 
																});
												$("div.restofbodydiv").find('div[name~="tabcontent"]').hide(1, function(){
																$(this).replaceWith("<p class=\"tabcontent\" name=\"tabcontent\"></p>"); 
																});
												$("div.restofbodydiv").find('p[name~="tabbanner"]').fadeOut(1, function(){
																if(tabtext == "galleRy")
																{
																$(this).replaceWith("<p class=\"tabbanner\" name=\"tabbanner\"></p><div class=\"tabcontent\" name=\"tabcontent\"></div>"); 
																}
																else if(tabtext == "aboUt uS")
																{
																$(this).replaceWith("<p class=\"tabbanner\" name=\"tabbanner\"></p> <div class=\"tabcontent\" name=\"tabcontent\">MyWay is an online T-shirt Retail brand based out of bangalore. MyWay does both Retail sales and Trades across the country. We are mainly into Customization of T-shirts. Striving to provide lifetime experience to the customers of MyWay, often we work beyond the boundaries ensuring both quality and efficiency. We are also coming up with a powerful platform for designers to prove their talent and also to update the design base of MyWay for utmost customer satisfaction. Watch this space for more.!</div>"); 
																}
																else if(tabtext == "contAct uS")
																{
																$(this).replaceWith("<p class=\"tabbanner\" name=\"tabbanner\"></p><div id=\"tabcontent\" class=\"tabcontent\" name=\"tabcontent\"></div>"); }
																$("#tabcontent").load("mailform.html");
																$("div.restofbodydiv").addClass("restofbodydiv2")
																});
												},
				function(){
								$(this).removeClass("tabitemdivhover");
								/*$("div.restofbodydiv").find('p[name~="tabbanner"]').hide(1250, function(){
																$(this).replaceWith("<p class=\"tabbanner\" name=\"tabbanner\"></p>"); 
																$("div.restofbodydiv").removeClass("restofbodydiv2")
																});
								$("div.restofbodydiv").find('div[name~="tabcontent"]').hide(1250, function(){
																$(this).replaceWith("<p class=\"tabcontent\" name=\"tabcontent\"></p>"); 
																$("div.restofbodydiv").removeClass("restofbodydiv2")
																});		*/						
				}
);
function reset(ref)
{
								$(ref).removeClass("tabitemdivhover");
								$("div.restofbodydiv").find('p[name~="tabbanner"]').hide(1250, function(){
																$(ref).replaceWith("<p class=\"tabbanner\" name=\"tabbanner\"></p>"); 
																$("div.restofbodydiv").removeClass("restofbodydiv2")
																});
								$("div.restofbodydiv").find('div[name~="tabcontent"]').hide(1250, function(){
																$(ref).replaceWith("<p class=\"tabcontent\" name=\"tabcontent\"></p>"); 
																$("div.restofbodydiv").removeClass("restofbodydiv2")
																});	
}
/*
$("li").hover(
								function () {
								var litext = $(this).text();
								$(this).addClass("hover");
								$("div.restofbodydiv").find('p[name~="tabbanner"]').fadeOut("slow", function(){
												if(litext == "Home"){
												$(this).replaceWith(
																" <p class=\"tabbanner\" name=\"tabbanner\">Home</p> sssss<p> sda</p> "); 
												}
												else if(litext == "Gallery")
												{
												$(this).replaceWith("<p class=\"tabbanner\" name=\"tabbanner\">Home</p>"); 
												}
												else if(litext == "About Us")
												{
												$(this).replaceWith("<p class=\"tabbanner\" name=\"tabbanner\">About Us</p>"); 
												}
												else if(litext == "Contact Us")
												{
												$(this).replaceWith("<p class=\"tabbanner\" name=\"tabbanner\">Contact Us</p>"); 
												}
												$("div.restofbodydiv").addClass("restofbodydiv2")
												});
								},
												 function () {
																 $(this).removeClass("hover");
																 $("div.restofbodydiv").find('p[name~="tabbanner"]').fadeIn("slow", function(){
																								 $(this).replaceWith("<p class=\"tabbanner\" name=\"tabbanner\"></p>"); 
																								 $("div.restofbodydiv").removeClass("restofbodydiv2")
																								 });
												 }
);*/
});
