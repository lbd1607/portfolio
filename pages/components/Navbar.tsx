import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav
      className={
        "mobile-navbar lg:navbar flex flex-wrap items-center justify-between bg-primary-medium p-3 lg:bg-transparent lg:p-10 text-coolwhite absolute"
      }
    >
      <div className="container flex flex-wrap items-center justify-between px-4">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none  outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={"bars"} size="sm" />
          </button>
        </div>

        <div
          className={
            "flex-grow items-center lg:flex" +
            (navbarOpen ? "block py-5" : " hidden")
          }
        >
          <h3 className="cursor-pointer items-center text-2xl lg:ml-0 lg:pb-0 ml-3 lg:border-none border-b-2 pb-3 border-accent">
            <Link href={"/"}>
              <div className="contents font-semibold">
                Laura Davis
                <span className="flex px-2"></span>
              </div>
            </Link>
          </h3>{" "}
          <ul
            className={
              "flex list-none flex-col  uppercase  lg:absolute  lg:right-0 lg:ml-auto lg:flex-row lg:px-16 mt-3 lg:mt-0"
            }
          >
            <li className="lg:px-2 py-1">
              <Link href={"#projects"}>Projects</Link>
            </li>{" "}
            <li className="lg:px-2 py-1">
              <Link href={"#contact"}>Contact</Link>
            </li>{" "}
            <li className=" py-1">
              <a
                href="https://github.com/lbd1607"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
              </a>
            </li>
            <li className=" py-1 ">
              <a
                href="https://www.linkedin.com/in/lauradavis-softwaredev/"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
