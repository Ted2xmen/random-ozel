

// tarih

var tarih = new Array("iki bin otuz dokuz  ", "iki bin yetmiş altı " , "iki bin yirmi yedi" , "iki bin yedi yüz " , "iki bin yirmi iki ");
var randomtarih = Math.floor(Math.random()*tarih.length);
var randomTarih = tarih[randomtarih];

// başlıklar 

var baslik = new Array("Aynı  ", " Akla Karşı " , "Kötü " , "Kanla Kirlenmiş " , "Evet,  ", "Umrumdadır ",  "Yorgun ", "Geceleyin ", "Sebeb-i ");
var randombaslik = Math.floor(Math.random()*baslik.length);
var randomBaslik = baslik[randombaslik];


var baslik2 = new Array("Adam ", "Evrak" , "Propaganda" , "Sabah " , "İftira ", "Esenlik", "Yenilgi ", "Şiirler");
var randombaslik2 = Math.floor(Math.random()*baslik2.length);
var randomBaslik2 = baslik2[randombaslik2];



//  başlık ve tarih : birincil
var birincil = new Array("<center> " + randomTarih  + " <br><h1> "  + randomBaslik + randomBaslik2 + " </h1><center/>");


//  click to refresh

var refreshPage = document.querySelector(".refresh");
refreshPage.addEventListener('click', function(){
    location.reload();
});

// RANDOM İSMET ÖZEL ŞİİRİ


// PART 1


var giris = new Array("Bakın yaklaşıyor yaklaşmakta olan ","Fayrap sevişmek için ", "Duyumsatmadı kendini hiçlik bile " , "Kimseyi çağıramaz kendi adıyla ", " Gençtim ya, ne farkeder deyip geçerdim ", "   ", "Ve kahyalar ", "Köleler! ");
var randomgiris = Math.floor(Math.random()*giris.length);
var randomGir = giris[randomgiris];


var tamlama1 = new Array("çaylak sürüleri ", "çıkarılmış insan gözleri", "yasak düşünceler ",  "Leş yiyen akçıl kuşları", "belki ruhların gölgesi", "biraz da sabah sisi", "");
var randomtamlama1 = Math.floor(Math.random()*tamlama1.length);
var randomTamlama1 = tamlama1[randomtamlama1];

var tamlama2 = new Array("dupduru bir iniltiyi ","akşamın kanlı eli ", "vazgeçilmez ırmakları " ,"ve saat 24 vardiyasının işçileri ", "bazı yasak kitapların verdiği ", "kanımdaki çiviyi " );
var randomtamlama2 = Math.floor(Math.random()*tamlama2.length);
var randomTamlama2 = tamlama2[randomtamlama2];

// PART 2 

var nolan = new Array("şakağıma vuran ", "Avrupalı atları koşuşturan ", "gövdem ", "dibeklerinde inatlarını döven" , "oturduğumuz evleri tıkayan " , "o sağır yamaçlardan " , "isyan işaretleri taşıyan ", "yumruğum çözülmeden ", "Kar yağarken ");
var randomnolan = Math.floor(Math.random()*nolan.length);
var randomNolan = nolan[randomnolan];

var hitap = new Array("Ey gövdelerin pişmanlığı! ", "Köleler! " , "Halkım" , "Gözlerim " , "Kardeşlerim " , "Ve  kahyalar " , " Kargaşa " , "Ey yanginlar artığı ");
var randomhitap = Math.floor(Math.random()*hitap.length);
var randomHitap = hitap[randomhitap];
 

// PART 3

var bir = new Array("bir cinayet türküsü ", "bir çeteci ", "bir harf ", "ne kargış, ne infilak ", "bir ergen cesedi " );
var randombir = Math.floor(Math.random()*bir.length);
var randomBir = bir[randombir];

var nerede = new Array("bir alkol koması sırasında ", "kafamda ", "Yırtarak açtığımız zarflarda ", "Böğrümde ", "insan kıyısında ", "güç bela kurduğum cümle ", "bir soğuk uzay " );
var randomnerede = Math.floor(Math.random()*nerede.length);
var randomNerede = nerede[randomnerede];


// PART 4
var neyle = new Array("kör bir usturayla ", "alçak sesle ", "binlerce binlerce ",  "Ve tarçın kokusu ve yorgunluklarla ", "ağırkanlı bir güneşle " , "ölümle ", "gülünç bir ölümle ",  "cebelleşmek yalanla, kirle, tahvilatlarla ", "kuru bir bilgisayar tıkırtısıyla ",   );
var randomneyle = Math.floor(Math.random()*neyle.length);
var randomNeyle = neyle[randomneyle];

var nasil1 = new Array("külsüzdü ocak ", "tellal çarşısız ", "ayın kaçıydı ", "engebeli ve dakikti ");
var randomnasil1 = Math.floor(Math.random()*nasil1.length);
var randomNasil1 = nasil1[randomnasil1];

var yuklem = new Array("ve oturmuş lehçesinden tiksinirim ", "tüfeğimi doğrultuyorum " , "Bendim benim gölgelerimdi " , "Nafile bir zamanın takvimidir" ," devinen bir sancıdır artık " , "  sen o baygın sevgilerin adamı değilsin " , "  " , " hepimiz, herbirimiz gizli bir isimle adaşız " , "taşınacak suyu göster, kırılacak odunu " , " ","karşılıksız mektuplarım gibi yepyenidir. " ,"ve artık çirkinim ", "Kaçmak isterken vuruldu ");
var randomyuklem = Math.floor(Math.random()*yuklem.length);
var randomYuklem = yuklem[randomyuklem];



// PART 5


var vurucu = new Array("Hannoy'da bir uçaksavar", "" , "kendi avcumda seyretmek kırgın aksimi " , " yani çocuk o güzel tüccar " , " kaldırımlarda demokrat " , "daha esmer daha kan kusturucu ", "kapanıyor bilanço ", "");
var randomvurucu = Math.floor(Math.random()*vurucu.length);
var randomVur = vurucu[randomvurucu];

var gibi = new Array("gövden aklın gibi ", "biraz kürt, biraz köylü, biraz makina " , "işaret parmağımda zincir" , "cebimde sedef çakı " , "ne koku, ne yankı, ne de boya ","Gizemli bir dehliz gibi " , "karnın ısırgan otları gibi "   );
var randomgibi = Math.floor(Math.random()*gibi.length);
var randomGibi = gibi[randomgibi];
 

// PART 6
var nerede2 = new Array("Oysa bu sürgün yeri, bu pıtraklı diyar ", "ve şakrak dostlarımdan uzakta " , "açık renk bir elbiseye yakışan alnın " , "" , "" , " ");
var randomnerede2 = Math.floor(Math.random()*nerede2.length);
var randomNerede2 = nerede2[randomnerede2];


var haykiris = new Array(" ", "sabırla, kin tutarak! " , "vay ki gençtim " , "  " , " bütün kurnazlığımı siliyor dışardaki yağmur. " , " kimseyi ateşten korumaz kelimelerim ");
var randomhaykiris = Math.floor(Math.random()*haykiris.length);
var randomHaykir = haykiris[randomhaykiris];


var ozne = new Array("", "" , "o balçıkla beslenen saçlarındaki yangın" , " Onunla ben " , " " , " kimseyi ateşten korumaz kelimelerim ", "Köleler gördüm, karavaşlar ");
var randomozne = Math.floor(Math.random()*ozne.length);
var randomOz = ozne[randomozne];

// PART 7

var soru = new Array("Neden büyük ırmaklardan bile heyecanlıydı ", " kimin ülkesinden geçsem " , "Uzak nedir? " , " tanıdım Ademoğlu kimin nesiymiş " , " " , "Ama kim? ", "Anılacak günlerim olmadı mı benim? " , " çarpıntısız dakikası olur mu devrimcinin ");
var randomsoru = Math.floor(Math.random()*soru.length);
var randomSor = soru[randomsoru];


var tamlama = new Array("uçarı bir gülümseyişle takındığım muşta ", "korsanlardan kaptığım gürlek nara " , " o mavi korularda ve dibektaşlarında " , "Tutuşan bir bıçak" , " ruhum sahte" , "siner kan", " aydınlık, gülümserlik ve sevda ");
var randomtamlama = Math.floor(Math.random()*tamlama.length);
var randomTamla = tamlama[randomtamlama];




//  ("Avluya çık" , "Sitem et ", "Nazlan ", "Kendi alevini de getir " , "fly Pan-Am" , "drink Coca-Cola" )


//  (" " , "anahtar ve kilit " , "su ve ateş ve toprak" , "kanser, begonya, ölüm ","korku ve cüzzam ", "kan ve su ", "ve rüzgar ",  );

//  ("esmer ve dölek yüzümle", "gider şehre ve şaraba" ,  " boyunbağımın ve gülüşümün ","belalara ","hayatımın nemli taraflarına ");


//  ("Fanya Kaplan " , "Max Stirner ", "Şehrin insanı ", "Dinç duygular ", "Nadirle zenit ", "Müminler müşriklerle " , "Kukumav kuşları ")



//  ("hangi mevsimdeydik ","yıllardan hangisiydi ","nedir o katı şey ", "bir hayatı bırakıyorum","Zaten bir tanım değil midir ","dostları düşünmenin çarpıntısından mı ","şehir mi, değil mi burası " , "ben bir deli fışkın değil miyim ","sahibim Köroğlu nun da sahibi değil mi ", "parti broşürleri yoksa kafiyeler mi? " )

// ("günü geçmiş bir gazete ", "toprak bir çanak ", "tahta bir bavul ", "azgın atlar ", "mânilerle dolu bir yatak ",   );

// TAMLAMA

// için

//  ("bahar geldiği için ", )





//

//  ("külsüzdü ocak ", "tellal çarşısız ", "ayın kaçıydı ", "engebeli ve dakikti ",  );

 
// ("boğaz tokluğuna çalışanlar ",    "seken bir kurşun kadar ", "göğsümde dakikalar ")

// ne zaman

// ("Şehrin şarkısını söylediğim zaman ", "Geceleyin ", "bu çağda ");

// nasıldı ve kadar
// ("kangren oluyorum ", "inanmıyorum" , "ipte boynum ", "gibi duruyorum ",  "toprağın da sürüldüğüne inanmıyorum ", "altmış sene yaşadım ","Fırlamayım ",  );

// ("bir tek anım bile yok ", "kıyasıya yanıldılar" , "Çapraştım ", "faka bastım ", "uygunsuz biriyim ", "kıyasıya yanıldılar ", "Denedim" , "Kefarete hazırım" );

// ("ilah mahvedecek bir uzuv lazım ", "buna dayanacağım" , "Kabaran bir çarpıntı oluyor ",  "bir daha gelmem belki diye bir not ", "and içip ayna kırdım ", "En sevdiğim çiçeğin saksısı kaysın elinden ");

// ("Benim bakışım ", "Benim işim ", "Büyücüm", "West Indies ","Ey sökülmüş cep", "Ey ıslak yorgan ",  "Açıkça bilmek isterim ", "Yokum arkadaş ", "İtaki ",  );






//  birincil + PARTS //



document.write(birincil + randomOz + randomHaykir + "<br>" + randomGir + randomSor + randomVur + "<br>" +  randomYuklem +  "<br>" + randomNolan + " <br> " + randomTamlama1 + randomTamla + "<br>" +"<br>" + randomNerede + randomNerede2 +"<br>"  + randomNeyle + "<br>...<br>" + randomBir + "<br>" + randomTamlama2 + " <br>" + randomGibi  + randomHitap );