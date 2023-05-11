import React, { FC } from "react";
import { usePathname } from "next/navigation";
import { Noto_Sans_Javanese } from "@next/font/google";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MenuItemProps {
    item: {
        title: string;
        href: string;
        icon: StaticImageData;
    };
}

const MenuBar: FC<MenuItemProps> = ({ item }) => {
    const pathname = usePathname();

    return (
        <Link
            href={item.href}
            className={` ${
                pathname === item?.href
                    ? "bg-active-color text-secondary-blue"
                    : "bg-transparent text-primary-black"
            } flex gap-[19px] items-center h-[44px] cursor-pointer px-[11px]`}
        >
            <Image src={item.icon} alt={item.title} />
            <p className="text-[16px] font-[400] leading-[32.58px]">
                {item.title}
            </p>
        </Link>
    );
};

export default MenuBar;
