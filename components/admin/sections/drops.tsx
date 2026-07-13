export function Drops() {
  return (
    <div className="p-12 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Drops</h1>
        <p className="text-gray-400">Gestiona los drops de la colección</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'WORLD', status: 'Activo', units: '90/90' },
          { name: 'Archivo Drop 1', status: 'Cerrado', units: '90/90' },
          { name: 'Archivo Drop 2', status: 'Cerrado', units: '90/90' },
        ].map((drop, idx) => (
          <div key={idx} className="p-6 bg-gray-900/30 border border-gray-800 rounded hover:border-blue-500/30 transition-all">
            <h3 className="text-lg font-bold text-white mb-3">{drop.name}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Status: <span className={drop.status === 'Activo' ? 'text-green-400' : 'text-gray-500'}>{drop.status}</span></p>
              <p>Unidades: {drop.units}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
