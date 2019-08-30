import messages from "../constants";

const loadImages = () => ({
  type: messages.LOAD
});

const setImages = images => ({
  type: messages.LOAD_SUCCESS,
  payload: images
});

const setError = error => ({
  type: messages.LOAD_FAIL,
  payload: error
});

export { loadImages, setImages, setError };
