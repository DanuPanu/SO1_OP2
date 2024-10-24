import React, { useState, useRef } from 'react';
import './App.css';

interface Nimi{
  nimi : string,
  tehty : boolean
}

const App : React.FC = () : React.ReactElement => {

  const uusiVelka : any = useRef<HTMLInputElement>();
  
  const uusiVelkaMaara : any = useRef<HTMLInputElement>();
  
  const uusiSaatava : any = useRef<HTMLInputElement>();
  
  const uusiSaatavaMaara : any = useRef<HTMLInputElement>();

  const [velkoja, setVelkoja] = useState<Nimi[]>([
      {
        nimi : "Kenelle", 
        tehty : false
      },         
    ]);

  const [velkamaara, setVelkaMaara] = useState<Nimi[]>([
    {
      nimi : "Summa", 
      tehty : false
    },         
  ]);

  const lisaaVelkoja = (velkaNimi : string) : void =>{

    let uusiVelka : Nimi = {
      nimi : velkaNimi,
      tehty : false
    }
    setVelkoja([...velkoja, uusiVelka]);
  }

  const lisaaVelkaMaara = (velkaMaara : string) : void =>{

    let uusiVelkaMaara : Nimi = {
      nimi : velkaMaara,
      tehty : false
    }
    setVelkaMaara([...velkamaara, uusiVelkaMaara]);
  }

  const [saaja, setSaaja] = useState<Nimi[]>([
    {
      nimi : "Keneltä", 
      tehty : false
    },         
  ]);

  const [saajamaara, setSaajaMaara] = useState<Nimi[]>([
    {
      nimi : "Summa", 
      tehty : false
    },         
  ]);

  const lisaaSaaja = (saajaNimi : string) : void =>{

    let uusiSaaja : Nimi = {
      nimi : saajaNimi,
      tehty : false
    }
    setSaaja([...saaja, uusiSaaja]);
  }

  const lisaaSaajaMaara = (saajaMaara : string) : void =>{

    let uusiSaajaMaara : Nimi = {
      nimi : saajaMaara,
      tehty : false
    }
    setSaajaMaara([...saajamaara, uusiSaajaMaara]);
  }

  const [velkaokei, setVelkaOkei] = useState<any>();
  const [velkahinta, setVelkaHinta] = useState<any>([]);

  const joojoo = (uusihinta : number) : void =>{
    setVelkaHinta([...velkahinta, uusihinta])
    let yhteensa = velkahinta.reduce((a : number, b : number) => a + b, uusihinta);
    setVelkaOkei(yhteensa)
  }

  const [saajaokei, setSaajaOkei] = useState<any>();
  const [saajahinta, setSaajaHinta] = useState<any>([]);

  const juujuu = (uusihinta : number) : void =>{
    setSaajaHinta([...saajahinta, uusihinta])
    let yhteensa = saajahinta.reduce((a : number, b : number) => a + b, uusihinta);
    setSaajaOkei(yhteensa)
  }


  return (
    <>
     <h1>Velat</h1>
    <div className="wrapper">

      <div className="eka">
        <ul>
        {velkoja.map( (tehtava : Nimi, idx : number) => {
          return(
            <li key = {idx} onClick={ () => {}}>
              { (tehtava.tehty === true)
              ? <del>{tehtava.nimi}</del>
              : tehtava.nimi}
            </li>
          );
        })}
        </ul>

        <input
        ref={uusiVelka}
        type="text"
        placeholder="Kenelle..."
        />
      </div>

      <div className="toka">
        <ul>
        {velkamaara.map( (tehtava : Nimi, idx : number) => {
          return(
            <li key = {idx} onClick={ () => {}}>
              { (tehtava.tehty === true)
              ? <del>{tehtava.nimi}</del>
              : tehtava.nimi}
            </li>
          );
        })}
        </ul>

        <input
        ref={uusiVelkaMaara}
        type="text"
        placeholder="Summa..."
        />

        <button onClick={ () => {
        lisaaVelkoja(uusiVelka.current.value)
        lisaaVelkaMaara(uusiVelkaMaara.current.value)
        joojoo(parseInt(uusiVelkaMaara.current.value))
        uusiVelka.current.value = null;
        uusiVelkaMaara.current.value = null;
        }}>Lisää</button>

      </div>
    </div>
    <p>Velkasi on yhteensä {velkaokei}</p>




    <h1>Saatavat</h1>

    <div className="wrapper">

      <div className="eka">
        <ul>
        {saaja.map( (tehtava : Nimi, idx : number) => {
          return(
            <li key = {idx} onClick={ () => {}}>
              { (tehtava.tehty === true)
              ? <del>{tehtava.nimi}</del>
              : tehtava.nimi}
            </li>
          );
        })}
        </ul>

        <input
        ref={uusiSaatava}
        type="text"
        placeholder="Keneltä..."
        />
      </div>

      <div className="toka">
        <ul>
        {saajamaara.map( (tehtava : Nimi, idx : number) => {
          return(
            <li key = {idx} onClick={ () => {}}>
              { (tehtava.tehty === true)
              ? <del>{tehtava.nimi}</del>
              : tehtava.nimi}
            </li>
          );
        })}
        </ul>
        
        <input
        ref={uusiSaatavaMaara}
        type="text"
        placeholder="Summa..."
        />
      
        <button onClick={ () => { 
        lisaaSaaja(uusiSaatava.current.value)
        lisaaSaajaMaara(uusiSaatavaMaara.current.value)
        juujuu(parseInt(uusiSaatavaMaara.current.value))
        uusiSaatava.current.value = null;
        uusiSaatavaMaara.current.value = null;
        }}>Lisää</button>
      </div>
    </div>
    <p>Saatavat ovat yhteensä {saajaokei}</p>
    </>
  );
}

export default App;
