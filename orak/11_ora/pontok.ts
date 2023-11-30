type hallgato = {
    kod: number;
    nev: string;
    vizsgapont: number[];
  };
  

  function atlag(pontok: number[]): number {
    if (pontok.length === 0) {
      return 0; 
    }
    else;
    let osszeg = 0;
    for (let i = 0; i < pontok.length; i++) {
      osszeg += pontok[i];
    }
    return osszeg / pontok.length;
  }
  
  const hallgatok: hallgato[] = [
    {
      kod: 1,
      nev: "Ági",
      vizsgapont: [85, 92, 78, 91],
    },
    {
      kod: 2,
      nev: "Béla",
      vizsgapont: [76, 88, 94, 81],
    },
    {
      kod: 3,
      nev: "Cintia",
      vizsgapont: [90, 79, 87, 95],
    },
  ];
  
  function atlagoksorozata(hallgatok: hallgato[]): number[] {
    const s : number[] = [];
  
    for (let i = 0; i < hallgatok.length; i++) {
      const egy = hallgatok[i];
      const m = atlag((egy.vizsgapont));
      s.push(m);
    }
    return s;
  }