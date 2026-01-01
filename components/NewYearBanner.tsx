"use client"

export function NewYearBanner() {
  // 🔒 Set the last day you want the banner visible (YYYY-MM-DD)
  const END_DATE = new Date("2026-01-07")
  const today = new Date()

  if (today > END_DATE) {
    return null // ⛔ Auto-remove after the date
  }

  return (
    <div className="relative overflow-hidden">
      <div className="animate-slide-left-right text-center px-4 py-2 text-sm text-primary whitespace-nowrap">
        Happy New Year! Wishing you good health, happiness, and peace in the year ahead.
      </div>
    </div>
  )
}
