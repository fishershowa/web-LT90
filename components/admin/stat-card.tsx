interface StatCardProps {
  label: string
  value: string
  subtitle: string
  accent?: 'blue' | 'gray' | 'gold' | 'green' | 'red'
}

export function StatCard({ label, value, subtitle, accent = 'gray' }: StatCardProps) {
  const accentColors = {
    blue: 'border-l-blue-500',
    gray: 'border-l-gray-600',
    gold: 'border-l-yellow-600',
    green: 'border-l-green-500',
    red: 'border-l-red-600',
  }

  return (
    <div className={`p-6 bg-gray-900/30 border border-gray-800 rounded border-l-4 ${accentColors[accent]} hover:bg-gray-900/50 transition-colors`}>
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-semibold">
        {label}
      </p>
      <p className="text-3xl font-bold text-white mb-2 tracking-tight">
        {value}
      </p>
      <p className="text-sm text-gray-500">
        {subtitle}
      </p>
    </div>
  )
}
