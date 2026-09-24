'use client'

import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    window.location.replace('/index.html')
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f8f2] text-[#254b40]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-7 w-7 animate-spin rounded-full border-2 border-[#9aab6b] border-t-transparent" />
        <p className="font-serif text-base">Loading Ganesha — The Sacred Journey…</p>
        <a href="/index.html" className="text-xs text-[#c96437] hover:underline">
          Click here if not redirected automatically
        </a>
      </div>
    </div>
  )
}
