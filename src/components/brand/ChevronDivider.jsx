export default function ChevronDivider({ className = "w-full max-w-md mx-auto h-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 12 L20 4 L40 12 L60 4 L80 12 L100 4 L120 12 L140 4 L160 12 L180 4 L200 12"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}
