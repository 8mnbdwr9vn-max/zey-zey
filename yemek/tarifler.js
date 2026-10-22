// Tarifler: 1–5 yaş için az tuzlu, şekersiz ya da az şekerli.
// Malzeme adları alışveriş listesinde birleştirildiği için aynı yazılmalı.
const TARIFLER = [
  {
    id: "mercimek-corbasi",
    ad: "Mercimek Çorbası",
    emoji: "🥣",
    kategori: "Çorba",
    sure: 35,
    malzemeler: [
      ["Kırmızı mercimek", "1 su bardağı"],
      ["Havuç", "1 adet"],
      ["Patates", "1 adet"],
      ["Kuru soğan", "1 adet"],
      ["Tereyağı", "1 yemek kaşığı"],
      ["Su", "5 su bardağı"]
    ],
    adimlar: [
      "Mercimeği bol suda yıka.",
      "Soğanı tereyağında hafifçe kavur, doğranmış havuç ve patatesi ekle.",
      "Mercimeği ve suyu ekleyip sebzeler yumuşayana kadar kısık ateşte pişir.",
      "Blenderdan geçir. Tuzu çok az koy ya da hiç koyma."
    ],
    not: "Üzerine birkaç damla limon sıkılabilir. Demir emilimine de yardımcı olur."
  },
  {
    id: "sebzeli-omlet",
    ad: "Sebzeli Omlet",
    emoji: "🍳",
    kategori: "Kahvaltı",
    sure: 10,
    malzemeler: [
      ["Yumurta", "2 adet"],
      ["Kabak", "yarım adet"],
      ["Domates", "1 adet"],
      ["Beyaz peynir", "1 dilim"],
      ["Tereyağı", "1 tatlı kaşığı"]
    ],
    adimlar: [
      "Kabağı rendele, suyunu sık. Domatesi küçük doğra.",
      "Sebzeleri tereyağında 2–3 dakika sotele.",
      "Çırpılmış yumurtayı ve ufalanmış peyniri ekle.",
      "Yumurta iyice pişene kadar kısık ateşte beklet."
    ],
    not: "Küçük çocuklarda yumurtanın tamamen pişmiş olması önerilir."
  },
  {
    id: "menemen",
    ad: "Menemen",
    emoji: "🍅",
    kategori: "Kahvaltı",
    sure: 15,
    malzemeler: [
      ["Yumurta", "2 adet"],
      ["Domates", "2 adet"],
      ["Çarliston biber", "1 adet"],
      ["Zeytinyağı", "1 yemek kaşığı"]
    ],
    adimlar: [
      "Biberi ince doğra, zeytinyağında yumuşat.",
      "Kabuğu soyulmuş, rendelenmiş domatesi ekle ve suyunu çekene kadar pişir.",
      "Yumurtaları kır, karıştırarak iyice pişir."
    ],
    not: "Acı olmayan biber seç. Tuz eklemeden de lezzetli olur."
  },
  {
    id: "muzlu-yulaf-lapasi",
    ad: "Muzlu Yulaf Lapası",
    emoji: "🍌",
    kategori: "Kahvaltı",
    sure: 10,
    malzemeler: [
      ["Yulaf ezmesi", "4 yemek kaşığı"],
      ["Süt", "1 su bardağı"],
      ["Muz", "1 adet"],
      ["Tarçın", "1 tutam"]
    ],
    adimlar: [
      "Yulafı sütle birlikte kısık ateşte karıştırarak 5 dakika pişir.",
      "Muzu çatalla ez ve lapaya karıştır.",
      "Üzerine tarçın serp, ılıyınca servis et."
    ],
    not: "Muz tatlılık verdiği için şekere gerek yok."
  },
  {
    id: "muzlu-pankek",
    ad: "Muzlu Yulaf Pankeki",
    emoji: "🥞",
    kategori: "Kahvaltı",
    sure: 15,
    malzemeler: [
      ["Muz", "1 adet"],
      ["Yumurta", "1 adet"],
      ["Yulaf ezmesi", "4 yemek kaşığı"],
      ["Tereyağı", "1 tatlı kaşığı"]
    ],
    adimlar: [
      "Muzu ez, yumurta ve yulafla karıştır. 5 dakika dinlendir.",
      "Yağlanmış tavaya kaşıkla küçük yuvarlaklar dök.",
      "Her iki yüzünü kısık ateşte pişir."
    ],
    not: "Elle tutup yemeye uygun, kendi kendine yemeyi öğrenen çocuklar için ideal."
  },
  {
    id: "firin-mucver",
    ad: "Fırında Kabak Mücveri",
    emoji: "🥒",
    kategori: "Ana yemek",
    sure: 35,
    malzemeler: [
      ["Kabak", "2 adet"],
      ["Havuç", "1 adet"],
      ["Yumurta", "2 adet"],
      ["Beyaz peynir", "1 dilim"],
      ["Un", "4 yemek kaşığı"],
      ["Dereotu", "yarım demet"]
    ],
    adimlar: [
      "Kabak ve havucu rendele, suyunu iyice sık.",
      "Tüm malzemeleri karıştır.",
      "Yağlı kağıt serilmiş tepsiye kaşıkla küçük yuvarlaklar koy.",
      "200 derece fırında üzeri kızarana kadar (20–25 dk) pişir."
    ],
    not: "Kızartmaya göre çok daha az yağlı. Yoğurtla servis edilebilir."
  },
  {
    id: "sebzeli-kofte",
    ad: "Fırında Sebzeli Köfte",
    emoji: "🧆",
    kategori: "Ana yemek",
    sure: 40,
    malzemeler: [
      ["Kıyma", "250 gram"],
      ["Havuç", "1 adet"],
      ["Kabak", "yarım adet"],
      ["Kuru soğan", "1 adet"],
      ["Bayat ekmek içi", "1 dilim"],
      ["Yumurta", "1 adet"]
    ],
    adimlar: [
      "Havuç, kabak ve soğanı ince rendele, suyunu sık.",
      "Tüm malzemeleri iyice yoğur.",
      "Küçük ve yassı köfteler yap, yağlı kağıtlı tepsiye diz.",
      "200 derece fırında 20–25 dakika, içi iyice pişene kadar pişir."
    ],
    not: "Sebzeleri sevmeyen çocuklara sebze yedirmenin kolay yolu."
  },
  {
    id: "tavuk-sote",
    ad: "Sebzeli Tavuk Sote",
    emoji: "🍗",
    kategori: "Ana yemek",
    sure: 30,
    malzemeler: [
      ["Tavuk göğsü", "200 gram"],
      ["Havuç", "1 adet"],
      ["Bezelye", "yarım su bardağı"],
      ["Patates", "1 adet"],
      ["Domates", "1 adet"],
      ["Zeytinyağı", "1 yemek kaşığı"]
    ],
    adimlar: [
      "Tavuğu küçük küpler hâlinde doğra, zeytinyağında sotele.",
      "Küp doğranmış havuç ve patatesi ekle, 5 dakika çevir.",
      "Rendelenmiş domates, bezelye ve yarım bardak su ekle.",
      "Kapağı kapalı, sebzeler yumuşayana kadar pişir."
    ],
    not: "Pilav ya da bulgurla birlikte verilebilir."
  },
  {
    id: "sebzeli-bulgur",
    ad: "Sebzeli Bulgur Pilavı",
    emoji: "🍚",
    kategori: "Ana yemek",
    sure: 25,
    malzemeler: [
      ["Pilavlık bulgur", "1 su bardağı"],
      ["Domates", "1 adet"],
      ["Çarliston biber", "1 adet"],
      ["Kuru soğan", "1 adet"],
      ["Tereyağı", "1 yemek kaşığı"],
      ["Su", "2 su bardağı"]
    ],
    adimlar: [
      "Soğan ve biberi tereyağında kavur.",
      "Rendelenmiş domatesi ekle, biraz pişir.",
      "Bulguru ve sıcak suyu ekle, suyunu çekene kadar kısık ateşte pişir.",
      "Ocağı kapatıp 10 dakika demlendir."
    ],
    not: "Bulgur lif açısından zengindir. Yoğurtla çok iyi gider."
  },
  {
    id: "firin-makarna",
    ad: "Sebzeli Fırın Makarna",
    emoji: "🍝",
    kategori: "Ana yemek",
    sure: 40,
    malzemeler: [
      ["Makarna", "200 gram"],
      ["Süt", "2 su bardağı"],
      ["Un", "2 yemek kaşığı"],
      ["Tereyağı", "2 yemek kaşığı"],
      ["Brokoli", "1 küçük kase"],
      ["Kaşar peyniri", "1 kase rendelenmiş"]
    ],
    adimlar: [
      "Makarnayı ve brokoliyi haşla.",
      "Tereyağında unu kavur, sütü ekleyip koyulaşana kadar karıştır.",
      "Makarna, brokoli ve sosu karıştırıp fırın kabına koy.",
      "Üzerine kaşar serp, 200 derecede üzeri kızarana kadar pişir."
    ],
    not: "Brokoli yerine bezelye ya da havuç da olur."
  },
  {
    id: "taze-fasulye",
    ad: "Zeytinyağlı Taze Fasulye",
    emoji: "🫛",
    kategori: "Ana yemek",
    sure: 45,
    malzemeler: [
      ["Taze fasulye", "500 gram"],
      ["Domates", "2 adet"],
      ["Kuru soğan", "1 adet"],
      ["Zeytinyağı", "3 yemek kaşığı"],
      ["Su", "1 su bardağı"]
    ],
    adimlar: [
      "Fasulyeleri ayıklayıp küçük doğra.",
      "Soğanı zeytinyağında yumuşat, fasulyeyi ekle.",
      "Rendelenmiş domates ve suyu ekle.",
      "Kısık ateşte fasulyeler iyice yumuşayana kadar pişir."
    ],
    not: "Küçük çocuklar için fasulyeleri iyice yumuşak pişir."
  },
  {
    id: "ezogelin",
    ad: "Ezogelin Çorbası",
    emoji: "🍲",
    kategori: "Çorba",
    sure: 40,
    malzemeler: [
      ["Kırmızı mercimek", "1 su bardağı"],
      ["Pilavlık bulgur", "2 yemek kaşığı"],
      ["Pirinç", "1 yemek kaşığı"],
      ["Kuru soğan", "1 adet"],
      ["Domates salçası", "1 tatlı kaşığı"],
      ["Tereyağı", "1 yemek kaşığı"],
      ["Su", "6 su bardağı"]
    ],
    adimlar: [
      "Soğanı tereyağında kavur, salçayı ekle.",
      "Yıkanmış mercimek, bulgur, pirinç ve suyu ekle.",
      "Kısık ateşte her şey iyice yumuşayana kadar pişir."
    ],
    not: "Salça tuzlu olabilir, ayrıca tuz eklemeye gerek yok. Acı biber ekleme."
  },
  {
    id: "sebze-corbasi",
    ad: "Kremalı Sebze Çorbası",
    emoji: "🥕",
    kategori: "Çorba",
    sure: 30,
    malzemeler: [
      ["Havuç", "2 adet"],
      ["Patates", "1 adet"],
      ["Kabak", "1 adet"],
      ["Kuru soğan", "1 adet"],
      ["Süt", "1 su bardağı"],
      ["Tereyağı", "1 yemek kaşığı"],
      ["Su", "4 su bardağı"]
    ],
    adimlar: [
      "Soğanı tereyağında yumuşat.",
      "Doğranmış sebzeleri ve suyu ekleyip yumuşayana kadar pişir.",
      "Blenderdan geçir, sütü ekleyip bir taşım kaynat."
    ],
    not: "Turuncu rengi çocukların ilgisini çeker."
  },
  {
    id: "humus",
    ad: "Ev Yapımı Humus",
    emoji: "🫘",
    kategori: "Ara öğün",
    sure: 10,
    malzemeler: [
      ["Haşlanmış nohut", "1 su bardağı"],
      ["Tahin", "1 yemek kaşığı"],
      ["Limon", "yarım adet"],
      ["Zeytinyağı", "1 yemek kaşığı"]
    ],
    adimlar: [
      "Nohutların kabuklarını mümkün olduğunca ayıkla.",
      "Tüm malzemeleri blenderdan pürüzsüz olana kadar geçir.",
      "Gerekirse biraz ılık su ekle."
    ],
    not: "Havuç ya da salatalık çubuklarıyla servis edilebilir. Tahin susam içerir, alerjiye dikkat."
  },
  {
    id: "meyveli-yogurt",
    ad: "Meyveli Yoğurt",
    emoji: "🍓",
    kategori: "Ara öğün",
    sure: 5,
    malzemeler: [
      ["Yoğurt", "1 kase"],
      ["Çilek", "4–5 adet"],
      ["Muz", "yarım adet"]
    ],
    adimlar: [
      "Meyveleri küçük doğra ya da ez.",
      "Yoğurtla karıştır."
    ],
    not: "Hazır meyveli yoğurtlar yerine evde yapmak şeker miktarını düşük tutar."
  },
  {
    id: "elmali-kurabiye",
    ad: "Şekersiz Elmalı Kurabiye",
    emoji: "🍎",
    kategori: "Ara öğün",
    sure: 30,
    malzemeler: [
      ["Elma", "1 adet"],
      ["Yulaf ezmesi", "1 su bardağı"],
      ["Muz", "1 adet"],
      ["Tarçın", "1 tutam"]
    ],
    adimlar: [
      "Elmayı rendele, muzu ez.",
      "Yulaf ve tarçınla karıştır.",
      "Yağlı kağıda kaşıkla küçük yuvarlaklar yap.",
      "180 derece fırında 15–20 dakika pişir."
    ],
    not: "Tatlılığı tamamen meyvelerden gelir."
  },
  {
    id: "patatesli-yumurta",
    ad: "Patatesli Yumurta",
    emoji: "🥔",
    kategori: "Kahvaltı",
    sure: 20,
    malzemeler: [
      ["Patates", "1 adet"],
      ["Yumurta", "2 adet"],
      ["Zeytinyağı", "1 yemek kaşığı"]
    ],
    adimlar: [
      "Patatesi küçük küpler hâlinde doğra.",
      "Zeytinyağında kapağı kapalı, yumuşayana kadar pişir.",
      "Yumurtaları ekleyip iyice pişene kadar karıştır."
    ],
    not: "Tok tutan, pratik bir kahvaltı."
  },
  {
    id: "ispanakli-pirinc",
    ad: "Ispanaklı Pirinç Yemeği",
    emoji: "🥬",
    kategori: "Ana yemek",
    sure: 30,
    malzemeler: [
      ["Ispanak", "1 demet"],
      ["Pirinç", "2 yemek kaşığı"],
      ["Kuru soğan", "1 adet"],
      ["Zeytinyağı", "2 yemek kaşığı"],
      ["Yoğurt", "1 kase"]
    ],
    adimlar: [
      "Ispanağı iyice yıkayıp doğra.",
      "Soğanı zeytinyağında yumuşat, ıspanağı ekle.",
      "Pirinci ve yarım bardak su ekleyip pirinç pişene kadar pişir.",
      "Yoğurtla servis et."
    ],
    not: "Yoğurtla birlikte verilince çocuklar daha kolay yiyor."
  }
];

const IPUCLARI = [
  {
    baslik: "Boğulma riskine dikkat",
    emoji: "⚠️",
    metin: "Üzüm, çeri domates ve zeytin gibi yuvarlak yiyecekleri boyuna dörde böl. Bütün fındık, fıstık, ceviz ve sert şekerleri küçük çocuklara verme. Yemek yerken çocuğun oturmasını sağla ve yanında ol."
  },
  {
    baslik: "Tuz ve şekeri azalt",
    emoji: "🧂",
    metin: "Küçük çocukların böbrekleri fazla tuza hazır değildir. Yemeklere çok az tuz koy ya da hiç koyma. Tatlılığı meyveden almak, şekere alışmayı önler."
  },
  {
    baslik: "Seçici yiyen çocuk",
    emoji: "🙅",
    metin: "Yeni bir yiyeceği kabul etmesi için 10–15 kez denemek gerekebilir. Zorlama, ödül ya da ceza kullanma. Tabağa sevdiği bir şeyin yanında küçük bir parça yeni yiyecek koy."
  },
  {
    baslik: "Birlikte yemek",
    emoji: "👨‍👩‍👧",
    metin: "Çocuklar gördüklerini taklit eder. Aynı sofrada, aynı yemekten yemek en iyi örnektir. Yemek sırasında ekranları kapat."
  },
  {
    baslik: "Kendi kendine yemek",
    emoji: "🥄",
    metin: "Kaşığı ve elini kullanmasına izin ver. Dökmesi öğrenmenin bir parçası. Elle tutulabilen yiyecekler (pankek, köfte, haşlanmış sebze çubukları) bu dönemde çok işe yarar."
  },
  {
    baslik: "Porsiyonlar küçük olsun",
    emoji: "🍽️",
    metin: "Çocuğun midesi küçüktür. Az koy, isterse tekrar ver. Bir öğünde az yemesi normaldir, gün geneline bak."
  },
  {
    baslik: "Alerji ve sağlık",
    emoji: "🩺",
    metin: "Yumurta, süt, susam (tahin), yer fıstığı ve balık gibi besinlere karşı alerji görülebilir. Döküntü, kusma, nefes darlığı gibi bir belirti olursa hemen doktora başvur. Beslenmeyle ilgili özel bir durum varsa çocuk doktoruna danış."
  }
];
