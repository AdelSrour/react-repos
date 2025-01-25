import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../contexts/AuthContext";

export default function Layout() {
  return (
    <div>
      <AuthContext>
        <Navbar />
        <Outlet />
        <Footer />
      </AuthContext>
    </div>
  );
}
