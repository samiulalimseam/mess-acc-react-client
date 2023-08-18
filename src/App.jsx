import { RouterProvider } from "react-router";
import Home from "./pages";
import { router } from "./Routers/Routes";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Home></Home>
    </div>
  );
}

export default App;
