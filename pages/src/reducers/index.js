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
      let { list }  = state;
      list.unshift({id: Date.now(), title: "new", body: "newnew"});
      return { ...state, list, loading: false };

    default:
      return state;
   }
};
export default reducer;