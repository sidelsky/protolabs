(function($) {
    var $this,
        animate = "animate",
        time = 200,
        $window = $(window),
        $elem = $("[data-in-viewport]"),
        itemQueue = [],
        delay = 300,
        queueTimer;

    function processItemQueue() {
        //$this = $(this);

        if (queueTimer) return;

        queueTimer = window.setInterval(function() {
            if (itemQueue.length) {
                $(itemQueue.shift()).animate(
                    {
                        opacity: 1
                    },
                    time,
                    function() {
                        $(this).addClass("animate");
                    }
                );
                processItemQueue();
            } else {
                window.clearInterval(queueTimer);
                queueTimer = null;
            }
        }, delay);
    }

    $elem.waypoint(
        function() {
            itemQueue.push(this.element);
            processItemQueue();
        },
        {
            offset: "100%"
        }
    );
})(jQuery);
