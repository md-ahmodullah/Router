import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-300px)] py-12">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
