import { resolve } from "path"

export default async function getCoworkings() {

   const response = await fetch(`${process.env.BACKEND_URL}/api/project/coworkings`)
   if(!response.ok){
      throw new Error("Failed to fetch coworkings")
   }
   return await response.json()
}