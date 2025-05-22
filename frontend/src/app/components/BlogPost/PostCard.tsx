import React from 'react';

const PostCard = ({ title, body, tags, reactions, views }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 max-w-xl mx-auto border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{body}</p>
      
      <p className="text-sm text-gray-500 mb-4">
        <strong>Tags:</strong> {tags.join(', ')}
      </p>
      
      <div className="flex items-center gap-4 text-gray-700 font-medium text-sm">
        <span>👍 {reactions.likes}</span>
        <span>👎 {reactions.dislikes}</span>
        <span>👁️ {views}</span>
      </div>
    </div>
  );
};

export default PostCard;
