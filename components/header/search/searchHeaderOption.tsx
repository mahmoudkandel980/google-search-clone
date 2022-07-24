import { useRouter } from "next/router";
import { searchProps } from "../../../models/interfaces";

const SearchHeaderOption = (props: searchProps): JSX.Element => {
    const { title, icon, className } = props;
    const router = useRouter();

    const changeTypeSearchHandler = (title: string) => {
        const term = router.query.term;

        if (title?.toString().toLowerCase() === "images") {
            router.push(`/search?term=${term}&searchType=image`);
        } else {
            router.push(`/search?term=${term}&searchType=`);
        }
    };

    return (
        <div
            onClick={changeTypeSearchHandler.bind(null, title)}
            className={`flex items-center space-x-1 pb-3 select-none cursor-pointer border-b-4 hover:border-blue-500 hover:text-blue-500 ${className} duration-150`}
        >
            {icon}
            <p>{title}</p>
        </div>
    );
};

export default SearchHeaderOption;
