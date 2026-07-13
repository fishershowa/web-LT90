export function Core() {
  return (
    <div className="p-12 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Core Products</h1>
        <p className="text-gray-400">Productos principales de LT90</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'Jersey Premium', sku: 'CORE-001', stock: 45 },
          { name: 'Casual Fit', sku: 'CORE-002', stock: 32 },
          { name: 'Training Gear', sku: 'CORE-003', stock: 28 },
          { name: 'Limited Edition', sku: 'CORE-004', stock: 12 },
        ].map((product, idx) => (
          <div key={idx} className="p-6 bg-gray-900/30 border border-gray-800 rounded">
            <h3 className="text-lg font-bold text-white mb-3">{product.name}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>SKU: {product.sku}</p>
              <p>Stock: <span className="text-white">{product.stock} unidades</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
