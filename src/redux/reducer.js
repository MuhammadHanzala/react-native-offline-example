import { ToastAndroid } from 'react-native';
const initialState = {
  users: {}
};
export default (state = initialState, action) => {
  console.log('userland', action, state);
  switch (action.type) {
    case 'FOLLOW_USER_REQUEST':
      return {
        ...state,
        users: { ...state.users, [action.payload.userId]: true, error: null }
      };
    case 'FOLLOW_USER_ROLLBACK':
      ToastAndroid.show(action.payload.message, 3000);
      return {
        ...state,
        users: { ...state.users, [action.meta.userId]: false, error: action.payload }
      };
    case 'UNFOLLOW_USER_REQUEST':
      return {
        ...state,
        users: { ...state.users, [action.payload.userId]: false, error: null }
      };
    case 'UNFOLLOW_USER_ROLLBACK':
      ToastAndroid.show(action.payload.message, 3000);
      return {
        ...state,
        users: { ...state.users, [action.meta.userId]: true, error: action.payload }
      };
    default:
      return state;
  }
};
