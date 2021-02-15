import React, { useState, useEffect, useMemo, useContext } from 'react'
import Image from 'next/image'

export default function Card ({srcQuarto, idQuarto, startLight}) {  
  
  const [light, setLight] = useState('')

  const handleClick = () => { 
    setLight(light === 'escuro' ? 'claro' : 'escuro')
  }

  useEffect(() => {
    if(process.browser){
      console.log(startLight)
      setLight(startLight)
    }
  }, [startLight])

  return (
    <div>
      <div id="parent" onClick={handleClick}>
        <div className="card" >
          <Image
            src={srcQuarto}
            alt="quarto"
            id={idQuarto}
            className="card"
            width="500vw"
            height="300vh"
            />
        </div>
        <div className="luz"> 
          <Image
            src={`/iluminacao/${light}.png`}
            alt="iluminacao"
            className="card"
            alt="luz"
            width="500vw"
            height="301vh"
          />
        </div>
      </div>  

      <style jsx>{` 
        #parent {
          position: relative;
          
        } 
        
        .card {
          margin: 1rem;
          
          flex: 2 auto;
          flex-basis: 30%;
          
          padding: 1.5rem;
          text-decoration: none;
          border: 1px solid #99420A;
          border-radius: 20px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background: #6447AB;
          z-index: 10;
        }
        
        .luz{
          position: absolute;
          top: -15px;
          flex: 2 auto;
          margin: 1rem;
          flex-basis: 30%;
         
          
          padding: 1.5rem;
          z-index: 0;
          
          transition: color 0.15s ease, border-color 0.15s ease;
        }
       
        card img {
          
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