# Git

A Git („Global Information Tracker” -- globális információkövető rendszer) egy olyan szoftver, amely bármilyen fájlkészletben bekövetkezett változásokat nyomon követ. Általában a szoftverfejlesztés során forráskódokat közösen fejlesztő programozók együttes munkájának követésére, koordinálására használják. Linus Torvalds fejlesztete ki, akinek a neve ismerősen csenghet a Linux operációs rendszer atyjaként. Persze Win-re és MacOS-re is van.

## Letöltés

Ez szokás szerint egyedi: rá kell keresni hogyan kell csinálni, Linuxon más, mint Win-en. (https://gitforwindows.org/, https://git-scm.com/download/mac, Ubuntun 20-tól alapból van).

## Első használat, navigáció

Ha fent van a gépen, először érdemes parancssorból használni (Win-on: parancssor, Linuxon: terminal). A VS Code képes terminált nyitni, azt is érdemes használni!

Nyilván van egy programunk, aminek a változását követni szeretnénk és meg akarjuk osztani a törpiekkel. Érdemes ezt a programot** egy külön könyvtárba** másolni. Ha még nincs meg a program, írjunk egyet VS Code-ban, vagy egyszerűen nyissunk egy jegyzettömböt és készítsünk az új könyvtárban egy txt file-t. Amikor már érteni fogunk a Git-hez felhasználói szinten, akkor nyilván nem fogjuk ezzel kezdeni a munkát.

### ls, cd, cd ~

A Terminál vagy Parancssor megnyitásakor a Home könyvtárban leszünk. A Git működtetéséhez abba a könyvtárba kell navigálnunk, amiben a file-jaink vannak. ````...:~$```` jel fogja a jelezni, hogy a terminál parancssorába írjuk a parancsokat.

````terminal
...:~$ ls
````

listázza ki annak a könyvtárnak a tartalmát, ahol vagyunk. Nekem majd a Dokumentumok könyvtárba kell eljutnom, mert ott nyitok az Ubuntu filekezelőjével egy ````git_tutorial```` könyvtárat és a ````gedit```` nevű text editorral egy html file-t. Ennek megkereséséhez a cd (change directory) parancsokat osztogatom ki:

````terminal
...:~$ cd Dokumetumok
...:~$ cd git_tutorial
````
itt meg is találom a git_tutorial.html file-t, aminek ez a tartalma:

````html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="Zoltan Molnar">
    <title>Zoltan Molnar</title>
    <link rel="stylesheet" href="file:///home/mozo/Dokumentumok/git_tutorial/Traditional.css" type="text/css">
  </head>

  <body>

<dt>Git tutorial</dt>
<br>
<br>
<p>Első lépések</p>
</body>
</html>
````
Ez egy fancy oldalt csinál, ha a git_tutorial könyvtárba még a Traditional.css fájlt is bemásoljuk és css file-ra mutató linket beállítjuk, hogy ebbe a könyvtárba mutasson.

Én most inkább a VS Code-ban nyitom meg a html file-t és ott nyitok egy Terminált, majd elnavigálok ugyanebbe a könyvtárba:

<img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/git_1.png" width=800>

Ebben a könyvtában még egy harmadik file is van, ami a CCC_2.v, ami direkt azért van ott, hogy ilyen hiba is legyen. :)

### git init, git status, git add file.ext, git add .

Néhány fontos Git parancs:

````terminal
...:~/Dokumentumok/git_tutorial$ git init
...:~/Dokumentumok/git_tutorial$ git status

````
Az első inicializálja a Git-et abban a könyvtárban, ahol vagyunk, elhelyez egy /.git rejtett file-t a git_tutorialban. Ez fontos! A második megnézni, hogy is állunk. A listán ez szerepel:

<img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/git_2.png" width=800>

Tehát az összes file "nem követett" státuszban van. Pedig követni szeretnénk őket, hogy lássuk a változásokat. Ehhez a parancs, ami követni kezdi a file-jainkat ez:


````terminal
...:~/Dokumentumok/git_tutorial$ git add git_tutorial.html
...:~/Dokumentumok/git_tutorial$ git add Traditional.css
````
Na, most már követve van, ezt a statussal meg is nézhetjük:
<img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/git_3.png" width=800>

aminek a követésére utasítottuk a Git-et, az zöldre vált, a többi marad piros. Lehet könyvtárat is követni, lehet mindent követni egy könyvtárban a ````git add .```` paranccsal (pont előtt a szóköz kell). 

### Verziók készítése, git commit -m "üzenet"

Most pedig kijelöljük az első verzióját vagy elkövetését a file-oknak. Változni fognak, ez nem is kérdéses és amikor változnak, abban ez egy első változat lesz.

````terminal
...:~/Dokumentumok/git_tutorial$ git commit -m "Elso elkovetes"
````

-m azt jelenti, hogy egy üzenetet hagyunk a Git-nek erről az elkövetésről: ez lesz az "első elkövetett" komitelés. Ha most a html file-on változtatunk, akkor a status megváltozik és kezdhetjük elölről az add, commit kört.

### git log, git log --all, git log --all --graph, q

Most a Git bejegyzéseket fog tenni a konzolra (log azaz bejegyzés a hajónaplóba). Ellenőrizhetjük, hogy a verziónk bekerült a verziótörténetbe ````git log```` vagy ````git log --all```` ill.  ````git log --all --graph```` . log kilistázza az éppen aktuális ágat a verziószerkezetben. log --all az összes ágat listázza ki, log --all --graph faként vizualizálja a verziószerkezetet. Ebből a munkamenetből q-val tudunk kilépni (quit).

kövi: [GitHub tutorial](https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/GitHub.md)



