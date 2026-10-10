import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css"

interface Product {
    id: string;
    nameBn: string;
    image: string;
    today: number;
    change: {
        dir: string;
        pct: number;
    };
}


const Marquee = async () => {


    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products?category=chal",
        {
            cache: "no-store",
        }
    );


    const headlines: Product[] = await res.json();



    return (

    <div className="
        w-full
        bg-white
        border-y
        border-gray-200
        overflow-hidden
    ">

    
        <div className="
            w-full
            flex
            items-center
        ">

        
            {/* Latest Label */}

            <div className="
                bg-red-600
                text-white
                px-6
                py-2
                font-bold
                whitespace-nowrap
            ">

                সর্বশেষ

            </div>

        <MarqueeText direction="right" duration={20}>

            {/* Marquee Items */}

            <div className="
                flex
                gap-10
                py-2
                px-5
                whitespace-nowrap
                text-sm
            ">


            {
                headlines.map((item)=> (

                    <div
                        key={item.id}
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >


                        <span>
                            {item.image}
                        </span>


                        <span className="font-medium">
                            {item.nameBn}
                        </span>


                        <span>
                            {item.today} টাকা/কেজি
                        </span>



                        {
                            item.change.dir === "up" ?

                            <span className="
                                text-red-600
                                font-semibold
                            ">
                                ▲ {item.change.pct}%
                            </span>

                            :

                            <span className="
                                text-green-600
                                font-semibold
                            ">
                                ▼ {item.change.pct}%
                            </span>

                            
                        }


                    </div>

                ))
            }

            </div>
            </MarqueeText>
        </div>
    

    </div>


    

);
};


export default Marquee;