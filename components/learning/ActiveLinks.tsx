import React, { FC } from "react";
import Link from "next/link";

interface ActiveLinkProps {
    link: {
        title: string;
        href: string;
    };
    setActiveLink: (value: string) => void;
    activeLink: string;
}

const ActiveLinks: FC<ActiveLinkProps> = ({
    link,
    activeLink,
    setActiveLink,
}) => {
    return (
        <button
            onClick={() => setActiveLink(link.title)}
            className={`px-[32px]  text-[12px] leading-[24.43px] py-[12px] ${
                activeLink === link.title
                    ? "bg-active-color font-[700] text-primary-black"
                    : "bg-transparent font-[400] text-primary-gray"
            } `}
        >
            {link.title}
        </button>
    );
};

export default ActiveLinks;
