function autoslide(){
    postMessage(null);
    setTimeout("autoslide()",5000);
}

setTimeout("autoslide()",5000);