import Card from "./Card"
import Link from "next/link"

export default async function HospitalCatalog({hospitalsJson}:{hospitalsJson:Promise<HospitalJson>}){

   const hospitalsJsonReady = await hospitalsJson

   return(
      <>
      Explore {hospitalsJsonReady.count} model in our Catalog
      <div style={{margin:"20px",display:"flex",flexDirection:"row"
         ,flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
            {
               hospitalsJsonReady.data.map((HospitalItem:HospitalItem)=>(
                  <Link href={`/hospital/${HospitalItem.id}`} className="w-1/5">
                     <Card hospitalName={HospitalItem.name} imgSrc={HospitalItem.picture} 

                     />
                  </Link>
               ))
            }
      </div>
      </>
   )
}