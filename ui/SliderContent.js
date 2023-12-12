
export default function SliderContent(props){
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary-100">{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    );
  };