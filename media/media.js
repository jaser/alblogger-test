//<![CDATA[
function replaceText(){if(!document.getElementById){return;}
bodyText = document.getElementById("comments");
theText = bodyText.innerHTML;
theText = theText.replace(/\[img\].*?'.*?\[\/img\]/gi, "");
theText = theText.replace(/\[y\].*?'.*?\[\/y\]/gi, "");
/* adjust Iframe */
document.write("<style> .comments .comment-block iframe {display:block;margin:0 auto;}<\/style>");
/* images */
theText = theText.replace(/\[img\]/gi, "<div style='clear:both'></div><img style='margin:0 auto;max-width:90%;display:block;' src='");
theText = theText.replace(/\[\/img\]/gi, "'/><div style='clear:both'></div>");
theText = theText.replace(/\[\\img\]/gi, "'/><div style='clear:both'></div>");
/* youtube */
theText = theText.replace(/\[y\]http:\/\/youtu.be/gi, "<iframe style='max-width:80%;' width='480' height='390' src='http://www.youtube.com/embed");
theText = theText.replace(/\[y\]http:\/\/www.youtube.com\/watch\?v=/gi, "<iframe width='480' height='390' src='http://www.youtube.com/embed/");
theText = theText.replace(/&feature=/gi, "?rel=0' '");
theText = theText.replace(/\[\/y\]/gi, "?rel=0' frameborder='0' allowfullscreen></iframe>");
theText = theText.replace(/\[\\y\]/gi, "?rel=0' frameborder='0' allowfullscreen></iframe>");
/*vimeo*/
theText = theText.replace(/\[v\]/gi, "<iframe style='max-width:80%;' src='http://player.vimeo.com/video/");
theText = theText.replace(/\[\/v\]/gi, "?title=0&amp;byline=0&amp;portrait=0' width='500' height='281' frameborder='0' allowFullScreen></iframe>");
theText = theText.replace(/\[\\v\]/gi, "?title=0&amp;byline=0&amp;portrait=0' width='500' height='281' frameborder='0' allowFullScreen></iframe>");
/*mp3*/
theText = theText.replace(/\[mp3\]/gi, "<center><object data='http://www.google.com/reader/ui/3523697345-audio-player.swf' type='application/x-shockwave-flash' width='300' height='27'><param name='src' value='http://www.google.com/reader/ui/3523697345-audio-player.swf' /><param name='FlashVars' value='audioUrl=");
theText = theText.replace(/\[\/mp3\]/gi, "'/></object></center>");
theText = theText.replace(/\[\\mp3\]/gi, "'/></object></center>");
/*real*/
theText = theText.replace(/\[rm\]/gi, "<center><embed width='300' height='27' src='");
theText = theText.replace(/\[\/rm\]/gi, "' pluginspage='http://www.real.com/player' type='audio/x-pn-realaudio-plugin' nojava='true' autostart='false' maintainaspect='false' controls='controlpanel'/></center>");
theText = theText.replace(/\[\\rm\]/gi, "' pluginspage='http://www.real.com/player' type='audio/x-pn-realaudio-plugin' nojava='true' autostart='false' maintainaspect='false' controls='controlpanel'/></center>");
/* code */
theText = theText.replace(/\[code\]/gi, "<pre style='text-align:left; direction:ltr; color:olive;background:#EEEEEE;font-size:13px;font-weight:normal!important;line-height:18px;overflow:auto;padding: 7px 0 7px 10px;'>");
theText = theText.replace(/\[\/code\]/gi, "</pre>");
theText = theText.replace(/\[\\code\]/gi, "</pre>");

/* bbcode */
theText = theText.replace(/\[b\]/gi, "<b>");
theText = theText.replace(/\[\/b\]/gi, "</b>");
theText = theText.replace(/\[u\]/gi, "<u>");
theText = theText.replace(/\[\/u\]/gi, "</u>");
theText = theText.replace(/\[s\]/gi, "<s>");
theText = theText.replace(/\[\/s\]/gi, "</s>");
theText = theText.replace(/\[center\]/gi, "<center>");
theText = theText.replace(/\[\/center\]/gi, "</center>");
theText = theText.replace(/\[i\]/gi, "<i>");
theText = theText.replace(/\[\/i\]/gi, "</i>");
theText = theText.replace(/\[quote\]/gi, "<quote>");
theText = theText.replace(/\[\/quote\]/gi, "</quote>");
theText = theText.replace(/\[list\]/gi, "<ul>");
theText = theText.replace(/\[\/list\]/gi, "</ul>");
theText = theText.replace(/\[\*\]/gi, "<li>");
theText = theText.replace(/\[\*\]/gi, "</li>");


/* link */
theText = theText.replace(/\[url\=/gi, "<a target='_blank' href='");
theText = theText.replace(/\[\/url\]/gi, "</a>");
theText = theText.replace(/\]/gi, "'>");
/* force to Open new window */
theText = theText.replace(/<a/gi, "<a target='_blank'");




/* smilies*/
theText = theText.replace(/س1/gi, "<img src='https://lh4.ggpht.com/_u7a1IFxc4WI/TM-vt_XVZKI/AAAAAAAAATI/Q35_W0anT6A/21.gif'/>");
theText = theText.replace(/س2/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vzUt1yQI/AAAAAAAAATY/QHNvnj0gYbU/41.gif'/>");
theText = theText.replace(/س3/gi, "<img src='https://lh3.ggpht.com/_u7a1IFxc4WI/TM-voxnkRKI/AAAAAAAAAS4/PjDn098vm3w/4.gif'/>");
theText = theText.replace(/س4/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vpDb68dI/AAAAAAAAAS8/Yv0Uu3qzG_Q/10.gif'/>");
theText = theText.replace(/س5/gi, "<img src='https://lh4.ggpht.com/_u7a1IFxc4WI/TM-vt5z16MI/AAAAAAAAATE/Hx-7Thmr6do/20.gif'/>");
theText = theText.replace(/س6/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-voiNIw2I/AAAAAAAAASw/aav2hwqeG0c/1.gif'/>");
theText = theText.replace(/س7/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-voq7QQnI/AAAAAAAAAS0/UzoFJOCcPPU/2.gif'/>");
theText = theText.replace(/س8/gi, "<img src='https://lh5.ggpht.com/_u7a1IFxc4WI/TM-vua5MF2I/AAAAAAAAATU/N4X-ouMd1-I/39.gif'/>");
theText = theText.replace(/س9/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vuMg6RQI/AAAAAAAAATQ/rWj7euuKOZs/33.gif'/>");
theText = theText.replace(/ص1/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vpLiW1GI/AAAAAAAAATA/fPyPJcBks7s/13.gif'/>");
theText = theText.replace(/ص2/gi, "<img src='https://lh3.ggpht.com/_u7a1IFxc4WI/TM-vz4hwcNI/AAAAAAAAATo/4ySXuvQWma8/104.gif'/>");
theText = theText.replace(/ص3/gi, "<img src='https://lh4.ggpht.com/_u7a1IFxc4WI/TM-vzUOH79I/AAAAAAAAATc/oNE5H5vcNtI/42.gif'/>");
theText = theText.replace(/ص4/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vzrqI4MI/AAAAAAAAATk/BhfFnT0Gbro/66.gif'/>");
theText = theText.replace(/ص5/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vziH8NXI/AAAAAAAAATg/2evEbN2cJwc/43.gif'/>");
theText = theText.replace(/ص6/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vuJ1G41I/AAAAAAAAATM/_jLHXvz6PTg/24.gif'/>");



bodyText.innerHTML = theText;
}replaceText();

//]]>
