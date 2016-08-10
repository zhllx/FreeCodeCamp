

$("#send").click(function() {
    var div = $("<div></div>");
    var value = $("#danmu").val();
    var that = div;
    that.html(value)
    that.addClass("move")
    $(".wallpaper").append(div)
    init(that)
    move(that)
})

$("#clear").click(function() {
    for (var i = 0; i < timers.length; i++) {
        clearInterval(timers[i])
    }
    $(".move").remove()
})
var timers = [];

function move(that) {
    var i = 0;
    var timer = setInterval(function() {
        that.css({
            right: (i += 1) + "px"
        });
        if ((that.offset().left + that.width()) < $(".wallpaper").offset().left) {
            that.remove()
            clearInterval(timer)
        }

    }, 10)
    timers.push(timer)

}

function init(that) {

    var r = Math.floor(Math.random() * 254);
    var g = Math.floor(Math.random() * 254);
    var b = Math.floor(Math.random() * 254);
    that.css({
        "color": "rgb(" + r + "," + g + "," + b + ")",
        top: Math.floor(Math.random() * $(".wallpaper").height()) + "px",
        right: -that.width(),
        width: that.width()
    })
    console.log(that.width())
}
