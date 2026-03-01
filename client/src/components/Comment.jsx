function Comment({ comment }) {
  return (
    <>
      <h4>{comment.title}</h4>
      <p>Skrivet den: {comment.createdAt}</p>
      <p>Skrivet av: {comment.author}</p>
      <p>{comment.body}</p>
    </>
  );
}

export default Comment;
