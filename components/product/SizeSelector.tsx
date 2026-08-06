type SizeSelectorProps = {
  tipo: string
  tallas: string[]
  selectedSize: string
  setSelectedSize: (size: string) => void
  onOpenGuide: () => void
}

export default function SizeSelector({
  tipo,
  tallas,
  selectedSize,
  setSelectedSize,
  onOpenGuide,
}: SizeSelectorProps) {
  return (

    <div className="mt-14">

      <div className="flex items-center justify-between mb-6">

        <p
          className="
            uppercase
            tracking-[0.55em]
            text-[10px]
            text-white/35
          "
        >
          TALLA
        </p>

        {tipo === 'wearable' && (

          <button
            onClick={onOpenGuide}
            className="
              uppercase
              tracking-[0.45em]
              text-[10px]
              text-white/35
              hover:text-white
              transition
            "
          >
            GUÍA DE TALLAS
          </button>

        )}

      </div>

      {tipo === 'wearable' ? (

        <div className="flex gap-4">

          {tallas.map((size) => (

            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`
                w-11
                h-11
                border
                uppercase
                text-[12px]
                tracking-[0.20em]
                transition-all
                duration-300

                ${
                  selectedSize === size
                    ? 'bg-white text-black border-white'
                    : 'border-white/20 text-white hover:border-white'
                }
              `}
            >
              {size}
            </button>

          ))}

        </div>

      ) : (

        <p
          className="
            uppercase
            tracking-[0.45em]
            text-[11px]
            text-white/45
          "
        >
          ONE SIZE
        </p>

      )}

    </div>

  )
}