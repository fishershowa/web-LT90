'use client'

import { StatCard } from './stat-card'
import { RecentActivity } from './recent-activity'
import { QuickActions } from './quick-actions'

export function Dashboard() {
  return (
    <div className="p-12 max-w-7xl mx-auto">
      {/* Page Title */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Dashboard</h1>
        <p className="text-gray-400">Bienvenido al LT90 Control Center</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <StatCard
          label="Drop Activo"
          value="WORLD"
          subtitle="90/90 Unidades"
          accent="blue"
        />
        <StatCard
          label="Core Products"
          value="24"
          subtitle="Productos activos"
          accent="gray"
        />
        <StatCard
          label="Miembros LTeam"
          value="90"
          subtitle="Socios activos"
          accent="gold"
        />
        <StatCard
          label="Convocatorias Abiertas"
          value="3"
          subtitle="En progreso"
          accent="blue"
        />
        <StatCard
          label="Ventas del Mes"
          value="€4,240"
          subtitle="+12% vs mes anterior"
          accent="green"
        />
        <StatCard
          label="Visitas"
          value="2,847"
          subtitle="En últimos 7 días"
          accent="gray"
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-900/30 border border-gray-800 rounded">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">
              Estado del Sistema
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Servidor</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-400">Operativo</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Base de datos</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-400">Conectado</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">API</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-blue-400">Activa</span>
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-900/30 border border-gray-800 rounded">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">
              Tareas Pendientes
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>• Revisar 5 nuevas convocatorias</p>
              <p>• Aprobar 3 miembros</p>
              <p>• Enviar broadcast</p>
              <p>• Actualizar contenido</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions />
    </div>
  )
}
