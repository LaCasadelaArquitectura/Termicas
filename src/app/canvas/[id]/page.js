import CanvaSlide from "../../../../ui/canvaSlide"
import presentaciones from "../../../../Data/presentaciones";

export default function page(props){
    console.log(props)
    console.log(props.params.id)

    
  const projectsArray = presentaciones.data.presentaciones || [];
  let canvaUrl = ''

  function getData(projectsArray){
    

     return (projectsArray.map((item) => { 
      const { id, name, path, description, url } = item;
      if (item.id == props.params.id){ 
        return(
          <>
          <h1 className="text-4xl text-center font-bold text-primary-900 p-4 bg-primary-100">{`${name}: ${description} `}</h1>
          <CanvaSlide url={url} />
          </>
        )   
      }
    }
    )
   
)}
    
const slides = getData(projectsArray)

    return(
      <>
        {slides}
      </>
    )
}