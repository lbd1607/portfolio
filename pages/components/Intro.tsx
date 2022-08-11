import React from "react";

const Intro = () => {
  return (
    <div className="grid lg:mt-80 lg:mx-64 mt-36 mx-8">
      <h1 className="text-accent lg:text-6xl text-4xl font-bold pb-8">
        Hi! I&apos;m Laura
      </h1>
      <div className="text-coolwhite w-44 lg:w-[27rem] text-lg">
        <p className="mb-5">
          I am a software developer with a history of producing maintainable,
          reusable code on time. While I&apos;ve focused primarily in front end
          development, I have also developed my full stack skills outside of
          work.
        </p>
        <p className="mb-5">
          I&apos;m skilled in React, NextJS, Typescript, GraphQL, and Relay.
          I&apos;m also skilled in a variety of CSS frameworks like Tailwind,
          Styled Components, and Bootstrap, and I have experience with UI/UX and
          accessibility design.
        </p>
      </div>
    </div>
  );
};

export default Intro;
