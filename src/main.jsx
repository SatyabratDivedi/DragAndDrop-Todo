import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import CreatePosts from "./conponant/CreatePosts.jsx";
import DeletedPosts from "./conponant/DeletedPosts.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Card from './conponant/Card';
import UpdatePost from "./conponant/UpdatePost.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "/Create-Posts",
        element: <CreatePosts />,
      },
      {
        path: "/Deleted-Posts",
        element: <DeletedPosts />,
      },
      {
        path: "/UpdatePost/:id",
        element: <UpdatePost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
