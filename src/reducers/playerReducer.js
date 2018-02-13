export default function playerReducer(state = [], action) {
  switch(action.type) {
    case "CREATE_PLAYER_SUCCESS":
      var session = state.sessions.find(session => session.id == action.player.session.id)
      return session.players.concat(player)

    default:
      return state;
  }
}
