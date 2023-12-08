import Image from "next/image"

export default function Card(props) {
    return (
        <button onClick={props.handleClick} className="cursor-pointer z-10 hover:transform hover:translate-y-1 hover:-translate-x-1 hover:font-bold transition-all ease-in-out delay-50">

            <Image className="rounded-xl h-28 w-28 hover:shadow-xl" src={props.path} width={125} height={125} ></Image>
            <h4 className="m-1 ">{props.name}</h4>
            <p className="text-xs font-light ml-1">{props.description}</p>
        </button>
    )
}