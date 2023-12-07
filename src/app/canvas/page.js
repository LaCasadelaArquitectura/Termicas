'use client'
import React from "react";
import Card from "../ui/card";
import { useState } from "react";



export default function Page() {

  const [pf, setPf] = React.useState(0)

  function handleClick(Card){
      console.log(Card.id)
    
  } 

    return (
      <>
      <article className="flex  gap-6 flex-wrap m-5"> 
      <Card handleClick={handleClick} id={1} titulo={'PF0'} path={'/boe3.png'} descripcion={'Normativa'}/>
      <Card handleClick={handleClick} id={2} titulo={'PF01'} path={'/aislamiento.png'} descripcion={'Cerramientos'}/>
      <Card handleClick={handleClick} id={3} titulo={'PF02'} path={'/aislamiento2.png'} descripcion={'Transmitancias'}/>
      <Card handleClick={handleClick} id={4} titulo={'PF03'} path={'/aire.png'} descripcion={'Psicrometria'}/>
      <Card handleClick={handleClick} id={5} titulo={'PF04'} path={'/radiador.png'} descripcion={'Q de Calefacción'}/>
      <Card handleClick={handleClick} id={6} titulo={'PF05'} path={'/incendios.png'} descripcion={'Incendios'}/>
      <Card handleClick={handleClick} id={7} titulo={'PF06'} path={'/neveras.png'} descripcion={'Ciclo Frigorífico'}/>
      <Card handleClick={handleClick} id={8} titulo={'PF07'} path={'/camara.png'} descripcion={'Paneles Frigoríficos'}/>
      <Card handleClick={handleClick} id={9} titulo={'PF08'} path={'/pinguinos.png'} descripcion={'Q de refrigeración'}/>
      </article>
      <article>
      
      </article>
     




</>
    )};
  