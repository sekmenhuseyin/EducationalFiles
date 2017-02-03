<!-- SiteCatalyst code version: G.2.-->

<!--
/* This is code below up until the next comment is Intel specific code to eliminate
duplication of URL on Omniture the variable "result" has been passed to Omniture
code variable name s_pageName. */

var otherurls = ""

var text1 = "http://" + (location.host) + (location.pathname);
var text1 = text1.toLowerCase();
var ch1 = "http://www.intel.com";
var result = text1.replace(ch1, "intel.com");

var text2 = result;
var ch2 = "http://support.intel.com";
var result = text2.replace(ch2, "intel.com");

var text3 = result;
var ch3 = "http://intel.com";
var result = text3.replace(ch3, "intel.com");

if (location.href == "http://developer.intel.com/") 
   var result = "developer.intel.com/";
else {
   var text4 = result;
   var ch4 = "http://developer.intel.com";
   var result = text4.replace(ch4, "intel.com");
}

var text6 = result;
var ch6 = "/index.htm";
var result = text6.replace(ch6, "/");

var text7 = result;
var ch7 = "http://preview-cps.cps.intel.com";
var result = text7.replace(ch7, "preview-cps.cps.com");

var text8 = result;
var ch8 = "http://proto-cps.cps.intel.com";
var result = text8.replace(ch8, "proto-cps.cps.com");

var text9 = result;
var ch9 = "%%5f";
var result = text9.replace(ch9, "_");

var text10 = result;
var ch10 = "%5f";
var result = text10.replace(ch10, "_");

var text11 = result;
var ch11 = "%%2d";
var result = text11.replace(ch11, "-");

var text12 = result;
var ch12 = "%2d";
var result = text12.replace(ch12, "-");

var text13 = result;
var ch13 = "rmi/intel.com/";
var result = text13.replace(ch13, "rmi/");

var text14 = result;
var ch14 = "%5c";
var result = text14.replace(ch14, "/");


if (result.indexOf("intel.com/") != -1) {
	result = result
} else {
	otherurls = result;
        result = "Intel Purchased Domains and Other (See Custom Insight)";
}

<!--
/* You may give each page an identifying name, server, and channel on
the next lines. */
var s_pageName= result
var s_server="Hardware Developer"
var s_channel=""
var s_pageType=""
var s_prop1=""
var s_prop2=""
var s_prop3=""
var s_prop4=""
var s_prop5=""
var s_prop6=otherurls
/* E-commerce Variables */
var s_campaign=""
var s_state=""
var s_zip=""
var s_events=""
var s_products=""
var s_purchaseID=""
var s_eVar1=""

document.write ("<script language='JavaScript' src='/sites/nav/hitbox/Developerjs_code.js'></script>")

<!-- End SiteCatalyst code version: G.2. -->

