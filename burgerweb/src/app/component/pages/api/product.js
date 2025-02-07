export default  handler = (req,res)=>{
    
    const product=[
        {
            id:1,
            name:"",
            price:10,
            image:"https://th.bing.com/th/id/OIP.0NI20K9VuSTLP-ovbiigjImgDetMaim"

        },
        {
            id:2,
            name:"r",
            price:50,
            image:"https://www.google.com/imgres?q=french%20burger&imgurl=https%3A%2F%2Fwww.foodnetwork.com%2Fcontent%2Fdam%2Fimages%2Ffood%2Ffullset%2F2018%2F8%2F25%2F0%2FKC1806_French-Onion-Burgers_s4x3.jpg&imgrefurl=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Fkatie-lee%2Ffrench-onion-burgers-5418429&docid=z77RkiwIfJhPvM&tbnid=zi4S48IFxxHY2M&vet=12ahUKEwiHz6HLrZWLAxU6VPEDHX3wMK0QM3oECBsQAA..i&w=4096&h=3072&hcb=2&ved=2ahUKEwiHz6HLrZWLAxU6VPEDHX3wMK0QM3oECBsQAA"

        },
        {
            id:3,
            name:"3 burgar",
            price:450,
            image:"https://www.google.com/imgres?q=french%20burger&imgurl=https%3A%2F%2Fwww.foodnetwork.com%2Fcontent%2Fdam%2Fimages%2Ffood%2Ffullset%2F2018%2F8%2F25%2F0%2FKC1806_French-Onion-Burgers_s4x3.jpg&imgrefurl=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Fkatie-lee%2Ffrench-onion-burgers-5418429&docid=z77RkiwIfJhPvM&tbnid=zi4S48IFxxHY2M&vet=12ahUKEwiHz6HLrZWLAxU6VPEDHX3wMK0QM3oECBsQAA..i&w=4096&h=3072&hcb=2&ved=2ahUKEwiHz6HLrZWLAxU6VPEDHX3wMK0QM3oECBsQAA"

        },
        {
            id:4,
            name:"4 burger",
            price:750,
            image:"https://www.google.com/imgres?q=french%20burger&imgurl=https%3A%2F%2Fwww.foodnetwork.com%2Fcontent%2Fdam%2Fimages%2Ffood%2Ffullset%2F2018%2F8%2F25%2F0%2FKC1806_French-Onion-Burgers_s4x3.jpg&imgrefurl=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Fkatie-lee%2Ffrench-onion-burgers-5418429&docid=z77RkiwIfJhPvM&tbnid=zi4S48IFxxHY2M&vet=12ahUKEwiHz6HLrZWLAxU6VPEDHX3wMK0QM3oECBsQAA..i&w=4096&h=3072&hcb=2&ved=2ahUKEwiHz6HLrZWLAxU6VPEDHX3wMK0QM3oECBsQAA"

        },
        {
            id:5,
            name:"9 burger",
            price:750,
            image:"=https%3A%2F%2Fwww.foodnetwork.com%2Fcontent%2Fdam%2Fimages%2Ffood%2Ffullset%2F2018%2F8%2F25%2F0%2FKC1806_French-Onion-Burgers_s4x3.jpg&imgrefurl=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Fkatie-lee%2Ffrench-onion-burgers-5418429&docid=z77RkiwIfJhPvM&tbnid=zi4S48IFxxHY2M&vet=12ahUKEwiHz6HLrZWLAxU6VPEDHX3wMK0QM3oECBsQAA..i&w=4096&h=3072&hcb=2&ved=2ahUKEwiHz6HLrZWLAxU6VPEDHX3wMK0QM3oECBsQAA"

        },
        {
            id:6,
            name:"6 burger",
            price:250,
            image:"ger&imgurl=https%3A%2F%2Fwww.foodnetwork.com%2Fcontent%2Fdam%2Fimages%2Ffood%2Ffullset%2F2018%2F8%2F25%2F0%2FKC1806_French-Onion-Burgers_s4x3.jpg&imgrefurl=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Fkatie-lee%2Ffrench-onion-burgers-5418429&docid=z77RkiwIfJhPvM&tbnid=zi4S48IFxxHY2M&vet=12ahUKEwiHz6HLrZWLAxU6VPEDHX3wMK0QM3oECBsQAA..i&w=4096&h=3072&hcb=2&ved=2ahUKEwiHz6HLrZWLAxU6VPEDHX3wMK0QM3oECBsQAA"

        },
    ];

    res.status(200).json(product);



}