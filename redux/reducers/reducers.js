import * as constants from '../constants';

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
      case constants.GET_LIST:
        return { ...state, loading: true };
  
      case constants.GET_LIST_SUCCESS:
        return { ...state, list: action.data, loading: false };
  
      case constants.SEND_POST:
        return { ...state, loading: true };
  
      case constants.SEND_POST_SUCCESS:
        const { id, title, body } = action.data;
        let { list } = state;
        list.unshift({ id, title, body });
        return { ...state, list, loading: false };
  
      case constants.EDIT_POST:
        return { ...state, form: action.data };
  
      case constants.EDIT_POST_REQUEST:
        return { ...state, form: action.data, loading: true };
      
      case constants.EDIT_POST_SUCCESS:
        let newList = state.list;
        const index = state.list.findIndex(post => post.id === state.form.id);
        newList[index] = state.form;
        return { ...state, list: newList, form: initialState.form, loading: false };
  
      case constants.DELETE_POST:
        return { ...state, loading: true };
  
      case constants.DELETE_POST_SUCCESS:
        return { ...state, list: state.list.filter(post => post.id != action.id), loading: false };
      default:
        return state;
     }
  };
  export default reducer;