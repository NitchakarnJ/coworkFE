import Link from "next/link";
import { getServerSession } from "next-auth";

import getUserProfile from "@/libs/getUserProfile";

export default async function UserMenu() {

  

  return (
    <div className="absolute right-0 top-0 w-48 bg-white rounded-md shadow-lg py-1 t-0 r-0 z-50">
        <div className="dropdown-menu p-2">
          <ul>
            
            <hr className="border-gray-300 mt-1 mb-1" />
            <li className="hover:bg-gray-200"><Link href={'/profile'}>My Profile</Link></li>
            <li className="hover:bg-gray-200"><Link href={'/booking'}>My Bookings</Link></li>
            <li className="hover:bg-gray-200"><Link href={'/api/auth/signout'}>Sign Out</Link></li>
          </ul>
        </div>
    </div>
  )}