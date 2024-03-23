
export default async function getCoworking(id:string) {

   // await new Promise( (resolve)=> setTimeout(resolve,1000))

   const response = await fetch(`${process.env.BACKEND_URL}/api/project/coworkings/${id}`)
   if(!response.ok){
      throw new Error("Failed to fetch coworking")
   }
   return await response.json()
}