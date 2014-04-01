function checkIE(){

var appname = navigator.appName;
var version = navigator.appVersion;
var useragent = navigator.userAgent;



document.write(appname + "<br />");
document.write(version + "<br />");
document.write(useragent + "<br />");


}

function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}


function checkVersion()
{
  var ver = getInternetExplorerVersion();

  if ( ver > -1 )
  {
    if ( ver < 8.0 )
    {

      document.write("<br /> "+ ver + "<br />");
    }
  
  }
}

checkIE();
checkVersion();



