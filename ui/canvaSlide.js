


export default function CanvaSlide(props){
  console.log(props.url)


    return(

        <div className="relative w-full h-0 pt-12 pb-0 shadow-lg mt-6 mb-4 overflow-hidden rounded-lg will-change-auto">
      <iframe loading="lazy" className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
    src={props.url} allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
  </div>
  
    )
}