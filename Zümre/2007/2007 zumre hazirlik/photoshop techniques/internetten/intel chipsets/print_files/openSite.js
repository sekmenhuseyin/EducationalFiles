//Function to open to a off site url
function openSite(siteURL) {
  window.name='theopener';
  theLocation = '/home/leave.htm?jumpTo=' + escape(siteURL) + '&';
  confirmWin = window.open(theLocation, 'confirmationWindow', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=370,height=200');

  // This is important for Netscape 2.0 to enable the opener property
  if (confirmWin.opener == null)
  {
   confirmWin.opener = self;
  }

  // Bring focus to the window in browsers that support focus
  if (window.focus) confirmWin.focus();
}


