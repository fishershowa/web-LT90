export function Convocatorias() {
  return (
    <div className="p-12 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Convocatorias</h1>
        <p className="text-gray-400">Gestiona las convocatorias abiertas</p>
      </div>

      <div className="space-y-4">
        {[
          { name: 'Selección Q1', status: 'Abierta', responses: 24, deadline: '15 Ago' },
          { name: 'Fotógrafos', status: 'Abierta', responses: 18, deadline: '30 Ago' },
          { name: 'Diseñadores', status: 'Abierta', responses: 12, deadline: '20 Ago' },
          { name: 'Directores', status: 'Cerrada', responses: 42, deadline: '1 Ago' },
        ].map((conv, idx) => (
          <div key={idx} className="p-6 bg-gray-900/30 border border-gray-800 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-white">{conv.name}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  {conv.responses} respuestas • Deadline: {conv.deadline}
                </p>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded ${
                conv.status === 'Abierta' 
                  ? 'bg-green-900/30 text-green-400' 
                  : 'bg-gray-800 text-gray-400'
              }`}>
                {conv.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
