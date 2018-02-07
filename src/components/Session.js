import React from 'react';



const Session = (sessions) =>
  <div>
    {console.log(sessions.data)}
    {sessions.data.map((session, index) =>
      <div key={index}>
        Game {session.id}
        <ul>
          <br />
          {session.players.map((player, index) =>
            <li>
              {player.name} scored {player.score} points!
            </li>
          )}
          <br />
        </ul>
      </div>
    )}
  </div>

export default Session;
