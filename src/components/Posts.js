import React from 'react';

const Posts = ({posts}) => (
  <ul>
    {posts.map(
      (post, i) =>
      <li key={i}>
        {post.title + ' | '}
        <a target='_blank' href={'http://reddit.com' + post.permalink}>Comments</a><em> - </em>
        <a target='_blank' href={post.url}>URL</a>
      </li>
      )
    }
  </ul>
);
export default Posts;
