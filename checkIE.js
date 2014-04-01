function checkIE(){

	var ie = (navigator.appName == "Microsoft Internet Explorer")? true : false;
	var appname = navigator.appName;
	var version = navigator.appVersion;
	var codename = navigator.appCodeName;
	var useragent = navigator.userAgent;
	var rvPos = useragent.indexOf("rv:");
	var rv = Number(useragent.substring(rvPos+3, rvPos+5));

	document.write(ie + "<br />");
	document.write(appname + "<br />");
	document.write(version + "<br />");
	document.write(codename + "<br />");
	document.write(useragent + "<br />");
	document.write(rvPos + "<br />");
	document.write(rv + "<br />");
}

function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
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

      document.write("IE " + ver);
    } 

    document.write("IE " + ver);	   
  }
}

checkIE();
checkVersion();



