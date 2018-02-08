import React from 'react';
import PlayerScore from './PlayerScore.js'

const fullDate = (data) => {
  const date = Date.parse(data)
  const fullDate = new Date(date)
  return(`Created on: ${fullDate}`)
}

const Session = (sessions) =>
  <div>
    {sessions.data.map((session, index) =>
      <div key={index}>
        <ul>
        <h2>Game {session.id}</h2>
        <sub>{fullDate(session.created_at).slice(0,36)}</sub>
        {
          // {console.log(session)}
        }

          {session.players.map((player, index) =>
            <PlayerScore key={index} player={player} />
          )}
        </ul>
      </div>
    )}
  </div>

export default Session;
