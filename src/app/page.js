import Slider from "../../ui/Slider"
import instalaciones from "../../Data/instalaciones"
import styles from "./styles.module.css"

export default function Home() {
  return (

    
    <main className="h-screen">
      <div className={styles.center}>
      <Slider data={instalaciones} activeSlide={0} />
    </div>
    </main>
  )
}
