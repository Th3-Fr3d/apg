function Init(){
    AddMenuEventHandler();
    AddScrollEventHandler();
    ShowSlides(1);
    StartAutoSlide();
}

function AddMenuEventHandler(){
    var menu = document.getElementById('menu'),
        menuLink = document.getElementById('side-menu');
    menuLink.addEventListener('click', function(e){
        menu.classList.toggle('active');
        e.preventDefault();
    });
};

/*$(".swipe-area").swipe({
            swipeStatus:function(event, phase, direction, distance, duration, fingers)
                {
                    if (phase=="move" && direction =="right") {
                        $("#menu").addClass("active");
                        return false;
                    }
                    if (phase=="move" && direction =="left") {
                        $("#menu").removeClass("active");
                        return false;
                    }
                }
        });*/