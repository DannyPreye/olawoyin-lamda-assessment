import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";

const Search = () => {
    return (
        <div
            className="flex items-stretch justify-between 
        lg:justify-start gap-0 lg:gap-3 w-[94%] "
        >
            <div
                className="flex  px-[24px]  py-[16px] border-[1px]
             border-[#cccccc] items-center gap-3  w-[70%] "
            >
                <AiOutlineSearch className="flex-shrink-0" />
                <input
                    type="text"
                    className="flex-1 bg-transparent outline-none border-none"
                    placeholder="Search for Programs..."
                />
            </div>

            <div className="border-[1px] border-[#cccccc] py-[16px] px-[24px] ">
                <FiFilter />
            </div>
        </div>
    );
};

export default Search;
