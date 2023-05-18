"use client";

import Container, { scrollingHandle } from "@/components/Container";

import TooBig from "@/components/TooBig";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<scrollingHandle>(null);

  const handleScrollTop = () => {
    if (ref.current) ref.current.scrollToTop();
  };
  const handleScrollBottom = () => {
    if (ref.current) ref.current.scrollToBottom();
  };
  return (
    <div className="flex h-full">
      <div className="m-auto border border-red-400 w-[400px] h-[300px] flex flex-col">
        <div className="m-auto">
          <button
            className="border border-blue-400 rounded-md text-[20px] p-1 block mx-auto mb-2"
            onClick={handleScrollTop}
          >
            scroll to top
          </button>
          <Container ref={ref}>
            <TooBig />
          </Container>
          <button
            className="border border-blue-400 rounded-md text-[20px] p-1 block mx-auto mt-2"
            onClick={handleScrollBottom}
          >
            scroll to bottom
          </button>
        </div>
      </div>
    </div>
  );
}
