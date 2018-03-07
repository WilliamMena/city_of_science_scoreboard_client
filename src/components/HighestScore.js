const HighestScore = (allScores) => {

  var playersInOrderByScore = allScores.players.sort((a, b) => b.score - a.score)

  //
  // var highestPlayer = {
  //   if (Array.isArray(playersInOrderByScore) && playersInOrderByScore.length) {
  //     `${playersInOrderByScore[0].name}`
  //   } else {
  //     "No one"
  //   }
  // }

  // I can transfer the scores to an array. Pass that into the Math.max() but that wouldn't neccesarily tell me the place of the player or even who the player is. It'll just tell em the highest score. Possible solution but only partially what I want.

  // Sorting the array and displaying the highest or the first score in that array can partially work due to the face that it shows me the actual highest score but the only problem with this is that I have to make sure to create a function that will also check the next few players to keep them in the score. But this will work with the ranking system, the actual scoreboard.

  if (playersInOrderByScore.length) {
    return `${playersInOrderByScore[0].name} had the highest score of ${playersInOrderByScore[0].score}`
  } else {
    return "Hello"
  }
}

export default HighestScore;
