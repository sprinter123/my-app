import {CREATE_USER, FETCH_USERS, DELETE_USER, CHECK_FAVORITE, POST_USERS} from "../constance";


const initialState = {
  users: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {...state, users: action.payload}
    case CREATE_USER:
      return {...state, users: [...state.users, action.payload]};
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case CHECK_FAVORITE:
      return {
        ...state, users: state.users.map((item) => {
          if (item.id === action.payload) {
            return {...item, favorite: !item.favorite}
          }
          return item;
        })
      }
    case POST_USERS:
      return {
        ...state, users: [...state.users, action.payload]
      }
    default:
      return state;
  }
};

export default reducers;
