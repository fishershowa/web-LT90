'use client'

import { useState } from 'react'
import { AdminHeader } from './admin-header'
import { AdminSidebar } from './admin-sidebar'
import { Dashboard } from './dashboard'
import { Drops } from './sections/drops'
import { Core } from './sections/core'
import { Convocatorias } from './sections/convocatorias'
import { Archivo } from './sections/archivo'
import { Miembros } from './sections/miembros'

export function AdminLayout() {
  const [currentSection, setCurrentSection] = useState('dashboard')

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <Dashboard />
      case 'drops':
        return <Drops />
      case 'core':
        return <Core />
      case 'convocatorias':
        return <Convocatorias />
      case 'archivo':
        return <Archivo />
      case 'miembros':
        return <Miembros />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar currentSection={currentSection} onSectionChange={setCurrentSection} />
        <main className="flex-1 ml-80 pt-20">
          {renderSection()}
        </main>
      </div>
    </div>
  )
}
