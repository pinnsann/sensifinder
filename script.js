window.onload=function(){
    var dpi=Cookies.get("dpi");
    console.log(dpi)
    if(dpi!=null){
        document.getElementsByName("dpi")[0].value=Number(dpi);
    }
    else{
        document.getElementsByName("dpi")[0].value=1600;
    }
    
}
function calc(){
    const decimal_multi = 1000
    var sensi= document.getElementsByName("input")[0].value;
    var dpi=document.getElementsByName("dpi")[0].value;
    document.getElementsByName("valo")[0].value=Math.round((360/0.0175*2.54/8/dpi/sensi)*decimal_multi)/decimal_multi;
    document.getElementsByName("siege")[0].value=Math.round((360*8.866272600131111/0.02/2/dpi/sensi)*decimal_multi)/decimal_multi;
    document.getElementsByName("apex")[0].value=Math.round(360/0.0066/2*3/5*2.54/2/dpi/sensi*decimal_multi)/decimal_multi;
    document.getElementsByName("mw")[0].value=Math.round((360/0.0066*2.54/2/dpi/sensi)*decimal_multi)/decimal_multi;
    document.getElementsByName("csgo")[0].value=Math.round(360/0.0066/2*3/5*2.54/2/dpi/sensi*decimal_multi)/decimal_multi;
    document.getElementsByName("over")[0].value=Math.round((360/0.0066*2.54/2/dpi/sensi)*decimal_multi)/decimal_multi;
    document.getElementsByName("fortnite")[0].value=Math.round((360/0.00555500005555*2.54/2/dpi/sensi)*decimal_multi)/decimal_multi;
    document.getElementsByName("iron")[0].value=Math.round((360/0.01*2.54/2)/dpi/sensi*decimal_multi)/decimal_multi;
    document.getElementsByName("destiny")[0].value=Math.round((360/0.0066*2.54/2/dpi/sensi)*decimal_multi)/decimal_multi;
    Cookies.set("dpi",String(dpi));
}
function copy(v){
    document.getElementsByName("input")[0].value=v
    calc()
}