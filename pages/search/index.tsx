import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import SearchHeader from "../../components/header/search/searchHeader";
import SearchResult from "../../components/header/search/searchResult";
import ImageResult from "../../components/header/search/imageResult";
("../../components/header/search/imageResult");

import {
    GoogleAboutRes,
    GoogleItemsRes,
    GoogleItemsImgsRes,
} from "../../models/interfaces";

const SearchPage = (
    props: GoogleAboutRes & GoogleItemsRes & GoogleItemsImgsRes
) => {
    const router = useRouter();
    const { term: title, searchType } = router.query;
    const { searchTime, totalResults, items, itemsImgs } = props;

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <SearchHeader searchTime={searchTime} totalResults={totalResults} />
            <div className="mt-[191px]">
                {searchType === "" ? (
                    <SearchResult items={items} />
                ) : (
                    <ImageResult itemsImgs={itemsImgs} />
                )}
            </div>
        </div>
    );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const { term, searchType } = query;

    const startIndex = query.start ? query.start : 1;

    const req = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
            process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${term}${
            searchType && "&searchType=image"
        }&start=${startIndex}`
    );
    const res = await req.json();

    return {
        props: {
            searchTime: res.searchInformation
                ? res.searchInformation.formattedSearchTime
                : "",
            totalResults: res.searchInformation
                ? res.searchInformation.formattedTotalResults
                : "",
            items: res.items ? res.items : "",
            itemsImgs: res.items,
        },
    };
};
