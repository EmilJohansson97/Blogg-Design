import { Link, useNavigate } from "react-router-dom";
import Tag from "./Tag.jsx";
import UserItemSmall from "./UserItemSmall.jsx";
import { toRelativeDateString, truncate } from "../common/formatHelpers.js";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import placeHolderImage from "../assets/placeholder.png";
import { Box, minWidth } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function PostItemSmall({ post }) {
  const navigate = useNavigate();
  return (
    <>
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardHeader
          title={
            <Typography variant="h3">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </Typography>
          }
          subheader={`Skrivet: ${toRelativeDateString(post.createdAt)}`}
          avatar={
            <UserItemSmall style={{ minWidth: "7rem" }} user={post.author} />
          }
        />
        <CardMedia
          component="img"
          height="300"
          image={post.imageUrl || placeHolderImage}
          alt={`Bild till ${post.title}`}
        />
        <CardContent>
          <Box mb={2}>
            {post.tags.length > 0 &&
              post.tags.map((tag) => <Tag key={tag} text={tag} />)}
            <Typography variant="body2">{truncate(post.body, 500)}</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => navigate(`/posts/${post.id}`)}
            endIcon={<ChevronRightIcon />}
          >
            Läs mer
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default PostItemSmall;
