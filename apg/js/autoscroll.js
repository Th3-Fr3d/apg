function ScrollTo(id) {
    if ($(id).length) {
        var getOffset = $(id).offset().top;
        var targetDistance = 20;
        $('html,body').animate({
            scrollTop: getOffset - targetDistance
        }, 500);
    }
}

function AddScrollEventHandler(){
    $('.scroll-to').click(function(){
        var menu = document.getElementById('menu');
        menu.classList.remove('active');
        var getElem = $(this).attr('href');
        var targetDistance = 20;
        if ($(getElem).length){
            var getOffset = $(getElem).offset().top;
            $('html,body').animate({
                scrollTop: getOffset - targetDistance
            }, 500);
        }
        return false;
    });
}