#  Automatikus következtetések
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

Három különböző csoportban kérdezték meg, hogy a pillangó virág-e, a mért változó értékei a data változó alatt találhatók. A két modellben a priorok a non-informative és a dogmatikus volt. 

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




