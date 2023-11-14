import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
//import Preview from "../views/Preview";
import LightProfessionalAnimation from "../views/all-home-version/LightProfessionalAnimation";
import HomeLightProfessional2 from "../views/all-home-version/HomeLightProfessional2";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import HomeLightRtlAnimation from "../views/all-home-version/HomeLightRtlAnimation";
import HomeDarkParticles from "../views/all-home-version/HomeDarkParticles";
import NotFound from "../views/NotFound";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" />} />
        <Route path="/portfolio" element={<HomeDarkAnimation />} />
        <Route path="/home-light-animation" element={<HomeLightAnimation />} />
        <Route
          path="/home-light-rtl-animation"
          element={<HomeLightRtlAnimation />}
        />
        <Route path="/dark-particle-effect" element={<HomeDarkParticles />} />
        <Route
          path="/home-light-professional"
          element={<LightProfessionalAnimation />}
        />
        <Route
          path="/home-light-professional-2"
          element={<HomeLightProfessional2 />}
        />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;