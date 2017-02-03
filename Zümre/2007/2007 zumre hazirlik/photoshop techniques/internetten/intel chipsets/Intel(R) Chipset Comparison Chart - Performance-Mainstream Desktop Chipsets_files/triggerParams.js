// Customer : Intel Developer
// Version : Advance + Double Cookie 1.1

function cppUrlPatch(s) {
	var translated = "";
	var i; 
	var found = 0;
	for(i = 0; (found = s.indexOf(':', found)) != -1; ) {
		translated += s.substring(i, found) + "|";
		i = found + 1;
		found++;
	}
	translated += s.substring(i, s.length);
	return translated;
}

var triggerParms = new Array(); 
var excludeList = new Array();
triggerParms["dt"] = 0; // disable trigger if 1
triggerParms["mid"] = "BSH/RIAZWQ6kpJCGlqJQGg=="; // model instance id
triggerParms["cid"] = "C3JC0N1OE4yyDEsl4q7//A=="; // customer id
triggerParms["lf"] = 3; // loyalty factor
triggerParms["sp"] = 8.0; // sample percentage changed from 35.0 on july 3, 2003, July 9, 2003 changed from 75.00
triggerParms["npc"] = 0; // no persistent cookies if 1
triggerParms["rw"] = 129600; // resample wait (value in minutes)
triggerParms["pu"] = 0; // pop-under control
triggerParms["olpu"] = 1; // On Load pop-under control
triggerParms["lfcookie"] = "ForeseeLoyalty_MID_f56EmoJqpa";
triggerParms["ascookie"] = "ForeseeSurveyShown_f56EmoJqpa";
triggerParms["ascookie2"] = "intelresearch";
triggerParms["width"] = 420; // survey width
triggerParms["height"] = 500; // survey height
triggerParms["domain"] = ".intel.com"; // domain name
//triggerParms["omb"] = "1505-0186"; // OMB number
triggerParms["cpp_1"] = "userURL:"+ cppUrlPatch (window.location.protocol+"://" + window.location.host + window.location.pathname); // customer parameter 1 - user URL
//triggerParms["cpp_2"] = "Browser:"+ cppUrlPatch (navigator.userAgent); // customer parameter 2 - Browser
//triggerParms["capturePageView"] = 1;
//excludeList[0] = "/exclude/"; //trigger script will not work under this path
triggerParms["midexp"] = 129600; // model instance expiry value
