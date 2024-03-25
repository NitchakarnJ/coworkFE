import Card from "./Card"
import Link from "next/link"
import { CoworkingItem, CoworkingJson } from "../../interface"

export default async function CoworkingCatalog({coworkingsJson}:{coworkingsJson:Promise<CoworkingJson>}){

   const coworkingsJsonReady = await coworkingsJson
   // window.alert(coworkingsJsonReady.count)
   console.log(coworkingsJsonReady.count)
   return(
      <>
      Explore {coworkingsJsonReady.count} model in our Coworking
      <div className="flex flex-row flex-wrap m-5  justify-around content-around">
            {
               coworkingsJsonReady.data.map((CoworkingItem:CoworkingItem,index:number)=>(
                  <Link href={`/coworking/${CoworkingItem.id}`} className="w-1/5" key={index}>
                     <Card hospitalName={CoworkingItem.name} imgSrc={CoworkingItem.picture} />
                  </Link>
               ))
            }
      </div>
      </>
   )
}