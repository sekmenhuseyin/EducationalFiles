rsi_secure = (location.protocol=='https:') ? 1 : 0;
rsi_ju  = "http" + (rsi_secure ? "s" : "") + "://ads.revsci.net/adserver/ako?rsi_noads=1&rsi_random=" + ("" + Math.random()).substring(2,11);
function rsi_ap(n,v) { if (typeof(v) != "undefined") { rsi_ju += "&" + n + "=" + escape(v); } }
var w = window;
rsi_ap("rsi_account", w.rsi_account);
rsi_ap("rsi_site", w.rsi_site);
rsi_ap("rsi_event", w.rsi_event);
rsi_ap("rsi_secure", w.rsi_secure);
rsi_ap("rsi_referrer", document.referrer);
rsi_ap("rsi_url", location.href);
rsi_ap("rsi_title", document.title);
document.write("<script type=\"text/javascript\" src=\"" + rsi_ju + "\"><" + "/script>");