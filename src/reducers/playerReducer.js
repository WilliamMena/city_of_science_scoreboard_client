export default function playerReducer(state = [], action) {
  switch(action.type) {
    case "CREATE_PLAYER_SUCCESS":
      debugger
      return action.sessions

    default:
      return state;
  }
}
