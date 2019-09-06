import React from 'react';

function PlayerCard({ soccer }) {
  return (
    <div className="soccerTeam">
      <h1>{soccer.name}</h1>
      <h4>{soccer.country}</h4>
    </div>
  );
}

export default PlayerCard;
