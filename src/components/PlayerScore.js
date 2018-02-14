import React from 'react'

const PlayerScore = (props) => {
  return(
    <tr>
      <td>1</td>
      <td>{props.player.name}</td>
      <td>{props.player.score}</td>
    </tr>
  )
}


export default PlayerScore;
