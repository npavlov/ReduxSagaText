import messages from "../constants";

const imageReducer = (state = [], action) => {
  if (action.type === messages.LOAD_SUCCESS) {
    return [...state, ...action.payload];
  }
  return state;
};

export default imageReducer;
