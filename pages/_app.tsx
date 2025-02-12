import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAsterisk,
  faBars,
  faCheck,
  faChevronLeft,
  faCircle,
  faCirclePlay,
  faGlobe,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import type { AppProps } from "next/app";
import "../styles/globals.css";

library.add(
  faMedium,
  faGithub,
  faLinkedin,
  faChevronLeft,
  faBars,
  faCirclePlay,
  faGlobe,
  faAsterisk,
  faCheck,
  faCircle,
  faTimesCircle
);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
