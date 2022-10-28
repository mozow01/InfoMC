function elsoNKeplettel(input) {
    return (input * (input + 1)) / 2;
}
function elsoNRekurzivan(input) {
    if (input < 0) {
        return 0;
    }
    else {
        return elsoNRekurzivan(input - 1) + input;
    }
    ;
}
function elsoNForLooppal(input) {
    var osszeg = 0;
    for (var index = 0; index < input + 1;) {
        osszeg = osszeg + index;
    }
    {
        return osszeg;
    }
    ;
}
function tetel(input) {
    var output = (elsoNRekurzivan(input) == elsoNKeplettel(input));
    {
        return output;
    }
    ;
}
