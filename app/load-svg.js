/**
 * Get the SVG Sprite and load it into the document
 */
(function() {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "../svg/svg-sprite.svg", true);
    ajax.send();
    ajax.onload = function(e) {
        var div = document.createElement("div");
        div.innerHTML = ajax.responseText;
        document.body.insertBefore(div, document.body.childNodes[0]);
    };
})();
