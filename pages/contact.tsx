import React from "react";
import Form from "./components/Form";

function Contact() {
  return (
    <div
      id="contact"
      className="lg:my-0 lg:flex lg:grid-flow-row lg:m-12 m-4 lg:justify-center lg:mt-64 lg:mb-36"
    >
      <div
        id="form-container"
        className="bg-primary-medium lg:w-1/2 lg:min-h-[40rem] p-10 rounded-lg"
      >
        <p className="text-coolwhite text-lg p-5 mb-10">
          If you like my work and you think that I&apos;d be a good fit for your
          team, send me a message!
        </p>
        <Form>
          <Form.TextField
            elementType="input"
            fieldLabel="Name"
            fieldName="name"
            type="text"
            isRequired={true}
            maxLength={250}
          />
          <Form.TextField
            elementType="input"
            fieldLabel="Email address"
            fieldName="email"
            type="email"
            isRequired={true}
            maxLength={250}
          />
          <Form.TextField
            elementType="input"
            fieldLabel="Your company"
            fieldName="company"
            type="text"
            isRequired={true}
            maxLength={250}
          />
          <Form.TextField
            elementType="textarea"
            fieldLabel="Message"
            fieldName="message"
            isRequired={true}
            maxLength={1000}
          />
          <Form.Button type="submit" label="Send" />
        </Form>
      </div>
    </div>
  );
}

export default Contact;
