import React from 'react';

import postData from './PostData';
import PostCard from './PostCard';

const BlogPost = () => {
  return (
    <div>
      {postData.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          body={post.body}
          tags={post.tags}
          reactions={post.reactions}
          views={post.views}
        />
      ))}
    </div>
  );
};

export default BlogPost;
