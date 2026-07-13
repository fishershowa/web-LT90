export function QuickActions() {
  const actions = [
    { label: 'Crear Drop', icon: '◆' },
    { label: 'Crear Convocatoria', icon: '⚡' },
    { label: 'Agregar Producto Core', icon: '+' },
    { label: 'Enviar Broadcast', icon: '📢' },
    { label: 'Subir Contenido', icon: '⬆' },
    { label: 'Agregar Miembro', icon: '👥' },
  ]

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-6">
        Accesos Rápidos
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, idx) => (
          <button
            key={idx}
            className="group p-6 bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 rounded transition-all duration-200"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-2xl group-hover:scale-110 transition-transform">
                {action.icon}
              </span>
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                {action.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
