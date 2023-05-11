import React, { FC } from "react";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

interface CourseCardProps {
    course: {
        school: string;
        degree: string;
        courseImage: string;
        couseState: string;
    };
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
    return (
        <div
            className="max-w-[832px] w-[85%] p-[20px] flex flex-wrap 
         lg:flex-nowrap justify-between items-center bg-[#E6E6E6] gap-[17px]"
        >
            <div className="flex flex-wrap items-center lg:flex-nowrap gap-[17px]  ">
                <div className="relative w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
                    <Image src={course.courseImage} alt="course image" fill />
                </div>
                <div className="flex flex-col">
                    <span className="text-[16px] leading-[20px] font-[400] text-secondary-blue">
                        {course.school}
                    </span>
                    <span className="text-[16px] font-[700] leading-[20px] text-primary-black">
                        {course.degree}
                    </span>
                </div>
            </div>

            <div className="flex space-x-[15px] items-center">
                <span
                    className={`rounded-[10px] px-[8px] text-[11px] leading-[22px] font-bold ${
                        course.couseState == "Ongoing"
                            ? "bg-[#FFE6C3] text-[#FFA620]"
                            : "bg-[#C8EED3] text-[#24753A]"
                    }`}
                >
                    {course.couseState}
                </span>

                {course.couseState == "Ongoing" && <BiChevronRight size={16} />}
            </div>
        </div>
    );
};

export default CourseCard;
