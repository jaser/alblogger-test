
//<![CDATA[

document.write("<style>#related-posts{width:540px;margin-top:30px;margin-left:5px;margin-bottom:20px;font:11px Verdana;margin-bottom:10px;}#related-posts h2{background:none repeat scroll 0 0 transparent;border-radius:10px 10px 10px 10px;-webkit-border-radius:10px;border:1px solid #E2E2E2;color:#4AA02C;padding:3px 10px 3px 3px;width:135px;font-size:14pt;}#related-posts .widget{list-style-type:none;margin:5px 0 5px 0;padding:0;}#related-posts .widget h2{font-size:20px;font-weight:normal;margin:5px 7px 0;padding:0 0 5px;}#related-posts a{color:gray;font-family:arial;font-size:12pt;font-weight:bold;padding-right:29px;text-decoration:none;text-shadow:1px 1px 4px gray;}#related-posts a:hover{text-decoration:none;}#related-posts ul{border:medium none;margin:10px;padding:0;margin-bottom:20px;}#related-posts ul li{background:url('http://2.bp.blogspot.com/_66wIGDjagHk/Siu9RUcbv2I/AAAAAAAAAjM/gObN_C4Q-OU/s1600/poin.png') no-repeat scroll right 0 transparent;border-bottom:1px dotted #CCCCCC;display:block;line-height:2em;margin:0 0 5px;padding:0 0 1px 21px;}</style>");



var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.media$thumbnail.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d}else thumburl[relatedTitlesNum]='http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png'}if(relatedTitles[relatedTitlesNum].length>35)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...";for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false}function printRelatedLabels_thumbs(){for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==currentposturl)||(!(relatedTitles[i]))){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0)document.write('<h2>'+relatedpoststitle+'</h2>');document.write('<div style="clear: both;"/>');while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<a style="text-decoration:none;padding:5px;float:left;');if(i!=0)document.write('border-left:1px dashed #E5E5E5; color:gray;"');else document.write('"');document.write(' href="'+relatedUrls[r]+'"><img style="width:72px;height:72px;border:0px;" src="'+thumburl[r]+'"/><br/><div style="width:72px;padding-left:3px;height:65px;border: 0pt none ; margin: 3px 0pt 0pt; padding: 0pt; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: normal; font-size-adjust: none; font-stretch: normal; color:gray;">'+relatedTitles[r]+'</div></a>');if(r<relatedTitles.length-1){r++}else{r=0}i++}document.write('</div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)}

//]]>