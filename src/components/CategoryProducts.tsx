"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";


interface Product {

    id:number;
    nameBn:string;
    categoryNameBn:string;
    categoryIcon:string;
    unit:string;
    image:string;
    today:number;

    change:{
        dir:string;
        pct:number;
    };

}



interface CategoryProductsProps {

    products:Product[];
    categoryName:string;

}



const CategoryProducts = ({

    products,
    categoryName

}:CategoryProductsProps)=>{


    const [filter,setFilter] = useState("default");



    let filteredProducts = [...products];



    // Highest price first
    if(filter==="high"){

        filteredProducts.sort(

            (a,b)=> b.today - a.today

        );

    }



    // Lowest price first
    if(filter==="low"){

        filteredProducts.sort(

            (a,b)=> a.today - b.today

        );

    }



    // Price increased
    if(filter==="up"){

        filteredProducts = filteredProducts.filter(

            item=>item.change.dir==="up"

        );

    }



    // Price decreased
    if(filter==="down"){

        filteredProducts = filteredProducts.filter(

            item=>item.change.dir==="down"

        );

    }





    return (

        <section>



            {/* Filter Bar */}

            <div className="
                bg-white
                rounded-xl
                px-6
                py-4
                mb-8
                flex
                justify-between
                items-center
            ">


                <p className="
                    text-gray-600
                ">

                    দামের পরিসীমা

                </p>



                <select

                    value={filter}

                    onChange={(e)=>setFilter(e.target.value)}

                    className="
                        border
                        border-gray-400
                        rounded-lg
                        px-4
                        py-2
                        outline-none
                        bg-white
                    "

                >


                    <option value="default">

                        সব পণ্য

                    </option>


                    <option value="high">

                        সর্বোচ্চ দাম

                    </option>


                    <option value="low">

                        সর্বনিম্ন দাম

                    </option>


                    <option value="up">

                        দাম বেড়েছে

                    </option>


                    <option value="down">

                        দাম কমেছে

                    </option>


                </select>


            </div>





            {/* Product Title */}

            <h2 className="
                text-xl
                font-bold
                mb-6
            ">


                {categoryName} এর পণ্যসমূহ


            </h2>







            {
                filteredProducts.length === 0 ?

                (

                    <div className="
                        bg-white
                        rounded-xl
                        py-20
                        text-center
                    ">

                        <p className="
                            text-gray-500
                        ">

                            কোনো পণ্য পাওয়া যায়নি

                        </p>


                    </div>

                )

                :

                (

                    <div className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        gap-6
                    ">


                        {

                            filteredProducts.map((product)=>(


                                <ProductCard

                                    key={product.id}

                                    product={product}

                                />


                            ))

                        }


                    </div>

                )

            }




        </section>

    )


}



export default CategoryProducts;