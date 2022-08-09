# Git

A Git („Global Information Tracker” -- globális információkövető rendszer) egy olyan szoftver, amely bármilyen fájlkészletben bekövetkezett változásokat követ nyomon. Általában a szoftverfejlesztés során forráskódokat közösen fejlesztő programozók együttes munkájának kötevésére, koordinálására használják. Linus Torvalds fejlesztete ki, akinek a neve ismerősen csenghet a Linux operációs rendszer atyjaként. Persze Win-re és MacOS-re is van.

## Letöltés

Ez szokás szerint egyedi: rá kell keresni hogyan kell csinálni, Linuxon más, mint Win-en. (https://gitforwindows.org/, https://git-scm.com/download/mac, Ubuntun 20-tól alapból van).

## Első használat, navigáció

Ha fentvan a gépen, először érdemes parancssorból használni (Win-on: parancssor, Linuxon: terminal). A VS Code képes terminált nyitni, azt is érdemes használni!

Nyilván van egy programunk, aminek a változását követni szeretnénk és meg akarjuk osztani a törpiekkel. Érdemes ezt a programpot** egy külön könyvtárba** másolni. Ha még nincs meg a program, írjunk egyet VS Code-ban vagy egyszerűen nyissunk egy jegyzettömböt és készítsünk az új konyvtárban egy txt file-t. Amikor már érteni fogunk a git-hez felhasználói szinten akkor nyilván nem fogjuk ezzel kezdeni a munkát.

### ls, cd, cd ~

A Terminál vagy Paranccsor megnyitásakor a Home könyvtárban leszünk. A git működtetéséhez abba a könyvtárba kell navigálnunk, amiben a file-jaink vannak. ````...:~$```` jel fogja a jelezni, hogy a terminál parancssorába írjuk a parancsokat.

````terminal
...:~$ ls
````

listázza ki annak a könyvtárnak a tartalmát, ahogy vagyunk. Nekem majd a Dokumentumok könyvtárba kell eljutom mert ott nyitok az Ubuntu filekezelőjével egy ````git_tutorial```` könyvtárat és a ````gedit```` nevű text editorral egy html file-t. Ennek megkereséséhez a cd (change directory) parancsokat osztogatom ki:

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
Ez egy fancy oldat csinál, ha a git_tutorial könyvtárba még a Traditional.css fájlt is bemásoljuk és css fájlra mutató linket beállítjuk, hogy ebbe a könyvtárra mutasson.

Én most injkább a VS Code-ban nyitom meg a html file-t és ott nyitok egy Terminált, majd elnavigálok ugyanebbe a könyvtárba:

<img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/git_1.png" width=800>

Ebben a könyvtában még egy harmadik file is van, ami a CCC_2.v, ami direkt azért van ott, hogy ilyen hiba is legyen :)

### git init, git status, git add file.ext, git add .

Néhány fontos git parancs:

````terminal
...:~/Dokumentumok/git_tutorial$ git init
...:~/Dokumentumok/git_tutorial$ git status

````
Az első inicializálja a git-t abban a könyvtárban, ahol vagyunk, elhelyez egy /.git rejtett file-t a git_tutorialban. Ez fotnos! A második megnézni, hogy is állunk. A listán ez szerepel:

<img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/git_2.png" width=800>

Tehát az összes file "nem követett" státuszban van. Pedig követni szeretnénk őket, hogy lássuk a változásokat. Ehhez parancs, ami követni kezdi a file-jainkat ez:


````terminal
...:~/Dokumentumok/git_tutorial$ git add git_tutorial.html
...:~/Dokumentumok/git_tutorial$ git add Traditional.css
````
Na, most már követve van, ezt a statussal meg is nézhetjük:
<img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/git_3.png" width=800>

### Verziók készítése, git commit -m "üzenet"

Most pedig kijelöljük az első verzióját vagy elkövetését a file-oknak. Változni fognak, ez nem is kérdéses és amikor változnak, abban ez egy első változat lesz.

````terminal
...:~/Dokumentumok/git_tutorial$ git commit -m "Elso elkovetes"
````

-m azt jelenti, hogy egy üzenetet hagyunk a git-nek erről az elkövetésről: ez lesz az "első elkövetett" komitelés.
