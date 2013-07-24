/* 
    TODO:
        - use Parse' AnonymousUser instead of local storage
            : more reliable
            : less dependency
        - concat/minify js
*/ 

$(function(){
    Parse.initialize(
        "3zzX0d8FRvGgkEuhlC3URM6QsPzn4pDI64ew6IVU", // parse app id
        "bZfIWUsKZdGiQJh9ufqPmRGzPONPPBgmUxhRlncL"  // parse javascript key
    );

    var key = document.location.pathname;
    $("figure.kudoable").kudoable();

    var Kudos = Parse.Object.extend("Kudos");
    var query = new Parse.Query(Kudos);

    var kudo;

    query.equalTo("url", key);
    query.first({
        success: function (result) {
            kudo = result;
            if (kudo == null) 
            {
                kudo = new Kudos();
                kudo.set("url", key);
                kudo.set("score", 0);
                kudo.save();                
            }
            $(".num").html(kudo.get("score"));
        }, 
        error: function (error) {
            kudo = new Kudos();
            kudo.set("url", key);
            kudo.set("score", 0);
            kudo.save();
        }
    });

    if ($.jStorage.get(key))
    {
        $("figure.kudoable").removeClass("animate").addClass("complete");
    }

    $("figure.kudo").bind("kudo:added", function(e)
    {
        kudo.increment("score");
        $.jStorage.set(key, true);
        kudo.save(null, {success: function(k) {
            $(".num").html(k.get("score"));
        }});
    });

    $("figure.kudo").bind("kudo:removed", function(e)
    {
        kudo.increment("score", -1);
        $.jStorage.set(key, false);
        kudo.save(null, {success: function(k) {
            $(".num").html(k.get("score"));
        }});
    });

});
