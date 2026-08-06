'use client'

interface ExpedienteCardProps {
  item: {
    id: number
    slug: string
    titulo: string
    categoria: string
    año: string
    portada: string
  }

  expanded: boolean
  collapsed: boolean

  onClick: () => void
}

export default function ExpedienteCard({
  item,
  expanded,
  collapsed,
  onClick,
}: ExpedienteCardProps) {
  return (
    <div
  onClick={onClick}
  className={`
    group
    relative
    h-full
    overflow-hidden
    cursor-pointer
    transition-all
    duration-700
    ease-in-out

    ${
      expanded
        ? 'flex-[6]'
        : collapsed
        ? 'flex-[0.15]'
        : 'flex-1'
    }
  `}
>
      <img
        src={item.portada}
        alt={item.titulo}
       className={`
  absolute
  inset-0

  w-full
  h-full

  object-cover
  object-center

  transition-all
  duration-700
  ease-out

  ${
    expanded
      ? 'scale-105 grayscale-0'
      : 'grayscale group-hover:grayscale-0 group-hover:scale-105'
  }
`}
      />

      <div className="absolute bottom-24 left-10 transition-all duration-700">

        <p
          className={`
            uppercase
            tracking-[0.45em]
            text-[10px]
            transition-all
            duration-700

            ${
              expanded
                ? 'text-white/80'
                : 'text-white/50 group-hover:text-white/80'
            }
          `}
        >
          {item.categoria}
        </p>

        <h2
          className={`
            mt-4
            uppercase
            font-extralight
            tracking-[0.08em]
            transition-all
            duration-700

            ${
              expanded
                ? 'text-6xl text-white'
                : 'text-4xl text-white group-hover:text-white'
            }
          `}
        >
          {item.titulo}
        </h2>

      </div>
    </div>
  )
}