//image cache
var dhtmlnav=0;
var dhtmlBrowser=0;

if (document.images)
	{
//cache top menu	
		var home_on = new Image();
		home_on.src = "/images/home_on.gif";
		var home_off = new Image();
		home_off.src = "/images/home_off.gif";
		
		var about_on = new Image();
		about_on.src = "/images/about_on.gif";
		var about_off = new Image();
		about_off.src = "/images/about_off.gif";
		
		var specs_on = new Image();
		specs_on.src = "/images/specs_on.gif";
		var specs_off = new Image();
		specs_off.src = "/images/specs_off.gif";
		
		var news_on = new Image();
		news_on.src = "/images/news_on.gif";
		var news_off = new Image();
		news_off.src = "/images/news_off.gif";
				
		var memberslist_on = new Image();
		memberslist_on.src = "/images/memberslist_on.gif";
		var memberslist_off = new Image();
		memberslist_off.src = "/images/memberslist_off.gif";
		
		var membersforum_on = new Image();
		membersforum_on.src = "/images/membersforum_on.gif";
		var membersforum_off = new Image();
		membersforum_off.src = "/images/membersforum_off.gif";
		
		imgld=1;
	}
		
function swapImage(i,j) {
	if (imgld==0) return;
	if (i==whatpage)  return;
			eval("document.images['"+i+"Img'].src = " + i + "_" + j + ".src");
}

function pageon(){
	eval("document.images['"+whatpage+"Img'].src = " + whatpage + "_on.src");
}

function whatClass(submenu){
if (submenu==whatsub)
	{document.write("<a href='"+submenu+".shtml' class='linkson'>")
	}else
	{document.write("<a href='"+submenu+".shtml' class='linkses'>")
	}
}