const activities = [
  {
    id: 1,
    type: 'member',
    title: 'Nuevo miembro registrado',
    description: 'Carlos M. se unió a LT90 Socios',
    time: 'Hace 2 horas',
  },
  {
    id: 2,
    type: 'order',
    title: 'Nuevo pedido completado',
    description: 'Orden #2847 - Jersey WORLD (90/90)',
    time: 'Hace 4 horas',
  },
  {
    id: 3,
    type: 'convocatoria',
    title: 'Nueva respuesta a convocatoria',
    description: '12 nuevos participantes en Selección Q1',
    time: 'Hace 6 horas',
  },
  {
    id: 4,
    type: 'drop',
    title: 'Nuevo drop publicado',
    description: 'WORLD Drop - 90 unidades disponibles',
    time: 'Hace 1 día',
  },
  {
    id: 5,
    type: 'content',
    title: 'Contenido subido',
    description: 'Portfolio de fotografía - WORLD Drop',
    time: 'Hace 1 día',
  },
]

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'member':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292m0 0H8.646a4 4 0 010-5.292m3.354 0A4 4 0 008.646 9M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case 'order':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4l1-12z" />
        </svg>
      )
    case 'convocatoria':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'drop':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    default:
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
  }
}

export function RecentActivity() {
  return (
    <div className="p-6 bg-gray-900/30 border border-gray-800 rounded">
      <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-6">
        Actividad Reciente
      </h3>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4 pb-4 border-b border-gray-800/50 last:border-b-0 last:pb-0">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-blue-400">
              {getActivityIcon(activity.type)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white">
                {activity.title}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {activity.description}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
