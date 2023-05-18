"use client";

import Container from "@/components/Container";
import TooBig from "@/components/TooBig";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const handleScrollTop = () => {
    ref.current.scrollToTop();
  };
  const handleScrollBottom = () => {
    ref.current.scrollToBottom();
  };
  return (
    <div className="flex h-full">
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
  );
}
