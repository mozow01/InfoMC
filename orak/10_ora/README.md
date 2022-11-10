# Típusok folyt.

````typescript

function elsoNKeplettel(input: number): number {
    return (input * (input + 1)) / 2;
}

/* 
function elsoNRekurzivan(input: number): number {
    if (input < 0) 
    { return 0} 
    else 
    { return elsoNRekurzivan(input - 1) + input};
}
*/

function elsoNRekurzivan(input: number): number {
    if (input < 1) { return 0 }
    else { return elsoNRekurzivan(input - 1) + input };
}

/*

+= rekurzív jelölés az x = x + 1 rekurzív definícióra

https://www.w3schools.com/js/js_loop_for.asp

*/


function elsoNForLooppal1(input: number): number {
    let osszeg = 0;

    for (let i = 0; i < input + 1; i++) {
        osszeg += i;
        // console.log(osszeg);
    }
    { return osszeg };
}

function elsoNForLooppal2(input: number): number {
    let osszeg = 0;

    for (let i = 0; i < input + 1; i++) {
        osszeg = osszeg + i;
        // console.log(osszeg);
    }
    { return osszeg };
}

/*

+= string típus esetén is működik:
   string += "újstring"
az újstring-et hozzáfűzi a string-hez:

https://www.w3schools.com/js/js_operators.asp

*/

var s: string = "Frodo";
console.log(s);
s += "Baggins";
console.log(s);

/*

Boole-típus

elsoNRekurzivan és elsoNKeplettel értékei megegyeznek:

*/

function tetel(input: number): boolean {
    let output: boolean = (elsoNRekurzivan(input) == elsoNKeplettel(input));
    { return output };
}

/*

Logikai operátorok/műveletek

https://www.w3schools.com/js/js_comparisons.asp

Pl.: A -> B (philoni kondicionális)

A B A->B

1 1 1
1 0 0
0 1 1
0 0 1

A->B = ¬A v B

*/

function haAkkorKlasszikusan(allitasErtek1: boolean, allitasErtek2: boolean): boolean {
    let output: boolean = (!allitasErtek1 || allitasErtek2);
    { return output };
}
/*

A ¬A

1 0
0 1 

*/

function tagadasKlasszikusan(allitasErtek: boolean): boolean {
    let output: boolean = (!allitasErtek);
    { return output };
}

/*

¬(A->B) = ¬(¬A v B) = A & ¬B

*/

function haAkkorTagadasa1(allitasErtek1: boolean, allitasErtek2: boolean) {
    let output: boolean =
        (tagadasKlasszikusan(haAkkorKlasszikusan(allitasErtek1, allitasErtek2)));
    { return output };
}

function haAkkorTagadasa2(allitasErtek1: boolean, allitasErtek2: boolean) {
    let output: boolean =
        (allitasErtek1 && !allitasErtek2);
    { return output };
}



function tetel2(b1: boolean, b2: boolean): boolean {
    { return (haAkkorTagadasa1(b1, b2) == haAkkorTagadasa2(b1, b2)) };

}

/*
"Függvény kompozíció"

belso függvény legyen a "vagy"

kölső függvény a "tagadás"
*/

function uj({ b1, b2 }: { b1: boolean; b2: boolean; }): boolean {

    var belso = b1 || b2;
    var output = tagadasKlasszikusan(belso);

    { return output }
}

/*

Lista vagy array típus

típus[]

jelöli az akármilyen hosszú  "típus" típusú lakók listáinak típusát

Példa: csináljunk egy olyan függvényt, ami akárhány Boole értéket vagy-ol össze!
Ekkor az l lista tartalmazza a vagyolandókat és az egyik megoldás a for loop  

*/

function sokVagy(l: boolean[]) {
    let total = false;

    for (let i = 0, n = l.length; i < n + 1; ++i) {
        console.log(total);
        total = total || l[i];
    }
    { return total }
}

/*

Listakimenetű függvény, amelyik egy konstans listát hoz létre:

*/

function nFrodo(hossz: number) {
    let output: string[] = [];

    for (let i = 0, n = hossz; i < n + 1; ++i) {
        console.log(output);
        output = output.concat(["Frodo"]);
    }
    { return output }
}

/*
matematikailag egészen szuper array method:

map()

listákon elemenként végrehajtott függvény,

https://www.w3schools.com/js/js_array_iteration.asp

pl.: 

pluszBaggins egy stringhez hozzáilleszti, hogy Baggins

*/

function pluszBaggins(input:string) {
    var output: string = input.concat(" Baggins")
    {return output}
}

/*

és ezt egy listára alkalmazza a map()

*/

function listaBagginsszel(l:string[]) {
    {return l.map(pluszBaggins)}
}

/*

Készítsünk n hosszúságú random listát!

https://www.w3schools.com/jsref/jsref_random.asp

*/

var nevek: string[] = ["Frodo", "Bilbo", "Sam"];

function nRandomNevek(hossz: number) {
    var output: string[] = [];

    for (let i = 0, n = hossz; i < n + 1; ++i) {
        var r: number = Math.floor(Math.random()*3);
        console.log(output);
        console.log(r);
        output = output.concat(nevek[r]);
    }
    { return output }
}

/*

Kicsit másként a

type 

típusdefiniáló paranccsal:

*/

type hobbitok = {
    neve: string;
    kora: number
  }
        
var hobbitNevek: hobbitok[] = 
    [{neve: "Frodo", kora: 50}, {neve: "Bilbo", kora: 111}, {neve: "Sam", kora: 39}];

/*

Ezzel ugyanaz, mint fent

*/


function nRandomNevek2(hossz: number) {
        var output: string[] = [];
    
        for (let i = 0, n = hossz; i < n + 1; ++i) {
            var r: number = Math.floor(Math.random()*3);
            console.log(output);
            console.log(r);
            output = output.concat((hobbitNevek[r].neve));
        }
        { return output }
    }


/*

És elérkeztünk a TS pozitivumához, a "gyerekzárassághoz"

szemantikailag biztonságos: amit nem várunk a program értelme szempontjából,
 azt nem engedi megcsinálni

*/

````
