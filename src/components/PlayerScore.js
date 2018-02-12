import React from 'react'

const PlayerScore = (props) =>
  <li>
    {props.player.name} scored {props.player.score}!
  </li>

export default PlayerScore;
