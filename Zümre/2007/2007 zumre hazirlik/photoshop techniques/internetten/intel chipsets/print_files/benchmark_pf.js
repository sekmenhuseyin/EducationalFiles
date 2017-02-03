

if (document.all) document.writeln('<LINK REL="stylesheet" HREF="/products/benchmarks/inc/style_ie.css">');


BLACKWHITE=(location.search.toString().indexOf('bw=1&')!=-1)?1:0;

BENCHMARKS=new Object();
BMList=new Array();

CHANNELWIDTH=245;

function fTime(val) { var min=Math.floor(val/60); if(min==0)min=''; var sec=val%60; if(sec.toString().length==1)sec='0'+sec; return(min+':'+sec); }

COLORS=new Object();
function addColor(id,color) { COLORS[id]=color; }
addColor('O',  '#CCCCCC');
addColor('P3', '#66CC33');
addColor('P4', '#FF9900');
addColor('P4_2', '#FFCC00');
addColor('P4_3', '#FF6600');
addColor('B',  '#0033FF');
addColor('Cy', '#66CCCC');
addColor('M',  '#FF0099');


var addRequired=0;
var C;

function BenchMark(id) {
  BENCHMARKS[id]=this;
  this.id=id;
  this.title='';
  this.add=addBenchMark; if(!addRequired)this.add();
  this.addChart=addChart; this.charts=new Array();
  this.legend=AddLegendItem; this.legendItems=new Array();
  this.pf=1;
}

function addChart(name) {
  var j=this.charts.length;
  var O=this.charts[this.charts.length]=new Object();
  O.name=name;
  O.parent=this;
  O.index=j;
  O.id=this.id+'_'+j;
  O.barWidth=26;
  O.width=375;
  O.height=200; 
  O.min=0; 
  O.max=100; 
  O.tickInterval=20;
  O.items=new Array();
  O.bar=AddItem;
  O.ticks=new Array();
  O.valFormat=new Function("val","return(val)");
  O.addTick=addTick;
  O.breaks=new Array();
  O.groups=new Array();
  O.setGroup=setGroup;
  O.padding=0;
  O.size=chartSize;
  O.twin=chartTwin;
  O.printsize=printSize;
  O.legend=AddLegendItem; O.legendItems=new Array();
  
  return(O);
}
function chartSize(w,h) { this.width=w; this.height=h; }
function printSize(w,h) { this.printwidth=w; this.printheight=h; }
function chartTwin() {  }


function setGroup(label) {
  var o=this.groups[this.groups.length]=new Object();
  o.label=label;
  this.breaks[this.breaks.length]=this.items.length;
}


function AddItem(type,label,value) {
  var n=this.items.length;
  var o=this.items[n]=new Object();
  o.id=this.id+'_'+n;
  o.num=n;
  o.label=label;
  o.value=value;
  o.type=type;
  o.color=COLORS[type]; if (!o.color)o.color='#CCCCCC';
  return(o);
}

function AddLegendItem(type,label) {
  var I=this.legendItems[this.legendItems.length]=new Object();
  this.hasLegend=1;
  I.label=label; 
  I.type=type; 
  I.color=COLORS[type]; if (!I.color)I.color='#CCCCCC';
}

function addTick (value,pos,id) {
 var o=this.ticks[this.ticks.length]=new Object();
 o.value=value;
 o.pos=(pos)?pos:1;
 o.id=id;
}

function getBenchMark(who) { return(BENCHMARKS[who]); }
function addBenchMark() { /*if (BMList.length>1)return;*/ BMList[BMList.length]=this;  }


function drawDescription(B) { if (!B.description)return;
  var build='<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD HEIGHT="15"></TD></TR>'
   +'<TR><TD><IMG SRC="/products/benchmarks/pix/sub_general_description.gif" WIDTH="120" HEIGHT="15" ALT="General Description"></TD></TR>'
   +'<TR><TD WIDTH="420"><FONT FACE="Arial, Helvetica" SIZE="1" COLOR="#666666" CLASS="sm">'+B.description+'</FONT></TD></TR>'
   +'</TABLE>';
  document.write(build);
}


function drawTitle(B) {

  var build='<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0"><TR><TD>'
  build+='<FONT FACE="Arial Black,Arial,Helvetica" SIZE="3" CLASS="title">'+B.title+'</FONT>'+((B.subtitle)?'<br><FONT FACE="Arial Black,Arial,Helvetica" SIZE=2" CLASS="subtitle" COLOR="#666666">'+B.subtitle+'</FONT>':'');
  build+='</TD></TR><TR><TD HEIGHT="15"></TD></TR></TABLE>'
  document.write(build);

}

function drawLegend(C) {

}


function DIV(w,h) {
  var build='<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0"><TR><TD><IMG SRC="/products/benchmarks/pix/sp999999.gif" WIDTH="'+w+'" HEIGHT="'+h+'"></TD></TR></TABLE>';
  return(build);
}

bwOrder=new Array('#CCCCCC','#666666','#000000','#999999','#FFFFFF','#333333');

var BWCOLOR=new Object();
BWCNT=0;

function getColor(type,img) {
  var color='#CCCCCC';
  if (BLACKWHITE) { if (!BWCOLOR[type]) { BWCOLOR[type]=bwOrder[BWCNT]; BWCNT++; if (BWCNT>5)BWCNT=0; } color=BWCOLOR[type]; }
  else { if (COLORS[type]) color=COLORS[type]; }
  if (img) color='sp'+color.replace('#','').toLowerCase()+'.gif';
  return(color);

}

function BAR(w,h,type,gap,val) {
  
  var build='';
  build+='<TD VALIGN="bottom" ALIGN="center">'
    +'<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0"><TR><TD><FONT FACE="Arial,Helvetica" SIZE="1" CLASS="xs" COLOR="#666666">'+val+'</FONT></TD></TR></TABLE>'
    +'<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0"><TR><TD><IMG SRC="/products/benchmarks/pix/spacer.gif" WIDTH="'+(w+2+gap)+'" HEIGHT="2"></TD></TR></TABLE>'
    +'<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0">'
     +'<TR><TD COLSPAN="3"><IMG SRC="/products/benchmarks/pix/sp333333.gif" WIDTH="'+(w+2)+'" HEIGHT="1"></TD></TR>'
     +'<TR>'
      +'<TD><IMG SRC="/products/benchmarks/pix/sp333333.gif" WIDTH="1" HEIGHT="'+h+'"></TD>'
      +'<TD BGCOLOR="'+getColor(type)+'"><IMG SRC="/products/benchmarks/pix/'+getColor(type,1)+'" WIDTH="'+w+'" HEIGHT="'+h+'"></TD>'
      +'<TD><IMG SRC="/products/benchmarks/pix/sp333333.gif" WIDTH="1" HEIGHT="'+h+'"></TD>'
     +'</TR>'
    +'</TABLE>'
  +'</TD>';
  return(build);
}


function BAR2(w,h,type,gap,val,label) {
  
  var j,I,build='';

  build+='<TR><TD align="right"><font face="Arial,Helvetica" size="1" class="label">'+label+'&nbsp;</font></TD><TD>'
    +'<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0"><TR>'
      +'<TD>'
      +'<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0">'
       +'<TR><TD><IMG SRC="/products/benchmarks/pix/sp333333.gif" WIDTH="'+w+'" HEIGHT="1"></TD><TD ROWSPAN="3"><IMG SRC="/products/benchmarks/pix/sp333333.gif" WIDTH="1" HEIGHT="'+(h+2)+'"></TD></TR>'
       +'<TR><TD BGCOLOR="'+getColor(type)+'"><IMG SRC="/products/benchmarks/pix/'+getColor(type,1)+'" WIDTH="'+w+'" HEIGHT="'+h+'"></TD></TR>'
       +'<TR><TD><IMG SRC="/products/benchmarks/pix/sp333333.gif" WIDTH="'+w+'" HEIGHT="1"></TD></TR>'
      +'</TABLE>'
      +'</TD><TD><IMG SRC="/products/benchmarks/pix/spacer.gif" WIDTH="3" HEIGHT="1"></TD>'
      +'<TD><FONT FACE="Arial,Helvetica" SIZE="1" CLASS="xs" COLOR="#666666">'+val+'</FONT></TD>'    
      +'<TD><IMG SRC="/products/benchmarks/pix/spacer.gif" WIDTH="2" HEIGHT="'+(h+2+gap)+'"></TD>'    
    +'</TR></TABLE>'
  +'</TD></TR>';
  return(build);
}


function drawChart(C) {

  if (C.printwidth)C.width=C.printwidth;
  if (C.printheight)C.height=C.printheight;


  var B=C.parent;
  var numbreaks=Math.max(C.breaks.length-1,0);
  var numgroups=Math.max(C.breaks.length,1);
  var numItems=C.items.length;
  var BW=C.barWidth;

  C.pixfactor=((C.horiz)?C.width:C.height+1)/C.max;

  var target=(C.horiz)?C.height:C.width;
  
  var j,I,id;
  var stuff='', build='';
  var gapTotal=target-BW*numItems-numbreaks-C.padding*numgroups*2;
  var gap=Math.floor(gapTotal/(numItems+numgroups));

  temp=0;
 
  POS=0; group=0; g1=C.padding; g2=C.padding;
  var temp=gapTotal-(gap*(numItems+numgroups));
  while(temp>=(numgroups*2)){ g1++; g2++; temp-=numgroups*2; }
  if(temp>=numgroups){ g2++; temp-=numgroups; }
  while(temp>0){ temp--; if (temp>0){ POS++; temp--; } }
  POS+=g1;


   build='<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0">';
   if (C.name) { build+='<TR><TD ALIGN="center"><FONT FACE="Arial,Helvetica" SIZE="2" CLASS="pfcharttitle">'+C.name+'</FONT></TD></TR>' + '<TR><TD HEIGHT="5"></TD></TR>'; }
   if (C.header||C.subhead){
 build+='<tr><td><table border="0" cellspacing="0" cellpadding="0">'
 +'<tr><td xalign="center"><font face="Arial,Helvetica" size="2" class="chartheader">'+C.header+'</font></td></tr>'
 +'<tr><td xalign="center"><font face="Arial,Helvetica" size="1" class="chartsubhead">'+C.subhead+'</font></td></tr>'
 +'</table></td></tr>';
 }
   build+='<TR><TD><TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0">'
   +'<TR>'+((C.horiz)?'<TD></TD>':'')+'<TD BGCOLOR="#666666" '+((C.horiz)?'ROW':'COL')+'SPAN="'+(numItems+4+numbreaks*3)+'" VALIGN="top"><IMG SRC="/products/benchmarks/pix/sp666666.gif" WIDTH="'+((C.horiz)?1:(C.width+2))+'" HEIGHT="'+((C.horiz)?(C.height+2):1)+'"></TD>'
   +((C.horiz)?'':'</TR><TR>')
   +'<TD VALIGN="top"><IMG BGCOLOR="#666666" SRC="/products/benchmarks/pix/sp666666.gif" WIDTH="'+((C.horiz)?C.width:1)+'" HEIGHT="'+((C.horiz)?1:C.height)+'"></TD>';
  if (C.horiz) build+='<TD BGCOLOR="#666666" ROWSPAN="'+(numItems+4+numbreaks*3)+'"><IMG SRC="/products/benchmarks/pix/sp666666.gif" WIDTH="1" HEIGHT="'+C.height+'"></TD></TR>'

  var gap1=Math.floor(gap/2); var gap2=gap-gap1;
  var row2='<TD></TD>';

          

  build+=((C.horiz)?'<TR><TD></TD>':'')+'<TD><IMG SRC="/products/benchmarks/pix/spacer.gif" WIDTH="'+((C.horiz)?C.width:(POS+gap2))+'" HEIGHT="'+((C.horiz)?(POS+gap2):C.height)+'"></TD>'+((C.horiz)?'</TR>':'');
  row2+='<TD></TD>'

  var stuff=''    
  for (j=0; j<numItems; j++) {

    if (j==C.breaks[group]) {
      build+='<TD><IMG SRC="/products/benchmarks/pix/spacer.gif" WIDTH="'+(gap2+g2)+'" HEIGHT="5"></TD>';
      build+='<TD>'+DIV(1,C.height)+'</TD>';
      build+='<TD><IMG SRC="/products/benchmarks/pix/spacer.gif" WIDTH="'+(gap1+g1)+'" HEIGHT="10"></TD>';
      row2+='<TD COLSPAN="3"></TD>'
      group++;
    }


    I=C.items[j]; I.id=C.id+'_'+j;; POS+=gap;

    var bl=(Math.round(I.value*C.pixfactor));
    var w,h,x,y;

    if (C.horiz) {h=BW-2; w=bl; y=C.height-POS-BW; valy=y; x=0-bl-2; valx=bl+3; }
    else { w=BW-2; h=bl; x=POS; valx=x; y=C.height+2; valy=C.height-15-bl; }

    if (C.horiz) {
      stuff=BAR2(w,h,I.type,gap,C.valFormat(I.value),I.label)+stuff;
    }
    else {
      build+=BAR(w,h,I.type,gap,C.valFormat(I.value));
      row2+='<TD ALIGN="center"><FONT FACE="Arial,Helvetica" SIZE="1" CLASS="label" COLOR="#666666">'+fLabel(C,I.label)+'</FONT></TD>';
    }
 
  }
  build+=stuff;

  build+=((C.horiz)?'<TR>':'')+'<TD><IMG SRC="/products/benchmarks/pix/spacer.gif" WIDTH="'+((C.horiz)?1:(gap1+g2))+'" HEIGHT="'+((C.horiz)?(gap1+g2):1)+'"></TD>'+((C.horiz)?'</TR>':'');
  row2+='<TD></TD>'

  if (C.horiz) { build+='<TR><TD></TD><TD VALIGN="top"><IMG SRC="/products/benchmarks/pix/sp666666.gif" WIDTH="'+(C.width)+'" HEIGHT="1"></TD></TR></TABLE>'; }
  else { build+='<TD VALIGN="top"><IMG SRC="/products/benchmarks/pix/sp666666.gif" WIDTH="1" HEIGHT="'+(C.height)+'"></TD></TR><TR><TD COLSPAN="'+(numItems+4+numbreaks*3)+'"><IMG SRC="/products/benchmarks/pix/sp666666.gif" WIDTH="'+(C.width+2)+'" HEIGHT="1"></TD></TR><TR><TD HEIGHT="2"></TD></TR><TR>'+row2+'</TR></TABLE>'; }

  build+='</TD></TR>';



  if ((!C.hasLegend)&&(C.parent.hasLegend)) { C.legendItems=C.parent.legendItems;  C.hasLegend=1; }
  if (C.hasLegend) {
    build+='<TR><TD><TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0"><TR><TD HEIGHT="10"></TD></TR>'
    for (j=0; j<C.legendItems.length; j++) {
      I=C.legendItems[j];
      build+= ((j>0)?'<TR><TD HEIGHT="2"></TD></TR>':'')+'<TR><TD VALIGN="top"><TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0"><TR><TD COLSPAN="3"><IMG SRC="/products/benchmarks/pix/sp333333.gif" WIDTH="11" HEIGHT="1"></TD></TR><TR><TD><IMG SRC="/products/benchmarks/pix/sp333333.gif" WIDTH="1" HEIGHT="9"></TD><TD BGCOLOR="'+getColor(I.type)+'"><IMG SRC="/products/benchmarks/pix/'+getColor(I.type,1)+'" WIDTH="9" HEIGHT="9"></TD><TD><IMG SRC="/products/benchmarks/pix/sp333333.gif" WIDTH="1" HEIGHT="9"></TD></TR><TR><TD COLSPAN="3"><IMG SRC="/products/benchmarks/pix/sp333333.gif" WIDTH="11" HEIGHT="1"></TD></TR></TABLE></TD><TD><IMG SRC="/sites/templates/pix/spacer.gif" WIDTH="7" HEIGHT="2"></TD><TD><FONT FACE="Arial,Helvetica" SIZE="1" CLASS="sm" COLOR="#666666">'+I.label+'</FONT></TD></TR>';
    }
    build+='</TABLE></TD></TR>'
  }

  build+='</TABLE><br>';
  

  if (C.index>0) { document.write('<table border="0" cellspacing="0" cellpadding="0"><tr><td height="20"></td></tr></table>\n'); }

  document.write(build);


}

function fLabel(C,text) { if (C.wrapAt) { var j,a=C.wrapAt.toLowerCase().split('|'); for (j=0; j<a.length; j++) { var p=text.toLowerCase().indexOf(a[j],p); var s=0; while(p>-1) { s=(text.charAt(p-1)==' ')?1:0; text=text.substring(0,p-s)+'<br>'+text.substring(p); var p=text.toLowerCase().indexOf(a[j],p+5); } } } return(text); }

function writePage() {
  var B=BENCHMARKS[benchmarkID]; if (!B)return;

  document.write('<table border="0" cellspacing="0" cellpadding="0"><tr><td><IMG SRC="/products/benchmarks/pix/printlogo.gif" WIDTH="60" HEIGHT="35" ALT="Intel(R)"></td></tr><tr><td height="15"></td></tr></table>');
  document.write('<table border="0" cellspacing="0" cellpadding="0"><tr><td xalign="right"><font face="Arial,Helvetica" size="1" CLASS="sm"><a href="print.htm?bw='+((BLACKWHITE)?0:1)+'&" class="bw">[ View in '+((BLACKWHITE)?'Color':'Black & White')+' ]</a>&nbsp;</font></td></tr><tr><td height="12"></td></tr></table>');
  document.write('<table border="0" cellspacing="0" cellpadding="0"><tr><td><FONT FACE="Arial Black,Arial,Helvetica" SIZE="4" CLASS="printhead">Intel&#174; '+SECTION.charAt(0).toUpperCase()+SECTION.substring(1,SECTION.length)+' Performance</FONT></td></tr><tr><td height="20"></td></tr></table>');

  drawTitle(B);
  
  for (k=0; k<B.charts.length; k++) { drawChart(B.charts[k]); }
  drawDescription(B);
  document.write('<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0"><TR><TD HEIGHT="20"></TD></TR><TR><TD><IMG SRC="/products/benchmarks/pix/benchmark_details.gif" WIDTH="120" HEIGHT="15" ALT="Benchmark Details"></TD></TR></TABLE>')

}


var loc=window.location.toString();
var p=loc.indexOf('/print.htm');
loc=loc.substring(0,p)
var p=loc.lastIndexOf('/');
loc=loc.substring(p+1,loc.length)
var benchmarkID=loc;
