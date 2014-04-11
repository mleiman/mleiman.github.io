function getIEVersion() {
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }

  return rv;
}


function checkBrowser() {

  var ver = getInternetExplorerVersion();
  
    if ( ver > -1 ) {
        if ( ver < 9 ) {
           
        return 0;
        } else {

          return 1;
        }
    } else {
        
        return 1;
    }
}



if(checkBrowser()) {
  var info = "<h1>This feature requires Internet Explorer 8 or higher.</h1><h2>Please update your browser.</h2>";

  if (checkBrowser()) {
    document.innerHTML("<h1>Not IE</h1>");
  } else {
    document.innerHTML("<h1>IE</h1>");
  }


}


