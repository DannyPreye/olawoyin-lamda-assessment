import React, { FC } from "react";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

interface CourseCardProps {
    course: {
        school: string;
        degree: string;
        courseImage: string;
        couseState: string;
        type: string;
        completedPercent: number;
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
                <div className="flex lg:flex-col w-full   justify-between ">
                    <div className="flex flex-col">
                        <span className="text-[16px] leading-[20px] font-[400] text-secondary-blue">
                            {course.school}
                        </span>
                        <span className="text-[16px] font-[700] leading-[20px] text-primary-black">
                            {course.degree}
                        </span>
                    </div>

                    {/* ::::::::::::::: SHORT COURSE PROGRESS ::::::::::::::::::
                    
                            This will only show if the course is a short course
                    */}
                    {course.type == "short" && (
                        <div className="flex flex-col lg:flex-row gap-[18px] items-center ">
                            {/* Progress bar */}
                            <div
                                className="lg:w-[160px] w-full overflow-hidden h-[5px] relative rounded-[10px] 
                            bg-[#cccccc]"
                            >
                                <div
                                    style={{
                                        width: `${course.completedPercent}%`,
                                    }}
                                    className={` h-full block bg-secondary-blue 
                                    `}
                                />
                            </div>
                            <span>{course.completedPercent}% Completed</span>
                        </div>
                    )}
                </div>
            </div>
            {/* :::::::::::::::::::: DEGREE COURSE COURSE STATE ::::::::::::::::::::: */}
            {/* This will show on degree courses */}
            {course.type == "degree" && (
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

                    {course.couseState == "Ongoing" && (
                        <BiChevronRight size={16} />
                    )}
                </div>
            )}

            {/* This will show only on short courses */}
            {course.type == "short" && (
                <div className="w-full lg:w-fit">
                    {course.completedPercent !== 100 ? (
                        <button
                            className="h-[48px]  bg-secondary-blue text-white 
                        font-[400] text-[16px] lg:w-[121px] grid place-items-center px-[24px]  w-full leading-[32px]"
                        >
                            Continue
                        </button>
                    ) : (
                        <span
                            className="bg-[#C8EED3] text-[#24753A] 
                        rounded-[10px] px-[8px] text-[11px] leading-[22px] font-bold"
                        >
                            Completed
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default CourseCard;
