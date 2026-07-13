export function Miembros() {
  return (
    <div className="p-12 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Miembros</h1>
        <p className="text-gray-400">Gestiona a los miembros de LT90</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-6 py-4 text-left text-gray-400 font-semibold">Nombre</th>
              <th className="px-6 py-4 text-left text-gray-400 font-semibold">Status</th>
              <th className="px-6 py-4 text-left text-gray-400 font-semibold">Fecha Ingreso</th>
              <th className="px-6 py-4 text-left text-gray-400 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Carlos M.', status: 'Activo', date: '2024-01-15' },
              { name: 'Andrea V.', status: 'Activo', date: '2024-02-20' },
              { name: 'Diego R.', status: 'Activo', date: '2024-03-10' },
              { name: 'Sofia L.', status: 'Pendiente', date: '2024-07-30' },
            ].map((member, idx) => (
              <tr key={idx} className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors">
                <td className="px-6 py-4 text-white font-medium">{member.name}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    member.status === 'Activo'
                      ? 'bg-green-900/30 text-green-400'
                      : 'bg-yellow-900/30 text-yellow-400'
                  }`}>
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400 text-xs">{member.date}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-400 hover:text-blue-300 text-xs font-semibold">
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
