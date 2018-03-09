export default function playerReducer(state = [], action) {
  debugger
  switch(action.type) {
    case "REMOVE_PLAYER_SUCCESS":
    debugger
      var session = state.sessions.find(session => session.id == action.player.session.id)
      // need to slice out the specific player from session.players
      return session.players.concat(player)
    default:
      return state;
  }
}
