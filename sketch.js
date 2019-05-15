var feedArray
var img
var imgLoaded
var sourceNum
var articleNum
function preload()
{
    var ar = 'https://newsapi.org/v2/top-headlines?country=ar&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var au = 'https://newsapi.org/v2/top-headlines?country=au&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var at = 'https://newsapi.org/v2/top-headlines?country=at&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var be = 'https://newsapi.org/v2/top-headlines?country=be&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var br = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var bg = 'https://newsapi.org/v2/top-headlines?country=bg&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ca = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var cn = 'https://newsapi.org/v2/top-headlines?country=cn&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var co = 'https://newsapi.org/v2/top-headlines?country=co&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var cu = 'https://newsapi.org/v2/top-headlines?country=cu&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var cz = 'https://newsapi.org/v2/top-headlines?country=cz&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var eg = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var fr = 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var de = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var gr = 'https://newsapi.org/v2/top-headlines?country=gr&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var hk = 'https://newsapi.org/v2/top-headlines?country=hk&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var hu = 'https://newsapi.org/v2/top-headlines?country=hu&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var id = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ie = 'https://newsapi.org/v2/top-headlines?country=ie&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var il = 'https://newsapi.org/v2/top-headlines?country=il&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var it = 'https://newsapi.org/v2/top-headlines?country=it&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var jp = 'https://newsapi.org/v2/top-headlines?country=jp&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var lv = 'https://newsapi.org/v2/top-headlines?country=lv&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var lt = 'https://newsapi.org/v2/top-headlines?country=lt&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var my = 'https://newsapi.org/v2/top-headlines?country=my&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var mx = 'https://newsapi.org/v2/top-headlines?country=mx&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ma = 'https://newsapi.org/v2/top-headlines?country=ma&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var nl = 'https://newsapi.org/v2/top-headlines?country=nl&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var nz = 'https://newsapi.org/v2/top-headlines?country=nz&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ng = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var no = 'https://newsapi.org/v2/top-headlines?country=no&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ph = 'https://newsapi.org/v2/top-headlines?country=ph&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var pl = 'https://newsapi.org/v2/top-headlines?country=pl&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var pt = 'https://newsapi.org/v2/top-headlines?country=pt&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ro = 'https://newsapi.org/v2/top-headlines?country=ro&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ru = 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var sa = 'https://newsapi.org/v2/top-headlines?country=sa&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var rs = 'https://newsapi.org/v2/top-headlines?country=rs&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var sg = 'https://newsapi.org/v2/top-headlines?country=sg&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var sk = 'https://newsapi.org/v2/top-headlines?country=sk&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var si = 'https://newsapi.org/v2/top-headlines?country=si&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var za = 'https://newsapi.org/v2/top-headlines?country=za&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var kr = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var se = 'https://newsapi.org/v2/top-headlines?country=se&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ch = 'https://newsapi.org/v2/top-headlines?country=ch&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var tw = 'https://newsapi.org/v2/top-headlines?country=tw&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var th = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var tr = 'https://newsapi.org/v2/top-headlines?country=tr&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ae = 'https://newsapi.org/v2/top-headlines?country=ae&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ua = 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var gb = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var us = 'https://newsapi.org/v2/top-headlines?country=ve&apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';

    feedArray = [loadJSON(ar),loadJSON(au),loadJSON(at),loadJSON(be),loadJSON(br),loadJSON(bg),loadJSON(ca),loadJSON(cn),loadJSON(co),loadJSON(cu),loadJSON(cz),loadJSON(eg),loadJSON(fr),loadJSON(de),loadJSON(gr),loadJSON(hk),loadJSON(hu),loadJSON(id),loadJSON(ie),loadJSON(il),loadJSON(it),loadJSON(jp),loadJSON(lv),loadJSON(lt),loadJSON(my),loadJSON(mx),loadJSON(ma),loadJSON(nl),loadJSON(nz),loadJSON(ng),loadJSON(no),loadJSON(ph),loadJSON(pl),loadJSON(pt),loadJSON(ro),loadJSON(ru),loadJSON(sa),loadJSON(rs),loadJSON(sg),loadJSON(sk),loadJSON(si),loadJSON(za),loadJSON(kr),loadJSON(se),loadJSON(ch),loadJSON(tw),loadJSON(th),loadJSON(tr),loadJSON(ae),loadJSON(ua),loadJSON(gb),loadJSON(us)]
}

function setup()
{   
    createCanvas(1280,800);
    background(255);
}
function draw()
{
    for(var i = 0;i<feedArray.length; i++){
        for(var j = 0; j<10;j++){ window.open(feedArray[i].articles[j].urlToImage,"_blank")
        }
    }
    noLoop();
}