function redirect(url, bool){
    if(bool == true)
        window.open(url, '_blank').focus();
    else
        window.location.replace(url);
}