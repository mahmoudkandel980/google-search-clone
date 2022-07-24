import { useRouter } from "next/router";
import SearchHeaderOption from "./searchHeaderOption";

import { AiOutlineSearch } from "react-icons/ai";
import { BsImage } from "react-icons/bs";

const SearchHeaderOptions = (): JSX.Element => {
    const router = useRouter();

    const searchType = router.query.searchType?.toString().trim();

    return (
        <div className="flex items-center space-x-10 w-full justify-center text-sm border-b text-gray-700 sm:justify-start sm:pl-52">
            <SearchHeaderOption
                className={`${
                    searchType === ""
                        ? "text-blue-500 border-blue-500"
                        : "border-transparent"
                }`}
                title="All"
                icon={<AiOutlineSearch className="h-4 w-4" />}
            />
            <SearchHeaderOption
                className={`${
                    searchType === "image"
                        ? "text-blue-500 border-blue-500"
                        : "border-transparent"
                }`}
                title="Images"
                icon={<BsImage className="h-4 w-4" />}
            />
        </div>
    );
};

export default SearchHeaderOptions;
