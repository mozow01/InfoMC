# GitHub tutorial

**Mielőtt nekiállnánk a saját gépünkről** a git segítségével a GitHubon dolgozni, néhány jótanács, hogy a leggyakoribb kellemetlenségeket elkerüljük: 1. kezdő lépésként inkább készintsünk új projektünknek egy új GitHub repót és azt **klónozzuk** a gépünkre (megnézzük hogyan), 2. készüljünk fel arra, hogy a sima jelszóval nem fogunk tudni feltölteni a GitHub-ra (akinek sikerül sima jelszóval, az szerencsés) és **Personal Access Token**-t kell létrehoznunk, azaz új saját fejlesztői azonosítót. Ha tehát elkészítettük a GitHub profilunkat, akkor keressük meg a profilképünk alatt a settings/developer settings/personal access tokens-nél az új token igénylését!

<img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/prof_sett_1.gif" height=400> | <img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/prof_sett_2.gif" height=400> | <img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/prof_sett_3.gif" height=400>
--- | --- | ---

## git clone

Szóval készítsünk egy GitHub repót (new fül és mindenféle opciókat tetszés szerint kitölthetünk, pl. tegyen-e bele Readme.md-t (ez javasolt), vagy licensz nyilatkozatot (ez se árt), vagy )

Nyissunk egy terminált és navigáljunk abba a könyvtárba, ahol el szeretnénk helyezni a GitHub-ról "letöltött" repót. A letölteni nem jó kifejezés itt ténnyleg klónozásról vab szó és innentől kezdve kapcsolatban leszünk vele, azaz feltölthetjük (feltolhatjuk) az új verziónkat vagy frissíthetjük az ott levő állapotot (pull).

Ha megvan a repónk, akkor keressük meg a zölden látható Code ikont és nyomjunk rá. Állítsuk HTTPS kommunikációs protokollra és másoljuk ki a github repó linkjét.

<img src="https://github.com/mozow01/InfoMC/blob/main/z_Git_and_GitHub_tutorial/clone_1.gif" height=400>

Ezt kell a git clone parancs után bemásolni.

````terminal
git clone https://github.com/mozow01/git_tutotial.git
````

A git ezután egy user nevet (málam mozow01) és egy jelszót kér. No, most ezzel a jelszóval lehet, hogy nem lesz elégedett a git, ezért ilyenkor a különlegesen szupertitkos és szent Personal Access Token-t kell bemásolni a jelszó helyére. 

