var info = "<h1>INFO</h1>";

function getInternetExplorerVersion() {
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }

  return rv;
}

function checkVersion() {
  var ver = getInternetExplorerVersion();
  if ( ver > -1 ) {
    if ( ver < 9.0 ) {

      $("#main").append("<h1>IE <= 8</h1>");
      /*$("#content").empty();
      $("#content").append(info).css({
        textAlign: 'center',
      });*/
    }
    $("#main").append("<h1>IE > 8</h1>");
  }
} else {
  $("#main").append("<h1>Not IE</h1>");
}

$(document).ready(function() {
  checkVersion();  
});