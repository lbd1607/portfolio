import React, { useContext } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Tooltip from "./Tooltip";
import { HomepageContext } from "..";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  desktopScreenshot?: string;
  mobileScreenshot?: string;
  website: string;
  repoLink?: string;
  videoSrc: string;
};

const ProjectCard = ({
  id,
  title,
  description,
  desktopScreenshot,
  mobileScreenshot,
  website,
  repoLink,
  videoSrc,
}: ProjectCardProps) => {
  const { setIsVideoOpen, setVideoSrc } = useContext(HomepageContext);

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
    setVideoSrc(videoSrc);
  };

  return (
    <div className="container w-[22rem] my-16 lg:pt-52" id={id}>
      <div
        id="card-header"
        className="h-[3rem] bg-accent rounded-t-lg flex items-center p-4 font-semibold uppercase text-lg"
      >
        {title}
      </div>

      <div id="card-main">
        <div
          id="card-screenshot"
          className="bg-primary-light h-[15rem] p-4 flex items-center"
        >
          <div className={mobileScreenshot && "pr-2"}>
            {desktopScreenshot && (
              <Image
                src={desktopScreenshot}
                alt="Desktop screenshot"
                width={320}
                height={180}
              />
            )}
          </div>

          <div>
            {mobileScreenshot && (
              <Image
                src={mobileScreenshot}
                alt="Mobile screenshot"
                width={67}
                height={180}
              />
            )}
          </div>
        </div>
        <div
          id="card-description"
          className="h-[18rem] bg-primary-medium p-4 rounded-b-lg"
        >
          <div id="icons" className="py-5 flex">
            <div>
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <Tooltip message="Go to the live demo">
                  <FontAwesomeIcon
                    icon="globe"
                    size="2x"
                    className="text-accent hover:text-accentdark pr-4"
                  />
                </Tooltip>
              </a>
            </div>
            <div>
              <button className="cursor-pointer" onClick={handleOpenVideo}>
                {" "}
                <Tooltip message="Watch a video demo">
                  <FontAwesomeIcon
                    icon="play-circle"
                    size="2x"
                    className="text-accent hover:text-accentdark pr-4"
                  />
                </Tooltip>
              </button>
            </div>
            <div>
              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <Tooltip message="Check out the code">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      size="2x"
                      className="text-accent hover:text-accentdark pr-4"
                    />
                  </Tooltip>
                </a>
              )}
            </div>
          </div>

          <p className="text-lg text-coolwhite">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
