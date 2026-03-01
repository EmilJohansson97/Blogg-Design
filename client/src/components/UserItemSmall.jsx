import { Link } from "react-router-dom";
function UserItemSmall({ user }) {
  return (
    <>
      <Link to={`/users/${user.id}/posts`}>
        <h3>{user.username}</h3>
      </Link>
    </>
  );
}

export default UserItemSmall;
