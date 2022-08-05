import React from 'react'

export const Home = ({ startGame }) => {
  return (
    <div>Bienvenido
        <button onClick={startGame}>Iniciar Juego</button>
    </div>
  )
}
