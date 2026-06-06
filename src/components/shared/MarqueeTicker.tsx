// Horizontal scrolling ticker strip (PRD §5.5).
// Content duplicated once so the CSS marquee loops seamlessly.
const items = [
  'GLOBAL SHIPPING',
  'AIR FREIGHT',
  'SEA FREIGHT',
  'SUPPLY CHAIN',
  'WAREHOUSING',
  'DOMESTIC LOGISTICS',
  'CUSTOMS CLEARANCE',
]

export default function MarqueeTicker() {
  const content = items.map((item, i) => (
    <span key={i} className="mx-8 inline-flex items-center gap-4">
      {item} <span className="text-white/60">✈</span>
    </span>
  ))

  return (
    <div
      className="bg-accent py-3.5 overflow-hidden"
      role="marquee"
      aria-label="Chevisance Shipping services"
    >
      <div className="marquee-track text-white text-[13px] font-semibold tracking-[2px] uppercase">
        {content}
        {content}
      </div>
    </div>
  )
}
