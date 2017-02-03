<!-- Start SiteCatalyst code version: G.2. -->

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
var ch2 = "http://intel.com";
var result = text2.replace(ch2, "intel.com");

if (location.href == "http://developer.intel.com/") 
   var result = "developer.intel.com/";
else {
   var text4 = result;
   var ch4 = "http://developer.intel.com";
   var result = text4.replace(ch4, "intel.com");
}

var text5 = result;
var ch5 = "http://support.intel.com";
var result = text5.replace(ch5, "intel.com");

var text6 = result;
var ch6 = "/index.htm";
var result = text6.replace(ch6, "/");

var text7 = result;
var ch7 = "http://preview-cps.cps.intel.com";
var result = text7.replace(ch7, "preview-cps.cps.com");

var text8 = result;
var ch8 = "http://proto-cps.cps.intel.com";
var result = text8.replace(ch8, "proto-cps.cps.com");


if (result.indexOf("intel.com/") != -1) {
	result = result
} else {
	otherurls = result;
        result = "Intel Purchased Domains and Other (See Custom Insight)";
}


var s_pageName=result
var s_server="Communications Portal"
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

<!--
/* 
This code is ICG (Develper site) specific code to deliver page hit to Communications    
account. Each ICG/WCCG page has been tagged with a span id  
of icgtintel in order identify which page to report on for Communications account.
*/ 

isIE=document.all;
isNN=!document.all&&document.getElementById;
 
var icgintelchan = null
 
if (isIE){
 
            if (!document.all.icgintel){
            
            } else {
                        
                        icgintelchan = document.all.icgintel.innerHTML;
            
            }
 
} else if (isNN){
 
            if (!document.getElementById("icgintel")){
            
            } else {
                        
                        icgintelchan = document.getElementById("icgintel").innerHTML;
            
            }
 
}
 
if (icgintelchan != null)
   {
   
   var s_account="intelcorp1";
   document.write ("<script language='JavaScript' src='/sites/nav/hitbox/ICGComjs_code.js'></script>");
  
   }
  



