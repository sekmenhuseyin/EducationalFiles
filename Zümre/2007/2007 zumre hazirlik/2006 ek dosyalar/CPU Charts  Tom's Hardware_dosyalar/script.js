var pgml = 0;

function init_sitemenu() {
}

function init_product_finder()
{
	if (document.getElementById("product_finder"))
	{
		article_width = document.getElementById("article_body").offsetWidth;
		if (article_width  > 580)
		{
			do_big_table();
		}
		else
		{
			do_small_table();
		}
	} 
}

function do_small_table ()
{
	merchant_hound_div = document.getElementById("product_finder");
	document.getElementById("hide_product1").style.display = "none";
	document.getElementById("hide_product2").style.display = "none";
	document.getElementById("hide_product3").style.display = "none";
}

function do_big_table ()
{
	merchant_hound_div = document.getElementById("product_finder");
	document.getElementById("hide_product1").style.display = "block";
	document.getElementById("hide_product2").style.display = "block";
	document.getElementById("hide_product3").style.display = "block";
}

function toggle(id) {
	xid =  document.getElementById(id);
	if (xid) { 
		if (xid.className == "invnav") {
			xid.className = "subnav";
		} else {
			xid.className = "invnav";
		}
	}
}
	
function open_menu(id) 
{
	//opens the item passed to it
	//and closes all others
	hide_all();
	ul = "ul_" + id;
	img = "img_" + id;
	ulElement = document.getElementById(ul);
	imgElement = document.getElementById(img);
	//alert (ulElement);
	if (ulElement)
	{
		ulElement.className = "expanding_menu_open";
		imgElement.src = "/Design/graphics/tomshardware/expanding_menu_pix/opened.gif";
	}
}
	
function hide_all () 
{
	//hides all sections
	for (i=1; i<=11; i++)
	{
		//alert (i);
		ul = "ul_item" + i;
		img = "img_item" + i;
		ulElement = document.getElementById(ul);
		imgElement = document.getElementById(img);
		//alert (ulElement);
		if (ulElement)
		{
			//alert (ulElement.className);
			if (ulElement.className == 'expanding_menu_open')
			{
				//alert (ulElement);
				ulElement.className = "expanding_menu_closed";
				imgElement.src = "/Design/graphics/tomshardware/expanding_menu_pix/closed.gif";
	             }
        	}
	}
}

function showHide(layerName,n)
{
	if (document.getElementById)
	{
		//alert('ns7');
		var fred = document.getElementById(layerName);
		if (n == 1)
		{
			fred.style.display = "";
		}
		else if (n == 0)
		{
			fred.style.display = "none";
		}
		else if (n == 2)
		{
			fred.style.display = fred.style.display ? '' : 'none';	
		}
		return;
	}
}

function DocHeight()
{
	docheight = 0;
	if (document.body.scrollHeight) docheight = document.body.scrollHeight;
	return docheight;
}

function getWindowSize()
{
	winwidth = (window.innerWidth) ? window.innerWidth : document.body.clientWidth;
	return winwidth;
}

function popUp(URL,w,h,SCR)
{
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=" + SCR + ",location=0,statusbar=0,menubar=0,resizable=0,width=" + w + ",height=" + h + ",left = 135,top = 212');");
}

function VideopopUp(URL,w,h,SCR)
{
	id = 'Video';
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=" + SCR + ",location=0,statusbar=0,menubar=0,resizable=0,width=" + w + ",height=" + h + ",left = 135,top = 212');");
}

function NavGo()
{
   	selecteditem = document.nav_form.contents.selectedIndex ;
    	newurl = document.nav_form.contents.options[ selecteditem ].value;
    	if (newurl.length != 0)
	{
      		location.href = newurl;
    	}
}

