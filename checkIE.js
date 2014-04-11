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

  var ver = getIEVersion();
  
    if ( ver > -1 ) {
        if ( ver < 9 ) {
   
          return false;
        } else {
          
          return true;
        }
    } else {
        
        return true;
    }
}



function init(){
  main = document.getElementById('main');

  main.innerHTML = getIEVersion();
  if(checkBrowser()) {
    //alert("not ie");
    main.innerHTML="<h1>Not IE</h1>";

  } else {
    //alert("ie");
    main.innerHTML="<h1>IE</h1>";
  }
}

window.onload = init; 