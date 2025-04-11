import "./index.css";
import { RouterProvider } from "react-router-dom";
import AppRoute from "./route";

function App() {
  return (
    <div className="App font-dm">
      <RouterProvider router={AppRoute} />
    </div>
  );
}

export default App;
