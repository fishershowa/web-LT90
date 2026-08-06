type DropCardProps = {
  nombre: string
  imagen: string
  onClick: () => void
}

export default function DropCard({
  nombre,
  imagen,
  onClick,
}: DropCardProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex-shrink-0
        w-[30vw]
        min-w-[380px]
        cursor-pointer
        group
        bg-transparent
        border-0
        p-0
      "
    >
      <div className="h-[430px] flex items-end justify-center">
        <img
          src={imagen}
          alt={nombre}
          className="
            w-[330px]
            object-contain
            transition-all
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />
      </div>

      <p
        className="
          mt-10
          text-center
          uppercase
          tracking-[0.38em]
          text-lg
          font-light
        "
      >
        {nombre}
      </p>
    </button>
  )
}