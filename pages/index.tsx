import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { animated, config, useTransition } from "react-spring";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Contact from "./contact";
import Projects from "./projects";

type HomepageContextTypes = {
  isVideoOpen: boolean;
  setIsVideoOpen: Dispatch<SetStateAction<boolean>>;
  videoSrc: string;
  setVideoSrc: Dispatch<SetStateAction<string>>;
};

const HomepageContextInitial: HomepageContextTypes = {
  isVideoOpen: false,
  setIsVideoOpen: () => {},
  videoSrc: "",
  setVideoSrc: () => {},
};

export const HomepageContext = createContext(HomepageContextInitial);

const Home: NextPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const createOpenVideo = useTransition(isVideoOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: "hidden" },
    config: config.gentle,
  });

  return (
    <div className="bg-primary-dark flex flex-col">
      <div className="hero-background absolute h-[100vh] w-full" />
      <Head>
        <title>Laura Davis - Software Dev</title>
        <meta name="description" content="Laura Davis - Software Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100vh] lg:bg-contain bg-no-repeat bg-hero bg-fixed lg:bg-right-top bg-center bg-cover z-10">
        <Navbar />
        <Intro />
      </div>
      <div className="lg:pr-2 lg:m-5 xl:pr-2 xl:m-5">
        <HomepageContext.Provider
          value={{
            isVideoOpen: isVideoOpen,
            setIsVideoOpen: setIsVideoOpen,
            videoSrc: videoSrc,
            setVideoSrc: setVideoSrc,
          }}
        >
          <Projects />
          <Contact />
        </HomepageContext.Provider>

        <p className="text-coolwhite text-sm opacity-25 hover:opacity-80 text-left ">
          Background photo by{" "}
          <a
            href="https://unsplash.com/@sapphodb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="underline"
          >
            Sappho Bakker
          </a>{" "}
          on Unsplash
        </p>
        {createOpenVideo(
          (styles, isVideoOpen) =>
            isVideoOpen && (
              <animated.div
                style={styles}
                className="absolute z-50 lg:top-[125%] xl:top-[125%] top-[92%] xl:w-[60%] xl:translate-x-1/3 xl:-translate-y-10"
              >
                <div className="lg:p-5 xl:p-5 p-2 grid justify-between">
                  <button
                    className="text-coolwhite text-right"
                    onClick={() => setIsVideoOpen(false)}
                  >
                    <FontAwesomeIcon
                      icon="times-circle"
                      size="lg"
                      className="my-3 cursor-pointer text-accent hover:text-accentdark"
                    />
                  </button>
                  <video
                    src={videoSrc}
                    controls={true}
                    className=""
                    autoPlay={true}
                  />
                </div>
              </animated.div>
            )
        )}
      </div>
    </div>
  );
};

export default Home;
