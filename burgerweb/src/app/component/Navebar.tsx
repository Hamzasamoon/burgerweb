import React from "react";

import { FaCartShopping } from "react-icons/fa6";
import { FaBolt, FaHamburger } from 'react-icons/fa'
import { FaSearch } from "react-icons/fa";
import Image from "next/image";


function Navebar() {
    return (
        <div>
            
            <div className=" main1 grid xl:grid-cols-1  grid-cols-1">
                <div className="p-5">
                    <div className=" main bg-gradient-to-r from-black to-gray-400 logo  py-3 px-3 rounded-xl border   w-full">
                        <div className="flex  justify-between  items-center">

                            <div className="flex justify-items-center  items-center gap-2 ">
                                 {/* Logo burger */}
                                <FaHamburger  className="w-6 h-6 text-yellow-400 hover:text-red-400 "/>
                                <input type="text" placeholder="Search your items..."  style={{padding:'9px', height:'20px',  borderRadius:'9px',marginLeft:'10px', width:'190px',backgroundColor:'white'}} />
                                <FaSearch style={{position:'absolute',marginLeft:'190px',color:'lime'}}/>
                            </div>
                            
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FaBolt   style={{color:"yellow",marginLeft:"500px",}}/>
                            <p style={{color:"white",marginLeft:"5px"}}>Order now and gat it with 
                                <span style={{color:"yellow",marginLeft:"3px"}}>15minutes!</span>
                            </p>


                        </div>
                        <FaCartShopping className=" " style={{color:"yellow",width:"18px",height:"18px",marginLeft:"27px",}}/>
                        <Image src="/mk.jpeg" alt="" style={{width:"20px",borderRadius:'11px',height:"20px",marginLeft:"10px"}} />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Navebar