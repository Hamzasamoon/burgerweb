import Image from "next/image"

function Footer() {
    return (
        <div>
            <footer className="flex flex-col space-y-10 justify-center m-10 mb-0 "  >

                <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700">
                    <a className="hover:text-cyan-500 m-9 text-amber-500" href="#">Home </a>
                    <a className="hover:text-cyan-500 m-9 text-amber-500" href="#">About </a>
                    <a className="hover:text-cyan-500 m-9 text-amber-500" href="#">Gallery </a>
                    <a className="hover:text-cyan-500 m-9 text-amber-500" href="#">Contact </a>
                </nav>
                <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">

                    <a href="https://facebook.com" target="blank" rel="nofollow noopener">



                        <Image src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook Logo" />
                    </a>

                    <a href="https://linkedin.com" target="blank" rel="nofollow noopener">



                        <Image src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="Likedin Logo" />
                    </a>


                    <a href="https://instagram.com" target="blank" rel="nofollow noopener">



                        <Image src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="instagram Logo" />
                    </a>


                    <a href="https://twitter.com"target="blank"rel="nofollow noopener">



<Image src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="twitter Logo" />
</a>


                </div>

                <p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8">2024 Maqbool Ahmed.all right reserved</p>
                

                <br />
                <br />
                <br />
                
            </footer>
        </div>
    )
}
export default Footer