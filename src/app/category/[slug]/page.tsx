import CategoryHero from "@/components/CategoryHero";
import CategoryProducts from "@/components/CategoryProducts";


interface Product {

    id:number;
    nameBn:string;
    category:string;
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



const CategoryPage = async ({

    params

}:{
    params:Promise<{
        slug:string
    }>
})=>{


    const {slug}=await params;



    const res = await fetch(

        `https://api-store-indol.vercel.app/api/bazardor/products?category=${slug}`,

        {
            cache:"no-store"
        }

    );



    const data = await res.json();



    const products:Product[] =

        Array.isArray(data)

        ? data

        : data.products || data.data || [];





    const categoryName =
        products[0]?.categoryNameBn || "";



    const categoryIcon =
        products[0]?.categoryIcon || "🛒";





return (

<main className="
    w-full
    bg-[#F4F8F2]
    min-h-screen
">


    <div className="
        max-w-7xl
        mx-auto
        px-5
        lg:px-8
        py-10
    ">



        <CategoryHero

            categoryName={categoryName}

            icon={categoryIcon}

            count={products.length}

        />





        <CategoryProducts

            products={products}

            categoryName={categoryName}

        />




    </div>


</main>


)


}


export default CategoryPage;