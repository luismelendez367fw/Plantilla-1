export default function RadialSun({ className = "w-64 h-64" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="64" cy="64" r="8" fill="currentColor" opacity="0.2" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const x1 = 64 + Math.cos(rad) * 14;
        const y1 = 64 + Math.sin(rad) * 14;
        const x2 = 64 + Math.cos(rad) * 52;
        const y2 = 64 + Math.sin(rad) * 52;
        return (
          <circle
            key={i}
            cx={x2}
            cy={y2}
            r="1.5"
            fill="currentColor"
            opacity="0.15"
          />
        );
      })}
      <circle
        cx="64"
        cy="64"
        r="48"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
      />
    </svg>
  );
}
