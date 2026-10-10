interface CategoryHeroProps {

    categoryName:string;

    icon:string;

    count:number;

}



const CategoryHero = ({

    categoryName,

    icon,

    count

}:CategoryHeroProps)=>{


return (

<section className="
w-full
bg-white
rounded-3xl
p-8
mb-8
">


<div className="
flex
justify-between
items-center
">


<div className="
flex
items-center
gap-5
">


<div className="
w-16
h-16
rounded-xl
bg-[#F4F8F2]
flex
items-center
justify-center
">


<span className="text-4xl">

{icon}

</span>


</div>




<div>


<h1 className="
text-3xl
font-bold
">

{categoryName}

</h1>



<p className="
text-gray-500
mt-2
">

আজকের {categoryName} বাজারের সব পণ্যের দাম

</p>


</div>


</div>





<div className="
bg-[#F4F8F2]
rounded-xl
px-8
py-5
text-center
">


<p className="
text-sm
text-gray-500
">

মোট পণ্য

</p>


<h2 className="
text-3xl
font-bold
">

{count}

</h2>


</div>


</div>


</section>

)

}


export default CategoryHero;