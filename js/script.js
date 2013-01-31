$(function () {
    $('a[rel="colorbox"]').colorbox({current:"{current} of {total}", opacity:0.7});

    function share(addr, windowName) {
        var width = 575,
            height = 400,
            left = ($(window).width() - width) / 2,
            top = ($(window).height() - height) / 2,
            url = encodeURI(addr),
            opts = 'status=1' +
                ',width=' + width +
                ',height=' + height +
                ',top=' + top +
                ',left=' + left;
        window.open(url, windowName, opts);

    }

    $('.twitter').click(function (event) {
        var tweettext = "Join local startup founders for a free day of talks inspiring next generation of high-growth companies in Birmingham.";
        share("http://twitter.com/share?text=" + tweettext + "&url=http://www.startupsummit.org", "twitter");
        return false;
    });
    $('.facebook').click(function () {
       share("http://www.facebook.com/sharer/sharer.php?u=http://www.startupsummit.org", "facebook");
    });
});