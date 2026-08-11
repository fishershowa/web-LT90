'use client'

import { useEffect, useState } from "react";
import { useUser } from "@/contexts/UserContext";

export default function CheckoutForm() {

  const [newMember, setNewMember] = useState(true);
const { setUser } = useUser();

const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [correo, setCorreo] = useState("");
const [pais, setPais] = useState("");
const [ciudad, setCiudad] = useState("");
useEffect(() => {
  setUser({
  nombre,
  apellido,
  correo,
  pais,
  ciudad,
  socio: null,
  pasaporte: null,
  rango: 'SOCIO',
  stickers: [],
  drops: [],
})
}, [nombre, apellido, correo, pais, ciudad, setUser])
  return (
    
    <section>

      {/* IDENTIDAD */}

      <p
        className="
          uppercase
          tracking-[0.60em]
          text-[10px]
          text-white/25
        "
      >
        Identidad
      </p>

      <div className="mt-12 space-y-10">

        <div className="grid grid-cols-2 gap-12">

          <input
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
  placeholder="Nombre"
            className="bg-transparent border-b border-white/10 pb-4 outline-none text-[15px] placeholder:text-white/25 focus:border-white/40 transition"
          />

          <input
  value={apellido}
  onChange={(e) => setApellido(e.target.value)}
  placeholder="Apellido"
  className="bg-transparent border-b border-white/10 pb-4 outline-none text-[15px] placeholder:text-white/25 focus:border-white/40 transition"
/>
        </div>

       <input
  value={correo}
  onChange={(e) => setCorreo(e.target.value)}
  placeholder="Correo electrónico"
  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none text-[15px] placeholder:text-white/25 focus:border-white/40 transition"
/>

        <div className="grid grid-cols-2 gap-12">

          <input
  value={pais}
  onChange={(e) => setPais(e.target.value)}
  placeholder="País"
  className="bg-transparent border-b border-white/10 pb-4 outline-none text-[15px] placeholder:text-white/25 focus:border-white/40 transition"
/>

          <input
  value={ciudad}
  onChange={(e) => setCiudad(e.target.value)}
  placeholder="Ciudad"
  className="bg-transparent border-b border-white/10 pb-4 outline-none text-[15px] placeholder:text-white/25 focus:border-white/40 transition"
/>

        </div>

      </div>

      {/* PASAPORTE */}

<div className="mt-24">

  <p
    className="
      uppercase
      tracking-[0.60em]
      text-[10px]
      text-white/25
    "
  >
    PASAPORTE
  </p>

  <div
    className="
      mt-10
      border-l
      border-white/10
      pl-6
    "
  >

    <p
      className="
        uppercase
        tracking-[0.30em]
        text-[12px]
        text-white/85
      "
    >
      Estado
    </p>

    <p
      className="
        mt-5
        text-[13px]
        leading-8
        text-white/45
      "
    >
      Una vez ingresado tu correo, el sistema verificará automáticamente
      si ya existe un Pasaporte asociado.
    </p>

    <div className="mt-8 space-y-6">

      <div>

        <p
          className="
            uppercase
            tracking-[0.25em]
            text-[11px]
            text-white/75
          "
        >
          Primer ingreso
        </p>

        <p
          className="
            mt-2
            text-[13px]
            text-white/45
          "
        >
          Se emitirá un Pasaporte y se asignará automáticamente
          tu número de socio.
        </p>

      </div>

      <div>

        <p
          className="
            uppercase
            tracking-[0.25em]
            text-[11px]
            text-white/75
          "
        >
          Pasaporte existente
        </p>

        <p
          className="
            mt-2
            text-[13px]
            text-white/45
          "
        >
          Si el correo ya pertenece a un socio, la incorporación
          será registrada automáticamente dentro de su Pasaporte,
          conservando su número de socio.
        </p>

      </div>

    </div>

  </div>

</div>

    </section>
  );

}