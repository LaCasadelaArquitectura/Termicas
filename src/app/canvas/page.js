import Card from "../ui/card";


export default function Page() {

    return (
      <article className="flex  gap-6 flex-wrap m-5">
        
       
      <Card titulo={'PF0'} path={'/boe3.png'} descripcion={'Normativa'}/>
      <Card titulo={'PF01'} path={'/aislamiento.png'} descripcion={'Cerramientos'}/>
      <Card titulo={'PF02'} path={'/aislamiento2.png'} descripcion={'Transmitancias'}/>
      <Card titulo={'PF03'} path={'/aire.png'} descripcion={'Psicrometria'}/>
      <Card titulo={'PF04'} path={'/radiador.png'} descripcion={'Q de Calefacción'}/>
      <Card titulo={'PF05'} path={'/incendios.png'} descripcion={'Incendios'}/>
      <Card titulo={'PF06'} path={'/neveras.png'} descripcion={'Ciclo Frigorífico'}/>
      <Card titulo={'PF07'} path={'/camara.png'} descripcion={'Paneles Frigoríficos'}/>
      <Card titulo={'PF08'} path={'/pinguinos.png'} descripcion={'Q de refrigeración'}/>
      </article>
    )};
  