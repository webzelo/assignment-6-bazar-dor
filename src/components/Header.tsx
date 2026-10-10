import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";


const Header = async () => {


  // Fetch Categories API

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    {
      cache: "no-store",
    }
  );


  const categories = await res.json();



  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });



  return (

    <header className="bg-white border-b border-gray-200">


      <div className="max-w-7xl mx-auto px-5">


        {/* =========================
            Top Row
        ========================== */}

        <div className="
          flex
          items-center
          justify-between
          py-4
        ">


          {/* Logo Section */}

          <div className="
            flex
            items-center
            gap-3
          ">


            {/* Logo Background */}

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
                priority
              />

            </div>



            {/* Title + Date */}

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


          </div>





          {/* =========================
              Authentication Buttons
          ========================== */}


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


        </div>





        {/* =========================
            Second Row - Category Menu
        ========================== */}


        <div className="
          border-t
          border-gray-100
          py-3
        ">


          <NavLinks categories={categories}/>


        </div>



      </div>


    </header>

  );

};


export default Header;