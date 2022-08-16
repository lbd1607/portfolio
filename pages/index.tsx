import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Contact from "./contact";
import Projects from "./projects";
import Intro from "./components/Intro";
import { useTransition, animated, config } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

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

  console.log(videoSrc, isVideoOpen); //TBI: Remove

  const createOpenVideo = useTransition(isVideoOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: "hidden" },
    config: config.gentle,
  });

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
          <a href="https://unsplash.com/@andreiamza2000" className="underline">
            Amza Andrei
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
