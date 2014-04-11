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
          alert("ie");
          document.innerHTML("<h1>IE</h1>");
           
          return 0;
        } else {
          alert("not ie");
          document.innerHTML("<h1>Not IE</h1>");
          return 1;
        }
    } else {
        alert("not ie");
        document.innerHTML("<h1>Not IE</h1>");
        
        return 1;
    }
}


function(){

if(checkBrowser() == 1) {

  if (checkBrowser()) {
    
  } else {
    
  }


}

  
}


