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

# A klasszikus vagy a konstruktív logika alapján gondolkodunk-e?

## ELTE matematika tanárszakos szakdolgozóval közöt munka:

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

Igazságtáblázatos logika vagy bizonyítékelmélet?


<img src="https://github.com/mozow01/bizcoq2021/blob/main/cog_5.png" width=900>





