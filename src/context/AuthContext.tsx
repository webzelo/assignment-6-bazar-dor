"use client";

import {
createContext,
useContext,
useEffect,
useState
} from "react";


interface User {

name:string;
email:string;
image:string;

}



interface AuthContextType {

user:User|null;

login:(user:User)=>void;

logout:()=>void;

}



const AuthContext =
createContext<AuthContextType | null>(null);



export function AuthProvider({
children
}:{
children:React.ReactNode
}){


const [user,setUser]=useState<User|null>(null);



useEffect(()=>{

const savedUser =
localStorage.getItem("user");


if(savedUser){

setUser(JSON.parse(savedUser));

}

},[]);





const login=(user:User)=>{


setUser(user);


localStorage.setItem(
"user",
JSON.stringify(user)
);


}





const logout=()=>{


setUser(null);


localStorage.removeItem("user");


}





return (

<AuthContext.Provider
value={{
user,
login,
logout
}}
>

{children}

</AuthContext.Provider>


)

}





export function useAuth(){

const context =
useContext(AuthContext);


if(!context){

throw new Error(
"AuthProvider missing"
);

}


return context;


}