"use client";

import { ReactNode, forwardRef, useImperativeHandle, useRef } from "react";

export type scrollingHandle = {
  scrollToTop: () => void;
  scrollToBottom: () => void;
};

type Props = { children: ReactNode };

const Container = forwardRef<scrollingHandle, Props>(function Scrollable(
  { children },
  ref
) {
  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToTop() {
          if (divRef.current) divRef.current.scrollTop = 0;
        },
        scrollToBottom() {
          if (divRef.current)
            divRef.current.scrollTop = divRef.current.scrollHeight;
        },
      };
    },
    []
  );

  return (
    // <div className="m-auto border border-red-400 w-[400px] h-[300px] flex flex-col">
    //   <div className="m-auto">
    <div className="overflow-y-scroll h-[200px]" ref={divRef}>
      {children}
    </div>
    //   </div>
    // </div>
  );
});

export default Container;
