import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center    py-4 px-8 flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${require("./assets/aboutUsBg.jpg")})`,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
