"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { ActiveLink, CourseCard, Search } from "@/components/learning";
import { courses, learningLinks } from "@/lib/constants";

export default function Home() {
    const [activeLink, setActiveLink] = useState(learningLinks[0].title);
    const filterCourses = (active: string) => {
        return courses.filter((course) => course.type == active);
    };
    const [activeCourses, setActiveCourses] = useState(filterCourses("degree"));

    useEffect(() => {
        if (activeLink == "Programs & Degrees") {
            setActiveCourses(filterCourses("degree"));
        } else {
            setActiveCourses(filterCourses("short"));
        }
    }, [activeLink]);

    return (
        <main className="py-[30px] px-[20px] lg:p-[50px] ">
            <div className="flex items-center">
                {learningLinks.map((link, id) => (
                    <ActiveLink
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                        link={link}
                        key={`learning_link_${id}`}
                    />
                ))}
            </div>

            <div className="mt-[45px] grid space-y-[51px]">
                <Search />

                <div className="grid gap-[20px] ">
                    {activeCourses.map((course, id) => (
                        <CourseCard course={course} key={`course_${id}`} />
                    ))}
                </div>
            </div>
        </main>
    );
}
