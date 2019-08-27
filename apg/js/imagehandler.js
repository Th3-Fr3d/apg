var globalInput;

function LoadImage(input){
    globalInput = input;
    if (input.files.length > 5){
        // TODO: CREATE VISUALLY APPEALING ERROR MESSAGE
        alert("You may only select a maximum of 5 images!");
        $('#upload').val("");
        return;
    }
    for (var i = 0; i < 5; i++){
        var shadowOverlay = document.getElementById("contact-shadow" + i.toString());
        var contactOverlay = document.getElementById("contact-overlay" + i.toString());
        var element = document.getElementById("contact-image" + i.toString());
        shadowOverlay.classList.remove("contact-shadow");
        contactOverlay.classList.remove("has-content");
        element.style.backgroundImage = "url('')";
        element.style.borderStyle = "dashed";
    }
    var i;
    for (i = 0; i < input.files.length; i++) {
        setElementBackground(input.files[i], i);
    }
}

function setElementBackground(file, i) {
    var image = file;
    /*TODO: DOWN SIZE IMAGE --> OTHERWISE MAY CREATE LAG ON MOBILE*/
    var imageDiv = "contact-image" + i.toString();
    var shadowOverlay = document.getElementById("contact-shadow" + i.toString());
    var contactOverlay = document.getElementById("contact-overlay" + i.toString());
    shadowOverlay.classList.add("contact-shadow");
    contactOverlay.classList.add("has-content");
    var element = document.getElementById(imageDiv);
    var reader = new FileReader();
    reader.onloadend = function() {
        element.style.backgroundImage = "url(" + reader.result + ")";
        element.style.borderStyle = "none";
    };
    if (image) {
        reader.readAsDataURL(image);
    }
}

function DeleteImage(overlay){
    var id = overlay.id;
    var index = id.charAt(id.length - 1);
    var input = globalInput;
    const dt = new DataTransfer();

    for (let file of input.files)
        if (file !== input.files[index]) 
            dt.items.add(file)

    input.files = dt.files
    LoadImage(input);
}