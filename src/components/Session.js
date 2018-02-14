import React from 'react';
import PlayerScore from './PlayerScore.js'
import { Link } from 'react-router-dom'

const fullDate = (data) => {
  const date = Date.parse(data)
  const fullDate = new Date(date)
  return(`Created on: ${fullDate}`)
}

const whatToDisplay = (sessions) => {
  if (sessions.data[0]) {
    return(
      <div>
        {sessions.data.map((session, index) =>
          <div key={index}>
            <h2>
              <Link to={`/sessions/${session.id}`}>Game {session.id}</ Link>
            </h2>
            <sub>
              {fullDate(session.created_at).slice(0,36)}
            </sub>

            <h4>This will change! Will adjust to only show the highest scoring.</h4>


            {session.players.map((player, index) =>
              <PlayerScore key={index} player={player} />
            )}
          </div>
        )}
      </div>
    )
  } else {
    return "Loading"
  }
}

const Session = (sessions) =>
  <div>
    {whatToDisplay(sessions)}
  </div>

export default Session;
