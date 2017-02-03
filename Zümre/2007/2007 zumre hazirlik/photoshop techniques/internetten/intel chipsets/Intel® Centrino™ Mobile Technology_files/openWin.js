var ns6,ns4,ie4;
// Show/Hide functions for non-pointer layer/objects
ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false
ns6 = false;
//if the DOM is not IE and not NS4, it must be NS6
if (ns4 == ie4) {
	ns6 = true;
	ie4 = ns4 = false;
}
var URL,width,height,scroll,menubar,toolbar,resize,xPos,yPos,winName = "";
function openWin(URL,width,height,scroll,menubar,toolbar,resize,xPos,yPos,winName){
	var focusFail = false;
	if (width == "") width = "500";
	if (height == "") height = "500";
	if (scroll == "") scroll = "auto";
	if (menubar =="") menubar = "no";
	if (toolbar == "") toolbar = "no";
	if (resize == "") resize = "yes";
	if (xPos == "") xPos = "5";
	if (yPos == "") yPos = "5";
	if (winName == "") winName = "win";
	var features ="width=" +width+ ",height=" +height+ ",scrollbars=" +scroll+ ",menubar=" +menubar+ ",toolbar=" +toolbar+ ",resizable=" +resize+ ",left=" +xPos+ ",top=" +yPos;
	var newWin = window.open(URL,winName,features);
	if (navigator.appVersion.indexOf("NT")!= -1){
		if (navigator.appVersion.indexOf("NT 5")!= -1){
			focusFail = false;
		} else if (ie4 == true)	focusFail = true;
	}
	if (focusFail == false){
		if (window.focus) newWin.focus();
	}
}

function CSPop(iid) {
  window.open('/products/mobiletechnology/demo/business.htm?iid=ipp_mobiletech+overview&','legal','scrollbars=no,toolbar=no,width=696,height=645')
}