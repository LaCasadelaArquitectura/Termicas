import Image from "next/image"

export default function Card(props){
    return(
        <button onClick={props.handleClick} className="cursor-pointer z-10">

        <Image className="rounded-xl h-28 w-28" src={props.path} width={125} height={125} ></Image>
        <h4 className="m-1">{props.titulo}</h4>
        <p className="text-xs font-light ml-1">{props.descripcion}</p>
        </button>
    )
}