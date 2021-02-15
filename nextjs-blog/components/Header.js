import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      <header>
      </header>
      <style jsx>{`
          header {
            background-repeat: repeat;
            height: 50px;
            background-color: #FFFFFF;
            background-height: 100px;
            box-sizing: border-box;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: baseline;
          }
      `}</style>
    </div>
  )
}