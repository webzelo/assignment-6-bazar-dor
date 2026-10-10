import Link from "next/link";
import React from "react";


interface Product {
    id: string;
    nameBn: string;
    image: string;
    today: number;
    unit: string;
    change: {
        dir: string;
        pct: number;
    };
}


const ProductCard = ({ product }: { product: Product }) => {


    const isIncrease = product.change.dir === "up";


    return (

        <Link href={`/product/${product.id}`}>
        
        <div className="
            bg-white
            rounded-xl
            border
            border-gray-200
            p-4
            hover:shadow-sm
            transition
        ">


            {/* Product Info */}

            <div className="
                flex
                items-center
                gap-3
            ">


                {/* Icon */}

                <div className="
                    w-12
                    h-12
                    bg-gray-50
                    rounded-lg
                    flex
                    items-center
                    justify-center
                ">

                    <span className="text-2xl">
                        {product.image}
                    </span>

                </div>



                {/* Name */}

                <div>

                    <h3 className="
                        text-sm
                        font-semibold
                        text-gray-900
                    ">

                        {product.nameBn}

                    </h3>


                    <p className="
                        text-xs
                        text-gray-500
                    ">

                        প্রতি {product.unit}

                    </p>


                </div>


            </div>




            {/* Price + Change */}

            <div className="
                flex
                items-end
                justify-between
                mt-5
            ">


                <div>


                    <p className="
                        text-xs
                        text-gray-500
                    ">

                        আজকের দাম

                    </p>



                    <p className="
                        text-xl
                        font-bold
                        text-gray-900
                    ">

                        {product.today} টাকা

                    </p>


                </div>





                {/* Price Change */}

                {
                    isIncrease ? (

                        <span className="
                            text-xs
                            font-semibold
                            text-red-600
                            bg-red-50
                            px-3
                            py-1
                            rounded-full
                        ">

                            ▲ {product.change.pct}%

                        </span>

                    ) : (

                        <span className="
                            text-xs
                            font-semibold
                            text-green-600
                            bg-green-50
                            px-3
                            py-1
                            rounded-full
                        ">

                            ▼ {product.change.pct}%

                        </span>

                    )
                }



            </div>


        </div>
        
        </Link>

    );
};


export default ProductCard;