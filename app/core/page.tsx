'use client'

export default function CorePage() {
  return (
    <main className="bg-black pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-white tracking-tighter mb-6">Core LT90</h1>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          Colección permanente de piezas premium del ecosistema LT90. Productos diseñados para durar, 
          representar y pertenecer a la tribu.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 rounded aspect-square p-4 flex flex-col justify-between hover:border-white/20 transition-colors duration-300">
              <div className="text-white/60 text-xs tracking-widest uppercase">Core Piece</div>
              <div className="text-white font-semibold">Pieza {item}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
