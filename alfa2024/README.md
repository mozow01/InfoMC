#  Automatikus deduktív és induktív következtetések
Molnár Zoltán Gábor, Algebra Tsz.

## Coq automatikus bizonyító és bizonyításmenedzselő program

Thierry Coquand, Christine Paulin-Mohring implementálták számítógépesen az _Induktív Konstrukciók Kalkulusát_ (CIC, CoC, Coq), ami Peer Martin-Löf típuselméletének átdolgozása. 

## Mi az az induktív adattípus?

"Szemléletesen, egy induktívan definiált típus konstruktorok egy teljes listája által adott. A nekik megfelelő indukciós elvvel érvelünk a típus elemeivel kapcsolatban és a konstruktorokon függvényeket adunk meg, amik alkamasak az egész típus felett értelmezett primitív rekurzív függvények definiálására." (Christine Paulin-Mohring, 1990)

Így például az ismert Boole-típusra:

````coq
Require Import Lia.

Fixpoint összeg (n:nat) :=
match n with 
  | 0 => 0
  | S n => (összeg n) + S n
end.

Theorem első_n_szám_összege : forall n, 2*(összeg n) = n*(n+1).
Proof.
intros.
induction n.
simpl.
reflexivity.
simpl.
simpl in IHn.
lia.
Show Proof.
Qed.
````

## Reduktív osztály, vitatott osztály, Dummett redukcionizmusa

Michael Dummett a tudományokat úgy osztályozta, hogy meghatározott mondatoknak két körét. Az első a _reduktív osztály,_ amelyben a mondatok igazsága problémamentes, a második a _vitatott osztály,_ amelyben a mondatok érvényességét a reduktív osztály érvényességéból nyerik. Ez a matematikában Hilbert finitista-konvencionalista megoldása. 

Vitatott például a **kizárt harmadik elve**: "A vagy nem A". A Coq logikájában ez nem általános igazság.

````coq
Require Import Arith.

Fixpoint nat_egyenlő (n m : nat) : Prop :=
match n, m with 
  | 0, 0 => True
  | S n', 0 => False
  | 0, S m' => False
  | S n', S m' => nat_egyenlő n' m' 
end.

Print Nat.eq_dec.
````

## Konstruktív logika

Ebben a logikában a levezetési szabályok vezetik az érveléseket: egy összetett kifejezés csak a fő konnektívumra csak bevezetési szabálya alkalmazásával következtethetünk.

````coq
Theorem problem_1 : forall A B : Prop, (A -> B) -> (~ A \/ B).
Proof.
intros.
left.
Admitted.


Theorem problem_2 : forall A B : Prop, (~ A \/ B) -> (A -> B).
Proof.
intros.
destruct H as [H1|H2].
contradiction.
auto.
Qed.
````
## A klasszikus vagy a konstruktív logika alapján gondolkodunk-e? (ELTE matematika tanárszakos szakdogozóm)

Középiskolásoknál arról érdeklődtünk, hogy érvényesek-e ilyen következtetések?

|<img src="https://github.com/mozow01/bizcoq2021/blob/main/cog_2.png" width=400> | <img src="https://github.com/mozow01/bizcoq2021/blob/main/cog_3.png" width=400>|
|---|---|

1. csoport: klasszikus igazságtáblázatos logikát fogják tanulni
2. csoport: Coq-alapján tanult konstruktív logika fogják tanulni

**Mielőtt** a tanítás megtörtént mindkét csoport **következetesen** a konstruktív logika szerint gondott:

<img src="https://github.com/mozow01/bizcoq2021/blob/main/cog_1.png" width=900>

(vízszinte: megkülönböztetőképesség (jobbra erősebb), függőleges: bátortalanság (felfelé bátortalan))

Tanulás után ez a helyezt tovább billent a konstruktív logika javára.

<img src="https://github.com/mozow01/bizcoq2021/blob/main/cog_4.png" width=900>

Az adatfelhők is erről árulkodnak.

<img src="https://github.com/mozow01/bizcoq2021/blob/main/cog_7.png" width=900>

## BME kognitív tudományi szakdolgozó:

Igazságtáblázatos logika vagy "bizonyítékelmélet"?

<img src="https://github.com/mozow01/bizcoq2021/blob/main/cog_5.png" width=900>

## Valószínűségi következtetések

### Csofi (törpehörcsi)

Van egy törpehörcsögünk, amelyikről azt gyanítjuk, hogy rendellenesen fogy. A súlya (tömege :) ) elméletileg egy 22 g közepű 1 g-os szórású normál eloszlás (haranggörbe). El kéne dönteni, hogy orvoshoz kell-e vinni. 

![Csofi](https://github.com/mozow01/Bayes2024/blob/main/1_gyak/horcsi.jpeg)

Csofi súlya egy bizonytalan érték és ezt komolyan kell venni. Két dolgot tudunk, hogy Gauss(22,1) egy egészséges állat súlya, Gauss(17,1) egy betegé. Csofi a mérések alapján 19, 18, 18 g. Ez eléggé leszűkíti a lehetősőgeket. Ha kiszórjuk azokat a szcenáriókat, amelyekben ezek a számok nagyon pici valószínűségűek, akkor egy olyan eloszlást kapunk a súlyára, amelyik közel állhat a valósághoz. 

````javascript
var data = [{k: 19},
            {k: 18},
            {k: 18},
           ]

var Model = function() {
  
  var m = gaussian(22,10)
  
  map(function(d){observe(Gaussian({mu: m, sigma: 1}),d.k)},data);
  
  var PriorPredictive1 = gaussian(22,1);
  var PriorPredictive2 = gaussian(17,1);
  var PosteriorPredictive = gaussian(m,1);
  
  return { 
          PriorPredictive1: PriorPredictive1, 
          PriorPredictive2: PriorPredictive2, 
          Posterior: m,
          PosteriorPredictive: PosteriorPredictive
         };
}

var opts = {method: 'SMC', particles: 1000, rejuvSteps: 5}

var output_1 = Infer(opts, Model)

viz.marginals(output_1)
````

![CsofiPriorPred1](https://github.com/mozow01/Bayes2024/blob/main/1_gyak/a43e23.svg)

![CsofiPriorPred2](https://github.com/mozow01/Bayes2024/blob/main/1_gyak/ab9c7c.svg)

![CsofiProsteriorPred](https://github.com/mozow01/Bayes2024/blob/main/1_gyak/b4c381.svg)

![CsofiPosterior](https://github.com/mozow01/Bayes2024/blob/main/1_gyak/98af7d.svg)


## Óvodások

Tudjuk, hogy az óvodások még nem feltétlenül tudnak különbséget tenni állat és növény között. Jó példa erre a pillangó. Krédés, hogy megütik-e azt a kompetenciaszintet, hogy meg tudják-e mondani, hogy a pillangó növény vagy másféle élőlény. Három különböző óvodás kiscsoportban kérdezték meg, hogy a pillangó virág-e, a mért változó értékei a data változó alatt találhatók. 

### Egyenletes prior

<img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/binom_1.png" width=500>

````javascript
var data = [{name: 'napocskas', n:20, k:5},
            {name: 'holdacskas', n:23, k:8},
            {name: 'napraforgo', n:19, k:17},
           ]

var simpleModel = function() {
  
  var p = uniform(0,1);
  
  map(function(d){observe(Binomial({p: p, n: d.n}), d.k)}, data);
  
  var prior = uniform(0,1);
  
  // 20 fős csoportokra normálva
  
  var predictivePosterior = binomial({p: p, n: 20});
  
  var predictivePrior = binomial({p: prior, n: 20});
  
  return {Prior: prior, 
          PredictivePrior: predictivePrior, 
          Posterior: p, 
          PredictivePosterior: predictivePosterior};
}

var opts = {method: 'MCMC', samples: 20000}

var output_1 = Infer(opts, simpleModel)

viz.marginals(output_1)
````

Tehát az adatot a **map** környezetbe ágyazva illesztjük be a feltételbe.

<img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/1559f8.svg" height=200><img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/30810f.svg" height=200><img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/bab66f.svg" height=200><img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/d0c66b.svg" height=200>

### Beta prior


<img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/binom_2.png" width=500>

````javascript
var data = [{name: 'napocskas', n:20, k:5},
            {name: 'holdacskas', n:23, k:8},
            {name: 'napraforgo', n:19, k:17},
           ]

var complexModel = function() {
  
  var p = beta(30,90);
  
  map(function(d){observe(Binomial({p: p, n: d.n}), d.k)}, data);
  
  var prior = beta(30,90);
  
    // 20 fős csoportokra normálva
  
  var predictivePosterior = binomial({p: p, n: 20});
  
  var predictivePrior = binomial({p: prior, n: 20});
  
  return {Prior: prior, 
          PredictivePrior: predictivePrior, 
          Posterior: p, 
          PredictivePosterior: predictivePosterior};
}

var opts = {method: 'MCMC', samples: 20000}

var output_2 = Infer(opts, complexModel)

viz.marginals(output_2)
````

<img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/641286.svg" height=200><img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/6af94a.svg" height=200><img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/28e8ec.svg" height=200><img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/af2eb4.svg" height=200>

## Valszám problémamegoldás fájdalommentesen, webppl 

A **webppl** a Stanford Egyetemen dolgozó Noah Goodman and Andreas Stuhlmüller által fejlesztett programozási nyelv, ami online futtatható, valószínűségi programozási nyelv és JavaScript egy olyan részére épül, ami funkcionális (azaz nincs benne pl. "for" ciklus, hanem csak függvények). Megpelő, hogy pszichológusok fejlesztették, igaz ők nem terapeuták, hanem úgy nevezett komputációs kognitív tudósok (computational cognitive scientists), a Stanford  "Cocolab" nevű laborjában dolgoznak és persze nagyon értenek az informatikához is. Amire a **webppl** használható: pszicholgiai és természetes nyelvi jelenségek modellezése és részben kiértékelése. De nagyon sok valószínűségi eloszlást és mintavételezési eljárást tartalmaz és kellően variábilisan, hogy akármiylen modellt be lehessen programozni és persze felhasználóbarát. 

Bemásolva a 

http://webppl.org/

megfelelő ablakjába, a kódok azonnal futtathatók, ahogy a gif-en látható: (katt!)

<img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/webppl.gif" width=200>


## Kombinatorikai, valószínűségi kísérletek modellezése

### Kockadobás

<img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/1200px-2-Dice-Icon.svg.png" width=100>

A webppl-ben egy kockadobás kimenetelét egy _függvény_ megírásával lehet előidézni. var ... = ... a függvény (vagy érték) definiálása. Érdekes, hogy ez egy olyan függvény lesz, aminek a zárójelében nincs semmi :) Ez azért van, mert a bemenetét random módon generált értékek fogják szolgáltatni. Milyen gyakorisággal jönnek elő ezek az értékek? A ````var kocka1 = categorical({ps: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6], vs: [1, 2, 3, 4, 5, 6]});```` például 1-től 6-ig ad értéket az "első kocka" dobása után leolvasott értéknek 1/6-1/6- stb. valószínűségekkel. A "categorical" azt jelenti, hogy "ps" valószínűségellek jönnek elő a "vs" értékek, véges sok. Amit a "dobás" függvény visszaad (return), az egy rendezett pár ````[kocka1,kocka2]````, ami két dobás eredményét tartalmazza. Ha egy dobás eredményét akarajuk kiíratni, akkor ez a ````print(dobás());```` paranccsal tesszük. Sok dobásnál ez megjeleníhető pl. így: ````var sokdobás = repeat(10, dobás); viz.auto(sokdobás);```` vagy így ````var sokdobás = repeat(10, dobás); print(sokdobás);````. Ill. még sok verzióban (lásd a viz. utáni opciókat). Bővebben: dokumentáció itt: https://webppl.readthedocs.io/en/master/ , vizualizáció itt: http://probmods.github.io/webppl-viz/ és itt: https://github.com/probmods/webppl-viz .

```javascript
// Két kocka

var dobás = function () {
  var kocka1 = categorical({ps: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6], 
                            vs: [1, 2, 3, 4, 5, 6]});
  var kocka2 = categorical({ps: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6], 
                            vs: [1, 2, 3, 4, 5, 6]});
  return  { kockapár: [kocka1,kocka2] };
}

// Egy dobás, a dobás() fv. egy futtatása.
print(dobás());

// Sok dobás és gyakorisági táblázata

var sokdobás = repeat(10, dobás); 

print(sokdobás);

viz.auto(sokdobás);

// A [kocka1,kocka2] változó "elméleti" (egzakt) eloszlása az esetek felsorolásával.

var output = Enumerate(dobás);

// A kimenet eloszlásának generálása felsorolással
// var output = Infer({method: 'enumerate', model: dobás});

// Közelítő eloszlás samples db-szori lefuttatással és abból histogram építésével 
// var output = Infer({method: 'forward', samples: 10000, model: dobás});

print("1/36 = "+1/36);
print("p( kocka1=6 és kocka2=6) = "+Math.exp((output.score)([6,6])));

viz.auto(output);
// viz.hist(output);
// viz.table(output);
````

Ha szeretnénk az összes esetet megjeleníteni, akkor ````var output = Enumerate(dobás);```` a barátunk. "Enumerate" szépen felsorolja az összes lehetséges esetet. A kódban látható ügyesékedéssel (````(output.score)([6,6]))```` leolvassa a megfelelő dobáspár valószínűségének logaritmusát a ````Math.exp()```` JavaScript függvény meg az exponenciálissal visszacsinálja a logaritmust; valamiért a valószínűségi érték logaritmusával való számolás gazdaságosabb.) Persze ez az érték kísértetiesen hasonlít az 1/36-odra, ami a dupla hatos dobás valószínűsége.

### Kockadobás kedvező esetekkel

<img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/2381778-200.png" width=100>

Mi annak a valószínűsége, hogy két kockával dobva legalább az egyik hatos?

````javascript
var dobás = function () {
  var kocka1 = categorical({ps: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6], 
                            vs: [1, 2, 3, 4, 5, 6]});
  var kocka2 = categorical({ps: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6], 
                            vs: [1, 2, 3, 4, 5, 6]});
  return [kocka1,kocka2];
}

var kedvező_dobás = function () {
  var kocka1 = categorical({ps: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6], 
                            vs: [1, 2, 3, 4, 5, 6]});
  var kocka2 = categorical({ps: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6], 
                            vs: [1, 2, 3, 4, 5, 6]});
  condition((kocka1 == 6 || kocka2 == 6));
  
  return  [kocka1,kocka2];
}

var összes = Infer({method: 'enumerate'}, dobás);

var kedvező = Infer({method: 'enumerate'}, kedvező_dobás);

viz.auto(összes);

viz.auto(kedvező);

print("11/36 = " 
      + 11/36);

print("p = kedvező/összes = " 
      + Math.exp((összes.score)([6,6]))/Math.exp((kedvező.score)([6,6])));
````
//-vel tudjuk kommentbe tolni azokat a sorokat, amiket nem akarunk futtatni. 

Az Infer parancsról majd később, mindenesetre ````var output = Infer({method: 'enumerate', model: dobás});```` ugyanazt csinálja, mint Enumerate. De ````var output = Infer({method: 'forward', samples: 10000, model: dobás});```` már kicsit izgibb: egymás után 10000-szer kiszámolja a dobás függvényt és az adatokból gyakorisági táblázatot készít, majd a gyakoriságokból arányt és így ebből a 10000-es mintából elkészít egy közelítő valószínűségi eloszlást, ami az Enumerate-hez közelít, amennyiben a samples érték feltoljuk. A program valahol a Stanford Egyetemen égeti a szervereket, ne sajnáljuk őket, legfeljebb nem jönnek meg az adatok a Föld kihüléséig. Fizessenek a gazdagok!

Világos, hogy itt egy új parancs készítette el a kedvező esetek leválogatását: ````condition((kocka1 == 6 || kocka2 == 6));````. || a vagy jele a JavaScript-ben, == az értékazonosság, azaz nem értékadó, definiáló egyenlőség (ami a =), hanem állítás-egyenlőség. Ha aziránt érdeklődünk, hogy mikor mindkettő 6-os, akkor ````condition((kocka1 == 6 && kocka2 == 6));```` && hagyományosan az és jele. ````condition((kocka1 == 6 && !(kocka2 == 6) ));```` azt jelenti, hogy az első hatos, a második kifejezetten **nem** hatos. ! a tagadás jele.

<img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/277680373_341339591289591_2928453617509407729_n.jpg" width=200>

### Kártyahúzás visszatevéssel (binomiális eloszlás)

<img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/png-transparent-blackjack-texas-hold-em-three-card-poker-playing-card-card-miscellaneous-game-angle-thumbnail.png" width=100>

Egy 52 lapos francia kártyapakliban annak a valószínűsége, hogy egy kártya kőr (♥): p = 13/52 = 0.25. Keressük annak az X valószínűségi változónak az eloszlását, ami azt mondja meg, hogy ha _visszatevéssel_ kiveszünk a pakliból 3 lapot, akkor hány ebből a kőr, tehát

X := ,,kőrök száma 3 visszatevéses húzásból, francia kártyapakliban''

````javascript
var model = function() {
  var H1 = flip(0.25);
  var H2 = flip(0.25);
  var H3 = flip(0.25);
  var X = H1 + H2 + H3;
  return {'X': X}
}
var eloszlás = Enumerate(model);

var binom = Binomial({p: 0.25, n: 3});

viz.auto(binom);
viz.auto(eloszlás);
````

````flip(0.25)```` most a categorical egy spéci, spórolós változata. Boole-értéket ad vissza (azaz 0-t vagy 1-et) mégpedig 0.25 arányban az 1 javára. Húzás után visszatesszük a lapokat, így a szituáció hasonlít arra, amikor 3 ember utazik egy liftben és az egyik szellent. Ha az országos átlag szerint annak az egyánya, hogy egy ember a lifben elszellenti magát 0.25, akkor X eloszlása azt fogja megmutatni, hogy mi annak az valószínűsége, hogy pontosan 0, 1, 2, vagy 3 ember csinálja ezt a méltatlan dolgot. X tehát az oszlopok méretével arányos mértékű valószínűságekkel vesznek fel 0 és 3 közötti értékeket. Tusjuk jó, az a binomiális eloszlás és ezért a ````binom```` változó ugyanolyan eloszlású lesz. Lásd még a webppl dokumentációját!

Ha tudunk valamit a szituációból, ez az eloszlás változni fog. Pl.: mi akkor X eloszlása, **ha tudjuk,** hogy az első esetben kőrt húzunk. 

````javascript

var model2 = function() {
  var H1 = flip(0.25)
  var H2 = flip(0.25)
  var H3 = flip(0.25)
  condition( H1 == 1 )
  var X = H1 + H2 + H3
  return {'X': X}
}
var eloszlás2 = Enumerate(model2)

viz.auto(eloszlás2)
````

Itt ismét ````condition( H1 == 1 )```` játszotta a fő szerepet. Világos, hogy X már nem vehet fel 0 értéket, mert már H1 == 1.

## Valószínűségi (induktív) következtetés, Bayes-inferencia

<img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/Screenshot+2017-06-05+15.37.56.png" width=200> 

Ennél sokkal izgalmasabb, ha valaki megmondja a kísérlet eredményét (a feltétel lényeges) és nekünk kéne megmondanunk, hogy a húzások milyenek voltak. Ezt hívjuk **induktív következtetésnek,** **Bayes-inferenciának,** vagy ebben a kontextusban egyszerűen **inferálásnak.**

````javascript
var model3 = function() {
  var H1 = flip(0.25);
  var H2 = flip(0.25);
  var H3 = flip(0.25);
  var X = H1 + H2 + H3;
  condition( X == 2 );
  return {'H1' : H1}
}
var eloszlás3 = Enumerate(model3);
viz.auto(eloszlás3);
````

Világos, hogy H1 eredeti eloszlásához képest a mostani rendesen átrendeződik: sokkal nagyobb a H1 == 1 valószínűsége, hiszen valamiből a 2-nek ki kell jönnie és elég ritka, hogy attól 2 az X, hogy a másik kettő 1 és az első 0... **Visszakövetkeztettünk** az eredeti H1 érétkre (nem abból, hogy 0.25 az 1 vszínűsége), abból, hogy mennyi a kísérlet végeredménye. Ez a Bayes-inferencia, (vissza)következtetés.

## Esett vagy nem esett?

<img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/Screenshot from 2022-07-06 23-01-09.png" width=200>

Egy újabb példával: Tegyük fel, hogy az, hogy a munkából elkésem, függ attól, hogy dugó van-e a városban. A dugó viszont attól is függ, hogy esik-e. Ezek persze valószínűségi függések: esőben inkább van dugó, de dugó nélkül is néha kések. Meg lehet-e és mikor lehet megjósolni, hogy dugó van-e vagy hogy esik-e?

````javascript
var model = function () {
    var eső = flip(1/5);
    var dugó = (eső == true) ? flip(1/2) : flip(1/4);
    var késés = (dugó == true) ?  flip(0.9) : flip(.05);
    condition(késés == 1);
    return  {eső: eső, dugó: dugó, késés: késés}
}

var X = Infer({method: 'MCMC', model: model});

viz.marginals(X);
````
A fenti modell szerint 50% az esélye, hogy esik. Ha esik, 50% eséllyel lesz közlekedési dugó a városban, ha nem, akkor 25%-kal. A modell szerint én egy viszonylag rendes ember vagyok, és ugyan dugó esetén 90%-os valószínűséggel fogok késni, de ha nincs dugó, akkor csak 5% a valószínűsége, hogy kések. A modell függvény egy három változós éréket küld vissza: eső, dugó és késés. Az Infer parancsot most már kezdjük érteni: a feltételnek megfelelő esteket engedi csak át, majd ezekből készít egy gyakorisági táblázatot. Persze 1000 hatékony módja van annak, hogy az feltételnek megfelelő eseteket hatékonyan válogassuk ki, ezt most a ````method: 'MCMC'```` ami az egyik legnépszerűbb, a Markov Chain Monte Carlo módszer, de a webppl dokumentációban sok más, nagyjából ugyanerre az eredményre vezető inferálási módszert találunk. 

```` var dugó = (eső == true) ? flip(1/2) : flip(1/4);```` az úgy nevezett **feltételes valószínűséget** kódolja, amit P(dugó|eső) -vel jelölünk és a kódban szereplő számok a feltételes valószínűség eloszlása:

| P( dugó \| eső )   | eső == true | eső == false   |
|--------------------| ------------|----------------|
| **dugó == true**   | 0.5         | 0.25           |
| **dugó == false**  | 0.5         | 0.75           |

Azért feltételes, mert ez nem a dugó valószínűségét adja meg, hanem azt a függvényt adja meg, amiból a dugó valószínűségét ki tudjuk számítani, feltéve, hogy tudjuk az eső valószínűségét. Ha a konkrét esetekben ki a akarjuk számolni a valószínűségeket, akkor súlyoznunk kell a fenti táblázat értékeit az eső valószínűségével. Egy egy szorzás: P(dugó, eső) = P( dugó | eső ) * P( eső ) ezért ezt a (dugó,eső) kétváltozós valószínűség **faktorizációjának** hívjuk.

| P(dugó, eső) = P( dugó \| eső ) * P( eső )   | eső == true | eső == false   | P(dugó) marginális|
|--------------------| ------------|----------------|-------|
| **dugó == true**   | 0.1         | 0.2          | 0.3 |
| **dugó == false**  | 0.1         | 0.6           | 0.7  |

Ha ebből puszátán arra vagyunk kíváncsiak, hogy az esőtől függetlenül mennyi a valószínűsége a dugó kialakulásának, akkor úgy ejtjük ki az esőt, hogy soronként összeadjuk a valószínűségeket. Ezt hívjuk **marginálisnak** vagy **marginalizációnak**. Vegyük észre, hogy P(dugó,eső) táblázat celláinak összege 1-et, azaz 100%-is valószínűséget ad, míg a  P(dugó|eső)-ben csak az oszlopok összege ad 1-et. Valóbn! P(dugó,eső) a (dugó,eső) kétváltozós valószínűségi változónak tényleg valószínűségi eloszlása, míg P(dugó|eső) csak akkor, ha "eső" rögzitetet és "dugó"-t válaszjuk valószínűségi változónak. ````viz.marginals(X);```` a (késés, eső, dugó) háromváltozós valószínűség marginálisait számítja ki.

Fontos fogalom a Bayes-inferenciában a **prior** valószínűség. Ebben a témakörben látens és megfigyelt változókról beszélünk: **látens,** aminek az eloszlását ki szeretnénk következetetni és **megfigyelt** változó vagy adat, amit mérni tundunk vagy fogunk. Jelen esetben az eső, és a dugó a látens változók és késés a megfigyelt: a főnök megfigyelte, hogy ma késtem. Prior a változók olyan eloszlása amit még a megfigyelés előtt ismerünk. Ezek vagy korábbi adatokból adódnak ("a tegnap poszteriorja a ma priorja" :) ) vagy egyszerűen valamilyen szakmai indokkal olyannak választjuk meg, amilyennek jónak látjuk. A **poszterior** valószínűség a látnes változók azon eloszlása, amit a megfigyelést követően a mért adatokkal frissítve, az inferencia után kapunk.

A feladatban szereplő változók (marginális) prior valószínűségei:

<img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/ef382b.svg" height=200><img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/014cbb.svg" height=200><img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/873aa5.svg" height=200>

A feladatban szereplő változók (marginális) poszterior valószínűségei:
 
## Monty Hall- (vos Savant-) paradoxon

<img src="https://github.com/mozow01/cog_compsci/blob/main/SciCamp/The-Monty-Hall-Problem-e1623680322430.png" width=200>

Adott 3 csukott ajtó mögött egy-egy nyeremény: 1 autó és 1-1 plüsskecske. Monty, a showman megkér minket arra, hogy tippeljük meg, hol az autó (ha eltaláljuk, a miénk lesz). Amikor ez megtörtént, akkor Monty kinyit egy ajtót, éspedig szigorúan azok közül egyet, amelyek mögött egy kecske van és nem mutattunk rá. Majd felteszi újra a kérdést: hol az autó. Érdemes-e megmásítanunk a döntésünket?

````javascript
var vosSavantProblem = function () {
    var Autó = categorical({ps:[1/3,1/3,1/3], vs:[1, 2, 3]})
    var Tipp = categorical({ps:[1/3,1/3,1/3], vs:[1, 2, 3]})
    var Monty = (Autó == Tipp) 
                ? ( (Autó == 1) 
                   ? categorical({ps:[1/2,1/2], vs:[2, 3]}) : 
                   ( (Autó == 2) ? categorical({ps:[1/2,1/2], vs:[1, 3]}) :
                    categorical({ps:[1/2,1/2], vs:[1, 2]}) ) )
                : ( (1 !== Autó && 1 !== Tipp ) ? 1 :
                   ( (2 !== Autó && 2 !== Tipp ) ) ? 2 : 3 )
    
    var stratégia_maradás = (Autó == Tipp) ? 'nyer' : 'veszít'
    
    var ÚjTipp = (Autó !== Tipp) 
                ? Autó
                : ( (Tipp == 1 && Monty == 2) ? 3 : 
                   ( (Tipp == 1 && Monty == 3) ? 2 : 
                   ( (Tipp == 2 && Monty == 1) ? 3 :
                   ( (Tipp == 2 && Monty == 3) ? 1 :
                   ( (Tipp == 3 && Monty == 1) ? 2 : 1 ) ) ) ) ) 
    
    var stratégia_váltás = (Autó == ÚjTipp) ? 'nyer' : 'veszít'
    
    return  {
             stratégia_maradás: stratégia_maradás, 
             stratégia_váltás: stratégia_váltás } 
}

var eloszlás = Enumerate(vosSavantProblem)

viz.marginals(eloszlás)
````
## Winden vagy Hawkins?

<img src="winden.jpg" height=200><img src="nancy_leave_hawkins_stranger_things_netflix_ringer.jpg" height=200>

Melyik városban vagyunk, ha odacsöppenünk és csak annyit tudunk, hogy felhős-e az ég. Ha másnap nem akarunk kilépni otthonról, meg tudjuk-e jósolni, hogy fog-e eső esni?

````javascript
var HiperModel = Infer({method: 'rejection', samples: 10000 }, 
                       function(){
  
  // a látens változó a Város, amit inferálunk a modellek indexei:
  
  var Város = categorical({ps:[0.5,0.5], vs: ['Winden', 'Hawkins'] }); 
  
  // ez csak azért, hogy az "érintetlen Város" hiperpriort ábrázolni tudjuk
  
  var Város_hiper_prior = categorical({ps:[0.5,0.5], vs: ['Winden', 'Hawkins'] });
  
  // a két város priorja: milyen eloszlást feltételezünk a Felhősség priorjára, 
  // categorical változó konjugált priorja dirichlet
  
  var Winden = dirichlet({alpha: Vector([0.1,0.2,0.7])});
  
    var x1 = (Winden.data)[0];

    var x2 = (Winden.data)[1];

    var x3 = (Winden.data)[2]; 
  
  var Hawkins = dirichlet({alpha: Vector([0.5,0.3,0.2])});
    
    var y1 = (Hawkins.data)[0];

    var y2 = (Hawkins.data)[1];

    var y3 = (Hawkins.data)[2]; 
  
   // ez csak azért, hogy az "érintetlen" priort ábrázolni tudjuk
  
   var Winden_prior = dirichlet({alpha: Vector([0.1,0.2,0.7])});
    var u1 = (Winden.data)[0];
    var u2 = (Winden.data)[1];
    var u3 = (Winden.data)[2]; 
  
  var Hawking_prior = dirichlet({alpha: Vector([0.5,0.3,0.2])});
    var v1 = (Hawkins.data)[0];
    var v2 = (Hawkins.data)[1];
    var v3 = (Hawkins.data)[2]; 
  
  // ez lesz a mért változó:
  
  var Felhősség = (Város === 'Winden')
                   ? categorical({ps:[x1,x2,x3],
                                  vs: ['derült', 'enyhén felhős', 'erősen felhős'] })
                   : categorical({ps:[y1,y2,y3],
                                  vs: ['derült', 'enyhén felhős', 'erősen felhős'] })
  condition(Felhősség === 'derült');
  
  var Felhős_Winden_prior = categorical({ps:[u1,u2,u3],
                                  vs: ['derült', 'enyhén felhős', 'erősen felhős'] })
  
  var Felhős_Hawkins_prior = categorical({ps:[v1,v2,v3],
                                  vs: ['derült', 'enyhén felhős', 'erősen  felhős'] })
                     
  var Esik = (Felhősség === 'derült') 
                   ? flip(0.1)  
                   : (Felhősség === 'enyhén felhős')
                        ? flip(0.6) 
                        : flip(0.9);
  
  return {város_hiper_prior: Város_hiper_prior, 
          Winden_prior: Felhős_Winden_prior, 
          Hawkins_prior: Felhős_Hawkins_prior, 
          város_poszterior: Város, 
          felhős_poszterior: Felhősség,
          esik: Esik};
});

viz.marginals(HiperModel)
````

<img src="https://github.com/mozow01/cog_compsci/blob/main/orak/files/muut_1-1.png" width=1000>





