import React, { useState, useEffect, useMemo, useContext, createContext } from 'react'
import Image from 'next/image'
import Card from './Card'

export default function Body() {
  const numberCards = 12
  const [globalLights, setGlobalLights] = useState('null')

  const onSucess = location => {
    console.log(location)
    let userPosition = `https://api.sunrise-sunset.org/json?lat=${location.coords.latitude}&lng=${location.coords.longitude}`
    fetch(userPosition)
      .then((response) => response.json())
      .then((data) => {
        let sunset = Number(data.results.sunset.slice(0, 1)) +12
        let sunrise =  Number(data.results.sunrise.slice(0, 1))
        
        var hour = new Date()
        var hora = hour.getHours()

        console.log(`hora ${hora}`)
        console.log(`sunset ${sunset}`)
        console.log(`sunrise ${sunrise}`)

        if ( hora <= sunset || hora >= sunrise )
        setGlobalLights('escuro')
        else setGlobalLights('claro')
      })    
  }

  useEffect(() => {
    if (process.browser) {  
      if ( !('geolocation' in navigator) ){
        onError({
          code: o,
          message: "Geolocalizacao nao suportada"
        })
      } 
      console.log('testEffect')
      navigator.geolocation.getCurrentPosition(onSucess)
    }
  }, [])

  const handleClickGlobal = () => { 
    setGlobalLights(globalLights === 'escuro' ? 'claro' : 'escuro')
  }

  return (
    <div className="container">
      <main>
        <button onClick={handleClickGlobal}>Controle Global</button>
        <div className="grid">
          {[...Array(12)].map((value, key) => {
            return (
              <Card 
                key={key} 
                srcQuarto={`/quartos/quarto(${key+1}).webp`} 
                idQuarto={key} 
                startLight={globalLights} 
              />
            )
          })}
        </div>
      </main>

      <style jsx>{`
      .container {
        min-height: 100vh;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
      }
      
      main {
        border-top: 1rem;
        background: #FFFFFF;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: bottom;
        border-bottom: 1rem;
      }

      code {
        background: #783911;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        flex-wrap: wrap;
        max-width: 95vw;
        margin-top: 3rem;
        background: #FFFFFF;
      }

      button {
        background-color: #B48D8D;
        font-size: 50px;
        float: left;
        border-radius: 20px;
        color: #FFFFFF;
        padding: 2rem;
        font-family: Segoe UI;
        font-weight: bold;
        transition: color 0.15s ease, border-color 0.15s ease;
        outline: none;
      }
      button:active {
        color: #3C36A4;
        border-color: #FFFFFF;
      }
      
      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  ) 
}
