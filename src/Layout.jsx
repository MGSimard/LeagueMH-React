import { Outlet } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";

// Doing this to have static header and footer across pages
// Can't put Header and Footer around routes in Appjs
// Because I opted for having a separate routes file
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
