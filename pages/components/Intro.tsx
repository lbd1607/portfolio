import React from "react";

const Intro = () => {
  return (
    <div className="grid lg:mt-80 lg:mx-64 mt-36 mx-8">
      <h1 className="text-accent lg:text-6xl text-4xl font-bold pb-8">
        Hi! I&apos;m Laura
      </h1>
      <div className="text-coolwhite w-44 lg:w-[27rem] text-lg">
        <p className="mb-5">
          I&apos;m an intermediate-level software developer. Although I work
          primarily on the frontend, I also have backend skills.{" "}
        </p>
        <p className="mb-5">
          I currently work in React, TypeScript, GraphQL, and Relay. I&apos;m
          also skilled in a variety of CSS frameworks like Tailwind, Styled
          Components, and Bootstrap.
        </p>{" "}
        <p className="mb-5">
          For personal projects like this one, I use either Next or Blitz.
        </p>
      </div>
    </div>
  );
};

export default Intro;
