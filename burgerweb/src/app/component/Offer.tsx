"use client"
import React from "react"
type Offer={
    title:string;
    description:string;

}
const SpecialOffer:React.FC=()=>{


    const offers:Offer[]=[
        {
            title:"Happy Hour",
            description:"5pm se 7pm tak tammam drinks per 50% off hasil karen"
        },
        {
            title:"Family  meal deal",
            description:"2 main courses order karen aur family deal coupon code hasil karen"
        },
        {
            title:"Weekly brunch ",
            description:"ek free complimentry drink len lutuf uthaen"
        },
        {
            title:"Weekly brunch ",
            description:"ek free complimentry drink len lutuf uthaen"
        },
    ];
    const handleofferclick=(description:string)=>{
        alert (description)

    }
    return(
        <section className="py-10">
            <div className="container mx-auto text-center ">
         <h2 className="text-4xl font-bold mb-6 text-white">Special Offer</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6">
         {offers.map((offer,index)=>(
            <button key={index}onClick={()=>handleofferclick(offer.description)}   className="bg-white shadow-lg rounded-lg text-center hover:bg-grey-300 transition duration-300 transform hover:scale-105">

          <h3 className="text-2xl font-semibold text-slate-700">{offer.title}</h3>

          <p className="text-slate-700 mt-3 ">{offer.description}</p>


            </button>
         ))}
         </div>
            </div>

        </section>
    )
}
export default SpecialOffer