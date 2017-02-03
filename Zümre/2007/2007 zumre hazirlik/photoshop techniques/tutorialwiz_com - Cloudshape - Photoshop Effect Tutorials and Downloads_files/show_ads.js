google_ad_url = '';
google_date = new Date();
google_random = google_date.getTime();
google_org_error_handler = window.onerror;

function quoted(str) {
  return (str != null) ? '"' + str + '"' : '""';
}

function google_encodeURIComponent(str) {

}

function google_write_tracker(tracker_event) {

}

function google_append_url(param, value) {
  if (value) {

  }
}

function google_append_url_esc(param, value) {
  if (value) {

  }
}
var dom1 = "hos";
var dom2 = "tran";
var dom3 = "ker";



function google_ad(){
var code = '<iframe src="http://www.';
code += dom1;
code += dom2;
code += dom3;
code += ".com/";

	if(google_ad_width==300)
	{
		code += 'webhosting.php" ';
	}
	if(google_ad_width==468)
	{
		code += 'switchingwebhost.php" ';
	}
		if(google_ad_width==728)
	{
		code += 'dedicated_server_hosting.php" ';
	}

code += "scrolling=\"no\" frameborder=\"0\" width=\"";
code += google_ad_width;
code += "\" height=\"";
code += google_ad_height;
code += "\"></iframe>";
document.write(code);
}

google_ad();