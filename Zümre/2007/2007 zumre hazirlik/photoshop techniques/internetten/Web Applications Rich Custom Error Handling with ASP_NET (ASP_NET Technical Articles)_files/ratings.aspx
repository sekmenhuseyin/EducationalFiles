<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!-- saved from url=(0206)http://msdn.microsoft.com/msdn-online/shared/components/ratings/ratings.aspx?&opt=1&ContentID=1040324&mnp2=1&Config=/msdn-online/shared/components/ratings/RatingsCnfg.xml&Print=CustomErrors.asp%26print=true -->
<HTML><HEAD><TITLE>Page Stats</TITLE>
<META content="text/html; charset=utf-8" http-equiv=Content-Type>
<META content=noindex name=robots>
<META content=build name=168><LINK href="ratings_files/ie4.css" rel=stylesheet 
type=text/css>
<STYLE>.RatingsData {
	BEHAVIOR: url(#default#userdata)
}
</STYLE>

<SCRIPT defer language=javascript>
		<!-- 
			var strPrintPage = ValidatePrintPage("CustomErrors.asp&print=true");
			var bMNP2 = true;
			var strEmailString = "_r=1";
			window.onload = OnInitPage;		
			function GetContentWnd(){ return parent; }	
			function OnInitPage(){				
				var oWnd = GetContentWnd();	
				var strQuery = oWnd.location.search;
				
				if( document.getElementById("RatingsServerCmd").value == "" ) // first time only
				{	
					document.getElementById("RatingsServerCmd").value = "/";	
					document.getElementById("RatingsContentURL").value = oWnd.location.href;
					document.getElementById("RatingsContentTitle").value = oWnd.document.title;

					if(strQuery.indexOf(strEmailString) >= 0){
						document.getElementById("RatingsServerCmd").value = "SaveReturnFromEmail";
						document.forms(0).submit();
						return;
					}
				}
			}		
			function ValidatePrintPage(sz){
				if( (sz.indexOf("\\") >=0) || (sz.indexOf("/") >=0) )
					return "print.asp";
				return sz;
			}
			function OnPrint(){
				if(bMNP2) OnPrintPage();
				else OnPrintFrame();
			}
			function OnPrintPage(){
				var oWnd = GetContentWnd();	
				var oDoc = oWnd.document;	
				var strLoc = oWnd.location.href;
				strLoc = strLoc.substr(0, strLoc.lastIndexOf("/")+1)+strPrintPage;		
				if (window.navigator.userAgent.indexOf("MSIE ")!=-1 && navigator.appVersion.substr(0, 1) >= 4){
					if( oWnd.printHiddenFrame == null){
						oDoc.body.insertAdjacentHTML("beforeEnd", "<iframe name='printHiddenFrame' width='0' height='0'></iframe>");
						framedoc = oWnd.printHiddenFrame.document;
						framedoc.open();
						framedoc.write(
							"<frameset name=test onload='printMe.focus();printMe.print();' rows=\"100%\">" +
							"<frame name=printMe src=\""+strLoc+"\">" +
							"</frameset>");
						framedoc.close();
					}
					else{
						oWnd.printHiddenFrame.printMe.focus();
						oWnd.printHiddenFrame.printMe.print();
					}			
				}
				else{
					oWnd.location.href = strLoc;
				}
				return true;
			}
			function OnPrintFrame(){
				var oWnd = GetContentWnd();	
				oWnd.focus();
				oWnd.print();
				return true;
			}
			function OnEmail(){
				var oWnd = 	GetContentWnd();
				var oDoc = oWnd.document;
				var oDescription = oDoc.getElementById("Description");
				var strDescription = ( (oDescription == null) || (oDescription.content == "") ) ? oDoc.title : oDescription.content;	
				if( oDoc.title == "" )
					oWnd.location.href = "mailto:?body="+BuildEmailDescription(strDescription, AddParamToURL(oWnd.location.href, strEmailString));
				else
					oWnd.location.href = "mailto:?subject="+escape(oDoc.title)+"&body="+BuildEmailDescription(strDescription, AddParamToURL(oWnd.location.href, strEmailString));
				return true;
			}
			function BuildEmailDescription(strDescription,hRef){
				return escape("Here's a great article you might be interested in:" +
							String.fromCharCode(13)+ String.fromCharCode(13) + strDescription + String.fromCharCode(13) + "URL: " + hRef);
			}
			function AddParamToURL(strLoc,strParam){
				var i = strLoc.lastIndexOf("?");
				if(strLoc.indexOf(strParam, i) >= 0)
					return strLoc;
				
				strLoc += ((i >= 0) && (i > strLoc.lastIndexOf("/"))) ? "&" : "?";
				return strLoc + strParam;
			}
			function OnDiscuss(ContentID){
				var strCmd = "/library/shared/comments/asp/threadedcomments.asp?";
				strCmd += "aID=" + ContentID;

				var nHeight = (window.screen.availHeight < 560) ? window.screen.availHeight-50 : 560;
				var nWidth = (window.screen.availWidth < 640) ? window.screen.availWidth-50 : 640;
				var nTop = window.screen.availHeight*2/5 - nHeight/2;
				var nLeft = window.screen.availWidth/2 - nWidth/2;
				if(nTop < 0) nTop = 0;
				if(nLeft < 0) nLeft = 0;

				var strOpts = "resizable=yes,menubar=yes,status=yes,toolbar=no,height="+String(nHeight)+",width="+String(nWidth);
				if(navigator.appName.toUpperCase() == "NETSCAPE")
					strOpts = "screenX=" + String( nLeft ) + ",screenY=" + String( nTop ) + "," + strOpts;
				else
					strOpts = "left=" + String( nLeft ) + ",top=" + String( nTop ) + "," + strOpts;
				
				var oWnd = window.open(strCmd, "RatingsForum", strOpts);					
				if(oWnd == null)
					return false;
				
				oWnd.focus();
				return true;
			}
			function OnSave(){	
				var oWnd = GetContentWnd();
				window.external.addFavorite( oWnd.location.href, oWnd.document.title );
				return true;
			}
			function OnRate(){	
				var oWnd = GetContentWnd();
				oWnd.scrollBy(0, 9999999);
				return false;
			}
			function OnStats(ContentID){
				var strCmd = window.location.href+"&stats=1";
				var nHeight = 270;
				var nWidth = 357
				var nTop = window.screen.availHeight*2/5 - nHeight/2;
				var nLeft = window.screen.availWidth/2 - nWidth/2;
				if(nTop < 0) nTop = 0;
				if(nLeft < 0) nLeft = 0;

				var strOpts = "resizable=no,menubar=no,status=no,toolbar=no,height="+String(nHeight)+",width="+String(nWidth);
				if(navigator.appName.toUpperCase() == "NETSCAPE")
					strOpts = "screenX=" + String( nLeft ) + ",screenY=" + String( nTop ) + "," + strOpts;
				else
					strOpts = "left=" + String( nLeft ) + ",top=" + String( nTop ) + "," + strOpts;
				
				var oWnd = window.open(strCmd, "RatingsStats", strOpts);					
				if(oWnd == null)
					return false;
				
				oWnd.focus();
				return true;
			}
			function SetRateID(sContentID){	
				if( (sContentID == null) && (sContentID == "") )
					return;
				oInput = document.getElementById("RatingsStatus")
				oInput.setAttribute("Rate", oInput.value);
				oInput.save(sContentID);
			}
			function GetRateID(sContentID){
				oInput = document.getElementById("RatingsStatus")
				oInput.load(sContentID);
				oInput.value = oInput.getAttribute("Rate");
			}
					//-->
		</SCRIPT>

<META content="MSHTML 5.00.2920.0" name=GENERATOR></HEAD>
<BODY bgColor=#f1f1f1 style="MARGIN: 0px" ms_positioning="GridLayout">
<FORM 
action=ratings.aspx?&amp;opt=1&amp;ContentID=1040324&amp;mnp2=1&amp;Config=/msdn-online/shared/components/ratings/RatingsCnfg.xml&amp;Print=CustomErrors.asp%26print=true 
id=ratings_tmp method=post name=ratings_tmp><INPUT name=__EVENTTARGET 
type=hidden> <INPUT name=__EVENTARGUMENT type=hidden> <INPUT name=__VIEWSTATE 
type=hidden 
value=dDwxMDM3Mjg1ODQ5O3Q8cDxsPFBhZ2VSYXRlO0NvdW50VGV4dDtDb3VudEZpcnN0VGV4dDtOb1JhdGluZztSYXRlQ291bnQ7Qm9yZGVyQ29sb3I7UGFnZVJhbmdlO0JhY2tDb2xvcjtBdmVyYWdlVGV4dDs+O2w8U3lzdGVtLlNpbmdsZSwgbXNjb3JsaWIsIFZlcnNpb249MS4wLjUwMDAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5PDc2LjI3MTQ4NDQ+O1w8U1RST05HXD57MDpHfVw8L1NUUk9OR1w+IHBlb3BsZSBoYXZlIHJhdGVkIHRoaXMgcGFnZTtcPFNUUk9OR1w+MVw8L1NUUk9OR1w+IHBlcnNvbiBoYXMgcmF0ZWQgdGhpcyBwYWdlO1w8U1RST05HXD5CZSB0aGUgZmlyc3QgdG8gcmF0ZSB0aGlzIHBhZ2UhXDwvU1RST05HXD47aTw4MT47Izk5OTk5OTtpPDk+OyNmMWYxZjE7QXZlcmFnZSByYXRpbmc6XDxCUlw+XDxTVFJPTkdcPnswOkd9XDwvU1RST05HXD4gb3V0IG9mIHsxOkd9Oz4+O2w8aTwxPjs+O2w8dDw7bDxpPDk+Oz47bDx0PHA8cDxsPEJhY2tDb2xvcjtDZWxsUGFkZGluZztDZWxsU3BhY2luZztXaWR0aDtIZWlnaHQ7XyFTQjs+O2w8MjwnI2YxZjFmMSc+O2k8MD47aTw0PjsxPDEwMCU+OzE8OTglPjtpPDM5MzYwOD47Pj47cDxsPHN0eWxlOz47bDxtYXJnaW4tbGVmdDoycHhcO2ZvbnQtc2l6ZToxMnB0XDs7Pj4+Ozs+Oz4+Oz4+Oz66c4ra/lxzwVVYUVNFvd4ik8xdag==>
<SCRIPT language=javascript>
<!--
	function __doPostBack(eventTarget, eventArgument) {
		var theform;
		if (window.navigator.appName.toLowerCase().indexOf("microsoft") > -1) {
			theform = document.ratings_tmp;
		}
		else {
			theform = document.forms["ratings_tmp"];
		}
		theform.__EVENTTARGET.value = eventTarget.split("$").join(":");
		theform.__EVENTARGUMENT.value = eventArgument;
		theform.submit();
	}
// -->
</SCRIPT>
 <INPUT id=RatingsServerCmd name=RatingsServerCmd size=1 type=hidden> <INPUT 
class=RatingsData id=RatingsStatus name=RatingsStatus size=1 type=hidden> <INPUT 
id=RatingsContentURL name=RatingsContentURL size=1 type=hidden> <INPUT 
id=RatingsContentTitle name=RatingsContentTitle size=1 type=hidden> 
<TABLE border=0 cellPadding=0 cellSpacing=4 id=tbRatings 
style="BACKGROUND-COLOR: #f1f1f1; FONT-SIZE: 12pt; HEIGHT: 98%; MARGIN-LEFT: 2px; WIDTH: 100%">
  <TBODY>
  <TR>
    <TD colSpan=2>Average rating:<BR><STRONG>7</STRONG> out of 9</TD></TR>
  <TR>
    <TD colSpan=2></TD></TR>
  <TR>
    <TD><IMG align=absMiddle height=18 src="ratings_files/rtg_rate.gif" 
      width=18></TD>
    <TD style="WIDTH: 100%"><A href="javascript:__doPostBack('Rate','')" 
      id=Rate onclick="return OnRate();" title="Rate this page">Rate this 
      page</A></TD></TR>
  <TR>
    <TD><IMG align=absMiddle height=18 src="ratings_files/rtg_print.gif" 
      width=18></TD>
    <TD style="WIDTH: 100%"><A href="javascript:__doPostBack('Print','')" 
      id=Print onclick="return OnPrint();" 
      title="Print a printer-friendly version of this page">Print this 
    page</A></TD></TR>
  <TR>
    <TD><IMG align=absMiddle height=18 src="ratings_files/rtg_email.gif" 
      width=18></TD>
    <TD style="WIDTH: 100%"><A href="javascript:__doPostBack('Email','')" 
      id=Email onclick="return OnEmail();" title="E-mail this page">E-mail this 
      page</A></TD></TR>
  <TR>
    <TD><IMG align=absMiddle height=18 src="ratings_files/rtg_discuss.gif" 
      width=18></TD>
    <TD style="WIDTH: 100%"><A href="javascript:__doPostBack('Discuss','')" 
      id=Discuss onclick="" title="Discuss this page">Discuss this 
page</A></TD></TR>
  <TR>
    <TD><IMG align=absMiddle height=18 src="ratings_files/rtg_save.gif" 
      width=18></TD>
    <TD style="WIDTH: 100%"><A href="javascript:__doPostBack('Save','')" 
      id=Save onclick="return OnSave();" title="Add to favorites">Add to 
      Favorites</A></TD></TR></TBODY></TABLE></FORM></BODY></HTML>
