// Joseph P Day
// j.day@knxu.com
// 209 559-4990

var date = new Date();
var path = "http://sierragen.com/services/asap/";
var toolpath = "http://sierragen.com/php/";


function xtest2(t)
{
  alert("Test: "+t);
}


function doLoginx(login)
{

  var url = path+"alogin.php";
  var value = 1;
  var params="";

//alert("doLogin "+login)

  if(login==1) {params += "login="+encodeURIComponent(value);}
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
    params += "check="+encodeURIComponent(value);
  }

//alert("URL is "+url);

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
      var text="";
      text = xhl.responseText;

//alert("Response '"+text+"'");

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
        document.getElementById("alogin").innerHTML="<br /><br /><br />"+text;
        document.getElementById("tables").innerHTML="";
        document.getElementById("actions").innerHTML="";
        document.getElementById("results").innerHTML="";
        document.getElementById("extras").innerHTML="";
      }
      else
      {
//alert("Login OK: "+resp[1]+" - "+alevel);
        document.getElementById("alogin").innerHTML="";
        document.getElementById("tables").innerHTML='';
        text = '<br />Admin: '+resp[1]+'<br />Level: '+resp[0];
        document.getElementById("who").innerHTML=text;
        getDB('start');
      }
     }
     else
     {
      document.getElementById("alogin").innerHTML="";
      document.getElementById("actions").innerHTML="";
      document.getElementById("results").innerHTML="";
      document.getElementById("extras").innerHTML="";
      document.getElementById("tables").innerHTML=xhl.status+" - "+xhl.readyState;
     }
    }
  }
}


function doJoin(table,fields,pkeys,auto,where)
{

//  alert(table+", "+fields+", "+pkeys+", "+auto+", "+where);

  var url = path+"join.php";
  var params = "";

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
    }
  }
}


function doDBDel(s)
{
  if( confirm("Are you sure you want to delete this record?\n\nSQL:\n"+s) )
  {

    var url = path+"DB_doDel.php";
    var params = "";

    params += SID+"="+encodeURIComponent(Sname);
    params += "&sql="+encodeURIComponent(s);

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
    }
  }
}




