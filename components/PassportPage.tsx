import type { ReactNode } from 'react'
type PassportPageProps = {
  children: ReactNode
}

export default function PassportPage({
  children,
}: PassportPageProps) {

  return (

    <div className="flex justify-center py-12">

      <div
        className="
          relative
          w-full
          max-w-7xl
          rounded-3xl
          border
          border-[#D9D1C3]
          bg-[#F3EFE6]
          overflow-hidden
        "
      >

        {/* Marca de agua */}

        <img
          src="/identity/lt90-passport-mark.svg"
          alt=""
          className="
            absolute
            inset-0
            m-auto
            w-[70%]
            opacity-[0.035]
            pointer-events-none
            select-none
          "
        />

        {/* Contenido */}

        <div className="relative z-10 p-12">

          {children}

        </div>

      </div>

    </div>

  )

}