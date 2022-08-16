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

````matlab
% Input/Output: beszélgessünk a Matlabbal!
% 
% Ez az egyszerű napi órarend program, ami egy nap teendőit
% kéri be és tárolja, nyilván:
% 
% input
%
% így keressünk rá!
% 
% https://www.mathworks.com/help/matlab/ref/input.html

% x = input('Mi az első órád?', "s");

% Jó, de ez kevés, nem lehetne szebben?
% üzenetdoboz:
% https://www.mathworks.com/help/matlab/ref/msgbox.html

% msgbox('Szia, most meg fogom kérdezni a napi programodat!', 'Órarend program');
% input('Mi az első órád?',"s");

% my_cat = imread("cat_for_matlab.png");
% uiwait(msgbox('Szia, most meg fogom kérdezni a napi programodat!', ...
%    'Órarend program',"custom", my_cat));
% input('Mi az első órád?',"s");

% Nem lehetne ezt is a dobozban megkérdezni?
% inputdlg a barátunk:
% https://www.mathworks.com/help/matlab/ref/inputdlg.html

my_cat = imread("cat_for_matlab.png"); 
uiwait(msgbox('Szia, most meg fogom kérdezni a napi programodat!', ...
    'Órarend program',"custom", my_cat));

uzenet = {'Mi az első órád?', 'Mi az második órád?'};
dlgtitle = 'itt lehet beírni';
dims = [1 30];
x = inputdlg(uzenet,dlgtitle,dims)

% File-ba írás. Ez a fopen, fprint, fclose hármas lesz
% https://www.mathworks.com/help/matlab/ref/fopen.html
% https://www.mathworks.com/help/matlab/ref/fprintf.html
% https://www.mathworks.com/help/matlab/ref/fclose.html  

% x = input('Mi az első órád?', "s");
% filenevem = fopen('adatok.txt','w');
% fprintf(filenevem,'%0s \n','x értéke:');
% fprintf(filenevem,'%0s',x);
% fclose(filenevem);

% Az adatok file-ba írásának formázása egy őrület,
% de meg lehet szokni.


````
