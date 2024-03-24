
import DateReserve from "@/components/DateReserve"
import { Select,MenuItem, TextField } from "@mui/material"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"


export default async function BookingPage(){
   const session = await getServerSession(authOptions)
   if(!session || !session.user.token) return null

   const profile = await getUserProfile(session.user.token)
   var createdAt = new Date(profile.data.createdAt)

   return(
      <main className="flex flex-col items-center  text-center justify-center ">
         <div className="bg-slate-100 m-5 p-5">
            <table className="table-auto border-separate border-spacing-2">
               <tbody>
                  <tr><td>Name</td><td>{profile.data.name}</td></tr>
                  <tr><td>Email</td><td>{profile.data.email}</td></tr>
                  <tr><td>Tel</td><td>{profile.data.tel}</td></tr>
                  <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
               </tbody>
            </table>
         </div>
            
            <h1 className="text-center font-sans text-5xl font-bold text-gray-500  ">Vaccine Booking</h1>
            <div className="bg-white shadow-lg items-center space-y-4  p-6 flex flex-col justify-center w-[30%]  hover:shadow-2xl rounded-md mt-3">
               <form className=" items-center space-y-3 flex flex-col justify-center w-full ">
                  <TextField name="Name-Lastname" label="Name-Lastname" variant="standard" className="w-full "/>
                  <TextField name="Citizen ID" label="Citizen ID" variant="standard" className="w-full"/>
                  <Select  variant="standard" id="hospital" className="h-[2em] w-[200px] w-full">
                     <MenuItem value='Chula'>Chulalongkorn Hospital</MenuItem>
                     <MenuItem value='Rajavithi'>Rajavithi Hospital</MenuItem>
                     <MenuItem value='Thammasat'>Thammasat University Hospital</MenuItem>
                  </Select>
                  <DateReserve/>  
            </form>
            <button name="Book Vaccine" className="block w-[60%] rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-3 text-xl
               text-white shadow-sm">
                  Book Vaccine
               </button>
            </div>
            
      </main>
   )
}