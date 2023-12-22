
export default function RecursosData(props){
    const data = props.data
    
   
    return( data.map((item) => {
      const { nombre, nombreCompleto, url } = item;
      return (
        <div className="flex justify-between w-full mb-4 md:w-6/12">
       <p className="capitalize  text-sm mb-4">{`- ${nombreCompleto}`}</p>
       
       <a href={url} target="_blank" className=" ">
          <button className="w-40 h-min-10 ml-8  bg-gradient-to-r from-primary-500 to-primary-700 p-2 rounded text-primary-50 text-sm font-semibold">
            {`${nombre}`}
          </button>
       </a>
       </div>
      )
    })
  )}
