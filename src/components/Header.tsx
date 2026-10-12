"use client";


import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



interface HeaderProps {

    categories:any[];

}



const Header = ({
    categories
}:HeaderProps)=>{



const {
    data:session,
    isPending
}=authClient.useSession();



const router = useRouter();



const [date, setDate] = useState("");

useEffect(() => {

    setDate(
        new Date().toLocaleDateString("bn-BD", {
            dateStyle:"full"
        })
    );

}, []);





const handleLogout = async()=>{


    await authClient.signOut();


    router.push("/signin");


};





if(isPending){

    return null;

}





const user = session?.user;





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









{/* User / Auth Section */}



{

user ? (



<div className="
flex
items-center
gap-4
">





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

src={user.image || "/profile.png"}

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







<button

onClick={handleLogout}

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


সাইন আউট


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

সাইন ইন

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
 
সাইন আপ

</button>


</Link>



</div>



)



}







</div>









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