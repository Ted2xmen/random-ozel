//  MEKAN
var deneme =  new Array(
    " Oysa bu sürgün yeri, bu pıtraklı diyar, ",
    " ve şakrak dostlarımdan uzakta,  ",
    " açık renk bir elbiseye yakışan alnın, "
); 
var randomDeneme = Math.floor(Math.random()*deneme.length);
var randomDenemeler = deneme[randomDeneme];

//  var EMRET
var emr =  new Array(
    " Sitem et! ",
    " Nazlan!  ",
    " Kendi alevini de getir! ",
    " Avluya çık! ",
    " Fly Pan-Am ",
    " Drink Coca-Cola! "
); 
var randomEmr = Math.floor(Math.random()*emr.length);
var Emret = emr[randomEmr];

// var randomNeyle
var neyle = new Array(
    " kör bir usturayla ",
    " alçak sesle ",
    " binlerce binlerce ",
    " ve tarçın kokusu ve yorgunluklarla ",
    " ağırkanlı bir güneşle " , 
    " ölümle ", 
    " gülünç bir ölümle ",
    " cebelleşmek yalanla, ",
    " kirle, ",
    " tahvilatlarla, ",
    " kuru bir bilgisayar tıkırtısıyla ",
 );
var randomneyle = Math.floor(Math.random()*neyle.length);
var randomNeyle = neyle[randomneyle];




// display 
document.write(Emret + "<br>");
document.write(randomDenemeler + "<br>" + randomNeyle);


// display 
document.write(Emret + "<br>");
document.write(randomDenemeler + "<br>" + randomNeyle);
// display 
document.write(Emret + "<br>");
document.write(randomDenemeler + "<br>" + randomNeyle);

