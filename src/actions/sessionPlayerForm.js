export const updatePlayerFormData = currentPlayerFormData => {
  return {
    type: "UPDATED_PLAYER",
    currentPlayerFormData
  }
}

export const resetFormData = () => {
  return {
    type: "RESET_FORM_DATA"
  }
}
