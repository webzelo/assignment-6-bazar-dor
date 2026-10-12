"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";


interface SignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}



export default function SignupPage(){


    const router = useRouter();



    const onSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {


        e.preventDefault();



        const formData = new FormData(e.currentTarget);



        const user = Object.fromEntries(
            formData.entries()
        ) as SignupFormData;



        if(user.password !== user.confirmPassword){

            console.log("Password does not match");

            return;

        }



        const { confirmPassword, ...signupData } = user;



        const { data, error } = await authClient.signUp.email({

            name: signupData.name,

            email: signupData.email,

            password: signupData.password,

            callbackURL: "/"

        });



        if(data){

            console.log(data);

            router.push("/");

        }



        if(error){

            console.log(error);

        }

    }

    const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
};

    const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
    provider: "github",
  });
}

return (

<main className="
min-h-screen
bg-[#F4F8F2]
flex
flex-col
">





<section className="
flex
justify-center
items-center
flex-1
py-16
">



<div className="
bg-white
w-full
max-w-lg
rounded-2xl
p-10
shadow-sm
">





<h1 className="
text-2xl
font-bold
text-center
mb-2
">

অ্যাকাউন্ট তৈরি করুন

</h1>





<p className="
text-gray-500
text-center
text-sm
mb-8
">

নতুন অ্যাকাউন্ট তৈরি করে বাজারদর দেখুন

</p>







<form onSubmit={onSubmit} className="space-y-4">





<div>

<label className="
block
text-sm
mb-2
">

নাম

</label>


<input

name="name"

type="text"

placeholder="আপনার নাম"

className="
w-full
border
border-gray-200
rounded-lg
px-4
py-3
outline-none
focus:border-green-600
"

/>

</div>








<div>

<label className="
block
text-sm
mb-2
">

ইমেইল

</label>


<input

name="email"

type="email"

placeholder="আপনার ইমেইল"

className="
w-full
border
border-gray-200
rounded-lg
px-4
py-3
outline-none
focus:border-green-600
"

/>

</div>








<div>

<label className="
block
text-sm
mb-2
">

পাসওয়ার্ড

</label>


<input

name="password"

type="password"

placeholder="পাসওয়ার্ড লিখুন"

className="
w-full
border
border-gray-200
rounded-lg
px-4
py-3
outline-none
focus:border-green-600
"

/>

</div>








<div>

<label className="
block
text-sm
mb-2
">

পাসওয়ার্ড নিশ্চিত করুন

</label>


<input

name="confirmPassword"

type="password"

placeholder="আবার পাসওয়ার্ড লিখুন"

className="
w-full
border
border-gray-200
rounded-lg
px-4
py-3
outline-none
focus:border-green-600
"

/>

</div>








<button

type="submit"

className="
w-full
bg-green-600
text-white
py-3
rounded-lg
font-medium
hover:bg-green-700
transition
"

>

অ্যাকাউন্ট তৈরি করুন

</button>





</form>









<div className="
flex
items-center
gap-3
my-6
">


<div className="
flex-1
h-px
bg-gray-200
"></div>



<span className="
text-sm
text-gray-400
">

অথবা

</span>



<div className="
flex-1
h-px
bg-gray-200
"></div>



</div>









<div className="
grid
grid-cols-2
gap-3
">





<button onClick={handleGoogleSignIn}

className="
border
rounded-lg
py-3
text-sm
hover:bg-gray-50
"

>

🌐 Google দিয়ে সাইন আপ

</button>







<button onClick={handleGithubSignIn}

className="
border
rounded-lg
py-3
text-sm
hover:bg-gray-50
"

>

🐙 GitHub দিয়ে সাইন আপ

</button>





</div>









<p className="
text-center
text-sm
text-gray-500
mt-6
">

আগে থেকেই অ্যাকাউন্ট আছে?


<Link

href="/signin"

className="
text-green-600
font-medium
ml-1
hover:underline
"

>

লগইন করুন

</Link>



</p>






</div>



</section>









<footer className="
border-t
py-5
text-center
text-sm
text-gray-500
">

বাজার দর — প্রতিদিনের বাজারের সঠিক তথ্য

</footer>





</main>

)


}