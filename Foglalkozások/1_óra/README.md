# Első óra

````matlab
%kerdes = {"Mi az első órád?"};
%valaszSzoveg = "A válasz: ";
%dlgtitle = "Órarend";
definput = {'matek'};
valasz = inputdlg("Mi az első órád?", "Órarend");
filename = "orarend.txt";
valasz;
printf(valasz{1});
% msgbox(valasz{1},valaszSzoveg);
% writeTextDocument(valasz,filename);
````
