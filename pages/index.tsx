import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import Contact from "./contact";
import Projects from "./projects";

const Home: NextPage = () => {
  return (
    <div className="h-[calc(100vh - 10rem)] overflow-scroll bg-primary-dark flex flex-col flex-auto">
      <Head>
        <title>Laura Davis - Sofware Dev</title>
        <meta name="description" content="Laura Davis - Software Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen overflow-scroll bg-heromobile   bg-no-repeat lg:overflow-hidden lg:bg-hero lg:bg-right lg:bg-contain bg-contain bg-right-top">
        <Navbar />
      </div>
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
