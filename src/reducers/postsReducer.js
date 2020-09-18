import types from "../actions/types";
const initialstate = { 
    posts : [] , 
    post :{}
}
export default (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return  {
          ...state  , 
          posts : action.payload 
      }
      case types.CREATE_POST:
        return  {
            ...state  , 
            post : action.payload 
        }
    default:
      return state;
  }
};
