SECTION='notebook';
//Intel(R) Centrino(TM) Mobile Technology

//***************************//

BM=new BenchMark('cmt_mobileexp');
BM.title='Mobile Experience';
BM.subtitle='MobileMark* 2002&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
BM.description='MobileMark* 2002 is a benchmark created by BAPCo* that measures both performance and battery life at the same time using popular applications.'
BM.legend('P4','Mobile Intel&#174; Pentium&#174; 4 Processor &#150; M 2.60 GHz<img src="/products/benchmarks/pix/spacer.gif" width="30" height="4"><a target="_blank" href="/performance/mobile/notebook_configc.htm">Notebook PC Configurations</a></nobr><br><font style="font-size: 10px;">(86.4 WHr, 5.7 lbs, 1.4" thickness)<img src="/products/benchmarks/pix/spacer.gif" width="30" height="4">');
BM.legend('M','Intel&#174; Centrino&#153; Mobile Technology<br><font style="font-size: 10px;">&nbsp;&nbsp;&nbsp;-Intel&#174; Pentium&#174; M Processor 1.70 GHz<br>(71.3 WHr, 5.3 lbs, 1.0" thickness)</font>');
  
CHART=BM.addChart(); CHART.size(150,115); CHART.max=250; CHART.tickInterval=50; CHART.barWidth=40; CHART.note=''; CHART.wrapAt=' GHz'
CHART.header='Performance';
CHART.subhead='Higher bars indicate better performance';

CHART.bar('P4','',179);
CHART.bar('M','',195);

CHART=BM.addChart(); CHART.twin(); CHART.size(220,115); CHART.max=450; CHART.tickInterval=50; CHART.barWidth=40; CHART.note=''; CHART.horiz=1;
CHART.header='Battery Life';
CHART.subhead='Measurement shown in minutes';
CHART.bar('P4','',290);
CHART.bar('M','',399);



//***************************//

BM=new BenchMark('cmt_internet_unwired');
BM.title='Internet (802.11b Wireless)';
BM.subtitle='WebMark* 2001'
BM.description='WebMark 2001 is an Internet benchmark designed to measure the performance of a user interacting on the Internet. Created by independent testing labs, the test measures the performance of a variety of Internet technologies.'
BM.legend('P4','Mobile Intel&#174; Pentium&#174; 4 Processor &#150; M 2.60 GHz<img src="/products/benchmarks/pix/spacer.gif" width="30" height="4"><a target="_blank" href="/performance/mobile/notebook_configc.htm">Notebook PC Configurations</a></nobr>');
BM.legend('M','Intel&#174; Centrino&#153; Mobile Technology<br><font style="font-size: 10px;">&nbsp;&nbsp;&nbsp;-Intel&#174; Pentium&#174; M Processor 1.70 GHz</font>');
  
CHART=BM.addChart('Internet'); CHART.max=400; CHART.size(350,170); CHART.tickInterval=100; CHART.barWidth=40;
CHART.bar('P4','',263);
CHART.bar('M','',288);

//***************************//

defaultBM='cmt_mobileexp';


