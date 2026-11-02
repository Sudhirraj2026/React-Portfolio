import { useEffect, useState } from "react";

function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Only activate on devices that support mouse hover (ignore mobile touch for performance)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity,
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.08), rgba(16, 185, 129, 0.04) 40%, transparent 80%)`,
      }}
    />
  );
}

export default MouseSpotlight;
