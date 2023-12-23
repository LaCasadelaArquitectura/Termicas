'use client'
import React from "react";
import Card from "../../../ui/card";

import presentaciones from "../../../Data/presentaciones";
import Link from "next/link";



export default function Page() {


  const projectsArray = presentaciones.data.presentaciones || [];

 

  function getData(projectsArray){
   
    return( projectsArray.map((item) => {
      const { id, name, path, description, url } = item;
      return (
        <div  key={id}>
        <Link href={`./canvas/${id}`}>
          <Card
            key={id}
            name={name}
            path={path}
            description={description}
          />
        </Link>
        </div>
      )
    })
  )}

    const cards = getData(projectsArray)
  return (
    <>
      <article className="bg-primary-100 h-screen ">
        <section className="flex  gap-6 flex-wrap justify-evenly p-5">
          {cards}
        </section>
      </article>
    </>
  )
};
