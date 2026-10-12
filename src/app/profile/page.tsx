"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function ProfilePage() {


const {
    data:session,
    isPending
}=authClient.useSession();


const router = useRouter();


const [editing,setEditing] = useState(false);
const [name,setName] = useState("");



if(isPending){
    return null;
}



const user=session?.user;



if(!user){

    router.push("/signin");

    return null;

}



const handleEdit = ()=>{

    setName(user.name || "");
    setEditing(true);

};



const handleSave = async()=>{


    try{


        await authClient.updateUser({

            name:name

        });


        setEditing(false);

        window.location.reload();


    }catch(error){

        console.log(error);

    }


};




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

src={user.image || "/profile.png"}

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

onClick={editing ? handleSave : handleEdit}

className="
border
border-red-400
text-red-500
rounded-lg
px-4
py-2
"

>

{
editing 
?
"সংরক্ষণ করুন"
:
"প্রোফাইল পরিবর্তন"
}

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


value={
editing 
?
name
:
user.name
}


onChange={(e)=>setName(e.target.value)}


readOnly={!editing}


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