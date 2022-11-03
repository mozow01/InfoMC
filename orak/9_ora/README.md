# Mindenféle típusok

## Előkészületek

Tegyük rendbe a **könyvtárakat!** Elegánsabb a képeket az img, a javascript és egyéb programkákat a script, a stípusfájlokat a styles könyvtárba tenni. Ne felejtsük el, hogy a tsc-t a .ts helyéről kell indítani, ezért a cd .. ls, cd könyvtár terminál parancsokra szükségünk lehet.

A html-be való **kiíratás** egy nagyon egyszerű lehetősége, hogy egy pici js script-et írunk, ami ezt megteszi.

````
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


 
## Első n természetes szám összege háromféleképpen
  
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

function elsoNForLooppal1(input: number): number {
    let osszeg = 0;

for (let i = 0; i < input + 1; i++ ) {
    osszeg += i;
    // console.log(osszeg);
    }
    { return osszeg};
}

function elsoNForLooppal2(input: number): number {
    let osszeg = 0;

for (let i = 0; i < input + 1; i++) {
    osszeg = osszeg + i;
    // console.log(osszeg);
    }
    { return osszeg};
}


function tetel(input: number): boolean {
    let output: boolean = (elsoNRekurzivan(input) == elsoNKeplettel(input)); 
    { return output};
}

````

## Boole típus

````typescript
function haAkkorKlasszikusan(allitasErtek1:boolean, allitasErtek2: boolean): boolean {
    let output: boolean = (!allitasErtek1 || allitasErtek2 ); 
    { return output};
}

function tagadasKlasszikusan(allitasErtek: boolean): boolean {
    let output: boolean = (!allitasErtek); 
    { return output};
}

function haAkkorTagadasa1(allitasErtek1: boolean, allitasErtek2: boolean) {
    let output: boolean = 
        (tagadasKlasszikusan(haAkkorKlasszikusan(allitasErtek1, allitasErtek2))); 
    { return output};
}

function haAkkorTagadasa2(allitasErtek1: boolean, allitasErtek2: boolean) {
    let output: boolean = 
        (!allitasErtek1 && allitasErtek2); 
    { return output};
}

function tetel2(b1: boolean, b2: boolean): boolean {
    {return (haAkkorTagadasa1(b1,b2) == haAkkorTagadasa2(b1,b2))};
    
}

/*
"Függvény kompozíció"
*/

function uj({ b1, b2 }: { b1: boolean; b2: boolean; }): boolean {

    var belso = b1 || b2;
    var output = tagadasKlasszikusan(belso);

    {return output}  
}

function sokVagy(l: boolean[]) {
    let total = false;

for (let i = 0, n = l.length; i < n + 1; ++i)
{
    console.log(total);
    total = total || l[i];
}
{return total}
}

````
