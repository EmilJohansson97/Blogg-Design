import { Link } from "react-router-dom";
import Tag from "./Tag.jsx";

function PostItemSmall({ post }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>
        Skrivet av:{" "}
        <Link to={`/users/${post.author.id}/posts`}>
          {post.author.username}
        </Link>
      </p>
      {post.tags.length > 0 &&
        post.tags.map((tag) => <Tag key={tag} text={tag} />)}
      <p>{post.body}</p>
    </>
  );
}

export default PostItemSmall;
