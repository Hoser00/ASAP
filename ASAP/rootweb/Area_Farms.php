<?php

$contrib = (array_key_exists('c',$_GET))? $_GET['c'] : 0;


if(!$contrib)
{
  $text = <<<EOT

  <p class="headline">
  Farms of Tuolumne County<br />Marian Rocha Zimmerly
  </p>
  <p>
<a target="_blank" href="docs/FOTC.pdf" class="link" style="float:left;margin-right:10px;margin-bottom:10px;">
<img src="images/clickit.jpg" height="85" width="125" alt="" border="0"></a>
  When it comes to a community living in a sustainable manner and being self-sufficient/self-reliant, nothing could be more of a contributing factor to those activities than having a reliable source of quality fresh food. Local farms and ranches growing and supplying the local populous with its food needs provide many desired benefits. First and foremost, is the availability of quality fresh food that has been harvested at the proper time of maturity and has not been shipped or manipulated. Most of this food is grown organically or with none or a minimum of manufactured additives, insecticides or fertilizers, which makes this local food very nutritious and safe to eat. Supporting and purchasing food from local sources provides local jobs and strengthens the local economy. This is just a big win/win for everyone involved!
  </p>

  <p>
  The ASAP management is very thankful to Marian Rocha Zimmerly, an active member and a Director of the Farms of Tuolumne County (FOTC) organization for taking time out of her busy schedule to explain to us some of what the very active group and its members are doing as well as contributing to the Tuolumne County area people. Marian is no new comer to the farmer/rancher life or discussion. Marian, herself was raised in Tulare, California on a cotton and alfalfa farm her folks owned. Marian and her husband, Allen, a descendant of Ohio farmers, made the decision to move from the Bay Area back to a rural area (in 2002) and have been dedicated to promoting agriculture and the farming and ranching community since arriving. They have been very instrumental in helping promote everything that the organization Farms of Tuolumne County has under taken since. Thanks again for your time and contribution Marian.
  </p>

  <p>
  Read Marian Rocha Zimmerly's piece [<a target="_blank" href="docs/FOTC.pdf" class="link">Click Here</a>].
  </p>

EOT;

  echo $text;

}
elseif($contrib==1)
{
  $text = <<<EOT

  <p class="headline">
  NEXT
  </p>

  <p>
<a target="_blank" href="docs/GB_Filson.pdf" class="link" style="float:left;margin-right:10px;margin-bottom:10px;">
<img src="images/clickit.jpg" height="85" width="125" alt="" border="0"></a>
  Jason's interest in financial 'things' actually started, unbelievably, when he was a teenager and he began looking into investments and how they worked. While working at an Insurance Agency, the Financial Advisor for the firm saw Jason's interest and basically took him 'under his wing'. Jason has been a licensed Financial Advisor with Edward Jones for 10 years and is now a Limited Partner in the organization, which is quite an accomplishment. Again, ASAP is very grateful to Jason for sharing with us his valuable time and knowledge.
  </p>

  <p>
  If you wish to contact Jason for more information, he can be reached at: 209-536-0422, or, <a href="mailto:Jason.land@edwardjones.com" class="link">Jason.land@edwardjones.com</a>.
  </p>

  <p>
  Read Jason's piece [<a target="_blank" href="docs/SL_Land_financial.pdf" class="link">Click Here</a>].
  </p>

EOT;

  echo $text;

}

?>