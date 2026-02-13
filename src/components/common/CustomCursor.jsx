import { useEffect, useRef } from "react";

const isTouchDevice = () => {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
  );
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isTouchDevice()) return; // don't activate on touch devices

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // hide the native cursor for the page while our custom cursor is active
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // show immediately (in case it was hidden by leave)
      cursor.style.opacity = "1";
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);

    // animation loop - cursor lags, dot follows exactly
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const animate = () => {
      // move dot directly (fast)
      dotX = lerp(dotX, mouseX - 4, 0.4);
      dotY = lerp(dotY, mouseY - 4, 0.4);
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;

      // move cursor with more lag
      const targetX = mouseX - 16;
      const targetY = mouseY - 16;
      const current = cursor.style.transform.match(/translate3d\(([-0-9.]+)px, ([-0-9.]+)px, 0\)/);
      // We keep our own internal positions via lerp to avoid parsing strings each frame
      cursor._x = cursor._x ?? targetX;
      cursor._y = cursor._y ?? targetY;
      cursor._x = lerp(cursor._x, targetX, 0.15);
      cursor._y = lerp(cursor._y, targetY, 0.15);
      cursor.style.transform = `translate3d(${cursor._x}px, ${cursor._y}px, 0)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const onLeave = () => {
      cursor.style.opacity = "0";
      dot.style.opacity = "0";
    };

    window.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = prevCursor;
    };
  }, []);

  // basic inline styles so the cursor works without external CSS
  const baseStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    pointerEvents: "none",
    transform: "translate3d(-9999px, -9999px, 0)",
    transition: "opacity 150ms ease, transform 150ms linear",
    opacity: 0,
    zIndex: 9999,
  };

  const ringStyle = {
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "2px solid #fff",
    boxShadow: "0 0 8px 2px rgba(0,0,0,0.5), 0 0 0 2px rgba(0,0,0,0.2)",
    background: "rgba(0,0,0,0.1)",
    boxSizing: "border-box",
    ...baseStyle,
  };

  const dotStyle = {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#fff",
    border: "2px solid #111",
    boxShadow: "0 0 6px 1px rgba(0,0,0,0.6)",
    ...baseStyle,
  };

  return (
    <>
      <div id="cursor" ref={cursorRef} style={ringStyle} />
      <div id="cursor-dot" ref={dotRef} style={dotStyle} />
    </>
  );
};

export default CustomCursor;
