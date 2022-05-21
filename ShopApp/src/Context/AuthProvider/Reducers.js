export default function Reducers(state, action) {
  switch (action.type) {
    case "SET_USER":
      const { user } = action.payload;
      return { ...state, user };
    case "SET_MESSAGE":
      const { message } = action.payload;
      return { message };
    default:
      return { state };
  }
}
