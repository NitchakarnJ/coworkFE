'use client'
import { CardActions } from "@mui/material";
import Card from "./Card"
import Link from "next/link"
import { useReducer } from "react" 

export default function CardPanel(){

   //ประกาศ reducer ที่มี Map เป็น parameter   
   const showRatingReducer = (ratingList: Map<string, number>,action: { type: string; hospitalName:string; rating: number })=>{
      switch(action.type){
         case 'add' : {
            // alert(action.rating)
            ratingList.set(action.hospitalName,action.rating)
            return new Map( ratingList )
            
         }
         case 'remove' :{
            ratingList.delete(action.hospitalName);
            return new Map( ratingList )
         }
         default: return ratingList
      }
   }
  
   const [ ratingList,dispatchRating ] = useReducer(showRatingReducer,new Map([
      ['Chulalongkorn Hospital', 5],
      ['Rajavithi Hospital', 5],
      ['Thammasat University Hospital', 5],
      ]))
   // const [ratingList, dispatchCompare] = useReducer(showRatingReducer,new Map<string, number>())

   const mockHospitalRepo = [
      {hid: "001",name: "Chulalongkorn Hospital",image: "/img/chula.jpg"},
      {hid: "002",name: "Rajavithi Hospital",image: "/img/rajavithi.jpg"},
      {hid: "003",name: "Thammasat University Hospital",image: "/img/thammasat.jpg"},
      // onCompare={(car:string)=>dispatchCompare({type:'add',carName:car})}
      
   ]

   return(
   <div>
      <div className='m-[20px] flex flex-row flex-wrap justify-around'>
      {
               mockHospitalRepo.map((hospitalItem)=>(
                  <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">

                  <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.image} 
                     onRating={(hospital:string,ratingNew:number)=>dispatchRating({type:'add',hospitalName:hospital,rating:ratingNew})}
                  />
                  </Link>

               ))
            }
      </div>
      {Array.from(ratingList).map(([hospital, rating]) => <div key={hospital} data-testid={hospital} onClick={()=>dispatchRating({type:'remove',hospitalName:hospital,rating})}>
         {hospital} Rating: {rating}</div>)}
      

   </div>
   )
}
