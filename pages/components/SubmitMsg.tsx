import React from "react";

type SubmitMsgProps = {
  submitStatus?: string;
  senderName?: string;
};

const SubmitMsg = ({ submitStatus, senderName }: SubmitMsgProps) => {
  return (
    <div className="text-bonewhite">
      {submitStatus &&
        (submitStatus.startsWith("2") ? (
          <EmailSent senderName={senderName} />
        ) : submitStatus.startsWith("4") ? (
          <EmailBlocked />
        ) : submitStatus.startsWith("5") ? (
          <InternalError />
        ) : (
          <UnknownError />
        ))}
    </div>
  );
};

const EmailSent = ({ senderName }: SubmitMsgProps) => {
  return (
    <SubmitMsgComponent
      message={
        senderName
          ? `Thanks for your interest ${senderName}! I'll be in touch soon.`
          : `Thanks for your interest! I'll be in touch soon.`
      }
      className="text-green-500"
    />
  );
};

const EmailBlocked = () => {
  return (
    <SubmitMsgComponent
      message="Sorry, something went wrong. Please try again."
      className="text-orange-500"
    />
  );
};

const InternalError = () => {
  return (
    <SubmitMsgComponent
      message="Oops! Looks like we're having issues. Please try again later."
      className="text-pink-500"
    />
  );
};

const UnknownError = () => {
  return (
    <SubmitMsgComponent
      message="Sorry, an unknown error occurred. Please try again later."
      className="text-pink-500"
    />
  );
};

type SubmitMsgComponentProps = {
  message: string;
  className: string;
};

const SubmitMsgComponent = ({
  message,
  className,
}: SubmitMsgComponentProps) => {
  return (
    <div className="pt-0 px-5 pb-6 text-lg rounded-md">
      <div
        className={
          className
            ? "text-lg rounded-sm tracking-wider " + className
            : "text-lg rounded-sm tracking-wider"
        }
      >
        {message}
      </div>
    </div>
  );
};

export default SubmitMsg;
