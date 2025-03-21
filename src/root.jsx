import { Outlet } from "react-router-dom";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
