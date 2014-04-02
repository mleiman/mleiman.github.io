function checkIE() {

var appname = navigator.appName;
var version = navigator.appVersion;
var useragent = navigator.userAgent;



document.write(appname + "<br />");
document.write(version + "<br />");
document.write(useragent + "<br />");


}

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
function getInternetExplorerVersion() {
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  
  return rv;
}


function checkVersion() {

  var info = "<h1>This feature requires Internet Explorer 8 or higher.</h1><h2>Please update your browser.</h2>";

  var ver = getInternetExplorerVersion();


  document.write("<br /> IE ver = "+ ver + "<br />");
  
  if ( ver > -1 ) {
    
    if ( ver < 8.0 ) {

      // content = document.getElementById("content"); 
      // content.innerHTML = info;
      // content.style.textAlign = "center";

      document.write("<br />"+ ver + " <  8.0 <br />");
    }
  
  }
}

checkIE();
checkVersion();



