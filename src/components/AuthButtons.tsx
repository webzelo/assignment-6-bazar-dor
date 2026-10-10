"use client";


import Link from "next/link";
import { useAuth } from "@/context/AuthContext";



export default function AuthButtons(){


const {
    user,
    logout
}=useAuth();





if(user){


return (

<div className="
flex
items-center
gap-4
">


<Link href="/profile">

<img

src={user.image}

alt={user.name}

className="
w-10
h-10
rounded-full
object-cover
cursor-pointer
"

/>

</Link>




<div className="
hidden
md:block
">


<p className="
text-sm
font-semibold
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





<button

onClick={logout}

className="
btn
btn-sm
border-red-500
text-red-500
bg-white
hover:bg-red-50
"

>

Sign Out

</button>




</div>

)


}





return (

<div className="
flex
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