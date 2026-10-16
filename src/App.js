import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import Cursor from "./components/cursor/Cursor";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Cursor />
      <ScrollToTop />
      <AllRoutes />
    </>
  );
};

export default App;
