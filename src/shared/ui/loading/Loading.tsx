export default function Loading() {
  return (
    <div className="absolute w-8 h-8 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
      <svg className="loading-circular" viewBox="25 25 50 50">
        <circle
          className="loading-path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#6E6E82"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  )
}
