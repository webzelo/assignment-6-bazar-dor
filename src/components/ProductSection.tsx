import ProductCard from "./ProductCard";


interface Product {
    id:string;
    nameBn:string;
    image:string;
    today:number;
    unit:string;
    change:{
        dir:"up" | "down";
        pct:number;
    }
}



const ProductSection = ({
    title,
    products
}:{
    title:string;
    products:Product[];
}) => {


    return (

        <section className="
            max-w-7xl
            mx-auto
            mt-8
        ">


            <h2 className="
                text-xl
                font-bold
                mb-5
            ">

                {
                    title === "আজ দাম বেড়েছে" 
                    ?
                    <span className="text-red-500">
                        ▲
                    </span>
                    :
                    <span className="text-green-600">
                        ▼
                    </span>
                }


                {" "}
                {title}


            </h2>



            <div className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-5
            ">


                {
                    products.map((product)=>(

                        <ProductCard
                            key={product.id}
                            product={product}
                        />

                    ))
                }


            </div>


        </section>

    );
};


export default ProductSection;