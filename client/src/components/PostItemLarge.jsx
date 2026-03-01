import Tag from "./Tag";
import UserItemSmall from "./UserItemSmall";

function PostItemLarge({ post }) {
  return (
    <div
      style={{
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{post.title}</h3>
      {post.tags &&
        post.tags.map((tag) => <Tag key={`tag_${tag}`} text={tag} />)}
      <div>
        <p>{post.body}</p>
        <p>Skrivet av: </p>
        <UserItemSmall user={post.author} />
        <p>Skapad: {post.createdAt}</p>
      </div>
    </div>
  );
}

export default PostItemLarge;
