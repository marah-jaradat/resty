const initialState = {
  history: [],
};

export default function historyReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_HISTORY_REDUCER":
      const count = state.history.count + 1;
      const history = [...state.history, payload];
      return { history, count };
    default:
      return state;
  }
}

export const addAction = (action) => {
  return {
    type: "SET_HISTORY_REDUCER",
    payload: action,
  };
};
