export default function Reducers(state, action) {
  switch (action.type) {
    case "SET_USER":
      const { user } = action.payload;
      return { ...state, user };

    default:
      return { state };
  }
}
