//<![CDATA[
function replaceText(){if(!document.getElementById){return;}
bodyText = document.getElementById("comment-holder");
theText = bodyText.innerHTML;
theText = theText.replace(/\[img\].*?'.*?\[\/img\]/gi, "");
theText = theText.replace(/\[youtube\].*?'.*?\[\/youtube\]/gi, "");

document.write("<style> .comment-content  iframe {max-width:30%; display: block; margin: 0 auto;} <\/style>");

theText = theText.replace(/\[img\]/gi, "<div style='clear:both'></div><img style='margin:0 auto;max-width:90%;display:block;' src='");
theText = theText.replace(/\[\/img\]/gi, "'/><div style='clear:both'></div>");
theText = theText.replace(/\[\\img\]/gi, "'/><div style='clear:both'></div>");

theText = theText.replace(/\[youtube\]http:\/\/youtu.be/gi, "<iframe width='480' height='390' src='http://www.youtube.com/embed");
theText = theText.replace(/\[youtube\]http:\/\/www.youtube.com\/watch\?v=/gi, "<iframe width='480' height='390' src='http://www.youtube.com/embed/");
theText = theText.replace(/&feature=/gi, "?rel=0' '");
theText = theText.replace(/\[\/youtube\]/gi, "?rel=0' frameborder='0' allowfullscreen></iframe>");

theText = theText.replace(/\[code\]/gi, "<pre style='text-align:left; direction:ltr; color:olive;background:#EEEEEE;font-size:13px;font-weight:normal!important;line-height:18px;overflow:auto;padding: 7px 0 7px 10px;'>");
theText = theText.replace(/\[\/code\]/gi, "</pre>");


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
