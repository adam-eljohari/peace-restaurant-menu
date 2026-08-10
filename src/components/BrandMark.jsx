export default function BrandMark({ compact = false }) {
  return (
    <span className={`brand-mark${compact ? ' brand-mark--compact' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 72 72" role="img">
        <path
          className="brand-mark__dove"
          d="M9 40.5c8.2 1.5 14.7-.2 20.2-5.1-2.1-7.2-.2-16.5 5.9-23.7.8 7.7 5 13.1 12.6 16 4.5-2.9 8.9-3.5 13.2-2.1-2.4 4-6 6.7-10.5 7.8-.9 10.5-8.4 18.7-18.9 20.4-8.5 1.4-16.7-2.4-21.3-8 6.7.9 12.3-.3 16.8-3.7-6.4 1.8-12.5 1.2-18-1.6Z"
        />
        <path className="brand-mark__wing" d="M29.5 35.8c5.4-4.6 7.6-10.3 6-17.1 3.5 5.8 7.6 9.4 13 10.6" />
        <path className="brand-mark__branch" d="M59.2 25.8c3.5-2.5 5.8-5.6 7.2-9.4m-4 5c-2.8-.1-4.3-1.2-5.1-3.3m7.1.2c1.9-1 3-2.4 3.4-4.2" />
      </svg>
    </span>
  )
}
