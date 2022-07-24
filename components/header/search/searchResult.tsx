import Link from "next/link";
import Parser from "html-react-parser";

import PaginationButtons from "../../PaginationButtons";

import { GoogleItemsRes } from "../../../models/interfaces";

const SearchResult = (props: GoogleItemsRes): JSX.Element => {
    const { items } = props;

    return (
        <div className=" w-full px-3 sm:pl-[5%] md:pl-52">
            {items.map((item) => (
                <div className="max-w-2xl mb-8" key={item.link}>
                    <div className="group">
                        <div className="text-sm truncate text-gray-700">
                            <Link href={item.link}>{item.displayLink}</Link>
                        </div>
                        <a className="group-hover:underline text-xl font-medium text-blue-500 cursor-pointer">
                            <Link href={item.link}>
                                <h2 className="truncate">{item.title}</h2>
                            </Link>
                        </a>
                    </div>
                    <p className="text-gray-600">{Parser(item.htmlSnippet)}</p>
                </div>
            ))}
            <PaginationButtons />
        </div>
    );
};

export default SearchResult;
