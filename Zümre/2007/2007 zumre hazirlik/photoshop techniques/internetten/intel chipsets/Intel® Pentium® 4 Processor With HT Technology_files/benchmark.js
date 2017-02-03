//function BenchMarks(tabName,radiobutton,[iid identifier])



function BenchMarks(t,q,p) {
   var win=window.open('/products/benchmarks/'+t+'/index.htm?bm='+q + ( (p) ?'&iid=ipc+'+p+'&' : '' ),'benchmark1','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=692,height=550,left=50,top=50');
  if (window.focus)win.focus();
}


function BenchMark(t,p) {
   var win=window.open('/products/benchmarks/'+t+'/index.htm' + ( (p) ?'?iid=ipc+'+p+'&' : ''),'benchmark1','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=692,height=550,left=50,top=50');
  if (window.focus)win.focus();
}


function BenchMarkOpt(t,q,p) {
   var win=window.open('/products/benchmarks/'+t+'/index.htm' + ( (p) ?'?iid=ipc+'+p+'&bm='+q+'&' : '?bm='+q ),'benchmark1','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=692,height=550,left=50,top=50');
  if (window.focus)win.focus();
}


//Optional iid tag & open default tab of Consumer Music
function ComparePerf(t,p) {
   var win=window.open('/products/benchmarks/'+t+'/index.htm' + ( (p) ?'?iid=ipc+'+p+'&' : ''),'benchmark1','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=692,height=550,left=50,top=50');
  if (window.focus)win.focus();
}

//Optional iid tag & open the [q] tab: Consumer_Music, Consumer_Gaming
function ComparePerfOpt(t,q,p) {
   var win=window.open('/products/benchmarks/'+t+'/index.htm' + ( (p) ?'?iid=ipc+'+p+'&bm='+q+'&' : '?bm='+q ),'benchmark1','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=692,height=550,left=50,top=50');
  if (window.focus)win.focus();
}
