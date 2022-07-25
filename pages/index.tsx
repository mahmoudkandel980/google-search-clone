import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";
import RandomWords from "../data/RandomWords.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
    const router = useRouter();
    const [searchInput, setSearchInput] = useState("");

    const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const randomWordsLength = RandomWords.length;
    const randomWordsFirstEl = 0;
    const randomWord =
        RandomWords[
            Math.floor(
                Math.random() * (randomWordsLength - randomWordsFirstEl + 1) +
                    randomWordsFirstEl
            )
        ];

    const searchHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (searchInput.trim() === "") {
            setSearchInput("");
            toast.error("Search field is empty");
            return;
        }

        router.push(`/search?term=${searchInput.trim()}&searchType=`);
    };

    const searchLuckyHandler = (e: React.FormEvent) => {
        e.preventDefault();

        setSearchInput(randomWord);

        router.push(`/search?term=${randomWord}&searchType=`);
    };

    return (
        <div>
            <Head>
                <title>Google Clone</title>
                <meta name="description" content="Google clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ToastContainer autoClose={1000} />

            <form className="flex flex-col justify-center items-center max-w-[70%] mx-auto mt-52 ">
                <Image
                    src={"/images/google-logo.png"}
                    alt="google-logo"
                    width={"480"}
                    height={"150"}
                    className="object-contain"
                />
                <div className="flex relative h-16 mx-auto items-center mt-5 w-full">
                    <AiOutlineSearch className="absolute left-2 h-5 w-5 z-30 text-gray-500" />
                    <input
                        type="text"
                        value={searchInput}
                        onChange={searchChangeHandler}
                        autoFocus
                        className="flex-grow border-gray-300 border-2 rounded-3xl h-10 px-8 w-full focus-within:shadow-lg outline-none"
                    />
                    <IoMdMic className="absolute right-2 h-5 w-5 z-30 text-gray-500 " />
                </div>
                <div className="flex flex-col justify-center items-center space-y-3 mt-5 sm:flex-row sm:space-y-0 sm:space-x-16">
                    <button onClick={searchHandler} className="btn">
                        Google Search
                    </button>
                    <button onClick={searchLuckyHandler} className="btn">
                        I&apos;m Feeling Lucky
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Home;
