"use client";


import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";



interface HeaderProps {

    categories:any[];

}



const Header = ({
    categories
}:HeaderProps)=>{



const {
    user,
    logout
}=useAuth();



const router = useRouter();



const date = new Date().toLocaleDateString("bn-BD",{

    dateStyle:"full"

});





return (


<header className="
bg-white
border-b
border-gray-200
">



<div className="
max-w-7xl
mx-auto
px-5
">





{/* =========================
        Top Header
========================= */}



<div className="
flex
items-center
justify-between
py-4
">






{/* Logo */}


<Link

href="/"

className="
flex
items-center
gap-3
"

>


<div className="
bg-green-600
rounded-xl
w-12
h-12
flex
items-center
justify-center
">


<Image

src="/logo-icon.png"

width={35}

height={35}

alt="Bazar Dor Logo"

/>


</div>






<div>


<h1 className="
text-xl
font-bold
text-gray-900
">

বাজার দর

</h1>



<p className="
text-xs
text-gray-500
">

{date}

</p>



</div>



</Link>









{/* =========================
        User / Auth Section
========================= */}




{

user ? (



<div className="
flex
items-center
gap-4
">





{/* Clickable Profile */}


<Link

href="/profile"

className="
flex
items-center
gap-3
px-3
py-2
rounded-lg
hover:bg-gray-50
transition
"


>



<Image

src={user.image}

width={42}

height={42}

alt="Profile Image"

className="
rounded-full
object-cover
"

/>






<div className="
hidden
md:block
">


<p className="
text-sm
font-semibold
text-gray-800
">

{user.name}

</p>




<p className="
text-xs
text-gray-500
">

{user.email}

</p>




</div>



</Link>







{/* Sign Out Button */}



<button

onClick={()=>{


logout();


router.push("/signin");


}}


className="
border
border-red-400
text-red-500
px-4
py-2
rounded-lg
text-sm
hover:bg-red-50
transition
"

>


Sign Out


</button>






</div>



)

:



(



<div className="
flex
items-center
gap-2
">


<Link href="/signin">


<button

className="
btn
btn-sm
bg-green-600
text-white
border-none
hover:bg-green-700
"

>

Sign In

</button>


</Link>






<Link href="/signup">


<button

className="
btn
btn-sm
border-green-600
text-green-600
bg-white
hover:bg-green-50
"

>

Sign Up

</button>


</Link>



</div>



)



}







</div>









{/* =========================
        Category Navigation
========================= */}



<div className="
border-t
border-gray-100
py-3
">


<NavLinks

categories={categories}

/>



</div>





</div>



</header>


)


}



export default Header;