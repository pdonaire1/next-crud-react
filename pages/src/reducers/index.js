const initialState = {
  list: [],
  form: {
    id: "",
    title: "",
    body: ""
  }
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };

    case 'GET_LIST_SUCCESS':
      console.log(action)
      return { ...state, list: action.data, loading: false };

    case 'SEND_POST':
      return { ...state, loading: true };

    case 'SEND_POST_SUCCESS':
      const { id, title, body } = action.data;
      let { list } = state;
      list.unshift({ id, title, body });
      return { ...state, list, loading: false };

    case 'EDIT_POST':
      return { ...state, form: action.data };

    case 'EDIT_POST_REQUEST':
      return { ...state, form: action.data, loading: true };
    
    case 'EDIT_POST_SUCCESS':
      let newList = state.list;
      const index = state.list.findIndex(post => post.id === state.form.id);
      newList[index] = state.form;
      return { ...state, list: newList, form: initialState.form, loading: false };

    case 'DELETE_POST':
      return { ...state, loading: true };

    case 'DELETE_POST_SUCCESS':
      return { ...state, list: state.list.filter(post => post.id != action.id), loading: false };
    default:
      return state;
   }
};
export default reducer;