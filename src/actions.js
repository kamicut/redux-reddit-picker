import 'whatwg-fetch';

function requestPosts (reddit) {
  return {
    type: 'REQUEST_POSTS',
    reddit
  };
}

function receivePosts (reddit, json) {
  console.log(json);
  return {
    type: 'RECEIVE_POSTS',
    reddit,
    posts: json.data.children.map(child => child.data)
  };
}

export function fetchPosts (reddit) {
  return dispatch => {
    dispatch(requestPosts(reddit));
    return fetch(`http://www.reddit.com/r/${reddit}.json`)
    .then(req => req.json())
    .then(json => dispatch(receivePosts(reddit, json)));
  };
}

