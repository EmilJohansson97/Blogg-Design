import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PostEdit from "./views/PostEdit.jsx";
import Posts from "./views/Posts.jsx";
import PostDetail from "./views/PostDetail.jsx";
import Home from "./views/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, deepPurple, grey, red, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f3f3f3",
      paper: grey[50],
    },
    primary: {
      main: deepPurple[300],
    },
    secondary: {
      main: blueGrey[500],
    },
    success: {
      main: teal[700],
    },
    error: {
      main: red[700],
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts/:id/edit",
        element: <PostEdit />,
      },
      {
        path: "/posts/:id",
        element: <PostDetail />,
      },
      {
        path: "/posts/new",
        element: <PostEdit />,
      },
      {
        path: "/users/:id/posts",
        element: <Posts />,
      },
      {
        path: "/tags/:tag/posts",
        element: <Posts />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
