import Slider from "../../ui/Slider"
import instalaciones from "../../Data/instalaciones"
import styles from "./styles.module.css"

export default function Home() {
  return (

    
    <main className="h-screen bg-gradient-to-br from-cyan-50 via-sky-150 to-primary-300  flex justify-center">
      <section className="w-4/5 text-justify">
        <h1 className="bg-gradient-to-br from-green-500 via-blue-600 to-red-600  text-transparent bg-clip-text text-6xl font-black text-center mt-6 mb-10">Equipos e Instalaciones Térmicas</h1>
        <article className=" mt-4 p-4 text-lg text-primary-950 indent-6 shadow-md hyphens-auto">
     <p>¡Bienvenido!</p><br/>
     <p>En esta web educativa, encontraras lo que necesitas de la manera más fácil y amigable.
       Puedes bucear en las diapositivas teóricas de Canva, donde desglosamos los temas de clase para que todo quede claro.
        También tienes a tu disposición un montón de recursos online, como enlaces a normativas y guías técnicas,
         para cuando quieras ir un poco más a fondo.</p><br/>

      <p>Si alguna vez te perdiste una clase o simplemente quieres repasar, las video clases grabadas están ahí para ti . 
      Puedes verlas cuando quieras y cuantas veces quieras. <span className="text-red-700">(sección en construcción)</span><br></br> 
      Además, ¡no te pierdas los proyectX de clase!
       Son una forma práctica de aplicar lo que aprendes en situaciones reales.<span className="text-red-700">(sección en construcción)</span></p>
       </article>
       </section>
    </main>
  )
}
