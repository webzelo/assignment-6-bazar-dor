import Link from "next/link";


interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}


const NavLinks = ({categories}: {categories: Category[]}) => {


    return (

        <nav className="
            flex
            items-center
            justify-start
            gap-7
        ">


            {
                categories.map((category)=> (

                    <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="
                            flex
                            items-center
                            gap-1.5
                            text-sm
                            font-medium
                            text-gray-700
                            hover:text-green-600
                            transition
                        "
                    >

                        <span className="text-base">
                            {category.icon}
                        </span>


                        <span>
                            {category.nameBn}
                        </span>


                    </Link>

                ))
            }


        </nav>

    );

};


export default NavLinks;