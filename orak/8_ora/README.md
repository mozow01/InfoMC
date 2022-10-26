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
  
Jobb lenne egy ábra is:
  
````html
  <div class="szoveg1">
        <table style="width:600px" >
            <tr>
            <td> <img src="babo_1.jpg" width="100" style="margin-right: 1cm;"> </td>
            <td>Volt egyszer egy földbe vájt lyuk és abban élt egy babó. Volt egyszer egy földbe vájt lyuk, abban élt egy babó. 
                Nem volt ez a lyuk rút, mocskos, nedves, teli féregmaradékkal, dohszaggal, sem száraz, csupasz, homokos lyuk, ahol 
                se leülni, sem enni nemigen lehet: ez babólyuk volt, ami egyértelmű a kényelemmel. 
            </td>
              
            </tr>
          </table> 
    </div>
````






