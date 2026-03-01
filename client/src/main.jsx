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
    <CssBaseline />
    <RouterProvider router={router} />
  </StrictMode>,
);
