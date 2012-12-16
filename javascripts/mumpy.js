google.load("visualization", "1", {packages:["corechart"]});

var gd_jsonp_url = "https://spreadsheets.google.com/feeds/list/0AurZRRemURREdF8zMWsxMHpIRVNMQ0EwREJjcnpXQVE/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK";
var gs_edit_url = "https://docs.google.com/spreadsheet/viewform?formkey=dF8zMWsxMHpIRVNMQ0EwREJjcnpXQVE6MQ&";
var sp_keys = [
    "whatisprimaryreasonyouwanttoattend", 
    "daypreference", "locationpreference"
].join(",");

function update_preference(key, collector, user) {
    if (user[key]) {
        var parts = user[key].split(",");
        for (var i in parts) {
            var k = $.trim(parts[i]);
            if (!collector[k]) 
                collector[k] = 0;
            collector[k] += 1;
        }
    }
}

function display_chart(where, data, key) {
    var dl = [];
    for (k in data) {
        dl.push([k, data[k]]);
    }
    dl.unshift([key, "How Many?"]);
    var chartd = google.visualization.arrayToDataTable(dl);
    var chart = new google.visualization.PieChart(
        document.getElementById(where)
    );
    chart.draw(chartd, {
        "backgroundColor": "#fafafa"
    });
}

function MumPyGD($scope, $http) {
    
    $scope.refresh = function() {
        $scope.gd = [{"name": "Loading ..."}];
        $scope.kws = [];
        $scope.kls = [];
        
        $http.jsonp(gd_jsonp_url).success(function(data){
            var gd = [];
            var users = {};
            for (i = 0; i < data.feed.entry.length; i++) {
                var row = data.feed.entry[i];
                var obj = {};
                var edit_parts = [];
                for (j in row) {
                    if (j.substr(0, 4) == "gsx$") {
                        var key = j.substring(4);
                        var value = $.trim(row[j]["$t"]); 
                        obj[key] = value;
                        if (key != "timestamp") {
                            if (sp_keys.indexOf(key) != -1) {
                                value = $.map(value.split(","), function(v){
                                    return encodeURIComponent($.trim(v));
                                }).join("|")
                            } else {
                                value = encodeURIComponent(value)
                            }
                            edit_parts.push(
                                "entry_" + edit_parts.length + 
                                "=" + value
                            );
                        }
                    }
                }
                obj.edit_link = gs_edit_url + edit_parts.join("&");
                users[obj.username] = obj;
            }
            for(var username in users) gd.push(users[username]);
            gd.sort(function(one, two) {
                if (one.username > two.username) return 1;
                return -1;
            });
            
            var kws = {};
            var kls = {};
            var datep = {};
            var dayp = {};
            var locp = {};
            
            for (i in gd) {
                var user = gd[i];
                user.kws = user.keywordwork.split(",");
                for (j in user.kws) {
                    var kw = $.trim(user.kws[j]);
                    if (!kws[kw]) kws[kw] = {"kw": kw, "users": []}
                    kws[kw].users.push(user.username);
                }
                user.kls = user.keywordlearn.split(",");
                for (j in user.kls) {
                    var kw = $.trim(user.kls[j]);
                    if (!kls[kw]) kls[kw] = {"kw": kw, "users": []}
                    kls[kw].users.push(user.username);
                }
                update_preference("datepreference", datep, user);
                update_preference("daypreference", dayp, user);
                update_preference("locationpreference", locp, user);
            }
            
            var kwsl = [];
            for (var kw in kws) {
                if (kws[kw].kw != "" && kws[kw].users.length > 1) {
                    kwsl.push(kws[kw]);
                }
            }
            kwsl.sort(function(one, two){
                return one.users.length - two.users.length;
            });
            
            var klsl = [];
            for (var kw in kls) {
                if (kls[kw].kw != "" && kls[kw].users.length > 1) {
                    klsl.push(kls[kw]);
                }
            }
            klsl.sort(function(one, two){
                return one.users.length - two.users.length;
            });

            $scope.gd = gd;        
            $scope.kws = kwsl;
            $scope.kls = klsl;
            
            display_chart("chart_day", dayp, "Day");
            display_chart("chart_date", datep, "Date");
            display_chart("chart_loc", locp, "Location");
        });
    }
    
    google.setOnLoadCallback(function(){
        $scope.$apply($scope.refresh)
    });
    
    $("a.edit").live("click", function() {
        $.fancybox({
            "padding": 0,
            "href": $(this).attr("href"),
            "type": "iframe",
            "width": 800,
            "height": "80%",
            "title": "Edit", 
            "onClosed": function() { $scope.$apply($scope.refresh) }
        });
        return false;
    });
    
    $("a.add_self").fancybox({
        "padding": 0,
        "href": gs_edit_url,
        "type": "iframe",
        "width": 800,
        "height": "80%",
        "title": "Add Your Self",
        "onClosed": function() { $scope.$apply($scope.refresh) }
    });
}

