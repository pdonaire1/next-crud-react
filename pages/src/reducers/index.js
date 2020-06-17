const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      console.log(action)
      return { ...state, list: action.data, loading: false }
    default:
      return state;
   }
};
export default reducer;