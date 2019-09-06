import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import UserInput from './hooks/UserInput';

function SoccerPlayer({ players }) {
  const [playerFirstname, setPlayerFirstname] = UserInput('firstname', '');
  const [playerLastname, setPlayerLastname] = UserInput('lastname', '');

  const soccerPlayer = players.map(player => {
    return <PlayerCard soccer={player} key={player.id} />;
  });

  const formOnSubmitChange = e => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={formOnSubmitChange}>
        {/* Wires up the input fields and the state object with the onChange eventListener, that takes the value from the input field on every key stroke */}
        <input
          placeholder="Players Firstname"
          value={playerFirstname}
          onChange={e => setPlayerFirstname(e.target.value)}
        />
        <input
          data-testid="input"
          placeholder="Players Lastname"
          value={playerLastname}
          onChange={e => setPlayerLastname(e.target.value)}
        />
        <button>Click Here</button>
      </form>
      {soccerPlayer}
    </>
  );
}

export default SoccerPlayer;
