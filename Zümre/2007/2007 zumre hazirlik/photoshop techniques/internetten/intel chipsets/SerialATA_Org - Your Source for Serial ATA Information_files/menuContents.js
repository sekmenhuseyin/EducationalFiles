/********************************************************

	This code is NS4, NS6, and IE5 compatible (for the PC).
	It may work on the Mac but needs to be tested.
	
	To add another link to CHILD menus, put in format: 
		HREF, LINK NAME,
		Ex: "www.blah.com","Link text goes here",
	To add another flyout link to CHILD menus, put in format:
		HREF, LINK NAME, submenu number
		Ex: "www.blah.com","Link text goes here",2,
	
	Follow the naming style below. A new child menu be
	defined as: somethingArr. The left nav onMouseOver 
	function will call the exact same name: 
	('something','on'). Any grandchildren will be
	defined as: something_1Arr and something_2Arr.
	
	Make sure grandchildren menus are defined immediately
	following the appropriate child menus and in the correct
	order.
		
	In the function //HBcreateLayer("desktop_1", 200, 0), 
	for example, the first argument is the menu name, 
	the second is the left offset amount from the 
	original value, the third argument is the top offset
	amount from the original value.
	
	Look and feel changes to this navigation need to be
	made in "navbar_generic.js"
	
********************************************************/

/********************************************************
Home
********************************************************/

var homeArr = new Array()		

HBcreateLayer("home", 0, 0);

/********************************************************
About SATA
********************************************************/

var aboutArr = new Array(
	"/about/join.shtml","join SATA",
	"/about/contact.shtml","contact SATA WG",
	"/about/members.shtml","SATA members",
	"/about/wkg_wp.shtml","WG group white papers",
	"/about/member_wp.shtml","member white papers")

HBcreateLayer("about", 0, 0);

/********************************************************
Specs and Design Guides
********************************************************/

var specsArr = new Array()		

HBcreateLayer("specs", 0, 0);

/********************************************************
News and Events
********************************************************/

var newsArr = new Array(
	"/news/calendar.shtml","SATA calendar",
	"/collateral/logo_download.shtml","logo download",
	"/about/contact.shtml","SATA contact info")		

HBcreateLayer("news", 0, 0);

/********************************************************
Members List
********************************************************/

var memberslistArr = new Array()		

HBcreateLayer("memberslist", 0, 0);

/********************************************************
Members Forum
********************************************************/

var membersforumArr = new Array(
	"/members/sataI/sata_1.shtml","SATA 1.0",
	"/members/sataII/sata_ii.shtml","SATA II")

HBcreateLayer("membersforum", 0, 0);