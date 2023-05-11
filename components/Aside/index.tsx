import Image from "next/image";
import React from "react";
import MenuBar from "./MenuItem";
import { BsArrowRightShort } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import { menuItems } from "@/lib/constants";

const AsideComponent = () => {
    return (
        <div
            className="lg:flex hidden   flex-col pt-[20px] pb-[51px] px-[20px] justify-between bg-[#F6F9FD]
         border-r-[1px] border-[#E6E6E6] backdrop-blur-[30px] sticky h-screen left-0 top-0"
        >
            <div className="flex flex-col space-y-[74px]">
                <Image
                    src="/logo.png"
                    width={60}
                    height={30}
                    priority
                    alt="logo"
                />

                <div className="flex flex-col">
                    {menuItems.map((item, i) => (
                        <MenuBar key={`menu_content_${i}`} item={item} />
                    ))}
                </div>
            </div>

            <div>
                <div
                    className="h-[84px]  bg-primary-blue px-[17.5px] flex space-x-[18px]
                 items-center"
                >
                    <p className="font-[500] leading-[16px] text-[14px] text-white">
                        Find more Degrees and Short Courses
                    </p>
                    <div className="w-[30px] flex-shrink-0 h-[30px]  bg-white grid place-items-center">
                        <BsArrowRightShort
                            size={20}
                            className="text-primary-blue  "
                        />
                    </div>
                </div>
            </div>

            <div className="flex px-[17px] justify-between items-center">
                <p className="font-[400] text-[16px] leading-[32.58px]">
                    Logout
                </p>
                <FiLogOut size={18} />
            </div>
        </div>
    );
};

export default AsideComponent;
