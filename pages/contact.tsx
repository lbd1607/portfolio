import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="lg:my-0 lg:flex lg:grid-flow-row lg:m-12 m-8 lg:justify-center lg:mt-64 lg:mb-64"
    >
      <div
        id="form-container"
        className="bg-primary-medium lg:w-1/2 lg:min-h-[40rem] p-10 rounded-lg"
      >
        <p className="text-coolwhite text-lg p-5 mb-10">
          If you like my work and you think that I&apos;d be a good fit for your
          team, send me a message!
        </p>
        <form>
          <label className="block p-5">
            <span className="block text-lg text-coolwhite pb-2">Name</span>
            <input
              type="name"
              className="peer bg-primary-light text-coolwhite p-2 rounded-sm focus:focus-visible:outline-none focus:focus-visible:ring-2 focus:focus-visible:ring-accent w-full"
              required
              maxLength={250}
            />
            <ValidationIcons />
          </label>

          <label className="block p-5">
            <span className="block text-lg text-coolwhite pb-2">
              Email address
            </span>
            <input
              type="email"
              className="peer bg-primary-light text-coolwhite p-2 rounded-sm focus:focus-visible:outline-none focus:focus-visible:ring-2 focus:focus-visible:ring-accent w-full"
              required
              maxLength={250}
            />

            <ValidationIcons />
          </label>

          <label className="block p-5">
            <span className="block text-lg text-coolwhite pb-2">
              Your company
            </span>
            <input
              type="text"
              className="peer bg-primary-light text-coolwhite p-2 rounded-sm focus:focus-visible:outline-none focus:focus-visible:ring-2 focus:focus-visible:ring-accent w-full"
              required
              maxLength={250}
            />
            <ValidationIcons />
          </label>

          <label className="p-5 block">
            <span className="block text-lg text-coolwhite pb-2">Message</span>
            <textarea
              className={
                "peer bg-primary-light text-coolwhite p-2 rounded-sm focus:focus-visible:outline-none focus:focus-visible:ring-2 focus:focus-visible:ring-accent w-full"
              }
              required
              maxLength={1000}
            />

            <ValidationIcons />
          </label>
          <div className="grid grid-rows-2 p-5">
            <button
              type="submit"
              className="h-10 bg-accent hover:bg-accentdark w-20 rounded-sm "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

const ValidationIcons = () => {
  return (
    <>
      <FontAwesomeIcon
        icon="asterisk"
        size="xs"
        className="invisible peer-invalid:visible peer-invalid:text-orange-600 absolute lg:-translate-x-[51rem] lg:-translate-y-7 -translate-x-72 -translate-y-6"
      />
      <FontAwesomeIcon
        icon="check"
        size="xs"
        className="invisible peer-valid:visible  peer-valid:text-green-500 absolute lg:-translate-x-[51rem] lg:-translate-y-7 -translate-x-72 -translate-y-6"
      />
    </>
  );
};
