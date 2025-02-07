import React from "react";

const ReservationSection =()=>{
    return(
        <section className="bg-gradient-to-r from-black to bg-slate-900 py-10 ">
            <div className="container mx-auto text-center ">
                <h2 className="text-3xl font-extrabold md-6 text-white">Make a Resvation</h2>
                <form className="max-w-md mx-auto " action="">
    
                </form>
                <div className="mb-4 text-4 " >
                       <input
                        type="text"
                         placeholder="your name"
                         className="w-full p-3 border border-gray-300 rounded-md "
                         required/>
                         
                </div>
                <div className="mb-4 " >
                       <input
                        type="email"
                         placeholder="Your email"
                         className="w-full p-3 border border-gray-300 rounded-md "
                         required/>
                         
                </div>
                <div className="mb-4 text-4 " >
                       <input
                        type="date"
                         
                         className="w-full p-3 border border-gray-300 rounded-md "
                         required/>
                         
                </div>
                <div className="mb-4 text-4 " >
                       <input
                        type="time"
                         
                         className="w-full p-3 border border-gray-300 rounded-md "
                         required/>
                         
                </div>

                <div className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    <button>Reserved Table</button>
                </div>
                

            </div>
        </section>
    )
}

export default ReservationSection