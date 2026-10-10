import Image from "next/image";


const Banner = () => {


    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });



    return (

        <section className="
            max-w-7xl
            mx-auto
            mt-6
            bg-[#F3F8F2]
            rounded-3xl
            px-12
            py-10
        ">


            <div className="
                flex
                items-center
                justify-between
            ">


                {/* Left Content */}

                <div className="max-w-2xl">


                    {/* Date Badge */}

                    <span className="
                        inline-block
                        bg-green-100
                        text-green-700
                        px-4
                        py-1
                        rounded-full
                        text-sm
                        font-medium
                    ">

                        {date}

                    </span>




                    {/* Heading */}

                    <h1 className="
                        mt-5
                        text-4xl
                        font-bold
                        leading-tight
                        text-gray-900
                    ">

                        আজকের বাজারের দাম এক নজরে

                    </h1>




                    {/* Description */}

                    <p className="
                        mt-4
                        text-gray-600
                        leading-7
                        max-w-xl
                    ">

                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক
                        এবং দামের পরিবর্তন এক জায়গায়।

                    </p>




                    {/* Button */}

                    <button
                        className="
                            mt-7
                            btn
                            bg-white
                            border
                            border-green-600
                            text-gray-700
                            hover:bg-green-50
                        "
                    >

                        ⚖ সব পণ্য দেখুন

                    </button>



                </div>





                {/* Right Illustration */}

                <div className="
                    hidden
                    md:block
                ">


                    <Image

                        src="/bazar-hero.png"

                        width={280}

                        height={250}

                        alt="Market Basket"

                    />


                </div>


            </div>


        </section>

    );

};


export default Banner;