'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react' 
import { useSession } from 'next-auth/react'

export default function Banner(){
   
   const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
   const [index,setIndex] = useState(0)
   const router = useRouter()
   
   const {data: session} = useSession()
   console.log(session?.user.token)


   return (
      <div className='block p-[5px] m-0 w-[100vw] h-[90vh] relative' onClick = {()=>{setIndex(index+1)}}>
         <Image src = {covers[index%4]}
         alt='cover'
         fill={true}
         className='object-cover rounded-t-lg'
         priority/>
         
         {
               session? <div className='z-30 absolute top-5 right-10 font-semibold text-white text-xl'>Welcome {session.user?.name}</div>
                     :null
            }
         <div className='font-sans ... relative top-[100px] z-20 text-center font-bold text-white'>
            <h1 className='text-5xl'>Vaccine Service Center</h1>
            <h3>Make a reservation and get the vaccine with Identification documents</h3>
         </div>
         <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
               hover:bg-cyan-600 hover:text-white hover:border-transparent'
               onClick={(e)=>{ e.stopPropagation(); router.push('/hospital')}}>
               Select Hospital
            </button>
      </div>
      
   )
} 