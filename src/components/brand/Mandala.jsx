export default function Mandala({ className = "w-12 h-12", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.9" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 32 32)`}>
          <circle cx="32" cy="12" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="32" cy="20" r="1.5" fill="currentColor" opacity="0.5" />
        </g>
      ))}
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.35"
        strokeDasharray="2 4"
      />
      <circle
        cx="32"
        cy="32"
        r="16"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
    </svg>
  );
}
