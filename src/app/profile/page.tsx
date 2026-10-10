"use client";


import Image from "next/image";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/navigation";



export default function ProfilePage(){


const {user}=useAuth();

const router=useRouter();



if(!user){

router.push("/signin");

return null;

}



return (

<main className="
min-h-screen
bg-[#F4F8F2]
py-14
">


<div className="
max-w-3xl
mx-auto
px-5
">



<h1 className="
text-3xl
font-bold
mb-2
">

আমার প্রোফাইল

</h1>


<p className="
text-gray-500
mb-8
">

আপনার ব্যক্তিগত তথ্য আপডেট করুন

</p>





<div className="
bg-white
rounded-2xl
p-8
">



<div className="
flex
justify-between
items-center
border-b
pb-6
">


<div className="
flex
items-center
gap-4
">


<Image

src={user.image}

width={70}

height={70}

alt="profile"

className="
rounded-full
"

/>



<div>

<h2 className="
text-lg
font-bold
">

{user.name}

</h2>


<p className="
text-gray-500
">

{user.email}

</p>


</div>


</div>





<button

className="
border
border-red-400
text-red-500
rounded-lg
px-4
py-2
"

>

প্রোফাইল পরিবর্তন

</button>


</div>







<div className="
mt-8
bg-[#F4F8F2]
rounded-xl
p-6
">


<h3 className="
font-bold
mb-5
">

তথ্য

</h3>




<label>

নাম

</label>


<input

value={user.name}

readOnly

className="
w-full
border
rounded-lg
px-4
py-3
mt-2
mb-5
"

/>




<label>

ইমেইল

</label>


<input

value={user.email}

readOnly

className="
w-full
border
rounded-lg
px-4
py-3
mt-2
"

/>




</div>






</div>



</div>


</main>


)

}