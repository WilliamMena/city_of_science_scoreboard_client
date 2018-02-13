const initialState = {
  name: '',
  score: ''
}

export default function sessionPlayerForm(state = initialState, action) {
  switch(action.type) {
    case 'UPDATED_PLAYER':
      return action.currentPlayerFormData;
    case "RESET_FORM_DATA":
      return initialState;

    default:
      return state;
  }
}
