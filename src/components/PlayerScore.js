import React from 'react'

const PlayerScore = (props) => {
  return(
    <tr id={`rank_${props.index+1}`}>
      <td>{props.index+1}</td>
      <td>{props.player.name.toUpperCase()}</td>
      <td>{props.player.score}</td>
    </tr>
  )
}


export default PlayerScore;
