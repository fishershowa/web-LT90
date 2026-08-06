type SizeGuideProps = {
  open: boolean
  onClose: () => void
}

export default function SizeGuide({
  open,
  onClose,
}: SizeGuideProps) {

  if (!open) return null

  return (

    <div className="fixed inset-0 z-50">

      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-[640px]
          bg-white
          text-black
          overflow-y-auto
        "
      >

        <div className="px-16 py-14">

          <div className="flex justify-between items-center">

            <h2
              className="
                uppercase
                tracking-[0.18em]
                text-4xl
                font-extralight
              "
            >
              Guía de tallas
            </h2>

            <button
              onClick={onClose}
              className="
                text-4xl
                text-black/35
                hover:text-black
                transition
              "
            >
              ×
            </button>

          </div>

          <p
            className="
              mt-10
              uppercase
              tracking-[0.35em]
              text-[11px]
              text-black/35
            "
          >
            DROP 001 · WORLD
          </p>

          <p
            className="
              mt-6
              text-[15px]
              text-black/65
              leading-7
            "
          >
            Escoge la talla que mejor se adapte a tus medidas.
          </p>

          <div className="mt-14 border-t border-neutral-200"></div>

          <div className="mt-10">

            <div
              className="
                grid
                grid-cols-6
                text-center
                uppercase
                tracking-[0.30em]
                text-xs
                pb-6
                border-b
                border-neutral-200
              "
            >

              <div></div>

              <div>S</div>

              <div>M</div>

              <div>L</div>

              <div>XL</div>

              <div>XXL</div>

            </div>

            {/* PECHO */}

            <div
              className="
                grid
                grid-cols-6
                items-center
                py-7
                border-b
                border-neutral-200
              "
            >

              <div className="uppercase tracking-[0.25em] text-xs text-left">
                Pecho
              </div>

              <div className="text-center">54</div>
              <div className="text-center">56</div>
              <div className="text-center">58</div>
              <div className="text-center">60</div>
              <div className="text-center">62</div>

            </div>

            {/* LARGO */}

            <div
              className="
                grid
                grid-cols-6
                items-center
                py-7
                border-b
                border-neutral-200
              "
            >

              <div className="uppercase tracking-[0.25em] text-xs text-left">
                Largo
              </div>

              <div className="text-center">70</div>
              <div className="text-center">72</div>
              <div className="text-center">74</div>
              <div className="text-center">76</div>
              <div className="text-center">78</div>

            </div>

            {/* MANGA */}

            <div
              className="
                grid
                grid-cols-6
                items-center
                py-7
                border-b
                border-neutral-200
              "
            >

              <div className="uppercase tracking-[0.25em] text-xs text-left">
                Manga
              </div>

              <div className="text-center">23</div>
              <div className="text-center">24</div>
              <div className="text-center">25</div>
              <div className="text-center">26</div>
              <div className="text-center">27</div>

            </div>

          </div>

          <p
            className="
              mt-12
              text-[14px]
              leading-7
              text-black/55
            "
          >
            Si dudas entre dos tallas recomendamos elegir la superior para un
            fit más relajado.
          </p>

        </div>

      </div>

    </div>

  )

}