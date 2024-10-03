import React, { useEffect, useState } from "react";

const MouseGlowWithTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);

      setTrail((prevTrail) => [
        ...prevTrail,
        { x: newPosition.x, y: newPosition.y, id: Math.random() },
      ]);

      setTimeout(() => {
        setTrail((prevTrail) => prevTrail.slice(1));
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
        className="w-10 h-10 border-2 border-purple-900 rounded-full fixed pointer-events-none z-50 opacity-80 animate-glow"
      ></div>

      {trail.map((trailPosition) => (
        <div
          key={trailPosition.id}
          style={{
            left: trailPosition.x,
            top: trailPosition.y,
            transform: "translate(-50%, -50%)",
          }}
          className="w-8 h-8 border-2 border-purple-900 rounded-full fixed pointer-events-none z-40 opacity-40 animate-fade-out"
        ></div>
      ))}
    </>
  );
};

export default MouseGlowWithTrail;
