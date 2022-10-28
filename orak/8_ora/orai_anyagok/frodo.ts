function elsoNKeplettel(input: number): number 
{
    return (input * (input + 1)) / 2;
}
    
function elsoNRekurzivan(input: number): number {
    if (input < 0) 
    { return 0} 
    else 
    { return elsoNRekurzivan(input - 1) + input};
}

function elsoNForLooppal(input: number): number {
    let osszeg: number = 0;
    for (let index: number = 0; index < input + 1;) {
        osszeg = osszeg + index ;
        
    }
    { return osszeg};
}

function tetel(input: number): boolean {
    let output: boolean = (elsoNRekurzivan(input) == elsoNKeplettel(input)); 
    { return output};
}
