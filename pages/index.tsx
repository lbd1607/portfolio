import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-scroll bg-primary-dark">
      <Head>
        <title>Laura Davis - Sofware Dev</title>
        <meta name="description" content="Laura Davis - Software Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
