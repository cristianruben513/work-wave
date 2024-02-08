export default function OCRLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-300/20 backdrop-blur-sm w-full rounded-xl border-4 border-neutral-300/50">
      {children}
    </div>
  )
}