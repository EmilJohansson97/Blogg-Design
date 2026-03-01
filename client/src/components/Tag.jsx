import { Chip } from "@mui/material";
import { Link } from "react-router-dom";

function Tag({ text }) {
  return (
    <Link to={`/tags/${text}/posts`}>
      <Chip label={text}></Chip>
    </Link>
  );
}

export default Tag;
