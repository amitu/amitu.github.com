function get_quotes() {
	var quotes = [];
	var buffer = "";
	var $main = $($("div.entry-content").get(1));
	$main.children().each(function(idx, item){
		var tag = item.tagName;
		if (tag == "DIV") return;
		if (tag == "SCRIPT") return;
		if (tag == "INPUT") return;
		if (item.tagName == "HR") {
			quotes.push(buffer + "<hr>");
			buffer = "";
		} else {
			// buffer += $(item).clone().wrap("<p>").parent().html();
			buffer += item.outerHTML;
		}
		$(item).hide();
	});
	if (buffer != "") quotes.push(buffer);
	return quotes;
}

function QuotesList($scope) {
	$scope.quotes = get_quotes();	
	$("#QuotesList").show();
}

// {{ "{{ quote | html " }}}}<hr>
// {{ "{{ quotes.length " }}}} quotes