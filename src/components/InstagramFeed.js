"use client";
import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="mx-auto my-10 w-full max-w-6xl px-4">
        <div
          className="elfsight-app-f82ddfcb-3be7-48de-b002-be7ac38b28f9"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default InstagramFeed;
