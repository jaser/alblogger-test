 //<![CDATA[

document.write("<style>#related-posts{width:540px;margin-top:30px;margin-left:5px;margin-bottom:20px;font:11px Verdana;margin-bottom:10px;}#related-posts h2{background:none repeat scroll 0 0 transparent;border-radius:10px 10px 10px 10px;-webkit-border-radius:10px;border:1px solid #E2E2E2;color:#4AA02C;padding:3px 10px 3px 3px;width:135px;font-size:14pt;}#related-posts .widget{list-style-type:none;margin:5px 0 5px 0;padding:0;}#related-posts .widget h2{font-size:20px;font-weight:normal;margin:5px 7px 0;padding:0 0 5px;}#related-posts a{color:gray;font-family:arial;font-size:12pt;font-weight:bold;padding-right:29px;text-decoration:none;text-shadow:1px 1px 4px gray;}#related-posts a:hover{text-decoration:none;}#related-posts ul{border:medium none;margin:10px;padding:0;margin-bottom:20px;}#related-posts ul li{background:url('http://2.bp.blogspot.com/_66wIGDjagHk/Siu9RUcbv2I/AAAAAAAAAjM/gObN_C4Q-OU/s1600/poin.png') no-repeat scroll right 0 transparent;border-bottom:1px dotted #CCCCCC;display:block;line-height:2em;margin:0 0 5px;padding:0 0 1px 21px;}</style>");
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
function related_results_labels(json) {
for (var i = 0; i < json.feed.entry.length; i++) {
var entry = json.feed.entry[i];
relatedTitles[relatedTitlesNum] = entry.title.$t;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
relatedUrls[relatedTitlesNum] = entry.link[k].href;
relatedTitlesNum++;
break;
}
}
}
}
function removeRelatedDuplicates() {
var tmp = new Array(0);
var tmp2 = new Array(0);
for(var i = 0; i < relatedUrls.length; i++) {
if(!contains(tmp, relatedUrls[i])) {
tmp.length += 1;
tmp[tmp.length - 1] = relatedUrls[i];
tmp2.length += 1;
tmp2[tmp2.length - 1] = relatedTitles[i];
}
}
relatedTitles = tmp2;
relatedUrls = tmp;
}
function contains(a, e) {
for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
return false;
}
function printRelatedLabels() {
var r = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;
document.write('<ul>');
while (i < relatedTitles.length && i < 20) {
document.write('<li><a href="' + relatedUrls[r] + '">' + relatedTitles[r] + '</a></li>');
if (r < relatedTitles.length - 1) {
r++;
} else {
r = 0;
}
i++;
}
document.write('</ul>');

}


document.write("<b:if cond='data:blog.pageType == &quot;item&quot;'><div id='related-posts'><h2>مواضيع ذات صلة : </h2>");
document.write("<font color='#FFFFFF'><b:loop values='data:post.labels' var='label'><b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>");
document.write("<b:if cond='data:blog.pageType == &quot;item&quot;'>");
document.write("<script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=related_results_labels&amp;max-results=5&quot;' type='text/javascript'/>");
document.write("</b:if></b:loop> </font>");
document.write("<script type='text/javascript'> removeRelatedDuplicates(); printRelatedLabels();</script></div></b:if>");





//]]>
