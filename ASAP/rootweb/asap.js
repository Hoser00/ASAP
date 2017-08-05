// vers 0.2.0

var page = -1;
var totalGraphics=0;
var totalPages=0;
var graphic = new Array();
var pages = new Array();
var showpage = -1;
var selected=0;
var lastnum=0;
var imageSubdirectory = "images/";
var imagePrefix       = "ASAP_";
var mbarPrefix       = "MB_";
var onSuffix          = "_ON.gif";
var offSuffix         = "_OFF.gif";
var overSuffix        = "_SEL.gif";
var iconSuffix          = "_icon.gif";
var bgSuffix          = "_BG.jpg";
var frameTarget       = "_top";
var menuOffset = 0;
var num;

//var setIcon = "images/ASAP_main_icon.gif";
var mbars = new Array();
var mbarOffset = 0;
var menuSet;
var mbarSelected;
var titleMenu = "";
var lastSet   = "";
var mbarName  = ""; 
var iconNum;

var bgheight = 500;
var bgwidth = 1000;
var bgframes = 20;
var toshowpage;
var move = 0;


var today = new Date();
var pagepix = new Array();
var totalPix;

var browser;
var version;
var ack = 0;

////////////////////////  SUB MENU VARS  //////////////////////////////


var TO = 1000;
var TOhandle;
var TOhandle2;
var currSubMenu;
var subMenus = new Array();
var subGroups = new Array();
var totalsubmenus = 0;
var totalsubgroups = 0;
var subtypeDuplicated = 1;


// --------------------- MAKE CHANGES ---------------------------------------


function load(n)
{

  mbars = Array("index","about","building","listing","living","energy");
  mbarName = "mb_"+mbars[n];
  iconNum = n;

  for(i=0;i<mbars.length;i++)
  {
    loadIcon(150,150,mbars[i]);
  }

  mbarOffset = totalGraphics;
  mbarSelected = mbarOffset + n;

  loadMbar(45, 120, "main", "index", "Welcome to ASAP","index.html");
  loadMbar(45, 120, "main", "about", "About ASAP","About_ASAP.html");
  loadMbar(45, 120, "main", "building", "Sustainable Building","Sustainable_Building.html");
  loadMbar(45, 120, "main", "listing", "Green Business Listings","Green_Business.html");
  loadMbar(45, 120, "main", "living", "Sustainable Living Practices","Sustainable_Living.html");
  loadMbar(45, 120, "main", "energy", "Alternative Energy","Alternative_Energy.html");

  menuOffset = totalGraphics;
  var subname;


  //MenuItem (height, width, name, subID, infoText, link)

  if(n == 1)
  {
    createMenu(30, 170, "about", "s0", "About ASAP", "About_ASAP.html");
    createMenu(30, 170, "events", "null", "Events", "Events.html");
    createMenu(30, 170, "awards", "null", "Awards", "Awards.html");
//    createMenu(30, 170, "howto", "s3", "How to", "Howto.html");
    createMenu(30, 170, "history", "null", "Sustainability History", "History.html");
    createMenu(30, 170, "messages", "s5", "Group Messages", "Messages.html");
    createMenu(30, 170, "action", "null", "Action", "Action.html");
    createMenu(30, 170, "aware", "null", "Awareness", "Aware.html");
    createMenu(30, 170, "washing", "null", "Green Washing", "Green_Washing.html");
    createMenu(30, 170, "contact", "null", "Contact ASAP", "Contact.html");


    ///////////  Define submenus  /////////////////

    subname = "s0";
    makeSubMenu(subname, 1, "About ASAP", "About_ASAP.html");
    makeSubMenu(subname, 0,"Guest Opinion","Guest_Opinion.html");
    makeSubMenu(subname, 0,"ASAP Blog","Blog.html");

/*
    subname = "s3";
    makeSubMenu(subname, 1,"How to","How_to.html");
    makeSubMenu(subname, 0,"Products","Products.html");
    makeSubMenu(subname, 0,"Installers","Installers.html");
    makeSubMenu(subname, 0,"Practices","Practices.html");
*/

    subname = "s4";
    makeSubMenu(subname, 1,"Messages","Messages.html");
    makeSubMenu(subname, 0,"Community Messages","Community_Messages.html");
    makeSubMenu(subname, 0,"Government Messages","Government_Messages.html");

  }
  else if(n == 2)
  {
    createMenu(30, 170, "building", "null", "Sustainable Building", "Sustainable_Building.html");
    createMenu(30, 170, "products", "null", "Building Products", "Building_Products.html");
    createMenu(30, 170, "contact", "null", "Contact ASAP", "Contact.html");


    ///////////  Define submenus  /////////////////

/*
    makeSubMenu("s1",1,"About ASAP","About_ASAP.html");
    makeSubMenu("s1",0,"Email","Email.html");
*/
  }
  else if(n == 3)
  {
    createMenu(30, 170, "green", "null", "Green Business", "Green_Business.html");
    createMenu(30, 170, "listings", "null", "Business Listings", "Business_Listings.html");
    createMenu(30, 170, "contact", "null", "Contact ASAP", "Contact.html");

    ///////////  Define submenus  /////////////////

/*
    subname = "s1";
    makeSubMenu(subname, 1,"About ASAP","About_ASAP.html");
    makeSubMenu(subname, 0,"Email","Email.html");
*/
  }
  else if(n == 4)
  {
    createMenu(30, 170, "living", "null", "Sustainable Living", "Sustainable_Living.html");
    createMenu(30, 170, "whats", "null", "Whats In It", "Whats_In_It.html");
    createMenu(30, 170, "recycling", "s2", "Recycling", "Recycling.html");
    createMenu(30, 170, "food", "s3", "Food", "Food.html");
    createMenu(30, 170, "water", "s4", "Water", "Water.html");
    createMenu(30, 170, "transport", "null", "Transportation", "Transportation.html");
    createMenu(30, 170, "relationships", "s6", "Relationships", "Relationships.html");
    createMenu(30, 170, "transform", "null", "Transformation", "Transformation.html");
    createMenu(30, 170, "contact", "null", "Contact ASAP", "Contact.html");


    ///////////  Define submenus  /////////////////

/*
    subname = "s1";
    makeSubMenu(subname, 1,"Recycling","Recycling.html");
    makeSubMenu(subname, 0,"Recycling PDF","Recycling_PDF.html");
*/

    subname = "s3";
    makeSubMenu(subname, 1,"Food","Food.html");
    makeSubMenu(subname, 0,"Home Gardens","Home_Gardens.html");
    makeSubMenu(subname, 0,"Local Growers","Local_Growers.html");
    makeSubMenu(subname, 0,"Area Farms","Area_Farms.html");

    subname = "s4";
    makeSubMenu(subname, 1,"Water","Water.html");
    makeSubMenu(subname, 0,"Water Quality","Water_Quality.html");
    makeSubMenu(subname, 0,"Raw Water","Raw_Water.html");
    makeSubMenu(subname, 0,"Rain Water","Rain_Water.html");
    makeSubMenu(subname, 0,"Gray Water","Gray_Water.html");
    makeSubMenu(subname, 0,"Reused Water","Reused_Water.html");
    makeSubMenu(subname, 0,"Conservation","Conservation.html");

/*
    subname = "s6";
    makeSubMenu(subname, 1,"Messages","Messages.html");
    makeSubMenu(subname, 0,"Community Messages","Community_Messages.html");
    makeSubMenu(subname, 0,"Government Messages","Government_Messages.html");
*/

  }
  else if(n == 5)
  {
    createMenu(30, 170, "energy", "null", "Alternative Energy", "Alternative_Energy.html");
    createMenu(30, 170, "power", "s1", "Generation", "Generation.html");
    createMenu(30, 170, "heating", "s2", "Heating Systems", "Heating.html");
    createMenu(30, 170, "cooling", "s3", "Cooling Systems", "Cooling.html");
    createMenu(30, 170, "contact", "null", "Contact ASAP", "Contact.html");


    ///////////  Define submenus  /////////////////


    subname = "s1";
    makeSubMenu(subname, 1,"Generation","Generation.html");
    makeSubMenu(subname, 0,"Solar","Solar.html");
    makeSubMenu(subname, 0,"Wind","Wind.html");
    makeSubMenu(subname, 0,"Power Storage","Power_Storage.html");
    makeSubMenu(subname, 0,"Metering","Metering.html");

    subname = "s2";
    makeSubMenu(subname, 1,"Heating","Heating.html");
    makeSubMenu(subname, 0,"Heating Units","Heating_Units.html");
    makeSubMenu(subname, 0,"Water Heaters","Water_Heaters.html");
    makeSubMenu(subname, 0,"Passive Heating","Passive_Heating.html");

    subname = "s3";
    makeSubMenu(subname, 1,"Cooling","Cooling.html");
    makeSubMenu(subname, 0,"Cooling Units","Cooling_Units.html");
    makeSubMenu(subname, 0,"Room Cooling","Room_Cooling.html");
    makeSubMenu(subname, 0,"Passive Cooling","Passive_Cooling.html");

//    makeSubMenu("s5",1,"Action","Action.html");
//    makeSubMenu("s5",0,"community messages","community_messages.html");
  }
  else
  {
    with(this.document)
    {
      ;

      write('<div id="lptool" style="font-family:arial,helvetica,sans-serif;font-size:9pt;border:solid 0px red;"></div>');
      write('<div id="ltimetool" style="font-family:arial,helvetica,sans-serif;font-size:9pt;border:solid 0px navy;"></div>');
    }
  }
}

///////////   End submenus    /////////////////


///////////   Main Menu Functions    /////////////////


<!-- loadIcon(100,100,"main"); -->
function loadIcon (height, width, name)
{
  graphic[totalGraphics] = new MenuIcon(height, width, name);
  totalGraphics++;
}

function MenuIcon (height, width, name)
{
  this.height   = height;
  this.width    = width;
  this.name     = name;
  this.icon       = new Image (width, height);
  this.icon.src   = imageSubdirectory + imagePrefix + name + iconSuffix;
}

<!-- loadMbar(30, 90, "main", "exhibits", "Exhibits","index.html"); -->

function loadMbar (height, width, set, name, infoText, link)
{
  graphic[totalGraphics] = new MbarItem(height, width, set, name, infoText, link);
  totalGraphics++;
}

function MbarItem (height, width, set, name, infoText, link)
{
  this.height   = height;
  this.width    = width;
  this.set	= set;
  this.name     = "mb_"+name;
  this.info     = infoText;
  this.link     = link;
  this.on       = new Image (width, height);
  this.on.src   = imageSubdirectory + imagePrefix + mbarPrefix + name + onSuffix;
  this.off      = new Image (width, height);
  this.off.src  = imageSubdirectory + imagePrefix + mbarPrefix + name + offSuffix;
  this.offname  = imageSubdirectory + imagePrefix + mbarPrefix + name + offSuffix;
  this.over     = new Image (width, height);
  this.over.src = imageSubdirectory + imagePrefix + mbarPrefix + name + overSuffix;
  this.info     = infoText;
}


function createMenu (height, width, name, subID, infoText, link)
{
  graphic[totalGraphics] = new MenuItem(height, width, name, subID, infoText, link);
  totalGraphics++;
}

function MenuItem (height, width, name, subID, infoText, link)
{
  this.height   = height;
  this.width    = width;
  this.name     = name;
  this.subID	= subID;
  this.info     = infoText;
  this.link     = link;
  this.on       = new Image (width, height);
  this.on.src   = imageSubdirectory + imagePrefix + name + onSuffix;
  this.off      = new Image (width, height);
  this.off.src  = imageSubdirectory + imagePrefix + name + offSuffix;
  this.offname  = imageSubdirectory + imagePrefix + name + offSuffix;
  this.over     = new Image (width, height);
  this.over.src = imageSubdirectory + imagePrefix + name + overSuffix;
  this.info     = infoText;
  this.selected = 0;
  this.showpage = 0;
  this.num      = totalGraphics;
//  currtop += height;
}


function doClick(spage)
{
//  alert("doClick "+spage);
  var bg1 = document.getElementById('bg1');
  var bg2 = document.getElementById('bg2');
  var bg3 = document.getElementById('bg3');
  var blank = imageSubdirectory + "blank" + bgSuffix;
  var nextpage = spage+1;

  var num = pages[spage].page;

  toshowpage = spage;

  document.images[graphic[num].name].src = graphic[num].on.src;

  if(!lastnum)lastnum = num;

  if(lastnum != num)
  {
    document.images[graphic[lastnum].name].src = graphic[lastnum].off.src;
  }

  lastnum = num;
  selected = num;
  
  if(showpage == spage && bg1.style.backgroundImage != pages[spage].bg.src)
  {
    bg1.style.backgroundImage = 'url('+pages[spage].bg.src+')';
    if(nextpage < totalPages)bg2.style.backgroundImage = 'url('+pages[nextpage].bg.src+')';
  }

//  else { alert("ELSE page "+ spage +" has "+ bg1.style.backgroundImage); }

  if(showpage != spage)
  {
    move = 1;
    return false;
  }

}


function animator()
{
  var zcount = 0;
  var start, finish, step;
  var zend = 0;
  var wait = 50;
  var hnd;

  var bg1 = document.getElementById('bg1');
  var bg2 = document.getElementById('bg2');
  var bg3 = document.getElementById('bg3');
  var topbg = document.getElementById('topbg');
  var asap = document.getElementById('ASAP');
  var date = document.getElementById('date');
  var textw = document.getElementById('textwrapper');
  var textw2 = document.getElementById('textwrapper2');
  var text = document.getElementById('text');
  var menuwrapper = document.getElementById('menuwrapper');
  var more = document.getElementById('moretext');
//  var text2 = document.getElementById('text2');
  var mbar = document.getElementById('mbar');
  var back = document.getElementById('back');
  var next = document.getElementById('next');
  var video = document.getElementById('videowrapper');
  var title = document.getElementById('titlewrapper');
  var nav = document.getElementById('navtop_placement');
  var p1, p2, p3, pos;

  function moveit()
  {
    var c;
    zcount++;

    if(move)
    {
      zcount = 0;
      move = 0;

      hideMenu(currSubMenu);
      topbg.style.backgroundImage="url()";
      asap.style.visibility="hidden";
      if(date) date.style.visibility="hidden";
      textw.style.visibility="hidden";
      menuwrapper.style.visibility="hidden";

      if(more) more.style.visibility="hidden";
      mbar.style.visibility="hidden";
      if(back) back.style.visibility="hidden";
      if(next) next.style.visibility="hidden";
      if(video) video.style.visibility="hidden";
      if(title) title.style.visibility="hidden";
      nav.style.visibility="hidden";
      if(text) text.innerHTML = "";

      start = showpage * bgwidth;
      finish = toshowpage * bgwidth;
      step = parseInt((toshowpage-showpage)*bgwidth/bgframes+.5);
      if(step < 0)step--;
    }

    c = zcount;

    if(c < bgframes && showpage != toshowpage)
    {

      p1 = parseInt((start + c*step)/bgwidth);
      pos = (start + c*step)%bgwidth;

//alert("show "+pages[p1].bg.src+" at "+pos);

      p2 = p1+1;
      p3 = p1+2;

      if(p2 > totalPages) p2 = totalPages;
      if(p3 > totalPages) p3 = totalPages;

if(step < 0)
{
      bg3.style.backgroundImage = 'url('+pages[p1].bg.src+')';
      bg3.style.left = (-pos)+'px';
      bg2.style.backgroundImage = 'url('+pages[p2].bg.src+')';
      bg2.style.left = (bgwidth - pos)+'px';
      bg1.style.backgroundImage = 'url('+pages[p3].bg.src+')';
      bg1.style.left = (2*bgwidth - pos)+'px';
}
else
{
      bg3.style.backgroundImage = 'url('+pages[p1].bg.src+')';
      bg3.style.left = (-pos)+'px';
      bg2.style.backgroundImage = 'url('+pages[p2].bg.src+')';
      bg2.style.left = (bgwidth - pos)+'px';
      bg1.style.backgroundImage = 'url('+pages[p3].bg.src+')';
      bg1.style.left = (2*bgwidth - pos)+'px';
}

//      asap.innerHTML = c +") Pages "+p1+"-"+p2+"-"+p3+"<br />first "+p1+" at "+bg1.style.left+", step "+step+"<br />"+pages[p1].bg.src+"<br />next "+p2+" at "+bg2.style.left+", "+pages[p2].bg.src+"<br />last "+p3+" at "+bg3.style.left+", "+pages[p3].bg.src;
//      asap.style.visibility = 'visible';

    }
    else if(c == bgframes && showpage != toshowpage)
    {
//      alert(toshowpage);
      location.replace(pages[toshowpage].link);
    }

    hnd = setTimeout(moveit,wait);


    return;
  }

  moveit();

}

function doMouseOver(num)
{
  if (num != selected)
  {
    document.images[graphic[num].name].src = graphic[num].over.src;
  }
  self.status = graphic[num].info;

  showMenu(graphic[num].subID);
}

function doMouseOut(num)
{
  if (num != selected)
  {
    document.images[graphic[num].name].src = graphic[num].off.src;
  }
  menuTO(graphic[num].subID);
}

function doMbarOver(num)
{
  if (num != mbarSelected)
  {
    document.images[graphic[num].name].src = graphic[num].over.src;
  }
  self.status = graphic[num].info;
}

function doMbarOut(num)
{
  if (num != mbarSelected)
  {
    document.images[graphic[num].name].src = graphic[num].off.src;
  }
}

function doMbarClick(num)
{
  if (num != mbarSelected)
  {
    document.images[graphic[num].name].src = graphic[num].on.src;
    document.images[graphic[mbarSelected].name].src = graphic[mbarSelected].off.src;
  }
}


function writembar()
{
  with(this.document)
  {
    write('<div id="mbar">');

    for(i = mbarOffset; i < menuOffset; i++)
    {
      write ('<a target="' + frameTarget + '" href="' + graphic[i].link + '" onMouseOver="doMbarOver(' + i + '); return true" onMouseOut="doMbarOut(' + i + ')" onClick="doMbarClick(' + i + ')">');
      write ('<img name="' + graphic[i].name + '" src="');
      if(graphic[i].name == mbarName)
      {
        write(graphic[i].on.src);
      }
      else
      {
        write(graphic[i].off.src);
      }
      write('" alt="' + graphic[i].name + '" width="' + graphic[i].width + '" height="' + graphic[i].height + '" border="0" valign="middle">');
      write ('</a>');
    }

    write('</div>');
  }
}


function writemenu()
{

  with(this.document)
  {
    write('<div id="menuwrapper">');
    write('<div id="menuborder">');
    write('<div id="menu">');

    for(i = menuOffset; i < totalGraphics; i++)
    {
      write ('<a target="' + frameTarget + '" href="' + graphic[i].link + '" onMouseOver="doMouseOver(' + i + '); return true" onMouseOut="doMouseOut(' + i + ')" onClick="doClick(' + graphic[i].showpage + ');return false;">');
      write ('<img name="' + graphic[i].name + '" src="' + graphic[i].offname + '" alt="' + graphic[i].name + '" width="' + graphic[i].width + '" height="' + graphic[i].height + '" border="0" vspace="0">');
      write ('</a>');

      write('<br/>');

    }

    write('<img src="images/ASAP_menu_btm.gif" height="12" width="170" alt="" /><br />');


    write('</div>');
    write('</div>');

    write('<div id="icon"><img src="'+graphic[iconNum].icon.src+'" height="100" width="100" alt="" /></div>');

    write('</div>');
    write('<br clear="all" />');

//    writesubs();

  }
}


///////////   Submenu Functions    /////////////////




function subDD()
{
  var dd_BG_color = '#fff';
  var dd_border_color = '#ccc';
  var dd_borderR_color = '#4bb';
  var hd_BG_color = '#4bb';
  var hd_color = '#fff';
  var left=205;

  with(this.document)
  {
    write('<style>');
    write('#s0 {top:100px;left:'+left+'px;visibility:hidden;background-color:'+dd_BG_color+';border-bottom:solid 1px '+dd_border_color+';border-right:solid 1px '+dd_borderR_color+';font-weight:bold;font-size:12pt;font-family:arial, helvetica, sans serif}');
    write('#s1 {top:130px;left:'+left+'px;visibility:hidden;background-color:'+dd_BG_color+';border-bottom:solid 1px '+dd_border_color+';border-right:solid 1px '+dd_borderR_color+';font-weight:bold;font-size:12pt;font-family:arial, helvetica, sans serif}');
    write('#s2 {top:160px;left:'+left+'px;visibility:hidden;background-color:'+dd_BG_color+';border-bottom:solid 1px '+dd_border_color+';border-right:solid 1px '+dd_borderR_color+';font-weight:bold;font-size:12pt;font-family:arial, helvetica, sans serif}');
    write('#s3 {top:190px;left:'+left+'px;visibility:hidden;background-color:'+dd_BG_color+';border-bottom:solid 1px '+dd_border_color+';border-right:solid 1px '+dd_borderR_color+';font-weight:bold;font-size:12pt;font-family:arial, helvetica, sans serif}');
    write('#s4 {top:220px;left:'+left+'px;visibility:hidden;background-color:'+dd_BG_color+';border-bottom:solid 1px '+dd_border_color+';border-right:solid 1px '+dd_borderR_color+';font-weight:bold;font-size:12pt;font-family:arial, helvetica, sans serif}');
    write('#s5 {top:250px;left:'+left+'px;visibility:hidden;background-color:'+dd_BG_color+';border-bottom:solid 1px '+dd_border_color+';border-right:solid 1px '+dd_borderR_color+';font-weight:bold;font-size:12pt;font-family:arial, helvetica, sans serif}');
    write('#s6 {top:280px;left:'+left+'px;visibility:hidden;background-color:'+dd_BG_color+';border-bottom:solid 1px '+dd_border_color+';border-right:solid 1px '+dd_borderR_color+';font-weight:bold;font-size:12pt;font-family:arial, helvetica, sans serif}');

    write('.hdlink {width:180;text-decoration:none;color:'+hd_color+';background-color:'+hd_BG_color+';line-height:1.5;}');
    write('.hdlink:hover {text-decoration:none;color:#111;background-color:'+hd_BG_color+';line-height:1.5}');

    write('.slink {text-decoration:none;color:#4bb;background-color:'+dd_BG_color+';line-height:1.5;}');
    write('.slink:hover {text-decoration:none;color:#c11;background-color:'+dd_BG_color+';line-height:1.5}');

    write('</style>');
  }
}


function makeSubMenu(group,start,name,link)
{
  subMenus[totalsubmenus] = new subMenu(group,start,name,link)
  totalsubmenus++;
}

function subMenu(group,start,name,link)
{
  this.group = group;
  this.start = start;
  this.name = name;
  this.link = link; 
  this.showpage = 0;
  if(start == 1)
  {
    makeSubGroup(group);
  }
}

function makeSubGroup(group)
{
  subGroups[totalsubgroups] = new subGroup(group);
  totalsubgroups++;
}

function subGroup(group)
{
  this.group = group;
  this.handle = setTimeout('hideMenu("'+group+'")', TO); 
}

function menuTOClear(group)
{
  for(i=0; i<totalsubgroups; i++)
  {
    var grp = subGroups[i].group;
    if(grp == group)
    {
	clearTimeout(subGroups[i].handle);
//      alert("TO handle "+TOhandle);
    }
    else
    {
	hideMenu(grp);
    }
  }
}


function menuTO(group)
{
  for(i=0; i<totalsubgroups; i++)
  {
    if(subGroups[i].group == group)
    {
      subGroups[i].handle = setTimeout('hideMenu("'+group+'")', TO);
    }
  }
}

function showMenu(menu)
{

  currSubMenu = menu;

  if(document.getElementById(menu))
  {
    var m = document.getElementById(menu);
    m.style.visibility="visible";
  }
  menuTOClear(menu);
}

function hideMenu(menu)
{
  if(document.getElementById(menu))
  {
    var m = document.getElementById(menu);
    m.style.visibility="hidden";
  }
}

function TTest(v)
{
  alert("I got called - "+v);
}


function writesubs()
{
  with(this.document)
  {
    for(i = 0; i<totalsubmenus; i++)
    {
//      alert("Writing submenu "+i+" in group "+subMenus[i].group);
      if(subMenus[i].start == 1)
      {
        if(i != 0) write('</div>');
	write('<div id="'+subMenus[i].group+'" class="subMenu">');
        write('<div class="subBG">');
        write('<a href="'+subMenus[i].link+'" onmouseover="menuTOClear(\''+subMenus[i].group+'\')" onmouseout="menuTO(\''+subMenus[i].group+'\')" onClick="doClick(' + subMenus[i].showpage + ');return false;" class="hdlink">&nbsp;&nbsp;'+subMenus[i].name+'</a><br/>');
        write('</div>');
      }
      else
      {
        write('<a href="'+subMenus[i].link+'" onmouseover="menuTOClear(\''+subMenus[i].group+'\')" onmouseout="menuTO(\''+subMenus[i].group+'\')" onClick="doClick(' + subMenus[i].showpage + ');return false;" class="slink">&nbsp;&nbsp;'+subMenus[i].name+'</a><br/>');
      }
    }
    write('</div>');
  }
}

/////////////// End submenu functions ////////////////////////

function admin()
{
  with(this.document)
  {
    write('<div id="topbg">');
    write('<a href="index.html">');
    write('<img src="images/blank.gif" border="0" width="340" height="100" alt="" /></a>');
    write('</div>');

    write('<div id="mainadmin" style="background-color:white;border:solid 1px #222;">');
    write('<div id="moreadmin" style="margin:20px;">');
  }
}


function endadmin()
{
  with(this.document)
  {
    write('</div></div>'); 

    write('<div id="tools" style="position:absolute;top:0px;left:340px;background-color:#f8f8ee;border-right:solid 1px #222;">');
    doDate2();

    write('<div id="lptool" style="float:left;font-family:arial,helvetica,sans-serif;font-size:9pt;border:solid 0px red;"></div>');
    write('<div id="ltimetool" style="float:left;font-family:arial,helvetica,sans-serif;font-size:9pt;border:solid 0px navy;margin-left:10px;"></div>');
    write('<div id="luptool" style="float:left;font-family:arial,helvetica,sans-serif;font-size:9pt;border:solid 0px green;margin-left:10px;"></div>');
    write('</div>');


//    var p1 = getElementById('topbg');
//    p1.style.backgroundImage="url(images/ASAP_banner_CG.jpg)";
  }
}


function initpage()
{
  browser=navigator.appName;
  var b_vers=navigator.appVersion;
  version=parseFloat(b_vers);
  if(browser == "Microsoft Internet Explorer" && version < 7) ack = 1;

  var i;
  var j;
  var p;
  var name;
  var group;
  var path = location.pathname;
  var parts = path.split("/");
  var sid, link;

  i = parts.length - 1;
  path = parts[i];

  if(!path) path = "index.html";

//  pages    : type, page, subID
//  subMenus : group, start, name, link
//  graphic  : height, width, name, subID, infoText, link


  for(i=menuOffset;i<totalGraphics;i++)
  {
    sid = graphic[i].subID;
    p = parseInt(graphic[i].num);

//alert("p "+p+", i "+i+", j - , totalPages "+totalPages);

    if(path == graphic[i].link)
    {
      page = p;
      showpage = totalPages;
    }

    graphic[i].showpage = totalPages;
    info = graphic[i].info;
    link = graphic[i].link;
    pages[totalPages] = new pageItem(0, p, sid, totalPages, info, link);
    totalPages++;
    
    for(j=0;j<totalsubmenus;j++)
    {
      if(subMenus[j].group == graphic[i].subID)
      {
        if(!subMenus[j].start)
        {
          subMenus[j].showpage = totalPages;
          name = subMenus[j].name;
          link = subMenus[j].link;
          pages[totalPages] = new pageItem(1, p, sid, totalPages, name, link);
          if(showpage < 1 && path == subMenus[j].link)
          {
            page = p;
            showpage = totalPages;
          }
          totalPages++;
        }
        else
        {
          subMenus[j].showpage = totalPages-1;
        }

//alert("p "+p+", i "+i+", j "+j+", totalPages "+totalPages);

      }
    }
  }

//  alert("Show page "+showpage);

  p = totalGraphics;
  name = 'blank';
  pages[totalPages] = new pageItem(1, p, sid, totalPages, name);  // There is no 'link' here. Error? Final page.

//  alert("Have "+pages[totalPages].bg.src);

//  alert("page is "+page+" and show page "+showpage);
//  alert("Browser "+browser+" "+version+" is "+ack);

  writesubs();


  with(this.document)
  {
    if(ack){write('<div id="main2">');}else{write('<div id="main">');}

    write('<div id="topbg">');
    write('<a href="index.html">');
    write('<img src="images/blank.gif" border="0" width="340" height="100" alt="" /></a>');
    write('</div>');

    if(page == 1)
    {
      var p1 = getElementById('topbg');
//      alert(page+" has "+p1.style.backgroundImage);
      p1.style.backgroundImage="url(images/ASAP_banner_CG.jpg)";
    }

    writemenu();

    write('<div id="bg0">');

    write('<div id="bg1"></div>');
    write('<div id="bg2"></div>');
    write('<div id="bg3"></div>');

    write('</div>'); 

    writembar();

//    doDate();

    if(!ack){write('<div id="undermain"></div>');}

    if(showpage){write('<div id="back" class="pointer" onclick="doClick('+(showpage-1)+')"></div>');}
    else {write('<div id="back" class="pointer" onclick="location.replace(\'index.html\')"></div>');}
    if(showpage < (totalPages-1)){write('<div id="next" class="pointer" onclick="doClick('+(showpage+1)+')"></div>');}
    else {write('<div id="next" class="pointer" onclick="location.replace(\'index.html\')"></div>');}

    write('<div id="ASAP"><a href="Awards.html">');
    write('<img src="images/Award_graphic.gif" height="50" width="167" alt="" border="0" /></a></div>'); // End of ASAP div


  }

  function pageItem(type,p,subID,s,name,link)
  {
//    alert(s+") "+name);
    this.type = type;
    this.page  = p;
    this.subID = subID;
    this.showpage = s;
    var temp = name.split(" ");
    this.bg = new Image(bgwidth,bgheight);
    this.bg.src = imageSubdirectory+temp.join("_")+bgSuffix;
    this.link = link;
  }
}

function init_text()
{
  with(this.document)
  {
     write('</div>');  // end of main div
  }
}

function endpage()
{
  with(this.document)
  {
    doMbarClick(mbarSelected);
    doClick(showpage);
    animator();
  }
}


///// Handle pop up divs


function showme(hid)
{

  var theDiv = 'hidden'+hid;
  var divEl = document.getElementById(theDiv);

  divEl.style.visibility="visible";

  clearme();
}

function timeme(hid)
{
  if(TOhandle2)hideme(hid);
  TOhandle2 = setTimeout('hideMenu("'+hid+'")', TO);
}

function clearme(d)
{
  clearTimeout(TOhandle);
}

function hideme(hid)
{
  var theDiv = 'hidden'+hid;
  var divEl = document.getElementById(theDiv);
  divEl.style.visibility="hidden";
  TOhandle2 = 0;
}

////// End pop up divs 



function fav()
{
  with(this.document)
  {
    //write ('<link rel="ico" href="http://redchurchsonora.com/favicon.ico" type="image/x-icon" />');
    //write ('<link rel="shortcut icon" href="http://redchurchsonora.com/favicon.ico" type="image/x-icon" />');
  }
}

function navigation_top()
{
  with(this.document)
  {
    write ('<div class="navtop_placement">');
    write ('<div class="navtop_links">');
    write ('<li><a href="index.html" title="">Home</a></li>');
    write ('<li><a href="rooms.html" title="">Rooms</a></li>');
    write ('<li><a href="specials.html" title="">Specials</a></li>');
    write ('<li><a href="contact.html" title="">Contact &amp; Map</a></li>');
    write ('<li><a href="http://www.webervations.com/magic-scripts/resbook.asp?memberid=PalmHotel" title="">Reservations</a></li>');
    write ('</div>');
    write ('</div>');
  }
}



// Date handling routines

function doDate()
{
  with(this.document)
  {
    write('<div id="date" style="width:200px;height:20px;font-family:arial,helvetica,sans-serif;font-size:9pt;">');

    write(getDayStr(today.getDay()).toString() + ' ');
    write(getLongMonth(today.getMonth()) + " " + today.getDate().toString() + ", ");
    write(today.getFullYear().toString());

    write('</div>');
  }
}

function doDate2()
{
  with(this.document)
  {
    write('<div id="date2" style="width:200px;height:20px;font-family:arial,helvetica,sans-serif;font-size:9pt;">');

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

 
function texton(id)
{
  var txt = document.getElementById(id);
  txt.style.visibility = 'visible';
}

function textflip(id)
{
  var txt = document.getElementById(id);
  if(txt.style.visibility == 'visible')
  {
    txt.style.visibility = 'hidden';
  }
  else
  {
    txt.style.visibility = 'visible';
  }
}

function textoff(id)
{
  var txt = document.getElementById(id);
  txt.style.visibility = 'hidden';
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

 
/* Video functions on Guest Opinion and Events pages
// These can be used on other pages too
// Do not want duplicate definitions, so keep commented out

var totalVideos = 0;
var videos = new Array();

function addvideo(name, info, code)
{
  videos[totalVideos] = new video_obj(name,info,code);
}

function video_obj(name, info, code)
{
  this.name = name;
  this.info = info;
  this.code = code;
  totalVideos++;
}

function loadvideo(v)
{
  var videow = document.getElementById('videowrapper');
  videow.innerHTML = '<a href="Guest_Opinion.html" onclick="textoff(\'videowrapper\');return false;" style="color:white;text-decoration:none;margin-right:5px;">close &#127;</a><div id="video" style="background-color:white;"></div>';

  var video = document.getElementById('video');
  var title = document.getElementById('title');

  video.innerHTML = videos[v].code;
  title.innerHTML = '<b>'+videos[v].name + "</b><br >"+videos[v].info+"<br /><br />Click to view";
}

function listvideos()
{
  if(!ack)
  {
    document.getElementById('main').style.position='absolute';
    document.getElementById('undermain').style.position='absolute';
  }

  var i;
  var code = '';
  var v = totalVideos;
  var list = document.getElementById('text');

  for(i=0;i<v;i++)
  {
    code += '<li> <a href="Guest_Opinion.html" class="link" onclick="loadvideo('+i+');return false">'+videos[i].name+'</a><br />';
  }
  list.innerHTML = code;
}

*/


 // User activation

var noemail = 1;
var nouser = 1;
var nopwd = 1;
var novalid = 1;
var noagree = 1;

var usedemail = 0;
var usedlogin = 0;


function validate()
{
  with(this.document)
  {

    var fname=getElementById('fnameID');
    if(fname.value){nofname = 0;fname.className="fstd";}
    else { nofname = 1;fname.className="fstdbad";}

    var minit=getElementById('minitID');
    if(minit.value){nominit = 0;minit.className="fstd";}
    else { nominit = 1;minit.className="fstd";}

    var lname=getElementById('lnameID');
    if(lname.value){nolname = 0;lname.className="fstd";}
    else { nolname = 1;lname.className="fstdbad";}

    var email=getElementById('emailID');
    if(email.value){noemail = 0;email.className="fstd";}
    else { noemail = 1;email.className="fstdbad";}

    var login=getElementById('userID');
    if(login.value) {nouser = 0;login.className="fstd";}
    else {nouser = 1;login.className="fstdbad";}

    var pwd=getElementById('pwdID');
    if(pwd.value){pwd.className="fstd";}
    else {pwd.className="fstdbad";}

    var pwd2=getElementById('pwd2ID');
    if(pwd2.value){pwd2.className="fstd";}
    else {pwd2.className="fstdbad";}

    if(pwd.value && pwd.value==pwd2.value) {nopwd = 0;}
    else {nopwd = 1;pwd2.className="fstdbad";}

    var val=getElementById('valID');
    if(val.value) {novalid = 0;val.className="fstd";}
    else {novalid = 1;val.className="fstdbad";}

    var agree=getElementById('agreeID');
    if(agree.checked) {noagree = 0;agree.className="fstd";}
    else {noagree = 1;agree.className="fstdbad";}

    var create = getElementById('create');
    if(nofname || nolname || noemail || nouser || nopwd || novalid || noagree)
    {
      create.className="bstdis";
//      create.disabled=false;
    }
    else 
    {
      create.className="bstd";
//      create.disabled=true;
    }

// alert("E "+noemail+", U "+nouser+", P "+nopwd+", A "+noagree); 
  }
}


function dosend()
{
  var err = "";
  validate();
  with(this.document)
  {
    if(nofname || nolname || noemail || nouser || nopwd || novalid || noagree)
    {
      if(nofname) err += "Missing first name\n";
      if(noemail) err += "Missing last name\n";
      if(noemail) err += "Missing email address\n";
      if(nouser) err += "Missing user name\n";
      if(nopwd) err += "Missing or mismatched passwords\n";
      if(novalid) err += "Missing validation code\n";
      if(noagree) err += "Have not read the user agreement\n";
      alert(err);
    }
    else
    {
      doJoin(1);
    }
  }
}


