export default function Monogram({ className = "w-24 h-24", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <text
        x="8"
        y="36"
        fill="currentColor"
        fontFamily="Georgia, serif"
        fontSize="32"
        fontWeight="300"
        opacity="0.15"
      >
        L
      </text>
      <line
        x1="42"
        y1="28"
        x2="78"
        y2="28"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.12"
      />
      <text
        x="82"
        y="36"
        fill="currentColor"
        fontFamily="Georgia, serif"
        fontSize="32"
        fontWeight="300"
        opacity="0.15"
      >
        m
      </text>
    </svg>
  );
}
