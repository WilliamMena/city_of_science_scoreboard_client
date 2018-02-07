import React from 'react';
import PlayerScore from './PlayerScore.js'


const Session = (sessions) =>
  <div>
    {sessions.data.map((session, index) =>
      <div key={index}>
        <h2>Game {session.id}</h2>
        <ul>
          {session.players.map((player, index) =>
            <PlayerScore key={index} player={player} />
          )}
        </ul>
      </div>
    )}
  </div>

export default Session;
