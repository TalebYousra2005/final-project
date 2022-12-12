import React from "react";
import { About } from "../components/about/About";
// import { ChatForm } from "../components/chat";
import { Hero } from "../components/hero/Hero";
import { HomeLayout } from "../components/layouts/home";
const HomePage = () => {
  return (
    <HomeLayout>
      <Hero />
      <About />
      {/* <ChatForm/> */}
    </HomeLayout>
  );
};

export default HomePage;
