<?php

$contrib = (array_key_exists('c',$_GET))? $_GET['c'] : 0;


if(!$contrib)
{
  $text = <<<EOT

  <p class="headline">
  WELCOME TO THE 'GREEN BUSINESS LISTING' SECTION
  </p>
  <p>
  We at ASAP have put this section of the site together for you to search out and find sustainable, 
ecologically responsible and durable building materials for use in your homes, businesses and other 
projects. We also have and will continue to expand a listing of Contractors that build and maintain 
such materials and systems. This portion of the ASAP web site will be constantly changing and 
expanding as new products come to the market place and additional Contractors are identified. We at 
ASAP fully realize that this listing is far from complete, but we will continually keep adding to it 
as we can. We also solicit your help by requesting that you contact and inform us of product or 
Contractors that would fit the 'sustainable' criteria and who wish to be included in the listing.
  </p>
  <p>
  A word of caution from the ASAP organization; Just because a product is new to the market and is 
accompanied by a lot of 'hoop-la', media hype and manufacturer promises, that is NO guarantee that 
the product will actually work/perform as expected or have any real durability. A good thorough 
personal check of the product or service along with obtaining third party referrals or recommendations 
of the product or service is always the best way to make sure you will be receiving what you were 
wanting and needing for your project. The listing of any product, Contractor or service provider 
on this site does not mean that ASAP endorses that product or person/company in any way. Ultimately, 
it is you alone that must determine the suitability of any service or product for use in your project, 
of which we have no knowledge or control over. The ratings that may accompany some of the listings is 
tabulated from web site visitors like you that have had experience with the product or service and 
wish to help others by relating that experience here on the site at the appropriate location. If you 
have fair, balanced feed back on listed products or services/Contractors that have agreed to be rated, 
we at ASAP encourage you to leave input to help others make an informed decision.
  </p>

EOT;

  echo $text;

}
elseif($contrib==1)
{
  $text = <<<EOT

  <p class="headline">
  SUSTAINABLE BUILDING - About Chuck Filson
  </p>
  <p>
<a target="_blank" href="docs/GB_Filson.pdf" class="link" style="float:left;margin-right:10px;margin-bottom:10px;">
<img src="images/clickit.jpg" height="85" width="125" alt="" border="0"></a>
  A huge obstacle that the United States (as is the rest of the world for that matter) has to overcome is the 
incredible number of homes and business structures that were built in years past that use large amounts of energy 
to heat and cool and/or were built with materials that contain substances that are unhealthy to the occupants. 
To up-grade and bring these structures into any type of current acceptable standards seems like an impossible 
task and one that, no matter what the level of commitment of our Country's people, government and construction 
industry, there just isn't enough money or resources available to make it happen. But, try we must, as it is 
such an important task to accomplish for so many reasons!
  </p>
  <p>
  This is where Building Contractors such as Chuck Filson become indispensible parts of the ultimate solution 
to the issue. Progressive Contractors such as Chuck "get it". After seeing the short comings in past construction 
methods, these Contractors have made the commitment and invested significant amount of their personal time and 
energy in order to learn the new methods of construction and proper materials to accomplish the construction of 
energy efficient and healthy homes. These same Contractors have become the 'go to' experts for renovating existing 
structures to bring them into a more healthy and energy saving condition.
  </p>
  <p>
  The ASAP management realized some time ago how committed Chuck Filson is to not only performing 'green', 
sustainable building practices, but advancing the whole concept as much as possible to anyone interested in 
listening and learning. As a result, Chuck has evolved to a project consultant and manager as well as an overall 
General Contractor for sustainable building projects. ASAP wants to thank Chuck for taking time out of his busy 
schedule to help us get a glimpse as to the importance of sustainable building practices and why he values such 
practices so highly. Thanks Chuck!
  </p>

  <p>
  If you wish to contact Chuck Filson for more information, see his website <a href="http://www.filsonconstruction.com" class="link">www.filsonconstruction.com</a>.
  </p>

  <p>
  Read Chuck Filson's piece [<a target="_blank" href="docs/GB_Filson.pdf" class="link">Click Here</a>].
  </p>

EOT;

  echo $text;

}

?>