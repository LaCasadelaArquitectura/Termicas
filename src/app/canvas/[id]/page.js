import CanvaSlide from "../../../../ui/canvaSlide"
import presentaciones from "../../../../Data/presentaciones";

export default function page(props){
    console.log(props)
    console.log(props.params.id)

    
  const projectsArray = presentaciones.data.presentaciones || [];
  let canvaUrl = ''

  function getData(projectsArray){
    

     projectsArray.map((item) => { 
      if (item.id == props.params.id){ 
        console.log(item.url)
        return(
           canvaUrl = item.url
        )   
      }
    }
    )
    console.log(canvaUrl)
}
    
    const url=getData(projectsArray)

    console.log(canvaUrl)

    return(
        
    <>
        <h1> slide n{canvaUrl}</h1>
        <CanvaSlide url={canvaUrl} />
            
           
    </>

    )
}