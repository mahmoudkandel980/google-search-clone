import Link from "next/link";
import PaginationButtons from "../../PaginationButtons";
import { GoogleItemsImgsRes } from "../../../models/interfaces";

const ImageResult = (props: GoogleItemsImgsRes): JSX.Element => {
    const { itemsImgs } = props;

    return (
        <div className="mt-6">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 px-7 sm:px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {itemsImgs?.map((item) => (
                    <div key={item.link}>
                        <div className="group cursor-pointer">
                            <div className="">
                                <Link href={item.image.contextLink}>
                                    <img
                                        className="group-hover:shadow-xl w-full h-60 object-cover"
                                        src={item.link}
                                        alt={item.title}
                                    />
                                </Link>
                            </div>
                            <a className="group-hover:underline">
                                <Link href={item.image.contextLink}>
                                    <h2 className="truncate text-xl">
                                        {item.title}
                                    </h2>
                                </Link>
                            </a>

                            <a className="group-hover:underline">
                                <Link href={item.image.contextLink}>
                                    <p className="text-gray-600 text-sm">
                                        {item.displayLink}
                                    </p>
                                </Link>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full px-3 sm:pl-[5%] md:pl-52">
                <PaginationButtons />
            </div>
        </div>
    );
};

export default ImageResult;
