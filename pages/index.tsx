import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Contact from "./contact";
import Projects from "./projects";
import Intro from "./components/Intro";

const Home: NextPage = () => {
  return (
    <div className="bg-primary-dark flex flex-col ">
      <Head>
        <title>Laura Davis - Sofware Dev</title>
        <meta name="description" content="Laura Davis - Software Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-heromobile bg-no-repeat lg:bg-hero lg:bg-contain bg-contain bg-right">
        <Navbar />
        <Intro />
      </div>

      <Projects />
      <Contact />
      <div className="text-coolwhite text-sm opacity-25 hover:opacity-80 text-right pr-2">
        Background photo by{" "}
        <a href="https://unsplash.com/@andreiamza2000" className="underline">
          Amza Andrei
        </a>{" "}
        on Unsplash
      </div>
    </div>
  );
};

export default Home;
