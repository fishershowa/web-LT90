export function MarqueeBanner() {
  return (
    <div className="w-full bg-black py-4 overflow-hidden relative">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .marquee-content {
          animation: scroll 180s linear infinite;
          white-space: nowrap;
          display: inline-block;
          padding-right: 100%;
        }
      `}</style>
      
      <div className="marquee-content">
       <span className="text-white font-bold tracking-widest text-sm md:text-base">
  ONE TEAM NO BORDERS •
  ONE TEAM NO BORDERS •
  ONE TEAM NO BORDERS •
  ONE TEAM NO BORDERS •
  ONE TEAM NO BORDERS •

  DROP 001 — WORLD •
  DROP 001 — WORLD •
  DROP 001 — WORLD •
  DROP 001 — WORLD •
  DROP 001 — WORLD •

  FOUNDING MEMBERS •
  FOUNDING MEMBERS •
  FOUNDING MEMBERS •
  FOUNDING MEMBERS •
  FOUNDING MEMBERS •

  LA RUTA DE LA SEDA •
  LA RUTA DE LA SEDA •
  LA RUTA DE LA SEDA •
  LA RUTA DE LA SEDA •
  LA RUTA DE LA SEDA •
</span>
      </div>
    </div>
  )
}
