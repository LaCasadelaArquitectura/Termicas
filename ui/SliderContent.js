
export default function SliderContent(props){
    return (
      <div className="h-10 w-10 bg-primary-900">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    );
  };