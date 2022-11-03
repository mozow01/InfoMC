
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

A for loop bonyibb, három új parancs is van benne: for, let


````typescript
function elsoNForLooppal(input: number): number {
    let osszeg: number = 0;
    for (let index: number = 0; index < input + 1;) {
        osszeg = osszeg + index ;
        
    }
    { return osszeg};
}
````

````typescript
function tetel(input: number): boolean {
    let output: boolean = (elsoNRekurzivan(input) == elsoNKeplettel(input)); 
    { return output};
}

````
