import instalaciones from "../../../Data/instalaciones"

export default function page(props){


        return (instalaciones.map((item) => {   
              
         if (item.id == props.params.instalacion){ 
           return(
             <>
             <h1 className={`text-center text-3xl font-bold mt-6 ${item.textColor} `}>{item.title}</h1>
             <h1 className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-600  text-transparent bg-clip-text">sadf</h1>
             <div className="flex justify-center">
             <div className="bg-black h-96 w-11/12">
                
             </div>
             </div>
             </>
           )   
         }
       }
       )
      
   )}
       
