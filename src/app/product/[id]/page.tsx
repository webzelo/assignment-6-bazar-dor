interface Market {
    market: string;
    division: string;
    min: number;
    max: number;
}


interface Product {

    id: number;
    nameBn: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;

    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;

    change: {
        dir: "up" | "down";
        pct: number;
    };

    markets: Market[];

}



const ProductDetails = async ({
    params,
}: {
    params: Promise<{
        id: string;
    }>;
}) => {


    // Next.js 16 params fix

    const { id } = await params;



    const res = await fetch(
        `https://api-store-indol.vercel.app/api/bazardor/products/${id}`,
        {
            cache: "no-store",
        }
    );


    const product: Product = await res.json();



    return (

        <main className="w-full max-w-7xl
            mx-auto
            mt-8
            space-y-8
            px-5
        ">


            {/* Product Header */}

            <section className="w-full
                bg-[#F4F8F2]
                rounded-3xl
                p-8
            ">


                <div className="
                    flex
                    items-center
                    justify-between
                    gap-5
                ">



                    {/* Product Info */}

                    <div className="
                        flex
                        items-center
                        gap-5
                    ">


                        <div className="
                            bg-white
                            w-20
                            h-20
                            rounded-xl
                            flex
                            items-center
                            justify-center
                        ">

                            <span className="text-5xl">
                                {product.categoryIcon}
                            </span>


                        </div>



                        <div>


                            <h1 className="
                                text-3xl
                                font-bold
                                text-gray-900
                            ">

                                {product.nameBn}

                            </h1>



                            <p className="
                                text-gray-500
                                mt-1
                            ">

                                {product.categoryNameBn}
                                {" • "}
                                প্রতি {product.unit}

                            </p>


                        </div>


                    </div>





                    {/* Current Price */}


                    <div className="
                        bg-white
                        rounded-xl
                        p-5
                        text-center
                        min-w-40
                    ">


                        <p className="
                            text-sm
                            text-gray-500
                        ">

                            আজকের দাম

                        </p>



                        <h2 className="
                            text-3xl
                            font-bold
                        ">

                            {product.today} টাকা

                        </h2>



                        {
                            product.change.dir === "up"

                            ?

                            <p className="
                                text-red-600
                                text-sm
                                font-semibold
                            ">

                                ▲ {product.change.pct}%

                            </p>


                            :

                            <p className="
                                text-green-600
                                text-sm
                                font-semibold
                            ">

                                ▼ {product.change.pct}%

                            </p>

                        }


                    </div>


                </div>


            </section>







            {/* Price History */}


            <section className="
                bg-white
                border
                rounded-2xl
                p-6
            ">


                <h2 className="
                    font-bold
                    text-xl
                    mb-5
                ">

                    দামের ইতিহাস

                </h2>



                <div className="
                    grid
                    grid-cols-2
                    md:grid-cols-4
                    gap-5
                ">


                    <div className="
                        bg-gray-50
                        rounded-xl
                        p-4
                    ">

                        <p className="text-sm text-gray-500">
                            আজ
                        </p>

                        <p className="font-bold text-lg">
                            {product.today} টাকা
                        </p>

                    </div>




                    <div className="
                        bg-gray-50
                        rounded-xl
                        p-4
                    ">

                        <p className="text-sm text-gray-500">
                            গতকাল
                        </p>

                        <p className="font-bold text-lg">
                            {product.yesterday} টাকা
                        </p>

                    </div>




                    <div className="
                        bg-gray-50
                        rounded-xl
                        p-4
                    ">

                        <p className="text-sm text-gray-500">
                            গত সপ্তাহ
                        </p>

                        <p className="font-bold text-lg">
                            {product.lastWeek} টাকা
                        </p>

                    </div>




                    <div className="
                        bg-gray-50
                        rounded-xl
                        p-4
                    ">

                        <p className="text-sm text-gray-500">
                            গত মাস
                        </p>

                        <p className="font-bold text-lg">
                            {product.lastMonth} টাকা
                        </p>

                    </div>


                </div>


            </section>







            {/* Market Price Table */}


            <section className="
                bg-white
                border
                rounded-2xl
                p-6
            ">


                <h2 className="
                    text-xl
                    font-bold
                    mb-5
                ">

                    বাজারভিত্তিক আজকের দাম

                </h2>



                <div className="
                    overflow-x-auto
                ">


                    <table className="
                        w-full
                        text-sm
                    ">


                        <thead>

                            <tr className="
                                border-b
                                text-left
                            ">

                                <th className="p-3">
                                    বাজার
                                </th>

                                <th className="p-3">
                                    বিভাগ
                                </th>

                                <th className="p-3">
                                    সর্বনিম্ন
                                </th>

                                <th className="p-3">
                                    সর্বোচ্চ
                                </th>


                            </tr>

                        </thead>




                        <tbody>


                            {
                                product.markets.map((market,index)=>(

                                    <tr
                                        key={index}
                                        className="
                                            border-b
                                            hover:bg-gray-50
                                        "
                                    >

                                        <td className="p-3">
                                            {market.market}
                                        </td>


                                        <td className="p-3">
                                            {market.division}
                                        </td>


                                        <td className="p-3">
                                            {market.min} টাকা
                                        </td>


                                        <td className="p-3">
                                            {market.max} টাকা
                                        </td>


                                    </tr>

                                ))
                            }


                        </tbody>


                    </table>


                </div>


            </section>



        </main>

    );
};


export default ProductDetails;