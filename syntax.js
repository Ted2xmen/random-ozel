





//  var EMRET
let emir =  new Array(
    " Sitem et! ",
    " Nazlan!  ",
    " Kendi alevini de getir! ",
    " Avluya çık! ",
    " Fly Pan-Am ",
    " Drink Coca-Cola! "
); 
let randomEmr = Math.floor(Math.random()*emir.length);
let Emret = emir[randomEmr];



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
var neile = neyle[randomneyle];


// bir
var bir = new Array(
    " bir cinayet türküsü ", 
    " bir çeteci ", 
    " bir harf ", 
    " bir ergen cesedi " );
var randombir = Math.floor(Math.random()*bir.length);
var birsey = bir[randombir];

// hitap
var hitap = new Array(
    "Ey gövdelerin pişmanlığı! ", 
    "Köleler! " , 
    "Halkım" , 
    "Gözlerim " , 
    "Kardeşlerim " , 
    "Ve  kahyalar " , 
    " Kargaşa " , 
    "Ey yanginlar artığı ");
var randomhitap = Math.floor(Math.random()*hitap.length);
var seslen = hitap[randomhitap];


// napan
var nolan = new Array(
    "şakağıma vuran ", 
    "Avrupalı atları koşuşturan ",  
    "dibeklerinde inatlarını döven" , 
    "oturduğumuz evleri tıkayan " , 
    "o sağır yamaçlardan " , 
    "isyan işaretleri taşıyan ", 
    "yumruğum çözülmeden ", 
    "Kar yağarken ");
var randomnolan = Math.floor(Math.random()*nolan.length);
var neyapan = nolan[randomnolan];



// tamlama
var tamlama1 = new Array(
    "çaylak sürüleri ", 
    "çıkarılmış insan gözleri", 
    "yasak düşünceler ",  
    "Leş yiyen akçıl kuşları", 
    "belki ruhların gölgesi", 
    "biraz da sabah sisi",
    "dupduru bir iniltiyi ",
    "akşamın kanlı eli ", 
    "bazı yasak kitapların verdiği ", 
    "kanımdaki çiviyi ",
    "vazgeçilmez ırmakları " ,
    "ve saat 24 vardiyasının işçileri "
    );
var randomtamlama1 = Math.floor(Math.random()*tamlama1.length);
var tamlamai = tamlama1[randomtamlama1];


// gibi gibi  + gibi
var gibi = new Array(
    "gövden aklın  ", 
    "biraz kürt, biraz köylü, biraz makina " , 
    "işaret parmağımda zincir " , 
    "cebimde sedef çakı " , 
    "ne koku, ne yankı, ne de boya ",
    "Gizemli bir dehliz  " , 
    "karnın ısırgan otları  "   );
var randomgibi = Math.floor(Math.random()*gibi.length);
var xxxgibi = gibi[randomgibi];


// soru
var soru = new Array(
    " Neden büyük ırmaklardan bile heyecanlıydı ", 
    " nedir o katı şey " , 
    " kimin ülkesinden geçsem " , 
    " Uzak nedir? " , 
    " sahibim Köroğlu'nun da sahibi değil mi? " , 
    " tanıdım Ademoğlu kimin nesiymiş " , 
    " şehir mi değil mi burası " , 
    " dostları düşünmenin çarpıntısından mı? " , 
    " Ama kim? ", 
    " parti broşürleri yoksa kafiyeler mi " , 
    " Anılacak günlerim olmadı mı benim? " , 
    " ben deli bir fışkın değil miyim? " , 
    " zaten bir tanım değil midir? " , 
    " çarpıntısız dakikası olur mu devrimcinin ");
var randomsoru = Math.floor(Math.random()*soru.length);
var sor = soru[randomsoru];






// last 





// " ne kargış, ne infilak ", 
console.log(Emret);
console.log(neile);
console.log(birsey);
console.log(seslen);
console.log(neyapan);
console.log(tamlamai);
console.log(xxxgibi+ "gibi");
console.log(sor + "?");


// all 

let newPoem = `


${Emret}${neyapan} ${birsey}   <br>
${Emret} ${seslen}${neile}  <br>
${Emret}${neyapan} ${sor}  <br>
${Emret}${tamlamai} ${neile}  <br>
<br>
${birsey} ${xxxgibi+ " gibi"}${neile} <br>
${Emret} ${seslen}${neile} <br>
${Emret} ${sor}${neile} <br>
`;

// innerhtml
let newPoe = document.querySelector(".card-body");
newPoe.innerHTML = newPoem;




///////////////////////////////////
// title
var baslik = new Array("Aynı  ", " Akla Karşı " , "Kötü " , "Kanla Kirlenmiş " , "Evet,  ", "Umrumdadır ",  "Yorgun ", "Geceleyin ", "Sebeb-i ");
var randombaslik = Math.floor(Math.random()*baslik.length);
var randomBaslik = baslik[randombaslik];

var baslik2 = new Array("Adam ", "Evrak" , "Propaganda" , "Sabah " , "İftira ", "Esenlik", "Yenilgi ", "Şiirler");
var randombaslik2 = Math.floor(Math.random()*baslik2.length);
var randomBaslik2 = baslik2[randombaslik2];


let title = document.querySelector(".c-title");
title.innerHTML = randomBaslik + randomBaslik2;


///////////////////////////////////////////////////
// tarih
let tarih = new Array
("iki bin otuz dokuz  ", "iki bin yetmiş altı " , "iki bin yirmi yedi" , "iki bin yedi yüz " , "iki bin yirmi iki ");
let randomtarih = Math.floor(Math.random()*tarih.length);
let randomTarih = tarih[randomtarih];

let year = document.querySelector(".year");
year.innerHTML = randomTarih;


// refresh the page
let refreshPage = document.querySelector(".refresh");
refreshPage.addEventListener('click', function(){
    location.reload();
});

