export function Archivo() {
  return (
    <div className="p-12 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Archivo Histórico</h1>
        <p className="text-gray-400">Colección de drops pasados</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className="p-6 bg-gray-900/30 border border-gray-800 rounded hover:border-blue-500/30 transition-all">
            <div className="aspect-square bg-gray-800 rounded mb-4"></div>
            <h3 className="text-lg font-bold text-white mb-2">Drop {idx + 1}</h3>
            <p className="text-sm text-gray-400">Limitado 90/90</p>
            <p className="text-xs text-gray-500 mt-2">2024</p>
          </div>
        ))}
      </div>
    </div>
  )
}
