import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
function UserItemSmall({ user }) {
  return (
    <>
      <Link to={`/users/${user.id}/posts`}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: ".7rem",
          }}
        >
          <Avatar alt={`Bild på ${user.username}`} src={user.imageUrl} />
          <Typography variant="h6" component="p">
            {user.username}
          </Typography>
        </Box>
      </Link>
    </>
  );
}

export default UserItemSmall;
