import React from "react";
import { About } from "../components/about/About";
import { Hero } from "../components/hero/Hero";
import { HomeLayout } from "../components/layouts/home";
const HomePage = () => {
  return (
    <HomeLayout>
      <Hero />
      <About />
    </HomeLayout>
  );
};

export default HomePage;
