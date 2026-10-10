import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import { AuthProvider } from "@/context/AuthContext";


const notoSerifBengali = Noto_Serif_Bengali({

  variable:"--font-geist-sans",

  subsets:[
    "latin",
    "bengali"
  ]

});



export const metadata: Metadata = {

  title:"বাজার দর",

  description:"Daily market price"

};





export default async function RootLayout({

  children

}:Readonly<{

  children:React.ReactNode

}>) {



const res = await fetch(

"https://api-store-indol.vercel.app/api/bazardor/categories",

{

cache:"no-store"

}

);



const categories = await res.json();





return (

<html

lang="bn"

data-theme="light"

className={`${notoSerifBengali.className} antialiased`}

>



<body

className="
min-h-screen
flex
flex-col
bg-[#F4F8F2]
text-gray-900
"

>



<AuthProvider>



<Header

categories={categories}

/>



{children}



</AuthProvider>



</body>



</html>



);

}