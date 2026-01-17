import { memo } from "react";

type postData={
    id:string,
    title:string
}
function highlightText(text:string, query:string) {
  if (!query) return text;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  console.log(lowerText,"=>",lowerQuery)

  const index = lowerText.indexOf(lowerQuery);

  // agar match hi nahi mila
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <mark>{text.slice(index, index + query.length)}</mark>
      {text.slice(index + query.length)}
    </>
  );
}


const PostList = memo(function PostList({ posts, query }:{posts:postData[],query:string}) {
  console.log("PostList rendered");

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {highlightText(post.title, query)}
        </li>
      ))}
    </ul>
  );
});

export default PostList;
