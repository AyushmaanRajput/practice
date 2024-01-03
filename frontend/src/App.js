import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import AllRoutes from "./routes/AllRoutes";

export default function App() {
  return (
    <div className="overflow-x-hidden min-h-screen App">
      {/* <Navbar /> */}
      <AllRoutes />
    </div>
  );
}
