$(function(){
    var store = window.localStorage;
    if (!store.interrupt_shown) {
        store.interrupt_shown = true;
        $subscribe = $(".subscribe").show();
        console.log("here");
        $(document).one("scroll", function(){
            console.log("scroll");
            $subscribe.slideUp();
        });
    }
});
