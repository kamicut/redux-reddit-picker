function rootReducer (state, action) {
  switch (action.type) {
    case 'SELECT_REDDIT':
      return Object.assign({}, state, {
        selectedReddit: action.selectedReddit
    });
    case 'SET_STATE':
      return Object.assign({}, state, action.initialState);
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        posts: action.posts
    });
    default:
      return state;
  }
}
export default rootReducer;
