import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faChevronLeft,
  faCirclePlay,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedin, faChevronLeft, faBars, faCirclePlay, faGlobe);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
