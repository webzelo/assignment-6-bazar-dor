import Marquee from "@/components/Marquee";
import Banner from "@/components/Banner";
import ProductSection from "@/components/ProductSection";


interface Product {

id:number;

nameBn:string;

categoryNameBn:string;

categoryIcon:string;

image:string;

unit:string;

today:number;


change:{
    dir:string;
    pct:number;
};

}



export default async function Home(){


const res = await fetch(

"https://openapi.programming-hero.com/api/bazardor/products",

{
cache:"no-store"
}

);


const data = await res.json();



const products:Product[] = Array.isArray(data)
? data
: data.data || [];




const increasedProducts = products.filter(

(item)=>item.change.dir==="up"

);



const decreasedProducts = products.filter(

(item)=>item.change.dir==="down"

);




return (

<main className="w-full">


<Marquee/>


<Banner/>



<ProductSection

title="আজ দাম বেড়েছে"

products={increasedProducts.slice(0,6)}

/>




<ProductSection

title="আজ দাম কমেছে"

products={decreasedProducts.slice(0,6)}

/>



<ProductSection

title="সব পণ্য"

products={products.slice(0,18)}

/>



</main>

);

}