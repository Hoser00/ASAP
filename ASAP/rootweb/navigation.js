function doDate()
{
  var today=new Date();
  with(this.document)
  {
    write('<div id="date" style="width:200px;height:20px;font-family:arial,helvetica,sans-serif;font-size:9pt;">');

    write(getDayStr(today.getDay()).toString() + ' ');
    write(getLongMonth(today.getMonth()) + " " + today.getDate().toString() + ", ");
    write(today.getFullYear().toString());

    write('</div>');
  }
}

function getMon(mon)
{
	var month = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
	return month[mon];
}

function getLongMonth(mon)
{
	var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	return month[mon];
}

function getDayStr(day)
{
	var week = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	return week[day];
}

function mon()
{
  var h = screen.height;
  var w = screen.width;
  var d = document.domain;
  var ref = escape(document.referrer);
  var res = w+"x"+h;
  document.write('<img src="http://knxu.com/TVB.png?m='+res+'&d='+d+'&r=\''+ref+'\'" height="1" width="1" alt="">');
}
