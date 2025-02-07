import Image from "next/image";

function Banner(){
    return(
        <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7  ">
            <div className="absolute inset-0 opacity-20">
                <Image className="w-full h-full object-cover" src="/p1.jpeg" alt="delicious burger banner" />
                

            </div>

            <div className="relative z-10 container mx-auto flex flex-col justify-center item-center text-center">
            <h2 className="text-white sm:text-3xl font-bold mb-4"> Discover over menu </h2>
            <p   style={{marginLeft:"340px",wordSpacing:'5px'}} className="text-white text-lg text-center mb-6 max-w-xl ">Shop Now for Exclusive Burger Discount</p>
                
                <button type="button" className=" bg-cyan-500 text-white text-sm font-semibold  py-3 w-290  rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
                    Exiciting deals lanuch at 12PM!

                </button>
            </div>

        </div>
    )
}
export default Banner;