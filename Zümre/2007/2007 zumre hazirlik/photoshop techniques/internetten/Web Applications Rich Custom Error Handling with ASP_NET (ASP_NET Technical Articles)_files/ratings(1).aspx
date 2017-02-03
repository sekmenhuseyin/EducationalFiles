<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!-- saved from url=(0213)http://msdn.microsoft.com/msdn-online/shared/components/ratings/ratings.aspx?ContentID=1040324&mnp2=1&Config=/msdn-online/shared/components/ratings/RatingsCnfg.xml&Print=CustomErrors.asp%26print=true&HideDiscuss=1 -->
<HTML><HEAD><TITLE>Page Stats</TITLE>
<META content="text/html; charset=utf-8" http-equiv=Content-Type>
<META content=noindex name=robots>
<META content=build name=168><LINK href="ratings(1)_files/ie4.css" 
rel=stylesheet type=text/css>
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
				GetRateID("1040324");

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
action=ratings.aspx?ContentID=1040324&amp;mnp2=1&amp;Config=/msdn-online/shared/components/ratings/RatingsCnfg.xml&amp;Print=CustomErrors.asp%26print=true&amp;HideDiscuss=1 
id=ratings_tmp method=post name=ratings_tmp><INPUT name=__VIEWSTATE type=hidden 
value=dDwxMDM3Mjg1ODQ5O3Q8cDxsPEhpZGVEaXNjdXNzO1JhdGVMb3c7Q291bnRUZXh0O1JhdGVDb3VudDtDb3VudEZpcnN0VGV4dDtOb1JhdGluZztGZWVkYmFja1RleHQ7UGFnZVJhdGU7SGlzdG9ncmFtO0JvcmRlckNvbG9yO1BhZ2VSYW5nZTtSYXRlSGlnaDtSYXRlVGhpc1BhZ2U7QmFja0NvbG9yO0F2ZXJhZ2VUZXh0Oz47bDxcZTtQb29yO1w8U1RST05HXD57MDpHfVw8L1NUUk9OR1w+IHBlb3BsZSBoYXZlIHJhdGVkIHRoaXMgcGFnZTtpPDgxPjtcPFNUUk9OR1w+MVw8L1NUUk9OR1w+IHBlcnNvbiBoYXMgcmF0ZWQgdGhpcyBwYWdlO1w8U1RST05HXD5CZSB0aGUgZmlyc3QgdG8gcmF0ZSB0aGlzIHBhZ2UhXDwvU1RST05HXD47XDxTVFJPTkdcPlRlbGwgdXMgd2h5IHlvdSByYXRlZCB0aGUgY29udGVudCB0aGlzIHdheS4gKG9wdGlvbmFsKVw8L1NUUk9OR1w+O1N5c3RlbS5TaW5nbGUsIG1zY29ybGliLCBWZXJzaW9uPTEuMC41MDAwLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4OTw3Ni4yNzE0ODQ0PjtsPGk8Nz47aTwyPjtpPDQ+O2k8Mz47aTw2PjtpPDQ+O2k8OT47aTwxMD47aTwzNj47aTwzNj47PjsjOTk5OTk5O2k8OT47T3V0c3RhbmRpbmc7XDxTVFJPTkdcPkhvdyB3b3VsZCB5b3UgcmF0ZSB0aGUgcXVhbGl0eSBvZiB0aGlzIGNvbnRlbnQ/XDwvU1RST05HXD47I2YxZjFmMTtBdmVyYWdlIHJhdGluZzpcPEJSXD5cPFNUUk9OR1w+ezA6R31cPC9TVFJPTkdcPiBvdXQgb2YgezE6R307Pj47bDxpPDE+Oz47bDx0PDtsPGk8OT47PjtsPHQ8cDxwPGw8QmFja0NvbG9yO0NlbGxQYWRkaW5nO0NlbGxTcGFjaW5nO1dpZHRoO0hlaWdodDtfIVNCOz47bDwyPCcjZjFmMWYxJz47aTwwPjtpPDA+OzE8MTAwJT47MTwxMDAlPjtpPDM5MzYwOD47Pj47Pjs7Pjs+Pjs+PjtsPFByaW50O0VtYWlsO1NhdmU7UmF0ZTE7UmF0ZTE7UmF0ZTI7UmF0ZTI7UmF0ZTM7UmF0ZTM7UmF0ZTQ7UmF0ZTQ7UmF0ZTU7UmF0ZTU7UmF0ZTY7UmF0ZTY7UmF0ZTc7UmF0ZTc7UmF0ZTg7UmF0ZTg7UmF0ZTk7UmF0ZTk7Pj7rZjgOFrQ3cAh5K3XaX4qwzhR82w==> 
<INPUT id=RatingsServerCmd name=RatingsServerCmd size=1 type=hidden> <INPUT 
class=RatingsData id=RatingsStatus name=RatingsStatus size=1 type=hidden> <INPUT 
id=RatingsContentURL name=RatingsContentURL size=1 type=hidden> <INPUT 
id=RatingsContentTitle name=RatingsContentTitle size=1 type=hidden> 
<TABLE border=0 cellPadding=0 cellSpacing=0 id=tbRatings 
style="BACKGROUND-COLOR: #f1f1f1; BORDER-COLLAPSE: collapse; HEIGHT: 100%; WIDTH: 100%">
  <TBODY>
  <TR style="HEIGHT: 1px" vAlign=top>
    <TD colSpan=2>
      <TABLE border=0 cellPadding=0 cellSpacing=2 
      style="BORDER-BOTTOM: #999999 1px solid; BORDER-TOP: #999999 1px solid">
        <TBODY>
        <TR>
          <TD><INPUT alt="Print a printer-friendly version of this page" 
            border=0 cache id=Print name=Print onclick="return OnPrint();" 
            src="ratings(1)_files/rtg_btn_print.gif" 
            style="MARGIN-LEFT: 8px; MARGIN-RIGHT: 8px" 
            title="Print a printer-friendly version of this page" type=image></TD>
          <TD><INPUT alt="E-mail this page" border=0 cache id=Email name=Email 
            onclick="return OnEmail();" src="ratings(1)_files/rtg_btn_email.gif" 
            style="MARGIN-LEFT: 8px; MARGIN-RIGHT: 8px" title="E-mail this page" 
            type=image></TD>
          <TD><INPUT alt="Add to favorites" border=0 cache id=Save name=Save 
            onclick="return OnSave();" src="ratings(1)_files/rtg_btn_save.gif" 
            style="MARGIN-LEFT: 8px; MARGIN-RIGHT: 8px" title="Add to favorites" 
            type=image></TD>
          <TD style="WIDTH: 100%"></TD></TR></TBODY></TABLE></TD></TR>
  <TR vAlign=top>
    <TD style="BORDER-RIGHT: #999999 1px dotted; WIDTH: 400px">
      <TABLE border=0 cellPadding=0 cellSpacing=4 style="MARGIN-LEFT: 10px">
        <TBODY>
        <TR>
          <TD>
            <P><STRONG>How would you rate the quality of this 
            content?</STRONG></P>
            <TABLE border=0 cellPadding=0 cellSpacing=0 
            style="BORDER-COLLAPSE: collapse; MARGIN-BOTTOM: 12px">
              <TBODY>
              <TR align=middle>
                <TD></TD>
                <TD>1</TD>
                <TD>2</TD>
                <TD>3</TD>
                <TD>4</TD>
                <TD>5</TD>
                <TD>6</TD>
                <TD>7</TD>
                <TD>8</TD>
                <TD>9</TD>
                <TD></TD></TR>
              <TR align=middle>
                <TD>Poor&nbsp;</TD>
                <TD><INPUT id=Rate1 name=Rate type=radio value=Rate1></TD>
                <TD><INPUT id=Rate2 name=Rate type=radio value=Rate2></TD>
                <TD><INPUT id=Rate3 name=Rate type=radio value=Rate3></TD>
                <TD><INPUT id=Rate4 name=Rate type=radio value=Rate4></TD>
                <TD><INPUT id=Rate5 name=Rate type=radio value=Rate5></TD>
                <TD><INPUT id=Rate6 name=Rate type=radio value=Rate6></TD>
                <TD><INPUT id=Rate7 name=Rate type=radio value=Rate7></TD>
                <TD><INPUT id=Rate8 name=Rate type=radio value=Rate8></TD>
                <TD><INPUT id=Rate9 name=Rate type=radio value=Rate9></TD>
                <TD>&nbsp;Outstanding</TD></TR></TBODY></TABLE></TD></TR>
        <TR>
          <TD><STRONG>Tell us why you rated the content this way. 
            (optional)</STRONG></TD></TR>
        <TR>
          <TD><TEXTAREA cols=42 id=txtFeedback name=txtFeedback rows=4></TEXTAREA></TD></TR>
        <TR>
          <TD><INPUT id=btnSend name=btnSend type=submit value=Submit></TD></TR></TBODY></TABLE></TD>
    <TD>
      <TABLE border=0 cellPadding=0 cellSpacing=4 
      style="MARGIN-LEFT: 10px; WIDTH: 190px">
        <TBODY>
        <TR>
          <TD colSpan=2>Average rating:<BR><STRONG>7</STRONG> out of 9</TD></TR>
        <TR>
          <TD colSpan=2>
            <TABLE border=0 cellPadding=0 cellSpacing=1>
              <TBODY>
              <TR vAlign=bottom>
                <TD><IMG align=bottom height=7 
                  src="ratings(1)_files/rtg_Bar.gif" width=12></TD>
                <TD><IMG align=bottom height=2 
                  src="ratings(1)_files/rtg_Bar.gif" width=12></TD>
                <TD><IMG align=bottom height=4 
                  src="ratings(1)_files/rtg_Bar.gif" width=12></TD>
                <TD><IMG align=bottom height=3 
                  src="ratings(1)_files/rtg_Bar.gif" width=12></TD>
                <TD><IMG align=bottom height=6 
                  src="ratings(1)_files/rtg_Bar.gif" width=12></TD>
                <TD><IMG align=bottom height=4 
                  src="ratings(1)_files/rtg_Bar.gif" width=12></TD>
                <TD><IMG align=bottom height=10 
                  src="ratings(1)_files/rtg_Bar.gif" width=12></TD>
                <TD><IMG align=bottom height=11 
                  src="ratings(1)_files/rtg_Bar.gif" width=12></TD>
                <TD><IMG align=bottom height=40 
                  src="ratings(1)_files/rtg_Bar.gif" width=12></TD></TR>
              <TR>
                <TD align=middle>1</TD>
                <TD align=middle>2</TD>
                <TD align=middle>3</TD>
                <TD align=middle>4</TD>
                <TD align=middle>5</TD>
                <TD align=middle>6</TD>
                <TD align=middle>7</TD>
                <TD align=middle>8</TD>
                <TD align=middle>9</TD></TR></TBODY></TABLE></TD></TR>
        <TR>
          <TD><STRONG>81</STRONG> people have rated this 
      page</TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></FORM></BODY></HTML>
