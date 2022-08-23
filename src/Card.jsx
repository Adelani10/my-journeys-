import React from 'react'
import locationIcon from './assets/locationIcon.svg'
import './index.css'


export default function Card(props) {

  return (
    <div className="w-full h-64 flex px-3 py-1 my-8 box-border space-x-3">
      <div className="md:w-[30%] w-[40%] h-full rounded-md">
          <img src={props.item.imageUrl} alt="" className="h-full w-full rounded-md object-cover" />
      </div>

      <section className="flex flex-col justify-center md:w-[70%] w-[60%]">

        <article className="space-x-1 flex items-center">
            <img src={locationIcon} alt="" />
            <h2 className="font-bold text-[12px] tracking-widest uppercase">{props.item.location}</h2>
            <a href={props.item.googleMapsUrl} className='pl-3 text-sm underline hover:text-sky-400 text-[10px]'>View on Google Map</a>
        </article>

        <h1 className="font-bold md:text-3xl text-xl">{props.item.title}</h1>

        <h3 className="text-sm md:text-md font-bold mt-4">
          {props.item.startDate} -<span> {props.item.endDate}</span>
        </h3>
        <p className='text-[10px] mt-2 leading-tight md:leading-0'>{props.item.description}
        </p>
      </section>
    </div>
  )
}