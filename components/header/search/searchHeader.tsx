import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Users from "../users";
import SearchHeaderOptions from "./searchHeaderOptions";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";
import { BsX } from "react-icons/bs";

import { GoogleAboutRes } from "../../../models/interfaces";

const SearchHeader = (props: GoogleAboutRes): JSX.Element => {
    const { searchTime, totalResults } = props;

    const router = useRouter();
    const [searchInput, setSearchInput] = useState(router.query.term!);
    const searchInputRef = useRef<any>(null);

    useEffect(() => {
        setSearchInput(router.query.term!);
    }, [router.query.term]);

    const onclickHandler = () => {
        router.push("/");
    };

    const removeSearchFieldHandler = () => {
        searchInputRef.current.value = "";
    };

    const searchHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const term: string = searchInputRef.current.value;
        if (!term || term.trim() === "") {
            return;
        }
        router.push(`/search?term=${term.trim()}&searchType=`);
    };

    return (
        <header className="fixed w-full top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src={"/images/google-logo.png"}
                    alt="google-logo"
                    width={"120"}
                    height={"40"}
                    className="object-contain cursor-pointer"
                    onClick={onclickHandler}
                />
                <form className="flex items-center relative border border-gray-200 rounded-full shadow-lg p-6 py-3 ml-5 sm:ml-10 mr-2.5 sm:mr-5 flex-grow max-w-3xl">
                    <input
                        type="text"
                        defaultValue={searchInput}
                        ref={searchInputRef}
                        className="w-full focus:outline-none"
                        // onChange={onChangeHandler}
                    />
                    <BsX
                        className="h-7 w-7 text-gray-500 cursor-pointer sm:mr-3 "
                        onClick={removeSearchFieldHandler}
                    />
                    <div className="flex justify-center items-center h-7 w-70 pl-4 sm:border-l-2 border-gray-300">
                        <IoMdMic className="h-full w-full hidden text-blue-500 cursor-pointer sm:inline-flex " />
                    </div>
                    <AiOutlineSearch className="h-7 w-7 hidden text-blue-500 cursor-pointer sm:inline-flex" />
                    <button
                        type="submit"
                        hidden
                        onClick={searchHandler}
                    ></button>
                </form>
                <Users className={`ml-auto whitespace-nowrap`} />
            </div>
            <SearchHeaderOptions />
            {!router.query.searchType && (
                <div className="flex justify-start mx-auto w-full px-3 sm:pl-[5%] md:pl-48 ">
                    <p className="text-gray-600 text-sm m-5 mt-3">
                        About {totalResults} results ({searchTime} seconds)
                    </p>
                </div>
            )}
        </header>
    );
};

export default SearchHeader;
