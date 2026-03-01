import PostItemSmall from "./PostItemSmall";
import { getAll } from "../services/PostService";
import { useEffect, useState } from "react";

function PostList({ pathname }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((posts) => {
      setPosts(posts);
    });
  }, [pathname]);
  return (
    <ul>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <li key={`posts_${post.id}`}>
            <PostItemSmall post={post} />
          </li>
        ))
      ) : (
        <h3>Kunde inte hitta några inlägg</h3>
      )}
    </ul>
  );
}

export default PostList;
