import instalaciones from "../../../Data/instalaciones"

export default function page(props){


  
  function getData(item){
    const normativa = item.recursos.normativa
   
    return( normativa.map((item) => {
      const { nombre, nombreCompleto, url } = item;
      return (
        <div className="pl-4">
       <p className="capitalize text-sm ">{`- ${nombreCompleto}`}</p>
       <a href={url} target="_blank" className="float-right ">
          <button className="bg-gradient-to-r from-primary-500 to-primary-700 p-2 rounded text-primary-50 text-sm font-semibold">
            {`Enlace: ${nombre}`}
          </button>
       </a><br/><br/>
       </div>
      )
    })
  )}

    
 
  
  return (instalaciones.map((item) => {        
         if (item.id == props.params.instalacion){ 
           return(
             <>
             <h1 className={`text-center text-3xl font-bold mt-6 ${item.textColor} `}>{item.title}</h1>
             <h1 className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-600  text-transparent bg-clip-text">sadf</h1>
             <div className="flex justify-center ">
             <div className="w-9/12 ">
              <h2 className="text-xl font-bold">Normativa de aplicación:</h2><br/>
               {getData(item)}<br/>
             </div>
             </div>
             </>
           )   
         }
       }
       )
      
   )}
       
