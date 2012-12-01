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
theText = theText.replace(/ت1/gi, "<img src='http://i50.tinypic.com/34s5eki.jpg'/>");
theText = theText.replace(/ت2/gi, "<img src='http://i50.tinypic.com/1432wec.jpg'/>");
theText = theText.replace(/ت3/gi, "<img src='http://i50.tinypic.com/2ish9w3.jpg'/>");
theText = theText.replace(/ت4/gi, "<img src='http://i50.tinypic.com/121dbub.jpg'/>");
theText = theText.replace(/ت5/gi, "<img src='http://i50.tinypic.com/n66j3a.jpg'/>");
theText = theText.replace(/ت6/gi, "<img src='http://i50.tinypic.com/msdj01.jpg'/>");
theText = theText.replace(/ت7/gi, "<img src='http://i50.tinypic.com/31274b6.jpg'/>");
theText = theText.replace(/ت8/gi, "<img src='http://i50.tinypic.com/j5y245.jpg'/>");
theText = theText.replace(/ب1/gi, "<img src='http://i50.tinypic.com/2vc97yf.jpg'/>");
theText = theText.replace(/ب2/gi, "<img src='http://i50.tinypic.com/2eltvtw.jpg'/>");
theText = theText.replace(/ب3/gi, "<img src='http://i50.tinypic.com/dhcsi.jpg'/>");
theText = theText.replace(/ب4/gi, "<img src='http://i50.tinypic.com/2rojeqh.jpg'/>");
theText = theText.replace(/ب5/gi, "<img src='http://i50.tinypic.com/2yv9kas.jpg'/>");
theText = theText.replace(/ب6/gi, "<img src='http://i50.tinypic.com/316b48h.jpg'/>");
theText = theText.replace(/ب7/gi, "<img src='http://i50.tinypic.com/2w2fn2s.jpg'/>");
theText = theText.replace(/ب8/gi, "<img src='http://i50.tinypic.com/16k9pp5.jpg'/>");
theText = theText.replace(/ج1/gi, "<img src='http://i50.tinypic.com/10ncpae.jpg'/>");
theText = theText.replace(/ج2/gi, "<img src='http://i50.tinypic.com/348gdj9.jpg'/>");
theText = theText.replace(/ج3/gi, "<img src='http://i50.tinypic.com/m0s8z.jpg'/>");
theText = theText.replace(/ج4/gi, "<img src='http://i50.tinypic.com/34so64h.jpg'/>");
theText = theText.replace(/ج5/gi, "<img src='http://i50.tinypic.com/724lkw.jpg'/>");
theText = theText.replace(/ج6/gi, "<img src='http://i50.tinypic.com/iwu6oy.jpg'/>");
theText = theText.replace(/ج7/gi, "<img src='http://i50.tinypic.com/2el4ffs.jpg'/>");
theText = theText.replace(/ج8/gi, "<img src='http://i50.tinypic.com/x36ejp.jpg'/>");
theText = theText.replace(/ع1/gi, "<img src='http://i50.tinypic.com/2mnpwuf.jpg'/>");
theText = theText.replace(/ع2/gi, "<img src='http://i50.tinypic.com/f16vd.jpg'/>");
theText = theText.replace(/ع3/gi, "<img src='http://i50.tinypic.com/51vus5.jpg'/>");
theText = theText.replace(/ع4/gi, "<img src='http://i50.tinypic.com/2cxdwyv.jpg'/>");
theText = theText.replace(/ع5/gi, "<img src='http://i50.tinypic.com/23r0854.jpg'/>");
theText = theText.replace(/ع6/gi, "<img src='http://i50.tinypic.com/knalt.jpg'/>");
theText = theText.replace(/ع7/gi, "<img src='http://i50.tinypic.com/e70a51.jpg'/>");
theText = theText.replace(/ع8/gi, "<img src='http://i50.tinypic.com/23uoha9.jpg'/>");
theText = theText.replace(/م1/gi, "<img src='http://i50.tinypic.com/o50yew.jpg'/>");
theText = theText.replace(/م2/gi, "<img src='http://i50.tinypic.com/jhdn2e.jpg'/>");
theText = theText.replace(/م3/gi, "<img src='http://i50.tinypic.com/2zxxffr.jpg'/>");
theText = theText.replace(/م4/gi, "<img src='http://i50.tinypic.com/5f0pw7.jpg'/>");
theText = theText.replace(/م5/gi, "<img src='http://i50.tinypic.com/24wr7uu.jpg'/>");
theText = theText.replace(/م6/gi, "<img src='http://i50.tinypic.com/34i5tud.jpg'/>");
theText = theText.replace(/م7/gi, "<img src='http://i50.tinypic.com/hure39.jpg'/>");
theText = theText.replace(/م8/gi, "<img src='http://i50.tinypic.com/346udg8.jpg'/>");
theText = theText.replace(/م9/gi, "<img src='http://i50.tinypic.com/35cpgy8.jpg'/>");




theText = theText.replace(/ز1/gi, "<img src='http://i50.tinypic.com/qsjxqg.jpg'/>");
theText = theText.replace(/\ي2\2/gi, "<img src='http://i48.tinypic.com/k54u3b.jpg'/>");
theText = theText.replace(/ي3/gi, "<img src='http://i49.tinypic.com/2uj2lfp.jpg'/>");
theText = theText.replace(/ي4/gi, "<img src='http://i45.tinypic.com/e9stxs.jpg'/>");
theText = theText.replace(/ي5/gi, "<img src='http://i50.tinypic.com/15h1op0.jpg'/>");

bodyText.innerHTML = theText;
}replaceText();

//]]>
