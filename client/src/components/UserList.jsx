import UserItemSmall from "./UserItemSmall";
import { useEffect, useState } from "react";
import { getAll } from "../services/UserService";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAll().then((users) => setUsers(users));
  }, []);
  return (
    <ul>
      {users?.length > 0 ? (
        users.map((user) => (
          <li key={`users_${user.id}`}>
            <UserItemSmall user={user} />
          </li>
        ))
      ) : (
        <h3>Kunde inte hitta några användare</h3>
      )}
    </ul>
  );
}

export default UserList;
