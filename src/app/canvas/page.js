'use client'
import React from "react";
import Card from "../../../ui/card";
import { useState } from "react";
import presentaciones from "../../../Data/presentaciones";
import Link from "next/link";



export default function Page() {

  const [pf, setPf] = React.useState(0)
  const projectsArray = presentaciones.data.presentaciones || [];

  function handleClick() {
    console.log(Card.id)

  }

  function getData(projectsArray){
   
    return( projectsArray.map((item) => {
      const { id, name, path, description, url } = item;
      return (
        <Link href={`./canvas/${id}`}>
          <Card
            key={id}
            name={name}
            path={path}
            description={description}
          />
        </Link>
      )
    })
  )}

    const cards = getData(projectsArray)
  return (
    <>
      <article className="flex  gap-6 flex-wrap justify-evenly m-5">
        {cards}
      </article>
      <article>

      </article>





    </>
  )
};
