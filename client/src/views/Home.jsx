import PostList from "../components/PostList";
import UserList from "../components/UserList";
import TagList from "../components/TagList";
import { Grid, Paper, Typography } from "@mui/material";
function Home() {
  return (
    <>
      <Grid container spacing={8}>
        <Grid component="section" item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2, mt: 4, borderRadius: 2 }}>
            <Typography variant="h2">Senaste inläggen</Typography>
            <PostList />
          </Paper>
        </Grid>
        <Grid component="section" item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, mt: 4, borderRadius: 2 }}>
            <Typography variant="h2">Användare</Typography>
            <UserList />
          </Paper>
          <Paper elevation={3} sx={{ p: 2, mt: 4, borderRadius: 2 }}>
            <Typography variant="h2">Taggar</Typography>
            <TagList />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
