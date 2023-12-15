import instalaciones from "../../../Data/instalaciones"
import RecursosData from "../../../ui/recursosCard";

export default function page(props){
  
  return (instalaciones.map((item) => {     
     
         if (item.id == props.params.instalacion){ 
           return(
             <>
             <h1 className={`text-center text-4xl font-bold mt-6 mb-10 ${item.textColor}`}>{item.title}</h1>
             <p className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-600  text-transparent bg-clip-text hidden">sfrsda</p>
             <p className="bg-gradient-to-r from-black via-red-800 to-red-600  text-transparent bg-clip-text hidden">sfrsda</p>
             <p className="bg-gradient-to-r from-red-600 via-gray-700 to-blue-600  text-transparent bg-clip-text hidden">sfrsda</p>
             <p className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400  text-transparent bg-clip-text hidden">sfrsda</p>
             <p className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100  text-transparent bg-clip-text hidden">sfrsda</p>
             <p className="bg-gradient-to-r from-green-500 via-green-300 to-green-100  text-transparent bg-clip-text hidden">sfrsda</p>
             <div className="flex justify-center ">
             <div className="w-10/12 flex flex-col items-center ">
              <h2 className="text-xl font-bold text-yellow-500 mb-4">Normativa de aplicación:</h2><br/>
               <RecursosData data={item.recursos.normativa} />
               <h2 className="text-xl font-bold text-green-500 mb-4">Guias tecnicas:</h2><br/>
               <RecursosData data={item.recursos.guias} />
               <h2 className="text-xl font-bold text-purple-500 m-4">Diapositivas de clase:</h2><br/>
               <RecursosData data={item.recursos.presentaciones} />
             </div>
             </div>
             </>
           )   
         }
       }
       )
      
   )}
       
