

export default function CanvaSlide(props){
  
  const url = (props.url).replaceAll("&#x2F;", "/" )
  console.log(url)
  
    return(

        <div className="relative w-full h-screen pt-12 pb-0 shadow-lg overflow-hidden  will-change-auto">
      <iframe loading="lazy" className="absolute w-screen h-full top-0 left-0 border-none p-0 m-0"
    src={url} allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
  </div>
  
    )
}