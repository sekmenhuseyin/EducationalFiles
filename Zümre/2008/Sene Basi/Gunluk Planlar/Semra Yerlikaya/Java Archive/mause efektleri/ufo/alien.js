var Ver4=parseInt(navigator.appVersion.charAt(0))>=4
var IE=navigator.appName.indexOf("Microsoft")!=-1
var al, imagesrc, ex=-32, ey=-32, x0=-32, y0=-32
  
function BewegeAlien()
{ // Neue Position des Alien berechnen
  if (Math.abs(ex-x0)>=10) { x0+=Math.floor((ex-x0)*0.1) }
  else if (ex!=x0) { x0+=Math.abs(ex-x0)/(ex-x0) }
  if (Math.abs(ey-y0)>=10) { y0+=Math.floor((ey-y0)*0.1) }
  else if (ey!=y0) { y0+=Math.abs(ey-y0)/(ey-y0) }

  // entsprechende Grafik in Bezug zur Maus-Position waehlen
  imagesrc=""
  if ( (ex<x0) && ( (x0-ex) > Math.abs(y0-ey)/2 ) )
  { imagesrc="alien_l.gif"
    if ( (x0-ex) < Math.abs(y0-ey)*2 )
    { if (ey<y0) imagesrc="alien_lo.gif"
      if (ey>y0) imagesrc="alien_lu.gif"
    }
  }
  if ( (ex>x0) && ( (ex-x0) > Math.abs(y0-ey)/2) )
  { imagesrc="alien_r.gif"
    if ( (ex-x0) < Math.abs(y0-ey)*2 )
    { if (ey<y0) imagesrc="alien_ro.gif"
      if (ey>y0) imagesrc="alien_ru.gif"
    }
  }
  if (imagesrc=="")
  { if (ey<y0) imagesrc="alien_o.gif"
    if (ey>y0) imagesrc="alien_u.gif"
    if ((ex==x0)&&(ey==y0)) imagesrc="alien.gif"
  }

  // Grafik und Position setzen
  if (Ver4)
  { if (!IE)
    { document.AlienLayer.document.images.alien.src=imagesrc }
    else document.all.AlienLayer.document.images.alien.src=imagesrc
  }
  al.left=x0-32
  al.top=y0

  setTimeout("BewegeAlien();",100)
}

function MeinMausEvent(e)
{ // Position des Maus-Cursors ermitteln
  if (Ver4)
  { if (!IE)
    { ex=e.pageX
      ey=e.pageY }
    else
    { ex=event.clientX + document.body.scrollLeft
      ey=event.clientY + document.body.scrollTop }
  }
}

function ScriptSetup()
{ // Alle Alien-Grafiken laden
  isIm = (document.images) ? 1 : 0
  if (isIm)
  { arImLoad = new Array
    ('alien','alien_u','alien_o','alien_l','alien_r',
     'alien_lu','alien_lo','alien_ru','alien_ro')
    arImList = new Array ()
    for (counter in arImLoad)
    { arImList[counter] = new Image()
      arImList[counter].src = arImLoad[counter] + '.gif'
    }
  }

  // Globale Variablen setzen und Maus-Event initialisieren
  if (Ver4)
  { if (!IE)
    { al=document.AlienLayer
      document.captureEvents(Event.MOUSEMOVE)
    }
    else
    { al=document.all.AlienLayer.style }
    document.onmousemove = MeinMausEvent
    BewegeAlien()
  }
}

function Copyright()
{ window.focus()
  alert("nicht immer auf´n Kopf klicken") }

function ZeigeAlien()
{ // Setzen der Block-Level Container zur Anzeige der Grafiken
  if(Ver4)
  { s ='<DIV STYLE="visibility:hidden"></DIV>'
    s+='<DIV ID="AlienLayer" STYLE="position:absolute; '
    s+='top:-32; left:-32; width:32; height:32">'
    s+='<A HREF="javascript:Copyright();">'
    s+='<IMG NAME="alien" SRC="alien.gif" border=0>'
    s+='</A></DIV>'
    document.writeln(s)
  }
}

window.onload = ScriptSetup
ZeigeAlien()
