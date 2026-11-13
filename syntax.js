// Yeni İsmet Özel şiiri üretici.
// Dizeler, parçaların dilbilgisi rolüne göre (hitap, sıfat-fiil, zarf, emir, benzetme, soru)
// kalıplarla kurulur. Bir havuz bitmeden aynı parça şiirde tekrar etmez.

// Seslenme: dizenin başında durur, kendi noktalamasıyla gelir.
const hitap = [
    "Ey gövdelerin pişmanlığı!",
    "Köleler!",
    "Halkım,",
    "Gözlerim,",
    "Kardeşlerim,",
    "Ve kahyalar,",
    "Kargaşa!",
    "Ey yangınlar artığı!"
];

// Sıfat-fiil: arkasından bir ad ister ("şakağıma vuran bir harf").
const sifat = [
    "şakağıma vuran",
    "Avrupalı atları koşuşturan",
    "dibeklerinde inatlarını döven",
    "oturduğumuz evleri tıkayan",
    "isyan işaretleri taşıyan",
    "bazı yasak kitapların verdiği"
];

// Zarf: dizeyi açar ("kar yağarken, ...").
const zarf = [
    "o sağır yamaçlardan",
    "yumruğum çözülmeden",
    "kar yağarken"
];

// Neyle: emrin ya da belirtili adın yanında durur.
const neyle = [
    "kör bir usturayla",
    "alçak sesle",
    "tarçın kokusu ve yorgunluklarla",
    "ağırkanlı bir güneşle",
    "ölümle",
    "gülünç bir ölümle",
    "yalanla",
    "kirle",
    "tahvilatlarla",
    "kuru bir bilgisayar tıkırtısıyla"
];

// Emir: dizeyi kapatır.
const emir = [
    "sitem et!",
    "nazlan!",
    "kendi alevini de getir!",
    "avluya çık!"
];

// Slogan: bazen şiirin son dizesi olur.
const slogan = [
    "Fly Pan-Am!",
    "Drink Coca-Cola!"
];

const bir = [
    "bir cinayet türküsü",
    "bir çeteci",
    "bir harf",
    "bir ergen cesedi"
];

// Yalın ad öbekleri: benzetmenin öznesi.
const ad = [
    "çaylak sürüleri",
    "çıkarılmış insan gözleri",
    "yasak düşünceler",
    "belki ruhların gölgesi",
    "biraz da sabah sisi",
    "akşamın kanlı eli",
    "saat 24 vardiyasının işçileri"
];

// Belirtili ad öbekleri (-ı/-i): fiili düşmüş, kesik dize olarak kalır.
const belirtili = [
    "leş yiyen akçıl kuşları",
    "dupduru bir iniltiyi",
    "kanımdaki çiviyi",
    "vazgeçilmez ırmakları"
];

const gibi = [
    "gövden aklın",
    "biraz kürt, biraz köylü, biraz makina",
    "işaret parmağımda zincir",
    "cebimde sedef çakı",
    "ne koku, ne yankı, ne de boya",
    "gizemli bir dehliz",
    "karnın ısırgan otları"
];

const soru = [
    "neden büyük ırmaklardan bile heyecanlıydı",
    "nedir o katı şey",
    "kimin ülkesinden geçsem",
    "uzak nedir?",
    "sahibim Köroğlu'nun da sahibi değil mi?",
    "tanıdım Ademoğlu kimin nesiymiş",
    "şehir mi değil mi burası",
    "dostları düşünmenin çarpıntısından mı?",
    "ama kim?",
    "parti broşürleri yoksa kafiyeler mi",
    "anılacak günlerim olmadı mı benim?",
    "ben deli bir fışkın değil miyim?",
    "zaten bir tanım değil midir?",
    "çarpıntısız dakikası olur mu devrimcinin"
];

const baslik = ["Aynı", "Akla Karşı", "Kötü", "Kanla Kirlenmiş", "Evet,", "Umrumdadır", "Yorgun", "Geceleyin", "Sebeb-i"];
const baslik2 = ["Adam", "Evrak", "Propaganda", "Sabah", "İftira", "Esenlik", "Yenilgi", "Şiirler"];
const tarih = ["iki bin otuz dokuz", "iki bin yetmiş altı", "iki bin yirmi yedi", "iki bin yedi yüz", "iki bin yirmi iki"];

// Karıştırılmış torba: her çekiliş farklı parça verir, torba bitince yeniden karışır.
function bag(items) {
    let pool = [];
    return function draw() {
        if (pool.length === 0) {
            pool = items.slice();
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
        }
        return pool.pop();
    };
}

const pickOne = items => items[Math.floor(Math.random() * items.length)];

// Dizenin başını ve ünlem/soru işaretinden sonraki harfi büyütür (Türkçe kurallarıyla).
const capitalize = s => s.replace(/(^|[!?]\s+)(\p{Ll})/gu, (_, pre, ch) => pre + ch.toLocaleUpperCase("tr-TR"));

// Parçaları tek boşlukla birleştirip dizeyi biçimler.
const line = (...parts) => capitalize(parts.join(" ").replace(/\s+/g, " ").replace(/\s+,/g, ",").trim());

// Soru dizesi soru işaretiyle biter; zaten varsa ikinci kez eklenmez.
const ask = s => (s.endsWith("?") ? s : s + "?");

function generatePoem() {
    const h = bag(hitap), sf = bag(sifat), z = bag(zarf), n = bag(neyle), e = bag(emir),
          b = bag(bir), a = bag(ad), bl = bag(belirtili), g = bag(gibi), s = bag(soru);

    const stanzas = [
        [
            line(h(), sf(), b()),
            line(n(), e()),
            line(a(), g(), "gibi"),
            line(ask(s())),
        ],
        [
            line(z() + ",", b() + ",", g(), "gibi"),
            line(bl(), n()),
            line(h(), e()),
            line(ask(s())),
        ],
    ];

    // Ara sıra ironik bir slogan şiiri kapatır.
    if (Math.random() < 0.4) stanzas[1].push(pickOne(slogan));

    return stanzas.map(st => st.join("<br>\n")).join("<br>\n<br>\n");
}

function render() {
    document.querySelector(".card-body").innerHTML = generatePoem();
    document.querySelector(".c-title").textContent = line(pickOne(baslik), pickOne(baslik2));
    document.querySelector(".year").textContent = pickOne(tarih);
}

render();

// Sayfayı yeniden yüklemeden yeni şiir üretir.
document.querySelector(".refresh").addEventListener("click", function (event) {
    event.preventDefault();
    render();
});
