import React from "react";

const IosSpinner: React.FC<{ size?: number; color?: string }> = ({
  size = 40,
  color = "#000",
}) => {
  const dots = Array.from({ length: 12 });

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
      }}
    >
      {dots.map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: size * 0.1,
            height: size * 0.25,
            backgroundColor: color,
            borderRadius: size,
            transformOrigin: `center ${size / 2}px`,
            transform: `rotate(${i * 30}deg) translateY(-${size / 2 - 4}px)`,
            opacity: i / dots.length,
            animation: "iosSpinner 1.2s linear infinite",
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes iosSpinner {
            0% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}
      </style>
    </div>
  );
};

export default IosSpinner;
