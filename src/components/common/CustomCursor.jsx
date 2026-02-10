import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const dot = document.getElementById("cursor-dot");

    const move = (e) => {
      if (cursor && dot) {
        cursor.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
        dot.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-dot"></div>
    </>
  );
};

export default CustomCursor;
