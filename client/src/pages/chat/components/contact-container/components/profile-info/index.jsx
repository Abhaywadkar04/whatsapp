import React from 'react'
import { Avatar , AvatarImage} from "@/components/ui/avatar";
import { useAppStore } from "@/store";
import { HOST } from '@/utlis/constants';
import { getColor } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { FiEdit2 } from 'react-icons/fi';
  
const ProfileInfo = () => {
    const { userInfo, setUserInfo } = useAppStore();
    const navigate = useNavigate();
  return (
    <div className="absolute bottom-0 h-16 flex items-center justify-center px-10 w-full bg-[#2a2b33] ">
        <div className="flex gap-3 items-center justify-center">
            <div className='w-12 h-12 relative'>
        <Avatar className="h-12 w-12  relative flex items-center justify-center overflow-hidden rounded-full">
              {userInfo.image ? (
                <AvatarImage
                  src={`${HOST}/${userInfo.image}`}
                  alt="Profile"
                  className="object-cover w-full h-full bg-black"
                />
              ) : (
                <div
                  className={`uppercase h-12 w-12  text-lg border-[1px] flex items-center justify-center rounded-full ${getColor(
                    userInfo.color
                  )}`}
                >
                  {userInfo.firstName
                    ? userInfo.firstName.split("").shift()
                    : userInfo.email.split("").shift() || ""}
                </div>
              )}
            </Avatar>
            </div>
            <div>
                {userInfo.firstName && userInfo.lastName ? `${userInfo.firstName} ${userInfo.lastName}` : ""}
            </div>
        </div>
        <div className="flex gap-5"> 
        <TooltipProvider>
  <Tooltip>
    <TooltipTrigger onClick={() => navigate("/profile")}>
        <FiEdit2 className="text-purple-500 text-xl font-medium"/>
    </TooltipTrigger>
    <TooltipContent className="bg-[#1c1ble] border-none text-white"
    >
      <p>edit profile</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

        </div>
    </div>
  )
}

export default ProfileInfo