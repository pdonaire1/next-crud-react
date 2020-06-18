const reducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };

    case 'GET_LIST_SUCCESS':
      console.log(action)
      return { ...state, list: action.data, loading: false };

    case 'SEND_POST':
      return { ...state, loading: true };

    case 'SEND_POST_SUCCESS':
      const { id, title, body } = action;
      let { list }  = state;
      list.unshift({ id, title, body });
      return { ...state, list, loading: false };

    case 'DELETE_POST':
      return { ...state, loading: true };

    case 'DELETE_POST_SUCCESS':
      return { ...state, list: state.list.filter(post => post.id != action.id), loading: false };
    default:
      return state;
   }
};
export default reducer;