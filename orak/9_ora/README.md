# Mindenféle típusok

## Előkészületek

Tegyük rendbe a **könyvtárakat!** Elegánsabb a képeket az img, a javascript és egyéb programkákat a script, a stípusfájlokat a styles könyvtárba tenni. Ne felejtsük el, hogy a tsc-t a .ts helyéről kell indítani, ezért a cd .. ls, cd könyvtár terminál parancsokra szükségünk lehet.

A html-be való **kiíratás** egy nagyon egyszerű lehetősége, hogy egy pici js script-et írunk, ami ezt megteszi.

````html
<h2>Néhány függvényérték</h2>

    <p>Az elsoNKeplettel értékei: </p> 
````
nagyon csúnya, de szerencsére van már szép stílusunk, a szoveg1

````html
<div class="szoveg1">
<h2>Néhány függvényérték</h2>

    <p>Az elsoNKeplettel értékei: </p> 
</div>
````
Most időzzünk el a következő programnál:

````html
<div class="szoveg1">
<h2>Néhány függvényérték</h2>

    <p>Az elsoNKeplettel értékei: 
      <div id="output_1"></div>
    </p>

    <script>
    document.getElementById("output_1").innerHTML = elsoNKeplettel(10);
    </script> 
</div>
````

Az új parancsok: [getElementById()](https://www.w3schools.com/jsref/met_document_getelementbyid.asp), [document](https://www.w3schools.com/jsref/dom_obj_document.asp) és [innerHTML](https://www.w3schools.com/jsref/prop_html_innerhtml.asp). Ezeket az értékeket mind mind ki is írathatjuk a konzolra!

Vegyük észre, hogy ugyanezt érjük el ezzel:

````html
    <script>
    let output_1Tartalma = document.getElementById("output_1");
    output_1Tartalma.innerHTML = elsoNKeplettel(10)
    </script>
````

Az új parancs: [let](https://www.w3schools.com/js/js_let.asp). Ebből három van: let, const, var.


 
## Számtípus
  
Jól ismerjük a játék menetét -- először képlettel... Ebben a nyelvben mindig meg kell adni a változók [típusát](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html). Ettől TYPEScript a TypeScript. A függvények írásmódja ugyanaz, mint a JavaScriptben és nagyon hasonló a Matlabhoz.

````typescript
function elsoNKeplettel(input: number): number {
    return (input * (input + 1)) / 2;
}

function elsoNRekurzivan(input: number): number {
    if (input < 0) 
    { return 0} 
    else 
    { return elsoNRekurzivan(input - 1) + input};
}

````
