import Slider from "../../../ui/Slider";
import instalaciones from "../../../Data/instalaciones";
import styles from "./styles.module.css"

export default function Page() {
    return (
      <div className=" bg-gradient-to-tr from-cyan-50 via-sky-150 to-primary-300 ">
      <div className={styles.center}>
      <Slider data={instalaciones} activeSlide={0} />
    </div>
    </div>
    )
  }