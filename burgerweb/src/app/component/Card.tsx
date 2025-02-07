  import Image from "next/image"
import React from "react"
  const FlootinImageContentBlock=()=>{
return(
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">

     <div className="md:w-1/2 md:pr-10">
     <h2 className="text-3xl font-bold mb-4 text-white text-center">Delicious Burger</h2>

     <p className="text-white mb-4">{""}Experience the juiciest Burger in town made with fresh ingredient and griled to perfection</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transitio duration-200">Order Now</button>

       <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">{""}Comin Soon our New Burger Launch</h3>
       <ul className="text-white">
        <li>Cheesy BBQ Becon Burger:a Mouthwatering Bland of Cheddar Cheese Crispy Becon and BBQ</li>
        <br />
        <li>Spicy Jalapeno  Burger: a Fiery Delight topped with fresh Jalapenes and zesty chipotle mayo</li>
        <br />

        <li>Mashroom Swis Burger: Jucy Beef Patty Melted Swis Chees for a rich savory testy</li>
         <br />
         <li>Avocado Veggie Burger: a delicous plant-based oftion featuring a griled veggie patty</li>
         <br />
         <li>Buffalo Chicken burger: Crisipy chicken breast tossed in spicy buffalo sauce</li>
         <br />
         
         
         



       </ul>
       </div>
       <div className="md:w-1/2 mt-6 md:mt-0">

       <Image    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7" src="https://img.freepik.com/free-vector/realstick-cheeseburger-chalkboard-background_79603-1044.jpg?t=st=1727452137~exp=1727455737~hmac=b40e3bf344f5fdba2fe646b3edb5068bfbe3d0dc17b698d00a657c40e1e58b9b&w=740" alt="Delicious Burger" />
       </div>



    </section>
)


  }

  export default FlootinImageContentBlock
