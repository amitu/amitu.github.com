$(function(){
	var quotes = [];
	var buffer = "";
	$($("div.entry-content").get(1)).children().each(function(idx, item){
		var tag = item.tagName;
		if (tag == "DIV") return;
		if (tag == "SCRIPT") return;
		if (item.tagName == "HR") {
			quotes.push(buffer);
			buffer = "";
		} else {
			buffer += $(item).clone().wrap("<p>").parent().html();
		}
	});
	if (buffer != "") quotes.push(buffer);
});
