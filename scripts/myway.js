$(function() {
			$("li").click(function(e) {
			  e.preventDefault();
			  $("li").removeClass("selected");
			  $(this).addClass("selected");
			});
});
function replaceContents(obj, inp)
{
	inp = "src/" + inp + ".php";
	//alert(inp);
	$('article').load(inp);
	return false;
}
