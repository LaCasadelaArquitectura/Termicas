import Slider from "../../ui/Slider"
import carrusel from "../../Data/carrusel"
import styles from "./styles.module.css"

export default function Home() {
  return (

    
    <main className="h-screen ">
      <div className={styles.center}>
      <Slider data={carrusel} activeSlide={0} />
    </div>
    </main>
  )
}
