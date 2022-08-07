import React, { useRef, ReactElement } from "react";
import { createPopper } from "@popperjs/core";
import { MutableRefObject } from "react";

const TooltipComponent = ({
  message,
  children,
}: {
  message: string;
  children: ReactElement;
}) => {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const btnRef = useRef() as MutableRefObject<any>;
  const tooltipRef = useRef() as MutableRefObject<any>;
  const openLeftTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: "top-start",
    });
    setTooltipShow(true);
  };
  const closeLeftTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <div>
      <div
        onMouseEnter={openLeftTooltip}
        onMouseLeave={closeLeftTooltip}
        ref={btnRef}
      >
        {children}
      </div>
      <div
        className={
          (tooltipShow ? "block" : "hidden ") +
          "border-0 mb-3 z-50 text-sm max-w-xs text-left no-underline break-words rounded-lg bg-primary-dark "
        }
        ref={tooltipRef}
      >
        <div>
          {message && <div className="text-coolwhite p-3 ">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default function Tooltip({
  children,
  message,
}: {
  children: ReactElement;
  message: string;
}) {
  return (
    <>
      <TooltipComponent message={message}>{children}</TooltipComponent>
    </>
  );
}
