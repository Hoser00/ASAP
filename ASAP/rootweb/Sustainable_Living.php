<?php

$contrib = (array_key_exists('c',$_GET))? $_GET['c'] : 0;


if(!$contrib)
{
  $text = <<<EOT

  <p class="headline">
  AN ATTEMPT TO EXPLAIN 'SUSTAINABLE LIVING'
  </p>
  <p>
  Interestingly enough, there is no description of what 'sustainable' actually means in my older Merriam 
Webster Dictionary (printed in the late 1990's) although the word does appear at the end of the 'sustain' 
listing/description. Incredibly, the word 'sustainable' does not appear in the 2002 Webster's New World 
Dictionary and Theasaurus under or related to "sustain" at all! Does this mean that 'sustainable' is a 
new word that relates to a new type of activity? I, personally, would think not. But why do two very 
recognized and commonly used dictionaries not include such an important word and its description? When 
you go to the on-line information site of Wikipedia (<a target="_blank" 
href="http://en.wikipedia.org/wiki/Sustainable_living" class="link">Wikipedia - Sustainable Living</a>), 
they seem to describe Sustainable Living fairly well, but it is still done in a general way, which would 
infer, at least in my mind, that sustainable living may mean many different things to many different 
people. One thing Wikipedia does do is make the case that sustainable living is certainly not a new 
subject or idea as their history section points out that in 1854 Henry David Thoreau published Walden, 
which, according to Wikipedia, is the "earliest piece of literature to specifically address sustainable 
living". Wow, that's well over 150 years ago! So why is sustainable living not more visible and easy to 
describe at this late date?
  </p>
  <p>
  My guess is that main stream America has been too wrapped up in a run-a-way consumer style of living 
that left sustainable living begging at the door and completely ignored. On top of that, those that 
espoused and seemed to be living a sustainable lifestyle were considered eccentric, odd, or just plain 
'way out there' due to the way some dressed or looked and how they embraced the life style. That might 
have been partially true in some cases, but surely not in all. It seems to me that sustainable living 
practices started to come more to the forefront as environmental issues began to come to center stage 
and the global warming debate began to heat up. So, I guess all that I can do is try to give my own 
personal thoughts on what sustainable living is to me and then invite you to think about and categorize 
in your own mind what it means to you. One thing for sure, there are many descriptions of what that life 
style encompasses and also many different levels of involvement, and all truly are sustainable life style 
practices, at least as far as I'm concerned.
  </p>

  <p>
  OK, so if you were to ask me what a sustainable life style or what sustainable living is all about, 
I guess my first response would be: living in unison with the environment and having an awareness of 
what my lifestyle is extracting from this world and my surroundings. I feel that would include not only 
the physical things it takes to support my life style (food, clothes, housing, energy, transportation, 
etc.), but what my inter relationship is with my family, friends, neighbors and fellow citizens. I guess 
the bottom line is: Am I even coming close to giving back as much as I'm taking/using? I don't think this 
subject is in anyway a left or right issue, a Democrat or Republican stand, or any other type category. 
I view this as a common sense and awareness issues in which I can make good conscious decisions about how 
I conduct my life. These decisions can have profound consequences, either good or bad, on the surroundings 
and environment through which I travel daily. Do I leave a huge footprint and a trail of my trip through 
this life, or do I tread lightly and leave the world better, or surely no worse, than I found it such as 
the Native Americans did? From this point any description of sustainable living becomes a discussion of 
exactly what activities you or I will undertake to attain a sustainable living example.
  </p>

  <p>
  I invite you to join me in the pursuit of information gathering through this web site and the upcoming 
learning events designed to increase our knowledge and skills about how to put together our own personal 
sustainable life style that will complement each other and the world around us!
  </p>

EOT;

  echo $text;

}
elseif($contrib==1)
{
  $text = <<<EOT

  <p class="headline">
  FINANCIAL STABILITY = SELF-SUFFICIENCY
  </p>
  <p>
<a target="_blank" href="docs/SL_Land_financial.pdf" class="link" style="float:left;margin-right:10px;margin-bottom:10px;">
<img src="images/clickit.jpg" height="85" width="125" alt="" border="0"></a>
  Like it or not, at least for now, money, those green pieces of paper, is what makes 'our world go around'. Until there is some sort of cosmic change in how our Country and World operates, those of us that are striving to live a self-sufficient, self-reliant and sustainable lifestyle had better figure out this 'money' thing and figure out how to obtain the best financial stability life status possible for ourselves and family. The ASAP management wants to thank Jason Land for weighing in on this important subject and taking time out of his extremely busy schedule to give us all some valuable advice on the subject.
  </p>
  <p>
  Jason is well qualified to be giving us advice on this important subject as he practices what he preaches. Jason is one of those individuals that always seems to be in motion and making something happen. At 31 years young, Jason has accomplished many things that others his age can only dream about, and, give him lots of experiences to draw on and form his opinions from. Take for example the fact that Jason joined the Navy and was a member of the Combat Craft Riverine group that is responsible for 'inserting and extracting' the Navy Seal units into their difficult operation locations. His interest in personal fitness and activity continues to this day as you may well run into him on some back country trail in the Sierra's hiking or backpacking. He also trains and participates regularly in Triathlons.
  </p>

  <p>
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