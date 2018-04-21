(function() {
    var elem = $("a[href*=\\#]:not([href=\\#])"),
        body = $("html,body"),
        target;

    elem.on("click", scrolltoani);

    function scrolltoani() {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") ||
            location.hostname == this.hostname
        ) {
            target = $(this.hash);

            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                body.animate(
                    {
                        scrollTop: target.offset().top
                    },
                    450
                );
                return false;
            }
        }
    }
})();
