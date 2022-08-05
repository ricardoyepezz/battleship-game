import React from 'react';
import { NewShip } from './NewShip';

export const Ships = ({
  availableShips,
  selectShip,
  currentlyPlacing,
  startTurn,
  startAgain,
}) => {
  let shipsLeft = availableShips.map((ship) => ship.name);

// devuelve un NewShip con el nombre del barco por cada barco disponible
    let shipReplicaBoxes = shipsLeft.map((shipName) => (
    <NewShip
      selectShip={selectShip}
      key={shipName}
      isCurrentlyPlacing={currentlyPlacing && currentlyPlacing.name === shipName}
      shipName={shipName}
      availableShips={availableShips}
    />
  ));

  let fleet = (
    <div id="replica-fleet">
      {shipReplicaBoxes}
      <p className="player-tip">Click derecho para rotar nave</p>
      <button onClick={startAgain}>
        Reiniciar
      </button>
    </div>
  );

  let playButton = (
    <div id="play-ready">
      <p className="player-tip">Barcos listos!</p>
      <button id="play-button" onClick={startTurn}>
        Iniciar Juego!
      </button>
    </div>
  );

  return (
    <div id="available-ships">
      <div className="tip-box-title"> Tu flota </div>
      {availableShips.length > 0 ? fleet : playButton}
    </div>
  );
};
