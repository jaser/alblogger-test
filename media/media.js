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

/* mark */
theText = theText.replace(/\[mark\=\"/gi, "<span style='background-color:");
theText = theText.replace(/\[\/mark\]/gi, "</span>");
/* link */
theText = theText.replace(/\[url=\"/gi, "<a target='_blank' href='");
theText = theText.replace(/\[\/url\]/gi, "</a>");
/* font family */
theText = theText.replace(/\[font\=\"/gi, "<font face=' ");
theText = theText.replace(/\[\/font\]/gi, "</font>");
/* Color */
theText = theText.replace(/\[color\=\"/gi, "<font color=' ");
theText = theText.replace(/\[\/color\]/gi, "</font>");
/* Size */
theText = theText.replace(/\[size\=\"/gi, "<font size=' ");
theText = theText.replace(/\[\/size\]/gi, "</font>");
/* closing tags */   
theText = theText.replace(/\"\]/gi, "'>");



/* force to Open new window 
theText = theText.replace(/<a/gi, "<a target='_blank'"); 
*/










/* smilies*/
theText = theText.replace(/س1/gi, "<img src='http://i50.tinypic.com/34s5eki.jpg'/>");
theText = theText.replace(/س2/gi, "<img src='http://i50.tinypic.com/1432wec.jpg'/>");
theText = theText.replace(/س3/gi, "<img src='http://i50.tinypic.com/2ish9w3.jpg'/>");
theText = theText.replace(/س4/gi, "<img src='http://i50.tinypic.com/121dbub.jpg'/>");
theText = theText.replace(/س5/gi, "<img src='http://i50.tinypic.com/n66j3a.jpg'/>");
theText = theText.replace(/س6/gi, "<img src='http://i50.tinypic.com/msdj01.jpg'/>");
theText = theText.replace(/س7/gi, "<img src='http://i50.tinypic.com/31274b6.jpg'/>");
theText = theText.replace(/س8/gi, "<img src='http://i50.tinypic.com/j5y245.jpg'/>");
theText = theText.replace(/س9/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vuMg6RQI/AAAAAAAAATQ/rWj7euuKOZs/33.gif'/>");
theText = theText.replace(/ص1/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vpLiW1GI/AAAAAAAAATA/fPyPJcBks7s/13.gif'/>");
theText = theText.replace(/ص2/gi, "<img src='https://lh3.ggpht.com/_u7a1IFxc4WI/TM-vz4hwcNI/AAAAAAAAATo/4ySXuvQWma8/104.gif'/>");
theText = theText.replace(/ص3/gi, "<img src='https://lh4.ggpht.com/_u7a1IFxc4WI/TM-vzUOH79I/AAAAAAAAATc/oNE5H5vcNtI/42.gif'/>");
theText = theText.replace(/ص4/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vzrqI4MI/AAAAAAAAATk/BhfFnT0Gbro/66.gif'/>");
theText = theText.replace(/ص5/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vziH8NXI/AAAAAAAAATg/2evEbN2cJwc/43.gif'/>");
theText = theText.replace(/ص7/gi, "<img src='https://lh6.ggpht.com/_u7a1IFxc4WI/TM-vuJ1G41I/AAAAAAAAATM/_jLHXvz6PTg/24.gif'/>");

theText = theText.replace(/ز1/gi, "<img src='http://i50.tinypic.com/qsjxqg.jpg'/>");
theText = theText.replace(/\ي2\2/gi, "<img src='http://i48.tinypic.com/k54u3b.jpg'/>");
theText = theText.replace(/ي3/gi, "<img src='http://i49.tinypic.com/2uj2lfp.jpg'/>");
theText = theText.replace(/ي4/gi, "<img src='http://i45.tinypic.com/e9stxs.jpg'/>");
theText = theText.replace(/ي5/gi, "<img src='http://i50.tinypic.com/15h1op0.jpg'/>");

bodyText.innerHTML = theText;
}replaceText();

//]]>
