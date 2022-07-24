import Link from "next/link";
import { useRouter } from "next/router";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PaginationButtons = (): JSX.Element => {
    const router = useRouter();
    const { term, searchType } = router.query;
    const startIndex = Number(router.query.start) || 1;

    const currentPage = +(startIndex - 1) / 10;

    return (
        <div className="flex w-full justify-center sm:justify-start">
            <div className="flex justify-between my-10 mb-16 w-40 sm:w-[36%]">
                {startIndex > 10 && (
                    <div className="text-blue-500 cursor-pointer overflow-hidden">
                        <Link
                            href={`/search?term=${term}&searchType=${searchType}&start=${
                                startIndex - 10
                            }`}
                        >
                            <p className="inline">
                                <MdOutlineKeyboardArrowLeft className="h-7 w-7" />
                                <span>Prev</span>
                            </p>
                        </Link>
                    </div>
                )}

                {pages.map((page) => (
                    <div
                        className={`text-blue-500 ${
                            (currentPage - 1 > page ||
                                currentPage + 1 < page) &&
                            "hidden"
                        } cursor-pointer overflow-hidden sm:block ${
                            startIndex - 1 === page * 10 && "text-gray-200"
                        }`}
                        key={page}
                    >
                        <Link
                            href={`/search?term=${term}&searchType=${searchType}&start=${
                                page * 10 + 1
                            }`}
                        >
                            <p className="flex justify-center">
                                <span className="m-0  hover:border-b-2 border-blue-500">
                                    {page}
                                </span>
                            </p>
                        </Link>
                    </div>
                ))}

                {startIndex < 90 && (
                    <div className="text-blue-500 cursor-pointer overflow-hidden">
                        <Link
                            href={`/search?term=${term}&searchType=${searchType}&start=${
                                startIndex + 10
                            }`}
                        >
                            <p className="inline">
                                <MdOutlineKeyboardArrowRight className="h-7 w-7" />
                                <span>Next</span>
                            </p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaginationButtons;
