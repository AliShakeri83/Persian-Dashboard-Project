import Home from './components/Home/Home'
import Products from "./components/Products/Products";
import Comments from "./components/Comments/Comments";
import Users from "./components/Users/Users";
import Orders from "./components/Orders/Orders";
import Offs from "./components/Offs/Offs";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/comments", element: <Comments /> },
  { path: "/users", element: <Users /> },
  { path: "/orders", element: <Orders /> },
  { path: "/offs", element: <Offs /> },
];

export default routes