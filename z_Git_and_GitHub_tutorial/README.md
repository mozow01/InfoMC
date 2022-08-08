# Git

A Git („Global Information Tracker” -- globális információkövető rendszer) egy olyan szoftver, amely bármilyen fájlkészletben bekövetkezett változásokat követ nyomon. Általában a szoftverfejlesztés során forráskódokat közösen fejlesztő programozók együttes munkájának kötevésére, koordinálására használják. Linus Torvalds fejlesztete ki, akinek a neve ismerősen csenghet a Linux operációs rendszer atyjaként. Persze Win-re és MacOS-re is van.

## Letöltés

Ez szokás szerint egyedi: rá kell keresni hogyan kell csinálni, Linuxon más, mint Win-en. ([https://gitforwindows.org/], [https://git-scm.com/download/mac], Ubuntun 20-tól alapból van).

## Első használat

Ha fentvan a gépen, először érdemes parancssorból használni (Win-on: parancssor, Linuxon: terminal). A VS Code képes terminált nyitni, azt is érdemes használni!

Nyilván van egy programunk, aminek a változását követni szeretnénk és meg akarjuk osztani a törpiekkel. Érdemes ezt a programpot** egy külön könyvtárba** másolni. Ha még nincs meg a program, írjunk egyet VS Code-ban vagy egyszerűen nyissunk egy jegyzettömböt és készítsünk az új konyvtárban egy txt file-t. Amikor már érteni fogunk a git-hez felhasználói szinten akkor nyilván nem fogjuk ezzel kezdeni a munkát.

A Terminál vagy Paranccsor megnyitásakor a Home könyvtárban leszünk. A git működtetéséhez abba a könyvtárba kell navigálnunk, amiben a file-jaink vannak. 

````terminal
$ ls
````
