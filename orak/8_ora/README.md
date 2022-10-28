# HTML és TypeScript alapok

A [HTML](https://en.wikipedia.org/wiki/HTML) file-ok szerkesztésére a [Visual Studio Code](https://en.wikipedia.org/wiki/Visual_Studio_Code) nevű fejlesztő környezetet fogjuk használni. Ez például azért jó, mert felismeri a HTML nyelvet (és a későbbi nyelveket is) és segít a hibajavításban. A VS Code telepítésével kapcsolatban sok helyen tájékozódhatunk, de itt van két youtube tutorial [egyik](https://youtu.be/31dRWcPcvhM), [másik](https://youtu.be/DqaTKBU9TZk).

## HTML szerkezete

A [w3schools](https://www.w3schools.com/html/default.asp)-on kezdhetjük a tanulást, érdemes végigböngészni a "tag"-eket [itt](https://www.w3schools.com/tags/default.asp).

Egy html file lényegében az alábbi strukturájú:

````html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- ez az elem magáról az egész oldalról mond valamit  -->
    <title>Frodo Baggins' website</title>
    <!-- ez nem jelenik meg alapból, de a keresőprogramok olvassák és felhasználják  -->
    <style></style>
    <!-- jó bonyi stílusfile tud itt lenni, de akár be is lehet linkelni a css-t -->
    <link>
    <script></script>
    <!-- jó bonyi program tud itt lenni, de akár be is lehet linkelni a js-t -->
  </head>
  <body>
   
    <div><h1>Zsákos Frodó története</h1> </div>
    <!-- ez egy stílusosztály által megadott stílusú elem tud lenni -->

    <!-- tehát ez kommentel ki szövegeket HTML-ben -->
   
  </body>
</html>
````

## Szöveg stílusa

````html
 <style> 
     h1 {color: crimson;}
    .sajatstilus {background-color: aquamarine;}
 </style>
...
<div class="sajatstilus"><h1>Zsákos Frodó története</h1> </div>

````
Engem leginkább az érdekel, hogy a háttér legyen szép, de ezt mások nem tartják annyira fontosnak. Itt egy háttérszerkesztő: [magicpattern.design](https://www.magicpattern.design/tools/css-backgrounds)

## CSS file

De ez olyan nagy, hogy inkább tegyük be egy [stílusfile](https://en.wikipedia.org/wiki/CSS)-ba, pl.:

````css
background-color: #ececf9;
opacity: 0.8;
background-image:  linear-gradient(#444cf7 2px, transparent 2px), linear-gradient(90deg, #444cf7 2px, transparent 2px), linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(90deg, #444cf7 1px, #ececf9 1px);
background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
````
Persze a css-nek is van nyelve és itt azt várjuk tőle, hogy a html testét szabja át:

````css
body {
background-color: #ececf9;
opacity: 0.8;
background-image:  linear-gradient(#444cf7 2px, transparent 2px), linear-gradient(90deg, #444cf7 2px, transparent 2px), linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(90deg, #444cf7 1px, #ececf9 1px);
background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;}
````
Ennek beillesztése a html-be, a <style> helyett

````html
<link rel="stylesheet" href="sajatstilus.css">
````
  
Szeretném a címet és a szöveget is szépen átformázni:
  
````css
.cim {color: #070718b0;
        float: none;
       /* padding: 100px; */
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: 200px;}

    .szoveg1 {
        color: #070718b0;
        float: none;
         /* padding: 100px; */
         margin-left: 200px;
      }
````
  
````html
  
    <div class="cim"><h1>Zsákos Frodó története</h1> </div>

    <div class="szoveg1">
        
        Volt egyszer egy földbe vájt lyuk és abban élt egy babó.
    
    </div>
````
  
Jobb lenne egy képet is mellékelni:
  
````html
  <div class="szoveg1">
        <table style="width:600px" >
            <tr>
            <td> <img src="babo_1.jpg" width="100" style="margin-right: 1cm;"> </td>
            <td>Volt egyszer egy földbe vájt lyuk és abban élt egy babó. Nem volt ez a lyuk rút, mocskos, nedves, teli féregmaradékkal, dohszaggal, sem száraz, csupasz, homokos lyuk, ahol se leülni, sem enni nemigen lehet: ez babólyuk volt, ami egyértelmű a kényelemmel. 
            </td>
              
            </tr>
          </table> 
    </div>
````

## TypeScript

A <script></script> tagek közé lehet illeszteni azokat a programokat, amik a html dokumentumban tudnak lefutni. Ezek a _JavaScript_ programok. Persze ezt is külön programokkal fogjuk elkészíteni. Olyan nyelvet választottunk, amit értelmesen lehet használni, azaz a változók rendesen be vannak típusokba osztva (ahogy a Matlabban), most ezt a [TypeScript](https://www.typescriptlang.org/) lesz, ami a JavaScript típusolt változata. [Itt](https://youtu.be/L_iKniPK6K0) például találtok egy útmutatót. Alapból ezt az elv: JS + types = TS.
  
A működtetéséhez kell node (ez a .js file-okat tudja futtatni, de a browser is megteszi) és node-typescript (ami a .ts dolgokat csinálja). A tsc TS kompájlerrel lehet .ts-ből .js-t készíteni.  
  
Használata: abban a könyvtárban, amiben dolgoztok, elpször készíteni kell egy az olyan file-t, ami a beállításokat tartalamzza, de ez automatikusan lesz:

````terminal
  tsc --init 
````
  
Ha nem a File/Open Folder segítségével megnyitott könyvtárban dolgoztok, akkor a  VS Code-ban tudtok egy terminált nyitni és abba a könyvtárba navigálni, ahol dolgozni szeretnétek. Ekkor ````ls````, ````cd konyvtar````, ````cd ..```` utasításokat szoktuk használni. 

````ls```` listázza a könyvtár tartalmát

````cd konyvtar```` belép a könyvtár nevű könyvtárba

````cd ..```` visszalép a főkönyvtárba

Javasolt előre a könyvtárkezelőben egy könyvtárat készíteni, hogy az előbbi lépegetést ne kelljen megcsinálni. Nlam infomc_8 a könyvtár neve. Ha az Open Folderrel megnyitjátok a VS Code-ban a könyvtárat, akkor a Terminál eleve abban a könyvtárban nyílik meg, szóval nem lesz szükésgetek a navigálásra. De jó tudni, hogy megy. Készítetek egy .ts file-t, majd oda írjátok be a program tartalmát. Végül "kompájoljátok" .js-b3, ha ezt a parancsot adjátok ki: 
  
````terminal
  tsc programom.ts
````
  
és a .js-t már a browser felismeri.
  
A .js file kódját a <script src="..."> tagben tudjuk betölteni a html-hez:
  
````html
<script src="tipusok.js"></script>
````
  
## Első n természetes szám összege háromféleképpen
  
Jól ismerjük a játék menetét -- először képlettel... Ebben a nyelvben mindig meg kell adni a változók [típusát](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html). Ettől TYPEScript a TypeScript. A függvények írásmódja ugyanaz, mint a JavaScriptben és nagyon hasonló a Matlabhoz.

````typescript
function elsoNKeplettel(input: number): number {
    return (input * (input + 1)) / 2;
}
````
Ez a program számot eszik és számot ad vissza. (Attól függ, melyiket adtuk oda neki étkezés céljából.) Rekurzív definíció esetén újra meg kell hívni ugyanazt a programot:

````typescript
function elsoNRekurzivan(input: number): number {
    if (input < 0) 
    { return 0} 
    else 
    { return elsoNRekurzivan(input - 1) + input};
}
````

A for loop bonyibb, három új parancs is van benne: for, let, ++


````typescript
function elsoNForLooppal(input: number): number {
    let osszeg: number = 0;
    for (let index: number = 0; index < input + 1; index++) {
        osszeg = osszeg + index ;
        
    }
    { return osszeg};
}

````typescript
function tetel(input: number): boolean {
    let output: boolean = (elsoNRekurzivan(input) == elsoNKeplettel(input)); 
    { return output};
}

````
