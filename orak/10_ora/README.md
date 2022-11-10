## Számtípus folyt.

````typescript
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
