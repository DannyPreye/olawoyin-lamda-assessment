"use client";
import { Aside } from "@/components";
import "./globals.css";
import { Sora, Noto_Sans_Javanese } from "next/font/google";
import { useSelectedLayoutSegment } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

// :::::::::::::::::::: FONTS ::::::::::::::::::::
const noto_sans = Noto_Sans_Javanese({
    variable: "--primary",
    subsets: ["javanese"],
});

const sora = Sora({
    variable: "--heading",
    subsets: ["latin"],
});

// :::::::::::::::::: MAIN Layout :::::::::::::::::::

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const segment = useSelectedLayoutSegment();

    return (
        <html lang="en">
            {/* Am using head element here because I've converted this root layout to 
                be client side rendered.
            */}
            <head>
                <title>Olawoyin Lamda</title>
            </head>

            <body className={"font-primary flex flex-wrap  lg:flex-nowrap"}>
                <Aside />

                <header className="w-full flex flex-col">
                    <div
                        className="lg:px-[50px] pt-[60px] px-[23px] pb-[18px] lg:py-[29px] flex justify-between
                         bg-white sticky top-0 border-b-[1px] z-[1000] border-[#E6E6E6]"
                    >
                        <div className="flex items-center gap-[22px]">
                            <FiMenu className="lg:hidden cursor-pointer" />
                            <span className="font-[800] text-primary-black font-heading leading-[30px] text-[16px]">
                                {segment == null ? "Learning" : "Dashboard"}
                            </span>
                        </div>
                        <div>
                            <div className=" hidden lg:flex  items-center gap-[20px] ">
                                <Image
                                    src={"/dashboard/imageIcon.png"}
                                    alt="image icon"
                                    width={40}
                                    height={40}
                                    className="object-contain cursor-pointer"
                                />

                                <BiChevronDown size={16} />
                            </div>

                            <div className="w-[30px] cursor-pointer overflow-hidden lg:hidden block h-[30px] rounded-full relative">
                                <Image
                                    src={"/dashboard/user.png"}
                                    fill
                                    alt="user"
                                />
                            </div>
                        </div>
                    </div>

                    {children}
                </header>
            </body>
        </html>
    );
}
