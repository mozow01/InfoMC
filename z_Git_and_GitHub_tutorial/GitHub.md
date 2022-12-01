# GitHub tutorial

**Mielőtt nekiállnánk a saját gépünkről** a Git segítségével a GitHubon dolgozni, néhány jótanács, hogy a leggyakoribb kellemetlenségeket elkerüljük: 1. kezdő lépésként inkább készítsünk új projektünknek egy új GitHub repót és azt **klónozzuk** a gépünkre (megnézzük hogyan), 2. készüljünk fel arra, hogy a sima jelszóval nem fogunk tudni feltölteni a GitHub-ra (akinek sikerül sima jelszóval, az szerencsés) és **Personal Access Token**-t kell létrehoznunk, azaz új saját fejlesztői azonosítót. Ha tehát elkészítettük a GitHub profilunkat, akkor keressük meg a profilképünk alatt a Settings/Developer settings/Personal access tokens-nél az új token igénylését!

<img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/prof_sett_1.gif" height=400> | <img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/prof_sett_2.gif" height=400> | <img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/prof_sett_3.gif" height=400>
--- | --- | ---

## git clone

Szóval készítsünk egy GitHub repót (new fül és mindenféle opciókat tetszés szerint kitölthetünk, pl. tegyen-e bele Readme.md-t (ez javasolt), vagy licensz nyilatkozatot (ez se árt), vagy ...

Nyissunk egy terminált és navigáljunk abba a könyvtárba, ahol el szeretnénk helyezni a GitHub-ról "letöltött" repót. A letölteni nem jó kifejezés itt tényleg klónozásról van szó és innentől kezdve kapcsolatban leszünk vele, azaz feltölthetjük (feltolhatjuk) az új verziónkat vagy frissíthetjük az ott levő állapotot (pull).

Ha megvan a repónk, akkor keressük meg a zölden látható Code ikont és nyomjunk rá. Állítsuk HTTPS kommunikációs protokollra és másoljuk ki a GitHub repó linkjét.

<img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/clone_1.gif" height=300>

Ezt kell a git clone parancs után bemásolni.

````terminal
git clone https://github.com/mozow01/git_tutorial.git
````

A Git ezután egy user nevet (nálam mozow01) és egy jelszót kér. No, most ezzel a jelszóval lehet, hogy nem lesz elégedett a Git, ezért ilyenkor a különlegesen szupertitkos és szent Personal Access Token-t kell bemásolni a jelszó helyére. 

## git remote -v

Érdemes megnézni, hogy ez a gépen lévő repó honnan jön. cd-zzünk hát bele a klónozott könyvtárba és kérdezzünk rá a ,,távrepó'' adataira:

````terminal
git remote -v
````

És valóban, most láthatjuk is a következő két git parancsot elrejtve

## git push`

Ha most megváltoztatjuk a számítógépünkön lévő konyvtárat, mert mondjuk egy file-t hozunk létre ott, programot írunk bele és elmentjük, és ezt a munkánkat szeretnék feltölteni a githun-unkra, akkor ezt a push paranccsal tudjuk megtenni. **Lényeges,** hogy győződjünk meg arról, hogy követésre ki van jelölve minden olyan file, amit fel akarunk tölteni (````git status````) illetve hogy létrehoztuk azt a követési verziót, amit szeretnénk feltölteni (````git commit -m "(ide írjuk a commit fantázianevét)"````).  Ezután adhatjuk ki a  

````terminal
git push origin main
````

parancsot. Ez a gépen lévő könyvtárunkat fel fogja tölteni a gutHub-ra. Lényeges, hogy a jelszónál a Pers. Acc. Tokent adjuk meg.

Megjegyzendő, hogy néha "master" névvel illetik a távoli gitHub repó főágát. Ezt a szót ne használjuk, mert már kiment a divatból.

## git pull

Ha a gitHub-on történt változás és szeretnék ezt a gépünkre lehúzni, akkor ezt a parancsot használjuk:

````
git pull origin
````
