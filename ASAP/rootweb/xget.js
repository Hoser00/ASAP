// Joseph P Day
// j.day@knxu.com
// 209 559-4990

//var xh;
var date = new Date();
var path = "http://sierragen.com/services/asap/";
var spath = "/home/sgn_0/rootweb/services/asap/";
var toolpath = "http://sierragen.com/php/";
var local = "http://sustainableasap.com/";


var theTable = "";
var theVal = "";
var al='';
var an='';
var BID='';
var LOC='';
//var VIMG='';




function xtest(t)
{
  alert("Test: "+t);
}


function setan(t)
{
  an=t;
}


function setal(t)
{
  al=t;
}

function getXH()
{
  if (window.XMLHttpRequest)
  {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    return new XMLHttpRequest();
  }
  else if (window.ActiveXObject)
  {
    // code for IE6, IE5
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  else
  {
    return null;
  }
}


function fileopen(f)
{
  window.open(f);
}


function pickTable(t)
{
  theTable = t;
}



function doLogin(login)
{
  var url = local+"php/i_alogin.php";
  var text;
  var params="";
  var xfile = "alogin.php";

//alert("doLogin "+login)

  if(login==1) {params += "login="+encodeURIComponent(1);}
  else if(login==2)
  {
    var logform = document.getElementById('aloginID');

    var len0 = logform.length;
    var i;
    var pval;
    for(i=0; i<len0; i++)
    {
      if(i)params += "&";
      pval = logform[i].value;
      params += logform[i].name+"="+encodeURIComponent(pval);
    }
  }
  else
  {

    params += "check="+encodeURIComponent(1);
  }

  params += "&xfile="+encodeURIComponent(xfile);


//alert("doLogin params\n"+params);
alert("URL is "+url);

  xhl = getXH();
  if(!xhl){alert("Your browser does not support XMLHTTP");}

  xhl.open("POST",url,true);
  xhl.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhl.onreadystatechange = stateChanged;
  xhl.send(params);

//  xhl.open("GET",url,true);
//  xhl.onreadystatechange = stateChanged;
//  xhl.send();

  function stateChanged()
  {
    if (xhl.readyState==4)
    {
     if(xhl.status == 200)
     {
      text="";
      text = xhl.responseText;

//alert("doLogin response: \n'"+text+"'");

      var resp = new Array();
try
{
      resp = text.split('#');
}
catch(err)
{
  alert(err);
}
      var alevel = parseInt(resp[0]);
      SID = resp[2];
      Sname = resp[3];

      if(!alevel || alevel == 'NaN') 
      {
        document.getElementById("alogin").innerHTML='<br /><br /><br />'+text;
        document.getElementById("tables").innerHTML="";
        document.getElementById("actions").innerHTML="";
        document.getElementById("results").innerHTML="";
        document.getElementById("extras").innerHTML="";
      }
      else
      {
        an=resp[1];
        al=resp[0];
        document.getElementById("alogin").innerHTML="";
        document.getElementById("tables").innerHTML='';
        text = '<br />Admin: '+resp[1]+'<br />Level: '+resp[0]+'<br /><br /><br /><br />';
        document.getElementById("who").innerHTML=text;

        doControls();
      }
     }
     else
     {

      text = xhl.responseText;

//alert("doLogin error response: \n'"+text+"'");

      document.getElementById("alogin").innerHTML="";
      document.getElementById("actions").innerHTML="";
      document.getElementById("results").innerHTML="";
      document.getElementById("extras").innerHTML="";
      document.getElementById("tables").innerHTML=xhl.status+" - "+xhl.readyState;
     }
    }
  }
}


function clearBelow(d)
{
  // Clear all below the named div, the named div is not cleared
  // Divs 'controls' and 'business' will never be cleared by this function

  var divs= new Array('business','bselect','bactions','tables','actions','sel1','sel2','sel3','results','extras');
  var dlen = divs.length;
  var clear=0;
  var thediv;
  var i,j;

  for(i=0;i<dlen;i++)
  {

    thediv = divs[i];
    j=i+1;

//    alert("Clear divs below "+d+":\n"+j+") "+thediv+" of "+dlen+"\nClear is "+clear);

    if(clear == 0)
    {
      if(divs[i] == d) clear = 1;
    }
    else
    {
      document.getElementById(thediv).innerHTML="";
    }
  }
}


function doControls()
{
  var cntls='';
//  alert("Do Controls for admin "+an+" at level "+al);

  if(al>2)
  {
    cntls += '<input type="button" onclick="doListAllTables();" name="LAT" value="TABLES">';
    cntls += '<input type="button" onclick="describeTable();" name="doTable" value="DESCRIBE">';
    cntls += '<input type="button" onclick="listTable();" name="doTable" value="LIST">';
    cntls += '<input type="button" onclick="addToTable();" name="doTable" value="ADD">';
  }
  if(al>3)
  {
    cntls += '<input type="button" onclick="doSQL();" name="doTable" value="SQL">';
  }
  if(al>2)
  {
    cntls += '<input type="button" onclick="importTable();" name="ITAB" value="IMPORT">';
    cntls += '<input type="button" onclick="doAllBiz(an);" name="doAllBiz" value="BUSINESS">';
  }

  if(al<3)
  {
    cntls = "";
    doBiz(an);
  }
  else
  {
    document.getElementById('controls').innerHTML=cntls;
  }
}

function getDB(p)
{
//  var url = path+"DB_test.php";

alert("getDB was just called");

/*
  var url = path+"DB_info.php";
  var params = "";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&table="+encodeURIComponent(theTable);
  params += "&doTable="+encodeURIComponent(p);
  params += "&al="+encodeURIComponent(al);

//alert("getDB params "+params);

  if(p == 'SUBMIT SQL')
  {
    var ls = document.getElementById('lsID');
    var len = ls.length;
    var val = "";

    for(x=0;x<len;x++)
    {
      if(ls.options[x].selected)
      {
        if(val == ''){val=ls.options[x].value;}
        else{ val += "#"+ls.options[x].value;}
      }
      if(val == '*') x = len;
    }

    params += "&listsel="+encodeURIComponent(val);
    params += "&p11="+encodeURIComponent(document.forms[0].p11.value);
    params += "&w1="+encodeURIComponent(document.forms[0].w1.value);
    params += "&r1="+encodeURIComponent(document.forms[0].r1.value);
    params += "&t11="+encodeURIComponent(document.forms[0].t11.value);
    params += "&b12="+encodeURIComponent(document.forms[0].b12.value);
    params += "&t12="+encodeURIComponent(document.forms[0].t12.value);
    params += "&p13="+encodeURIComponent(document.forms[0].p13.value);
    params += "&b21="+encodeURIComponent(document.forms[0].b21.value);
    params += "&p21="+encodeURIComponent(document.forms[0].p21.value);
    params += "&w2="+encodeURIComponent(document.forms[0].w2.value);
    params += "&r2="+encodeURIComponent(document.forms[0].r2.value);
    params += "&t21="+encodeURIComponent(document.forms[0].t21.value);
    params += "&b22="+encodeURIComponent(document.forms[0].b22.value);
    params += "&t22="+encodeURIComponent(document.forms[0].t22.value);
    params += "&p23="+encodeURIComponent(document.forms[0].p23.value);
    params += "&b31="+encodeURIComponent(document.forms[0].b31.value);
    params += "&p31="+encodeURIComponent(document.forms[0].p31.value);
    params += "&w3="+encodeURIComponent(document.forms[0].w3.value);
    params += "&r3="+encodeURIComponent(document.forms[0].r3.value);
    params += "&t31="+encodeURIComponent(document.forms[0].t31.value);
    params += "&b32="+encodeURIComponent(document.forms[0].b32.value);
    params += "&t32="+encodeURIComponent(document.forms[0].t32.value);
    params += "&p33="+encodeURIComponent(document.forms[0].p33.value);
    params += "&pagemax="+encodeURIComponent(document.forms[0].pagemax.value);
    params += "&step="+encodeURIComponent(document.forms[0].step.value);

  }

  xhg = getXH();
  if(!xhg){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xhg);}

  xhg.open("POST",url,true);
  xhg.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//  http.setRequestHeader("Content-length", params.length);
//  http.setRequestHeader("Connection", "close");

  xhg.onreadystatechange = stateChanged;
  xhg.send(params);

  function stateChanged()
  {
    var text;
    var tab = document.getElementById("tables");
    if (xhg.readyState==4)
    {    
      text = xhg.responseText;
      alert(text);
//      tab.innerHTML=text;
    }
  }
*/

}


function getPwd(p)
{

//alert("PWD");

  if(!p) p="";

  var url = local+"php/t_file.php";
  var text;
  var params="";
  var xfile = "ptool.php";
  var params = "";

  if(p!='')
  {
    params += "p="+encodeURIComponent(p);
  }

  params += "&xfile="+encodeURIComponent(xfile);

  xhp = getXH();
  if(!xhp){alert("Your browser does not support XMLHTTP");}

  xhp.open("POST",url,true);
  xhp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhp.onreadystatechange = stateChanged;
  xhp.send(params);


  function stateChanged()
  {
    if (xhp.readyState==4)
    {

      var text =  xhp.responseText;
      document.getElementById("lptool").innerHTML=text;
    }
  }
}

function spwd()
{

  var p1 = document.getElementById('pwd1');
  var p2 = document.getElementById('pwd2');

  getPwd(p1.value+"#"+p2.value);

}

function getTS()
{
//  alert('TS');

  var url = local+"php/t_file.php";
  var text;
  var params="";
  var xfile = "timetool.php";

  params += "xfile="+encodeURIComponent(xfile);

  xhts = getXH();
  if(!xhts){alert("Your browser does not support XMLHTTP");}

  xhts.open("POST",url,true);
  xhts.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhts.onreadystatechange = stateChanged;
  xhts.send(params);


  function stateChanged()
  {
    if (xhts.readyState==4)
    {

      var text =  xhts.responseText;

      document.getElementById("ltimetool").innerHTML=text;
    }
  }
}


function getUP(loc)
{
//  alert('getUP '+loc);
  if(loc == undefined) loc = 0;

  var isrc = "http://sierragen.com/php/uptool.php";
  var code = "";

  isrc += "?loc="+encodeURIComponent(loc);
  isrc += "&DBpath="+encodeURIComponent(spath);
  isrc += "&c="+encodeURIComponent(0);

  code = '<iframe src="'+isrc+'" frameborder="0" border="0" width="360" height="200" style="border:none;"></iframe>';

  document.getElementById("luptool").innerHTML=code;
  document.getElementById("luptool").style.visibility="visible";
}



function delUpload(file,p)
{

  var doit = confirm("Delete "+file+"?");

  if(doit==false) return;

  var url = local+"php/i_file.php";
  var text;
  var params = "";
  var xfile = "DB_delUpload.php";

  if(p == undefined || path == "") p = spath + "/upload";
  
  params += SID+"="+encodeURIComponent(Sname);
  params += "&file="+encodeURIComponent(file);
  params += "&loc="+encodeURIComponent(p);
  params += "&xfile="+encodeURIComponent(xfile);

  clearBelow('sel2');
  xhdf = getXH();

  if(!xhdf){alert("Your browser does not support XMLHTTP");}

  xhdf.open("POST",url,true);

  xhdf.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhdf.onreadystatechange = stateChanged;
  xhdf.send(params);

  function stateChanged()
  {
    if (xhdf.readyState==4)
    {

      var text =  xhdf.responseText;
      var info = text.split('#');

      var s2 = document.getElementById("sel2");

      if(info[1]=='OK')
      {
        s2.innerHTML="<h3>Result:</h3>&nbsp;&nbsp;Successfully deleted "+file;
        importTable();
      }
      else {s2.innerHTML="<h3>Result:</h3>&nbsp;&nbsp;Failed to delete "+file;}
    }
  }
}




function dotime()
{

  // Use this function when want to get a TS for a different date and time
  // If want to use this function, need to edit timetool.php - see getTS()

  var t1 = document.getElementById('time1');
  var t2 = document.getElementById('time2');

  getTS(t1.value+"#"+t2.value);

}



function addToTable(t,getval)
{

  // getval should look like: f1#t1;f2#t2;...
  // get values from fs
  // v1 = document.getElementById(f1_ID).value
  // then repackage:
  // setval = t1#v1;t2#v2;...

  var setval = "";

  var table = theTable;
  if(t != undefined)table = t;

  var vals = new Array();

  if(getval)
  {

    var val,i,tid;
    var pairs = getval.split(';');
    var pdata = new Array();
    var pnum = pairs.length;

    for(i = 0; i< pnum; i++)
    {
      pdata = pairs[i].split('#');
      tid = pdata[0];
      val = "";
      if(document.getElementById(tid)) val = document.getElementById(tid).value;
//alert("addtotable hi "+val);
      pairs[i]= pdata[1]+"#"+val;
    }
    setval = pairs.join(';');

//alert("Getval is '"+getval+"'\nSetval is '"+setval+"'");

  }


//alert("Add To Table: t="+t+", theTable="+theTable);

  var url = local+"php/i_file.php";
  var text;
  var params = "";
  var xfile = "DB_addToTable.php";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&table="+encodeURIComponent(table);
  params += "&xfile="+encodeURIComponent(xfile);

  if(setval != 'undefined')params += "&setval="+encodeURIComponent(setval);
 
//  alert(table);

  xhadd = getXH();
  if(!xhadd){alert("Your browser does not support XMLHTTP");}

  xhadd.open("POST",url,true);
  xhadd.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhadd.onreadystatechange = stateChanged;
  xhadd.send(params);

  function stateChanged()
  {
    if (xhadd.readyState==4)
    {

      var text =  xhadd.responseText;

      clearBelow('actions');
      document.getElementById("actions").innerHTML=text;

//      document.getElementById("results").innerHTML="";
//      document.getElementById("extras").innerHTML="";
    }
  }

}


function doAddToTable(table,data,pkeys,auto)
{

  var url = local+"php/i_file.php";
  var text;
  var params = "";
  var xfile = "DB_add.php";

  var darray = new Array();
  darray = data.split('#');
  var tdata = data.split('_IDadd');
  data = tdata.join('');
  tdata = data.split('#');
  data = tdata.join('#');

  var len = darray.length;
  var i;
  var temp;
  var par;

  params += SID+"="+encodeURIComponent(Sname);
  params += "&table="+encodeURIComponent(table);
  params += "&data="+encodeURIComponent(data);
  params += "&pkeys="+encodeURIComponent(pkeys);
  params += "&auto="+encodeURIComponent(auto);
  params += "&xfile="+encodeURIComponent(xfile);

  for(i=0;i<len;i++)
  {
    temp = document.getElementById(darray[i]);
    params += "&"+tdata[i]+"="+encodeURIComponent(temp.value);
  }

//  alert(params);

  xh = getXH();
  if(!xh){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xh);}

  xh.open("POST",url,true);
  xh.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xh.onreadystatechange = stateChanged;
  xh.send(params);


  function stateChanged()
  {
    if (xh.readyState==4)
    {

      var text =  xh.responseText;

      document.getElementById("results").innerHTML='<br /><span style="">'+text+'</span>';
      document.getElementById("extras").innerHTML="";
      var oldTable = theTable;
//alert("theTable is "+theTable+", table is "+table);
      theTable=table;
//      listTable();
      theTable=oldTable;
    }
  }


}

function xtest2(s)
{
  document.getElementById('actions').innerHTML=s;
}


function describeTable()
{
  var table = theTable;

  var url = local+"php/i_file.php";
  var text;
  var params="";
  var xfile = "DB_describe.php";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&table="+encodeURIComponent(table);
  params += "&xfile="+encodeURIComponent(xfile);

//  alert(params);

  xhdesc = getXH();
  if(!xhdesc){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xh);}

  xhdesc.open("POST",url,true);
  xhdesc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhdesc.onreadystatechange = stateChanged;
  xhdesc.send(params);


  function stateChanged()
  {
    if (xhdesc.readyState==4)
    {

      var text =  xhdesc.responseText;

      document.getElementById("actions").innerHTML=text;
      document.getElementById("results").innerHTML="";
      document.getElementById("extras").innerHTML="";
    }
  }

}


function listTable(s)
{

//  alert("s is "+s);
  var table = theTable;

  var url = local+"php/i_file.php";
  var text;
  var params="";
  var xfile = "DB_listTable.php";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&table="+encodeURIComponent(table);
  params += "&xfile="+encodeURIComponent(xfile);

  if(!s)
  {
    params += "&clear="+encodeURIComponent(0);
  }
  else if(s == 'clear')
  {
    params += "&clear="+encodeURIComponent(1);
  }
  else
  {

    var x;

    // See DB_listTable.php name 'listsel' for select around line 74
    var ls = document.getElementById('lsID');
    var len = ls.length;
    var val = "";

    for(x=0;x<len;x++)
    {
      if(ls.options[x].selected)
      {
        if(val == ''){val=ls.options[x].value;}
        else{ val += "#"+ls.options[x].value;}
      }
      if(val == '*') x = len;
    }

/*
//alert("There are "+document.forms.length+" forms");
var flist = "";
var fnum = document.forms.length;
var fitems;

for(i=0;i<fnum;i++)
{
  flist += "\nForm "+document.forms[i].name+":\n";
  fitems = document.forms[i].length;
  for(j=0;j<fitems;j++)
  {
    flist += j+") "+document.forms[i][j].id+"\n";
  }
}

alert(flist);
*/

    params += "&clear="+encodeURIComponent(0);
    params += "&listsel="+encodeURIComponent(val);
    params += "&p11="+encodeURIComponent(document.forms[0].p11.value);
    params += "&w1="+encodeURIComponent(document.forms[0].w1.value);
    params += "&r1="+encodeURIComponent(document.forms[0].r1.value);
    params += "&t11="+encodeURIComponent(document.forms[0].t11.value);
    params += "&b12="+encodeURIComponent(document.forms[0].b12.value);
    params += "&t12="+encodeURIComponent(document.forms[0].t12.value);
    params += "&p13="+encodeURIComponent(document.forms[0].p13.value);
    params += "&b21="+encodeURIComponent(document.forms[0].b21.value);
    params += "&p21="+encodeURIComponent(document.forms[0].p21.value);
    params += "&w2="+encodeURIComponent(document.forms[0].w2.value);
    params += "&r2="+encodeURIComponent(document.forms[0].r2.value);
    params += "&t21="+encodeURIComponent(document.forms[0].t21.value);
    params += "&b22="+encodeURIComponent(document.forms[0].b22.value);
    params += "&t22="+encodeURIComponent(document.forms[0].t22.value);
    params += "&p23="+encodeURIComponent(document.forms[0].p23.value);
    params += "&b31="+encodeURIComponent(document.forms[0].b31.value);
    params += "&p31="+encodeURIComponent(document.forms[0].p31.value);
    params += "&w3="+encodeURIComponent(document.forms[0].w3.value);
    params += "&r3="+encodeURIComponent(document.forms[0].r3.value);
    params += "&t31="+encodeURIComponent(document.forms[0].t31.value);
    params += "&b32="+encodeURIComponent(document.forms[0].b32.value);
    params += "&t32="+encodeURIComponent(document.forms[0].t32.value);
    params += "&p33="+encodeURIComponent(document.forms[0].p33.value);
    params += "&pagemax="+encodeURIComponent(document.forms[0].pagemax.value);
    params += "&step="+encodeURIComponent(document.forms[0].step.value);

  }
    
//  alert(params);

  xhlist = getXH();
  if(!xhlist){alert("Your browser does not support XMLHTTP");}

  xhlist.open("POST",url,true);
  xhlist.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhlist.onreadystatechange = stateChanged;
  xhlist.send(params);


  function stateChanged()
  {
    if (xhlist.readyState==4)
    {

      var text =  xhlist.responseText;

      var data = new Array();
      data = text.split('[[DATA]]');

//alert("Got "+data[1]);

      var info = new Array();
      info = data[1].split('#');
      var sql = info[0];
      var step = info[2];
      var max = parseInt(info[3]);

      document.getElementById("actions").innerHTML=data[0];
      if(s!='relist') document.getElementById("results").innerHTML="";
      document.getElementById("extras").innerHTML="";

      doListTable(sql,table,step,max);
    }
  }
}

function showText(t,loc)
{
  var text = t + '<br /><br /><input type="button" value="Close" onclick="hideText(\''+loc+'\')">';
  document.getElementById(loc).innerHTML = text;
}

function hideText(loc)
{
  document.getElementById(loc).innerHTML = '';
}


function doListTable(sql,table,step,max)
{

//  alert("SQL "+sql+", table "+table+", step "+step+", max '"+max+"'");

  var table = theTable;

  var url = local+"php/i_file.php";
  var text;
  var params="";
  var xfile = "DB_doListTable.php";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&table="+encodeURIComponent(table);
  params += "&xfile="+encodeURIComponent(xfile);
  params += "&sql="+encodeURIComponent(sql);
  params += "&step="+encodeURIComponent(step);
  params += "&max="+encodeURIComponent(max);

//  alert(params);

  xhdlist = getXH();
  if(!xhdlist){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xh);}

  xhdlist.open("POST",url,true);
  xhdlist.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhdlist.onreadystatechange = stateChanged;
  xhdlist.send(params);


  function stateChanged()
  {
    if (xhdlist.readyState==4)
    {

      var text =  xhdlist.responseText;

//alert("doListTable... \n"+text);

      document.getElementById("results").innerHTML=text;
      document.getElementById("extras").innerHTML="";
    }
  }
}


function doSQL()
{
//  alert("Doing SQL");

  var url = local+"php/i_file.php";
  var text;
  var params="";
  var xfile = "DB_SQL.php";

  var num = Math.random();

  params += SID+"="+encodeURIComponent(Sname);
  params += "&num="+encodeURIComponent(num);
  params += "&xfile="+encodeURIComponent(xfile);

//  alert("Looking for "+document.forms[0].SQL_area);
  if(document.forms[0].SQL_area)
  {
    params += "&SQL_area="+encodeURIComponent(document.forms[0].SQL_area.value);
  }

//  params += "&num="+encodeURIComponent(num);

//  alert("doSQL params:\n"+params);

  xhsql = getXH();
  if(!xhsql){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xhsql);}

  xhsql.open("POST",url,true);
  xhsql.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//  http.setRequestHeader("Content-length", params.length);
//  http.setRequestHeader("Connection", "close");

  xhsql.onreadystatechange = stateChanged;
  xhsql.send(params);

  function stateChanged()
  {
    if (xhsql.readyState==4)
    {    
      text = xhsql.responseText;
      document.getElementById("actions").innerHTML=text;
      document.getElementById("results").innerHTML="";
      document.getElementById("extras").innerHTML="";
    }
  }
}



function updateTable(table, where, rtn)
{
//  alert("Update "+table+" where "+where+" - "+rtn);
  LOC = rtn;

  var url = local+"php/i_file.php";
  var text;
  var params="";
  var xfile = "DB_update.php";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&table="+encodeURIComponent(table);
  params += "&where="+encodeURIComponent(where);
  params += "&xfile="+encodeURIComponent(xfile);

  xhup = getXH();
  if(!xhup){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xhup);}

  xhup.open("POST",url,true);
  xhup.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhup.onreadystatechange = stateChanged;
  xhup.send(params);


  function stateChanged()
  {
    if (xhup.readyState==4)
    {

      var text =  xhup.responseText;

      if(rtn){document.getElementById(LOC).innerHTML+=text;}
      else {document.getElementById("extras").innerHTML=text;}

    }
  }
}



function doUpdateTable(table,fields,pkeys,auto,where)
{

//  alert(table+", "+fields+", "+pkeys+", "+auto+", "+where);

  var url = local+"php/i_file.php";
  var text;
  var params="";
  var xfile = "DB_doUpdate.php";

  var darray = new Array();
  darray = fields.split('#');
  var tdata = fields.split('_ID');
  fields = tdata.join('');
  tdata = fields.split('#');
  fields = tdata.join('#');

  var len = darray.length;
  var i;
  var temp;
  var par;

  params += SID+"="+encodeURIComponent(Sname);
  params += "&table="+encodeURIComponent(table);
  params += "&fields="+encodeURIComponent(fields);
  params += "&pkeys="+encodeURIComponent(pkeys);
  params += "&auto="+encodeURIComponent(auto);
  params += "&where="+encodeURIComponent(where);
  params += "&xfile="+encodeURIComponent(xfile);

//  alert(params);
//  alert ("darray length "+len);

  for(i=0;i<len;i++)
  {
    temp = document.getElementById(darray[i]);
    params += "&"+tdata[i]+"="+encodeURIComponent(temp.value);
  }

//  alert(params);

  xh = getXH();
  if(!xh){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xh);}

  xh.open("POST",url,true);
  xh.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xh.onreadystatechange = stateChanged;
  xh.send(params);


  function stateChanged()
  {
    if (xh.readyState==4)
    {

      var text =  xh.responseText;

      document.getElementById("extras").innerHTML=text;
      listTable('relist');
    }
  }
}


function doDBDel(s)
{
  if( confirm("Are you sure you want to delete this record?\n\nSQL:\n"+s) )
  {

  var url = local+"php/i_file.php";
  var text;
  var params="";
  var xfile = "DB_doDel.php";

    params += SID+"="+encodeURIComponent(Sname);
    params += "&sql="+encodeURIComponent(s);
    params += "&xfile="+encodeURIComponent(xfile);

    xhdel = getXH();
    if(!xhdel){alert("Your browser does not support XMLHTTP");}

    xhdel.open("POST",url,true);
    xhdel.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhdel.onreadystatechange = stateChanged;
    xhdel.send(params);
  }

  function stateChanged()
  {
    if (xhdel.readyState==4)
    {
      var text =  xhdel.responseText;
      listTable('relist');
    }
  }
}


function doListAllTables()
{
//  alert("do List All Tables has "+theTable);

  var url = local+"php/i_file.php";
  var text;
  var params="";
  var xfile = "DB_listAllTables.php";

    params += SID+"="+encodeURIComponent(Sname);
    params += "&table="+encodeURIComponent(theTable);
    params += "&xfile="+encodeURIComponent(xfile);

    xhlt = getXH();
    if(!xhlt){alert("Your browser does not support XMLHTTP");}

    xhlt.open("POST",url,true);
    xhlt.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhlt.onreadystatechange = stateChanged;
    xhlt.send(params);

  function stateChanged()
  {
    if (xhlt.readyState==4)
    {
      var text =  xhlt.responseText;
      clearBelow('business');
      document.getElementById('tables').innerHTML = text;
    }
  }
}


////////////////////////////
//
//  Business editing functions

function doBiz(a)
{
//alert("DoBiz " + a);

  var url = local+"php/i_file.php";
  var text;
  var xfile = "DB_doBiz.php";
  var params = "";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&admin="+encodeURIComponent(a);
  params += "&xfile="+encodeURIComponent(xfile);

//alert("DoBiz params:\n"+params);


  xhb = getXH();
    if(!xhb){alert("Your browser does not support XMLHTTP");}

    xhb.open("POST",url,true);
    xhb.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhb.onreadystatechange = stateChanged;
    xhb.send(params);


  function stateChanged()
  {
    if (xhb.readyState==4)
    {
      var text =  xhb.responseText;
//      document.getElementById('actions').innerHTML = text;

//alert("XHB: \n"+text);

// There were blank lines coming from a mystery source. 
// These will be in info[0] to be discarded.
// Ideally, the source would be discovered and eliminated.
// No time for that now.

      var info = text.split('#');
      if(!info[1] || !info[2])
      {
        alert("MySQL error: Admin not found");
      }
      else
      {
        clearBelow('business');
        editBiz(info[1]);
      }
    }
  }
}


function doAllBiz(a)
{
//alert("DoBiz " + a);

  var url = local+"php/i_file.php";
  var text;
  var xfile = "DB_doAllBiz.php";
  var params = "";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&admin="+encodeURIComponent(a);
  params += "&xfile="+encodeURIComponent(xfile);

  xhab = getXH();

    if(!xhab){alert("Your browser does not support XMLHTTP");}

    xhab.open("POST",url,true);
    xhab.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhab.onreadystatechange = stateChanged;
    xhab.send(params);


  function stateChanged()
  {
    if (xhab.readyState==4)
    {
      var text =  xhab.responseText;
      clearBelow('business');

      document.getElementById('bselect').innerHTML = text;

//alert("XHAB:\n"+text);

    }
  }
}

function doSelBiz()
{
  var BID = document.getElementById('BizID').value;
  editBiz(BID);
}



function editBiz(b)
{
//  alert("Edit Biz BID "+b);

  BID = b;
  var url = local+"php/i_file.php";
  var text;
  var xfile = "DB_EditBiz.php";
  var params = "";
  params += SID+"="+encodeURIComponent(Sname);
  params += "&admin="+encodeURIComponent(an);
  params += "&BID="+encodeURIComponent(b);
  params += "&xfile="+encodeURIComponent(xfile);

  xheb = getXH();

    if(!xheb){alert("Your browser does not support XMLHTTP");}

    xheb.open("POST",url,true);
    xheb.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xheb.onreadystatechange = stateChanged;
    xheb.send(params);


  function stateChanged()
  {
    if (xheb.readyState==4)
    {
      var where;
      var MID;

//alert("BID is "+b);

      var text =  xheb.responseText;
      document.getElementById('bactions').innerHTML = text;

      var info = text.split('#');

      text = info[1];

//alert("XHEB:\n"+text);

      document.getElementById('bactions').innerHTML = text;

    }
  }

}

function doEditBiz(b)
{
//  alert("Your BID is "+b);

  var url = local+"php/i_file.php";
  var text;
  var xfile = "DB_doEditBiz.php";
  var params = "";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&admin="+encodeURIComponent(a);
  params += "&xfile="+encodeURIComponent(xfile);

  xhdeb = getXH();

    if(!xheb){alert("Your browser does not support XMLHTTP");}

    xhdeb.open("POST",url,true);
    xhdeb.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhdeb.onreadystatechange = stateChanged;
    xhdeb.send(params);


  function stateChanged()
  {
    if (xhdeb.readyState==4)
    {
      var text =  xhdeb.responseText;

//alert("XHDEB:\n"+text);

      document.getElementById('actions').innerHTML = text;

    }
  }
}


function doSelect(qname, where, target, addbutton, noclear)
{
//alert("DoSelect: query name "+qname+", where "+where+", target "+target);

  var url = local+"php/i_file.php";
  var text;
  var params="";
  var xfile = "DB_doSelect.php";

// Try not to be confused here; removing a double negative below
  var clear = 1;
  if(noclear==1) clear = 0;

  params += SID+"="+encodeURIComponent(Sname);
  params += "&qname="+encodeURIComponent(qname);
  params += "&where="+encodeURIComponent(where);
  params += "&add="+encodeURIComponent(addbutton);
  params += "&xfile="+encodeURIComponent(xfile);

  xhs = getXH();

    if(!xhs){alert("Your browser does not support XMLHTTP");}

    xhs.open("POST",url,true);
    xhs.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhs.onreadystatechange = stateChanged;
    xhs.send(params);


  function stateChanged()
  {
    if (xhs.readyState==4)
    {
      var text =  xhs.responseText;

      if(clear) clearBelow(target);
//Line1420
      document.getElementById(target).innerHTML = text;
    }
  }
}

function doSelect2(qname, where, target, addbutton, noclear)
{
// Changes above should be copied here too
// Yes, this is a dumb fix, but it works

  var url = local+"php/i_file.php";
  var text;
  var params="";
  var xfile = "DB_doSelect.php";

  var clear = 1;
  if(noclear==1) clear = 0;

  params += SID+"="+encodeURIComponent(Sname);
  params += "&qname="+encodeURIComponent(qname);
  params += "&where="+encodeURIComponent(where);
  params += "&add="+encodeURIComponent(addbutton);
  params += "&xfile="+encodeURIComponent(xfile);

  xhs2 = getXH();

    if(!xhs2){alert("Your browser does not support XMLHTTP");}

    xhs2.open("POST",url,true);
    xhs2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhs2.onreadystatechange = stateChanged;
    xhs2.send(params);


  function stateChanged()
  {
    if (xhs2.readyState==4)
    {
      var text =  xhs2.responseText;

      if(clear) clearBelow(target);
//Line1420
      document.getElementById(target).innerHTML = text;
    }
  }
}



function importTable(table)
{
  stop = 0;
  upspeed = 1;

//  alert("Import "+table+" versus "+theTable);

  if(table == undefined) table = theTable;

  var url = local+"php/i_file.php";
  var text;
  var params = "";
  var xfile = "DB_import.php";
  var idir = spath + "/upload";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&importDir="+encodeURIComponent(idir);
  params += "&table="+encodeURIComponent(table);
  params += "&xfile="+encodeURIComponent(xfile);

//alert("ImportTable\n"+params);

  clearBelow('all');

  xhimp = getXH();
  if(!xhimp){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xhimp);}

  xhimp.open("POST",url,true);
  xhimp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhimp.onreadystatechange = stateChanged;
  xhimp.send(params);


  function stateChanged()
  {
    if (xhimp.readyState==4)
    {

      text =  xhimp.responseText;

      var s1 = document.getElementById("sel1");
      s1.innerHTML=text;
      s1.style.width="700px";
    }
  }
}


function doImportTable(table,file,loc,pos,num,err)
{

  if(stop == 1)
  {
    document.getElementById("sel2").innerHTML="Stopped";
    document.getElementById('abortUploadID').style.visibility='hidden';
    document.getElementById('fasterUploadID').style.visibility='hidden';
    return;
  }

  document.getElementById('abortUploadID').style.visibility='visible';
  document.getElementById('fasterUploadID').style.visibility='visible';
//  alert("Table "+table+"\nFile"+file+"\nLoc"+loc+"\nPos"+pos);

  if(table == undefined || table == "") table = theTable;
  if(num == undefined || num == "") num = 0;
  if(err == undefined || err == "") err = 0;

//alert("doImportTable Table is "+table);

  var url = local+"php/i_file.php";
  var text;
  var params = "";
  var xfile = "DB_doImport.php";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&table="+encodeURIComponent(table);
  params += "&file="+encodeURIComponent(file);
  params += "&loc="+encodeURIComponent(loc);
  params += "&pos="+encodeURIComponent(pos);
  params += "&num="+encodeURIComponent(num);
  params += "&err="+encodeURIComponent(err);
  params += "&spd="+encodeURIComponent(upspeed);
  params += "&xfile="+encodeURIComponent(xfile);

//  alert("DoImportTable\n"+params);

  xhim = getXH();
  if(!xhim){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xhim);}

  xhim.open("POST",url,true);
  xhim.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhim.onreadystatechange = stateChanged;
  xhim.send(params);


  function stateChanged()
  {
    if (xhim.readyState==4)
    {

      if(xhim.status == 200)
      {
        text =  xhim.responseText;
        var newpos;
        var num;
        var err;

        clearBelow("sel2");

        var s2 = document.getElementById("sel2");
        var info = text.split('@');
        newpos = parseInt(info[1]);
        num = info[2];
        err = info[3];

        s2.innerHTML = '<div style="border-left:solid 10px white;float:left;height:300px;"></div>';

        if(info[1] == 'END')
        {
          s2.innerHTML+="Complete";
          stop = 0;
          document.getElementById('abortUploadID').style.visibility='hidden';
        }
        else if(newpos > pos)
        {
          s2.innerHTML += "&bull; "+num+" records imported<br />";
          s2.innerHTML += "&bull; "+err+" records failed<br /><br />";
          s2.innerHTML += "&bull; Upload speed "+upspeed+"<br /><br />";
          s2.innerHTML += info[0];
          doImportTable(table,file,loc,newpos,num,err);
        }
        else
        {
          s2.innerHTML+="Problem<br /><br />"+text;
          stop = 0;
          document.getElementById('abortUploadID').style.visibility='hidden';
        }
        s2.innerHTML+='<br clear="all" />';
      }
      else
      {
        document.getElementById("sel2").innerHTML=xhim.status+" - "+xhim.readyState;
      }

    }
  }
}


function doStop()
{
  stop = 1;
}


function fasterUpload()
{
  upspeed *= 3;
}



////////////////////////////
//
//  User specific functions

function doJoin(f)
{
//alert("Join");

  var url = local+"php/i_file.php";
  var text;
  var params = "";
  var xfile = "join.php";

  if(f)
  {
    params += "fname="+encodeURIComponent(document.forms[0].fname.value);
    params += "&minit="+encodeURIComponent(document.forms[0].minit.value);
    params += "&lname="+encodeURIComponent(document.forms[0].lname.value);
    params += "&email="+encodeURIComponent(document.forms[0].email.value);
    params += "&user="+encodeURIComponent(document.forms[0].user.value);
    params += "&password="+encodeURIComponent(document.forms[0].password.value);
    params += "&password2="+encodeURIComponent(document.forms[0].password2.value);
    params += "&userval="+encodeURIComponent(document.forms[0].userval.value);
    params += "&agree="+encodeURIComponent(document.forms[0].agree.value);
    params += "&vimg="+encodeURIComponent(document.forms[0].vimgx.value);
  }

  params += "&xfile="+encodeURIComponent(xfile);

//alert(params);

  xhj = getXH();
  if(!xhj){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xh);}

  xhj.open("POST",url,true);
  xhj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhj.onreadystatechange = stateChanged;
  xhj.send(params);


  function stateChanged()
  {
    if (xhj.readyState==4)
    {
     if(xhj.status == 200)
     {

      var txt =  xhj.responseText;

      document.getElementById("join").innerHTML=txt;
     }
     else
     {
      alert("Error status: "+xhj.status);
     }
    }
  }
}


function updateB(table, where)
{
//  alert("UpdateB: table "+table+ " where "+where);

  var url = local+"php/i_file.php";
  var text;
  var params = "";
  var xfile = "DB_B_update.php";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&table="+encodeURIComponent(table);
  params += "&where="+encodeURIComponent(where);
  params += "&xfile="+encodeURIComponent(xfile);

  xhupb = getXH();
  if(!xhupb){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xhup);}

  xhupb.open("POST",url,true);
  xhupb.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhupb.onreadystatechange = stateChanged;
  xhupb.send(params);


  function stateChanged()
  {
    if (xhupb.readyState==4)
    {

      var text =  xhupb.responseText;

      clearBelow('bactions');
      document.getElementById('extras').innerHTML=text;

    }
  }
}


function updateM(where)
{
//  alert("UpdateM where "+where);

  var url = path+"ASAP_M_update.php";
  var params = "";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&where="+encodeURIComponent(where);

  xhupm = getXH();
  if(!xhupm){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xhup);}

  xhupm.open("POST",url,true);
  xhupm.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhupm.onreadystatechange = stateChanged;
  xhupm.send(params);


  function stateChanged()
  {
    if (xhupm.readyState==4)
    {

      var text =  xhupm.responseText;

      document.getElementById('extras').innerHTML=text;

    }
  }

}


function updateP(where)
{
  alert("UpdateP where "+where);
/*
  var url = path+"ASAP_M_update.php";
  var params = "";

  params += SID+"="+encodeURIComponent(Sname);
  params += "&where="+encodeURIComponent(where);

  xhupm = getXH();
  if(!xhupm){alert("Your browser does not support XMLHTTP");}//else{alert('Got '+xhup);}

  xhupm.open("POST",url,true);
  xhupm.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhupm.onreadystatechange = stateChanged;
  xhupm.send(params);


  function stateChanged()
  {
    if (xhupm.readyState==4)
    {

      var text =  xhupm.responseText;

      document.getElementById('extras').innerHTML=text;

    }
  }
*/
}



function addProduct(b)
{
//alert('addProduct '+b);

  clearBelow('tables');
  doSelect('product type','','sel1','Add PRODUCT Category',1);
  doSelect2('unit type','','sel2','Add UNIT Category',1);
  var target = "results";

  var url = path+"DB_addProduct.php";
  var params = "";
  var text;

  params += SID+"="+encodeURIComponent(Sname);
  params += "&BID="+encodeURIComponent(b);
 
//  alert(table);

  xhap = getXH();
  if(!xhap){alert("Your browser does not support XMLHTTP");}

  xhap.open("POST",url,true);
  xhap.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhap.onreadystatechange = stateChanged;
  xhap.send(params);


  function stateChanged()
  {
    if (xhap.readyState==4)
    {

      var text =  xhap.responseText;

      clearBelow(target);
      document.getElementById(target).innerHTML=text;

//      document.getElementById("results").innerHTML="";
//      document.getElementById("extras").innerHTML="";
    }
  }
}


// Use IDs to get the values

function updateID(idto,idfrom)
{
//  alert("IDto "+idto+", IDfrom "+idfrom);
  document.getElementById(idto).value=document.getElementById(idfrom).value;
}

function setTheVal(idval)
{
//  alert("Set theVal to "+idval+" ID value");
  theVal=document.getElementById(idval).value;
}




