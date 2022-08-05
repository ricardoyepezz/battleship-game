import React from 'react';

export const Display = ({
  hitsbyPlayer,
  hitsByComputer,
  startAgain,
  winner,
}) => {
  let numberOfSuccessfulHits = hitsbyPlayer.filter((hit) => hit.type === 'hit').length;
  let succesfulComputerHits = hitsByComputer.filter((hit) => hit.type === 'hit').length;

  let gameOverPanel = (
    <div>
      <div className="tip-box-title">El juego terminó!</div>
      <p className="player-tip">
        {winner === 'player' ? 'Ganaste 🎉' : 'Perdiste 😭'}
      </p>
      <p className="restart" onClick={startAgain}>
        ¿Jugar de Nuevo?
      </p>
    </div>
  );

  let tipsPanel = (
    <div>
        <button onClick={startAgain}>
          Reiniciar
        </button>
      </div>
    
  );

  return (
    <div id="player-tips">
      {numberOfSuccessfulHits === 17 || succesfulComputerHits === 17
        ? gameOverPanel
        : tipsPanel}
    </div>
  );
};
