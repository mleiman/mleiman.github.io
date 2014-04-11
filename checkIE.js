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
  main = document.getElementById('main');
  var i = getIEVersion();
  main.innerHTML = "ver = "+ i;
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



function init(){
  main = document.getElementById('main');
  i = getIEVersion();
  sec= document.getElementById('sec');
  sec.innerHTML = "<h3> przed if: </h3>"+i;

  if(checkBrowser()) {
    //alert("not ie");
    main.innerHTML="<h1>Not IE</h1>" + "<h2> ver = " + i +"</h2>";

  } else {
    //alert("ie");
    main.innerHTML="<h1>IE</h1>" + "<h2> ver = " + i +"</h2>";
  }
}

window.onload = init; 