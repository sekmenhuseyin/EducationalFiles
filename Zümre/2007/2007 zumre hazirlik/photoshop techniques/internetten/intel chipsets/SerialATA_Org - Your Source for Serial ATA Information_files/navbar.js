// BEGIN DHTML FUNCTIONALITY

var dhtmlnav=0;
var dhtmlBrowser=0;

	// Defines - The Location of the first menu
// ADJUST THIS BASED ON WHERE THE MENU IS ON THE PAGE
var xOrigin = 41;
var yOrigin = 95;
var xAdjust = 0;
var yAdjust	= 0;
var divWidth = 726;
var divHeight = 19;

	// set for IE
	var iexOrigin = 41;
	var ieyOrigin = 95;
var IE4 = false;	
if (document.all) {
	IE4 = true;
	xOrigin = iexOrigin;
	yOrigin = ieyOrigin;
}

	// if NS4
if (document.layers) {
	//xOrigin = iexOrigin ;
	yOrigin = ieyOrigin + 8;
}
	// if NS6
if (!document.all && document.getElementById) {
	//xOrigin = iexOrigin - 2;
	//yOrigin = ieyOrigin - 5;
}

	// for Netscape 6 compatibility
var NS6 = false;
if (!document.all && !document.layers && document.getElementsByTagName("*")) {
	document.all = document.getElementsByTagName("*")
	NS6 = true;
}
if ((document.all)||(document.layers)) dhtmlBrowser=1;
 

var SubALeft = 0

function HBrollover(imgname, roll_on)
// This starts it all
// It is called from the image map for the images
// Called with:
// ...onMouseOver="if (dhtmlnav) HBrollover('img_who', 1, 1);"
// onMouseOut="if (dhtmlnav) HBrollover('img_home', 0, 1);"...
// note that imgname is not used. The image mapping is done in the 
// function HBimageHandler.
{	
	if (roll_on == 'ON') {roll_on = 1;} else {roll_on = 0};
	whichLayer = HBgetArrayNumber(imgname)
	HBlayerHandler(roll_on, whichLayer)
} 

function HBgetArrayNumber(imgname) {
	for (i=1; i < HBlayernames.length; i++) {
  	   if (imgname == HBlayernames[i]) {
	   		return i;
	   }
	}
}

var arrCount = 1;	// number of items in HBlayernames
var HBlayernames = new Array();
var HBlayerList = new Array();

function HBcreateLayer(name, leftAdjust, topAdjust) {
  content = HBmakeContent(name)
 	// to keep righthand drop down from falling beneath page items
  var z = 500	//used to be HBlayerList.length;
  var layer;
  var nameNotThere = true;
  divLeft = xOrigin + xAdjust + leftAdjust
  divTop = yOrigin + yAdjust + topAdjust
  //content = eval(name + "List")
  visible = 0;
  
  for (i=1; i < HBlayernames.length; i++) {
  	   if (name == HBlayernames[i]) {
	   		nameNotThere = false;
			break;
	   }
  	}
	
	if (nameNotThere) {
	  HBlayernames[arrCount] = name;
	  arrCount ++;
  }
  HBlayerList[z] = name;
  if (name == whatpage) { visible = 1; z = z-1; }
  if (document.layers) {
 
    document.writeln('<layer name="' + name + '" left=' + divLeft + ' top=' + divTop + ' width=' + divWidth + ' height=' + divHeight +  ' visibility=' + (visible ? '"show"' : '"hide"') + ' z-index=' + z + '>');
    document.writeln(content);
    document.writeln('</layer>');
    layer = HBgetLayer(name);
    layer.width = divWidth;
    layer.height = divHeight;
  }

  if (document.all) {
  	
    divTop+=8;
    document.writeln('<div id="' + name + '" style="position:absolute; overflow:none; left:' + divLeft + 'px; top:' + divTop + 'px; width:' + divWidth + 'px; height:' + divHeight + 'px;' + ' visibility:' + (visible ? 'visible;' : 'hidden;') + ' z-index:' + z + '">');
    document.writeln(content);
    document.writeln('</div>');
  }
 //HBclipLayer(name, 0, 0, 0, 0);
}


function HBhideLayer(name) {

  var layer = HBgetLayer(name);
	if (name != whatpage) {
	  if (document.layers)
	    layer.visibility = "hide";
	  if (document.all)  
	    layer.visibility = "hidden";
	}
	if (name != whatpage) {
		eval("document.images['" + name + "Img'].src = " + name + "_off.src")
	} else {
		eval("document.images['" + name + "Img'].src = " + name + "_on.src")
	}
}

function HBclipLayer(name, clipleft, cliptop, clipright, clipbottom) {

  var layer = HBgetLayer(name);

  if (document.layers) {
    layer.clip.left   = clipleft;
    layer.clip.top    = cliptop;
    layer.clip.right  = clipright;
    layer.clip.bottom = clipbottom;
  }
  if (document.all)
    layer.clip = 'rect(' + cliptop + ' ' +  clipright + ' ' + clipbottom + ' ' + clipleft +')';
}

function HBgetLayer(name) {
// Returns a handle to the named layer.
	if (document.layers) {
	    return(document.layers[name]);
	}
	else if (document.all) {
		if (document.all[name] == null) return null;
    	layer = eval('document.all.' + name + '.style');
	    return(layer);
	}
  else
    return(null);
}

var ie=0;
var iemac = 0;
if (document.all) ie=1;
if ((document.all)&&(navigator.appVersion.indexOf("Macintosh")!=-1)) iemac=7; 
var TimerID;

function HBlayerHandler(roll_on, whichLayer)
{ 
  if (roll_on)
  {
  if (TimerID != null) clearTimeout(TimerID);
  HBimageHandler(whichLayer);
	if (HBlayernames[whichLayer].indexOf("_") == -1) {
		// is a parent layer
		
		HBhideparents(whichLayer);
	}
    HBshowLayer(HBlayernames[whichLayer]);
  }
  else
  {
   if (TimerID != null) clearTimeout(TimerID);
    TimerID = setTimeout('HBhideparents(0)', 1000);
  }
}

function HBsubroll(mouse_on)
// This function keeps the menu open.
// As long as the cursor is over an object that
// calls HBsubroll onmouseover(1), then the object
// remains visible. onmouseout(0) hide the object
// in one second (1000ms)
{
  if (mouse_on)
  {
    clearTimeout(TimerID); 
  }
  else
  {
    clearTimeout(TimerID);
    TimerID = setTimeout('HBhideparents(0)', 1000);
  }
}

function HBshowLayer(name) {
  var layer = HBgetLayer(name);

  if (document.layers)
    layer.visibility = "show";
  if (document.all)
    layer.visibility = "visible";
	
	if (name.indexOf("_") == -1) {
			eval("document.images['" + name + "Img'].src = " + name + "_on.src")
		}
}

function HBimageHandler(whichImage)
{   
	//eval("document.images['"+HBlayernames[whichImage]+"Img'].src = " + HBlayernames[whichImage] + "_OVER.src;") 
	return;
}

function HBhideparents(exceptThis)
{
	//alert(exceptThis)
	// This hides the parents. To hide all, call with a 0
  //HBimageHandler(exceptThis);	
  for (i=1; i < HBlayernames.length; i++) {
  	   if (exceptThis != i) HBhideLayer(HBlayernames[i]);
  }

}


// END DHTML FUNCTIONALITY - DO NOT TOUCH


var childLink = 'onMouseOver="HBsubroll(1);" onMouseOut="HBsubroll(0);"'

function makeNewFlyout(name) {
	var parentNotThere = true;		// use if parent name is in array
	parentName = name.substring(0,name.lastIndexOf("_"))
  	for (i=1; i < HBlayernames.length; i++) {
  	   if (parentName == HBlayernames[i]) {
	   		parentNotThere = false;
			break;
	   }
  	}
	if (parentNotThere) {
			// creates parent array name if does not exist
		HBlayernames[arrCount] = parentName	
		arrCount++
	}
			// creates child array name
	HBlayernames[arrCount] = name	
	moStr = 'onMouseOver="HBrollover(\'' + name + '\', \'on\');" onMouseOut="if (dhtmlnav) HBrollover(\'' + name + '\', \'off\');"'
	arrCount++
	return moStr;
}
	// space above tabs...should be 0 if first thing after
var tabSpacer;
function HBmakeContent(which) {
	tabSpacer = false;
	
		myStr = flyoutstart + flyoutnext;
	
	arrName = eval(which + "Arr")
	if (arrName.length == 0) {
		myStr = flyoutstart + "&nbsp;" + flyoutend;
	} else {
		var i=0;
		while (arrName[i]) {
			
				myStr += handleLink(which,arrName[i],arrName[i+1])
				i+=2;
			
			tabSpacer = true;	// after this point in the flyout, add more space above tabs
		}
		
		myStr += flyoutlast + flyoutend;	
		//alert(myStr)
		var tempArray = myStr.split("| ]")
		myStr = tempArray[0] + " ]" + tempArray[1]
	}
	return myStr;
}

function handleLink(name,href,desc) {
	if (desc == whatsub) {
		var linkStyle = "linkson";
	} else {
		var linkStyle = "linklike";
	}
	linkStr = itemstart;
	if (href == "-") {
		linkStr += desc;	
	} else {
		linkStr += '<A class="'+ linkStyle +'" HREF="' + href + '" ';
		linkStr += childLink;
		linkStr += '>' + desc;	
		linkStr += itemend;
	}
	//alert(linkStr)

	return linkStr;
}

// BEGIN TABLE DEFINITIONS - DO NOT TOUCH
		
var flyoutstart = '<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="726" bgcolor="#943131"><TR valign="top"><TD class="linklike" align="center">';
var flyoutnext = '[ ';
var itemstart =   '';
var itemend =     '</a> | ';
var flyoutlast = ']'
var flyoutend =   '</TD></tr></TABLE>';

// END TABLE DEFINITIONS - DO NOT TOUCH
