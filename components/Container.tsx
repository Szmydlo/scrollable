"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

const Container = forwardRef(function Scrollable({ children }, ref) {
  const divRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToTop() {
          divRef.current.scrollTop = 0;
        },
        scrollToBottom() {
          divRef.current.scrollTop = divRef.current.scrollHeight;
        },
      };
    },
    []
  );

  return (
    <div className="m-auto border border-red-400 w-[400px] h-[300px] flex flex-col">
      <div className="m-auto">
        <div className="overflow-y-scroll h-[200px]" ref={divRef}>
          {children}
        </div>
      </div>
    </div>
  );
});

export default Container;
