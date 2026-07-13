interface AdminSidebarProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'drops', label: 'Drops' },
  { id: 'core', label: 'Core' },
  { id: 'convocatorias', label: 'Convocatorias' },
  { id: 'archivo', label: 'Archivo Histórico' },
  { id: 'miembros', label: 'Miembros' },
  { id: 'pasaportes', label: 'Pasaportes' },
  { id: 'inventario', label: 'Inventario' },
  { id: 'contenido', label: 'Contenido' },
  { id: 'correos', label: 'Correos' },
  { id: 'broadcast', label: 'Broadcast' },
  { id: 'analiticas', label: 'Analíticas' },
  { id: 'config', label: 'Configuración' },
]

export function AdminSidebar({ currentSection, onSectionChange }: AdminSidebarProps) {
  return (
    <aside className="fixed left-0 top-20 h-screen w-80 bg-black border-r border-gray-800 p-8 overflow-y-auto">
      {/* Sidebar Title */}
      <div className="mb-12">
        <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
          LT90 Control Center
        </h2>
        <div className="h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
      </div>

      {/* Menu Items */}
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-all duration-200 ${
              currentSection === item.id
                ? 'bg-gray-800 text-white border-l-2 border-blue-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="p-4 bg-gray-900/30 border border-gray-800 rounded">
          <p className="text-xs text-gray-500 text-center">
            LT90 © 2024<br />
            Control Center v1.0
          </p>
        </div>
      </div>
    </aside>
  )
}
