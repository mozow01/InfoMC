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
    .sajatstilus {background-color: aquamarine;}
 </style>
...
<div class="sajatstilus"><h1>Zsákos Frodó története</h1> </div>

````




