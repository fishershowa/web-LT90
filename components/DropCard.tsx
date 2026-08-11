type DropCardProps = {
  nombre: string
  imagen: string
  onClick: () => void
  expanded?: boolean
  collapsed?: boolean
}

export default function DropCard({
  nombre,
  imagen,
  onClick,
  expanded = false,
  collapsed = false,
}: DropCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        relative
        shrink-0
        h-[440px]
        w-[340px]
        flex
        flex-col
        items-center
        justify-end
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${expanded ? 'w-[340px] opacity-100' : ''}
        ${collapsed ? 'w-[340px] opacity-100' : ''}
      `}
    >
      <div
        className="
          relative
          flex
          h-[370px]
          w-[320px]
          items-center
          justify-center
          overflow-hidden
        "
      >
        <img
          src={imagen}
          alt={nombre}
          draggable={false}
          className="
            block
            h-full
            w-full
            object-contain
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.025]
          "
        />
      </div>

      <p
        className="
          mt-6
          text-center
          uppercase
          tracking-[0.38em]
          text-[11px]
          font-light
          text-white/65
          transition-colors
          duration-500
          group-hover:text-white
        "
      >
        {nombre}
      </p>
    </button>
  )
}