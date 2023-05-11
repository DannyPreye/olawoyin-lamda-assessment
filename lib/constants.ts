import { dashboardIcon, learingIcon } from '../public/dashboard';

export const menuItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: dashboardIcon
    },
    {
        title: "Learning",
        href: "/",
        icon: learingIcon
    }
];


export const learningLinks = [
    {
        title: "Programs & Degrees",
        href: "#"
    },

    {
        title: "Short Courses",
        href: "/"
    }
];


export const courses = [
    {
        school: "University of Lagos",
        degree: "Bachelor of Science (BSc) in Computer Science",
        courseImage: "/dashboard/courseImage.png",
        couseState: "Ongoing",
        completedPercent: 80,
        type: "degree"

    },
    {
        school: "University of Lagos",
        degree: "Bachelor of Science (BSc) in Computer Science",
        courseImage: "/dashboard/courseImage.png",
        couseState: "Completed",
        completedPercent: 92,
        type: "degree"



    },
    {
        school: "University of Lagos",
        degree: "Bachelor of Science (BSc) in Computer Science",
        courseImage: "/dashboard/courseImage.png",
        couseState: "Suspended",
        completedPercent: 100,
        type: "degree"



    },
    {
        school: "CIPD",
        degree: "C++ For Dummies",
        courseImage: "/dashboard/courseImage.png",
        couseState: "Ongoing",
        completedPercent: 80,
        type: "short"
    },
    {
        school: "Yorkshire",
        degree: "Python for Data Analysis",
        courseImage: "/dashboard/courseImage.png",
        couseState: "Ongoing",
        completedPercent: 92,
        type: "short"
    },
    {
        school: "Google",
        degree: "UX Fundamentals",
        courseImage: "/dashboard/courseImage.png",
        couseState: "Ongoing",
        completedPercent: 100,
        type: "short"
    }
];


